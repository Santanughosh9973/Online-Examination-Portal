/**
 * ExamPro Examination Engine
 * Handles full exam lifecycle: question loading, horizontal palette,
 * state management, timer, submission, IndexedDB storage, and multiple attempts.
 * 
 * Fulfills:
 * - Requirement 2: Question numbers palette horizontally ABOVE the question div, both full-width.
 * - Requirement 3: Allows taking and submitting multiple quizzes in the same session without re-login.
 * - Requirement 9: Saves result with marks, attempts, attempted answers, correct answers to IndexedDB.
 */

class ExamEngine {
  constructor(topicId) {
    this.topic = getTopicById(topicId);
    this.totalQuestions = 100;
    this.durationSeconds = 60 * 60; // 60 minutes
    this.timeRemaining = this.durationSeconds;
    this.timerInterval = null;

    this.questions = [];
    this.currentIndex = 0;
    this.answers = [];
    this.markedForReview = new Set();
    this.isSubmitted = false;
    this.currentAttemptId = null;

    this.init();
  }

  init() {
    if (!this.topic) {
      alert("Invalid exam topic.");
      window.location.href = "../dashboard.html";
      return;
    }

    this.loadQuestions();
    this.resetExamState();
    this.bindEvents();
    this.renderPalette();
    this.renderQuestion();
    this.startTimer();
  }

  /**
   * Load and normalize questions from the registered topic bank
   */
  loadQuestions() {
    const rawBank = window[this.topic.windowKey] || [];
    if (!rawBank || rawBank.length === 0) {
      console.warn("Question bank empty or not loaded yet for:", this.topic.id);
      this.questions = this.generateFallbackQuestions();
      return;
    }

    // Normalize each question's correct index
    const normalized = rawBank.map((q, idx) => {
      let correctIdx = -1;
      if (typeof q.answer === "number") {
        correctIdx = q.answer;
      } else if (typeof q.answer === "string") {
        correctIdx = q.options.findIndex(
          (opt) => opt.trim().toLowerCase() === q.answer.trim().toLowerCase()
        );
        if (correctIdx === -1 && !isNaN(parseInt(q.answer))) {
          correctIdx = parseInt(q.answer);
        }
      }

      return {
        id: idx + 1,
        question: q.question,
        options: Array.isArray(q.options) ? [...q.options] : [],
        correctIndex: correctIdx >= 0 ? correctIdx : 0
      };
    });

    // Shuffle and slice to 100 questions
    const shuffled = [...normalized].sort(() => 0.5 - Math.random());
    this.questions = shuffled.slice(0, Math.min(this.totalQuestions, shuffled.length));

    // If bank has fewer than 100, repeat or fill to 100
    while (this.questions.length < this.totalQuestions && normalized.length > 0) {
      this.questions.push({
        ...normalized[this.questions.length % normalized.length],
        id: this.questions.length + 1
      });
    }
  }

  generateFallbackQuestions() {
    const list = [];
    for (let i = 1; i <= 100; i++) {
      list.push({
        id: i,
        question: `Sample question #${i} for ${this.topic.title}: Which of the following is correct?`,
        options: ["Option A - Valid specification", "Option B - Alternative choice", "Option C - Legacy system", "Option D - Deprecated method"],
        correctIndex: (i % 4)
      });
    }
    return list;
  }

  /**
   * Requirement 3 Fix: Cleanly reset exam state for infinite multiple quizzes in same session
   */
  resetExamState() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }

    this.currentIndex = 0;
    this.timeRemaining = this.durationSeconds;
    this.isSubmitted = false;
    this.answers = new Array(this.questions.length).fill(null);
    this.markedForReview.clear();
    this.currentAttemptId = null;

    // Toggle UI views: show exam, hide result
    const examView = document.getElementById("examActiveView");
    const resultView = document.getElementById("examResultView");
    if (examView) examView.classList.remove("hidden");
    if (resultView) resultView.classList.add("hidden");
  }

  startTimer() {
    this.updateTimerDisplay();
    this.timerInterval = setInterval(() => {
      this.timeRemaining--;
      this.updateTimerDisplay();

      if (this.timeRemaining <= 0) {
        clearInterval(this.timerInterval);
        this.submitExam(true); // Auto-submit on time expiry
      }
    }, 1000);
  }

  updateTimerDisplay() {
    const timerEl = document.getElementById("examTimerDisplay");
    const timerBadge = document.getElementById("examTimerBadge");
    if (!timerEl) return;

    const mins = Math.floor(this.timeRemaining / 60);
    const secs = this.timeRemaining % 60;
    const formatted = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    timerEl.textContent = formatted;

    if (this.timeRemaining <= 300) {
      // 5 minutes remaining warning
      if (timerBadge) timerBadge.classList.add("timer-warning");
    } else {
      if (timerBadge) timerBadge.classList.remove("timer-warning");
    }
  }

  /**
   * Requirement 2: Render full-width horizontal question palette above the question
   */
  renderPalette() {
    const paletteContainer = document.getElementById("questionNumbersStrip");
    if (!paletteContainer) return;

    paletteContainer.innerHTML = "";

    this.questions.forEach((_, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "q-num-btn";
      btn.textContent = idx + 1;
      btn.setAttribute("data-index", idx);

      // Status classes
      if (idx === this.currentIndex) btn.classList.add("q-current");
      if (this.answers[idx] !== null) btn.classList.add("q-answered");
      if (this.markedForReview.has(idx)) btn.classList.add("q-review");

      btn.addEventListener("click", () => {
        this.goToQuestion(idx);
      });

      paletteContainer.appendChild(btn);
    });

    this.updatePaletteSummary();
  }

  updatePaletteSummary() {
    const answeredCount = this.answers.filter((a) => a !== null).length;
    const reviewCount = this.markedForReview.size;
    const unansweredCount = this.questions.length - answeredCount;

    const answeredEl = document.getElementById("paletteAnsweredCount");
    const reviewEl = document.getElementById("paletteReviewCount");
    const unansweredEl = document.getElementById("paletteUnansweredCount");
    const progressBar = document.getElementById("examProgressBar");

    if (answeredEl) answeredEl.textContent = answeredCount;
    if (reviewEl) reviewEl.textContent = reviewCount;
    if (unansweredEl) unansweredEl.textContent = unansweredCount;

    if (progressBar) {
      const pct = (answeredCount / this.questions.length) * 100;
      progressBar.style.width = `${pct}%`;
    }
  }

  /**
   * Render the currently active question in the full-width question card
   */
  renderQuestion() {
    const q = this.questions[this.currentIndex];
    if (!q) return;

    // Update Question Badges & Title
    const qNumPill = document.getElementById("currentQuestionPill");
    const qTitle = document.getElementById("currentQuestionTitle");
    const optionsContainer = document.getElementById("optionsContainer");
    const reviewBtn = document.getElementById("btnMarkReview");

    if (qNumPill) qNumPill.textContent = `Question ${this.currentIndex + 1} of ${this.questions.length}`;
    if (qTitle) qTitle.textContent = q.question;

    if (reviewBtn) {
      if (this.markedForReview.has(this.currentIndex)) {
        reviewBtn.classList.add("btn-review-active");
        reviewBtn.innerHTML = "⭐ Marked for Review";
      } else {
        reviewBtn.classList.remove("btn-review-active");
        reviewBtn.innerHTML = "☆ Mark for Review";
      }
    }

    // Render Options
    if (optionsContainer) {
      optionsContainer.innerHTML = "";
      const letters = ["A", "B", "C", "D", "E", "F"];

      q.options.forEach((optText, optIdx) => {
        const optionItem = document.createElement("div");
        optionItem.className = "option-choice-item";
        if (this.answers[this.currentIndex] === optIdx) {
          optionItem.classList.add("selected");
        }

        optionItem.innerHTML = `
          <div class="option-letter-badge">${letters[optIdx] || optIdx + 1}</div>
          <div class="option-text">${this.escapeHTML(optText)}</div>
        `;

        optionItem.addEventListener("click", () => {
          this.selectOption(optIdx);
        });

        optionsContainer.appendChild(optionItem);
      });
    }

    // Update Prev / Next button states
    const prevBtn = document.getElementById("btnPrevQuestion");
    const nextBtn = document.getElementById("btnNextQuestion");

    if (prevBtn) prevBtn.disabled = this.currentIndex === 0;
    if (nextBtn) {
      if (this.currentIndex === this.questions.length - 1) {
        nextBtn.innerHTML = "Submit Exam ✓";
      } else {
        nextBtn.innerHTML = "Next Question →";
      }
    }

    // Update Palette active bubble highlighting
    document.querySelectorAll(".q-num-btn").forEach((btn, idx) => {
      btn.classList.toggle("q-current", idx === this.currentIndex);
    });

    // Auto-scroll palette to bring active bubble into view
    const activeBtn = document.querySelector(`.q-num-btn[data-index="${this.currentIndex}"]`);
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    }
  }

  selectOption(optionIndex) {
    this.answers[this.currentIndex] = optionIndex;
    this.renderQuestion();
    this.renderPalette();
  }

  clearSelection() {
    this.answers[this.currentIndex] = null;
    this.renderQuestion();
    this.renderPalette();
  }

  toggleReview() {
    if (this.markedForReview.has(this.currentIndex)) {
      this.markedForReview.delete(this.currentIndex);
    } else {
      this.markedForReview.add(this.currentIndex);
    }
    this.renderQuestion();
    this.renderPalette();
  }

  goToQuestion(index) {
    if (index >= 0 && index < this.questions.length) {
      this.currentIndex = index;
      this.renderQuestion();
    }
  }

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.renderQuestion();
    } else {
      this.openSubmitConfirmModal();
    }
  }

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.renderQuestion();
    }
  }

  openSubmitConfirmModal() {
    const answered = this.answers.filter((a) => a !== null).length;
    const unanswered = this.questions.length - answered;
    const review = this.markedForReview.size;

    const modalSummary = document.getElementById("submitModalSummary");
    if (modalSummary) {
      modalSummary.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:8px; margin: 16px 0;">
          <p><strong>Total Questions:</strong> ${this.questions.length}</p>
          <p style="color:var(--success);"><strong>Answered:</strong> ${answered}</p>
          <p style="color:var(--warning);"><strong>Marked for Review:</strong> ${review}</p>
          <p style="color:var(--danger);"><strong>Unanswered:</strong> ${unanswered}</p>
        </div>
      `;
    }

    const modal = document.getElementById("submitConfirmModal");
    if (modal) modal.classList.add("active");
  }

  closeSubmitConfirmModal() {
    const modal = document.getElementById("submitConfirmModal");
    if (modal) modal.classList.remove("active");
  }

  /**
   * Requirement 9: Calculate and save result to IndexedDB
   */
  async submitExam(isAuto = false) {
    this.closeSubmitConfirmModal();
    if (this.isSubmitted) return;
    this.isSubmitted = true;

    if (this.timerInterval) clearInterval(this.timerInterval);

    const user = ExamAuth.getCurrentUser() || {
      username: "student",
      name: "Student",
      rollNo: "CS-001"
    };

    let correctCount = 0;
    let wrongCount = 0;
    let unansweredCount = 0;

    const detailedAnswers = this.questions.map((q, idx) => {
      const selected = this.answers[idx];
      const isAnswered = selected !== null;
      const isCorrect = isAnswered && selected === q.correctIndex;

      if (!isAnswered) {
        unansweredCount++;
      } else if (isCorrect) {
        correctCount++;
      } else {
        wrongCount++;
      }

      return {
        questionId: q.id,
        question: q.question,
        options: q.options,
        selectedOption: selected,
        correctOption: q.correctIndex,
        isCorrect: isCorrect
      };
    });

    const marks = correctCount; // 1 mark per correct answer
    const totalMarks = this.questions.length;
    const percentage = Math.round((marks / totalMarks) * 100);
    const passed = percentage >= this.topic.passingScore;
    const timeSpentSeconds = this.durationSeconds - this.timeRemaining;
    const timeSpentFormatted = this.formatDuration(timeSpentSeconds);

    let grade = "F";
    if (percentage >= 90) grade = "A+";
    else if (percentage >= 80) grade = "A";
    else if (percentage >= 70) grade = "B";
    else if (percentage >= 60) grade = "C";
    else if (percentage >= 50) grade = "D";

    // Certificate ID generated if passed
    const certificateId = passed
      ? `CERT-${this.topic.id.toUpperCase().slice(0, 4)}-${Math.floor(100000 + Math.random() * 900000)}`
      : null;

    // Check user's attempt count for this topic
    let prevAttempts = 0;
    try {
      prevAttempts = await ExamDB.getAttemptCount(user.username, this.topic.id);
    } catch (e) {
      console.warn("Could not retrieve attempt count:", e);
    }
    const attemptNumber = prevAttempts + 1;

    const attemptRecord = {
      username: user.username,
      studentName: user.name,
      rollNo: user.rollNo || "N/A",
      quizId: this.topic.id,
      quizTitle: this.topic.title,
      quizIcon: this.topic.icon,
      marks: marks,
      totalMarks: totalMarks,
      percentage: percentage,
      grade: grade,
      passed: passed,
      attemptNumber: attemptNumber,
      attemptedCount: this.questions.length - unansweredCount,
      correctCount: correctCount,
      wrongCount: wrongCount,
      unansweredCount: unansweredCount,
      timeSpentSeconds: timeSpentSeconds,
      timeSpentFormatted: timeSpentFormatted,
      certificateId: certificateId,
      answers: detailedAnswers
    };

    // Save to IndexedDB (Requirement 9)
    try {
      this.currentAttemptId = await ExamDB.saveAttempt(attemptRecord);
      console.log("Exam successfully saved to IndexedDB with ID:", this.currentAttemptId);
    } catch (err) {
      console.error("Failed to save exam to IndexedDB:", err);
    }

    // Render Result view
    this.renderResultView(attemptRecord);
  }

  renderResultView(record) {
    const examView = document.getElementById("examActiveView");
    const resultView = document.getElementById("examResultView");

    if (examView) examView.classList.add("hidden");
    if (resultView) {
      resultView.classList.remove("hidden");
      resultView.scrollIntoView({ behavior: "smooth" });
    }

    // Fill Result Card Details
    const statusIcon = document.getElementById("resStatusIcon");
    const headline = document.getElementById("resHeadline");
    const subline = document.getElementById("resSubline");
    const scoreVal = document.getElementById("resScoreVal");
    const scoreTotal = document.getElementById("resScoreTotal");

    if (statusIcon) {
      statusIcon.className = `result-status-icon ${record.passed ? "passed" : "failed"}`;
      statusIcon.innerHTML = record.passed ? "🏆" : "⚠️";
    }

    if (headline) {
      headline.textContent = record.passed ? "Examination Passed!" : "Needs Improvement";
    }

    if (subline) {
      subline.textContent = record.passed
        ? `Congratulations! You scored ${record.percentage}% with Grade ${record.grade}.`
        : `You scored ${record.percentage}%. The minimum passing threshold is ${this.topic.passingScore}%.`;
    }

    if (scoreVal) scoreVal.textContent = record.marks;
    if (scoreTotal) scoreTotal.textContent = `/ ${record.totalMarks}`;

    // Metrics
    const setVal = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };

    setVal("resMetricPercentage", `${record.percentage}%`);
    setVal("resMetricGrade", record.grade);
    setVal("resMetricCorrect", record.correctCount);
    setVal("resMetricWrong", record.wrongCount);
    setVal("resMetricUnanswered", record.unansweredCount);
    setVal("resMetricTime", record.timeSpentFormatted);

    // Certificate button
    const certBtn = document.getElementById("btnViewCertificateResult");
    if (certBtn) {
      if (record.passed) {
        certBtn.classList.remove("hidden");
        certBtn.onclick = () => {
          window.location.href = `../certificates.html?id=${this.currentAttemptId || ""}`;
        };
      } else {
        certBtn.classList.add("hidden");
      }
    }

    // Render Answer Review List
    this.renderReviewQuestionsList(record.answers);
  }

  renderReviewQuestionsList(answersList) {
    const container = document.getElementById("reviewQuestionsList");
    if (!container) return;

    container.innerHTML = "";
    answersList.forEach((item, idx) => {
      const div = document.createElement("div");
      let statusClass = "is-unanswered";
      let statusText = "Not Attempted";

      if (item.selectedOption !== null) {
        if (item.isCorrect) {
          statusClass = "is-correct";
          statusText = "Correct";
        } else {
          statusClass = "is-wrong";
          statusText = "Incorrect";
        }
      }

      div.className = `review-item ${statusClass}`;
      const userAnsText = item.selectedOption !== null ? item.options[item.selectedOption] : "None";
      const correctAnsText = item.options[item.correctOption];

      div.innerHTML = `
        <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-weight:700;">
          <span>Q${idx + 1}: ${this.escapeHTML(item.question)}</span>
          <span class="badge ${item.isCorrect ? "badge-success" : item.selectedOption !== null ? "badge-danger" : "badge-info"}">${statusText}</span>
        </div>
        <div style="font-size:0.875rem; color:var(--text-secondary); display:flex; flex-direction:column; gap:4px;">
          <div>Your Answer: <strong style="color: ${item.isCorrect ? "var(--success)" : "var(--danger)"};">${this.escapeHTML(userAnsText)}</strong></div>
          <div>Correct Answer: <strong style="color: var(--success);">${this.escapeHTML(correctAnsText)}</strong></div>
        </div>
      `;
      container.appendChild(div);
    });
  }

  /**
   * Requirement 3 Fix: Retake quiz seamlessly in same session
   */
  retakeExam() {
    this.loadQuestions();
    this.resetExamState();
    this.renderPalette();
    this.renderQuestion();
    this.startTimer();
  }

  bindEvents() {
    const prevBtn = document.getElementById("btnPrevQuestion");
    const nextBtn = document.getElementById("btnNextQuestion");
    const clearBtn = document.getElementById("btnClearResponse");
    const reviewBtn = document.getElementById("btnMarkReview");
    const submitBtn = document.getElementById("btnSubmitExamHeader");
    const retakeBtn = document.getElementById("btnRetakeQuizResult");

    if (prevBtn) prevBtn.onclick = () => this.prevQuestion();
    if (nextBtn) nextBtn.onclick = () => this.nextQuestion();
    if (clearBtn) clearBtn.onclick = () => this.clearSelection();
    if (reviewBtn) reviewBtn.onclick = () => this.toggleReview();
    if (submitBtn) submitBtn.onclick = () => this.openSubmitConfirmModal();
    if (retakeBtn) retakeBtn.onclick = () => this.retakeExam();

    // Confirm Modal buttons
    const confirmSubmitBtn = document.getElementById("btnConfirmFinalSubmit");
    const cancelSubmitBtn = document.getElementById("btnCancelSubmitModal");
    if (confirmSubmitBtn) confirmSubmitBtn.onclick = () => this.submitExam(false);
    if (cancelSubmitBtn) cancelSubmitBtn.onclick = () => this.closeSubmitConfirmModal();

    // Toggle Review Section button
    const toggleReviewListBtn = document.getElementById("btnToggleReviewAnswers");
    const reviewSection = document.getElementById("reviewQuestionsSection");
    if (toggleReviewListBtn && reviewSection) {
      toggleReviewListBtn.onclick = () => {
        reviewSection.classList.toggle("hidden");
        toggleReviewListBtn.textContent = reviewSection.classList.contains("hidden")
          ? "📋 Review All Questions & Answers"
          : "Hide Question Review";
      };
    }

    // Keyboard Shortcuts (1-4 for options, arrows for navigation)
    window.addEventListener("keydown", (e) => {
      if (this.isSubmitted) return;
      if (e.key >= "1" && e.key <= "4") {
        this.selectOption(parseInt(e.key) - 1);
      } else if (e.key === "ArrowRight") {
        this.nextQuestion();
      } else if (e.key === "ArrowLeft") {
        this.prevQuestion();
      }
    });
  }

  formatDuration(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}m ${secs}s`;
  }

  escapeHTML(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
}

window.ExamEngine = ExamEngine;
