// Exam Engine — handles quiz lifecycle: load random questions, timer, submission, result, retake

class ExamEngine {
  constructor(topicId) {
    this.topic = getTopicById(topicId);
    this.totalQuestions  = 10;       // randomly selected per attempt
    this.durationSeconds = 10 * 60;  // 10 minutes

    this.questions      = [];
    this.answers        = [];
    this.markedForReview = new Set();
    this.currentIndex   = 0;
    this.timeRemaining  = this.durationSeconds;
    this.timerInterval  = null;
    this.isSubmitted    = false;
    this.currentAttemptId = null;

    if (!this.topic) {
      alert("Invalid exam topic.");
      window.location.href = "../dashboard.html";
      return;
    }

    this.loadQuestions();
    this.resetState();
    this.bindEvents();
    this.renderPalette();
    this.renderQuestion();
    this.startTimer();
  }

  // ── Question Loading ──────────────────────────────────────────────────────

  loadQuestions() {
    const raw = window[this.topic.windowKey] || [];
    if (!raw.length) {
      this.questions = this.fallbackQuestions();
      return;
    }

    // Normalize answers
    const normalized = raw.map((q, i) => {
      let ci = typeof q.answer === "number" ? q.answer
             : q.options.findIndex(o => o.trim().toLowerCase() === String(q.answer).trim().toLowerCase());
      if (ci < 0 && !isNaN(parseInt(q.answer))) ci = parseInt(q.answer);
      return { id: i + 1, question: q.question, options: [...q.options], correctIndex: Math.max(ci, 0) };
    });

    // Fisher-Yates shuffle → pick 10
    const arr = [...normalized];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    this.questions = arr.slice(0, this.totalQuestions).map((q, i) => ({ ...q, id: i + 1 }));
  }

  fallbackQuestions() {
    return Array.from({ length: this.totalQuestions }, (_, i) => ({
      id: i + 1,
      question: `Sample question #${i + 1} for ${this.topic.title}: Which option is correct?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctIndex: i % 4
    }));
  }

  // ── State Reset (for retake) ──────────────────────────────────────────────

  resetState() {
    clearInterval(this.timerInterval);
    this.currentIndex    = 0;
    this.timeRemaining   = this.durationSeconds;
    this.isSubmitted     = false;
    this.answers         = new Array(this.questions.length).fill(null);
    this.markedForReview = new Set();
    this.currentAttemptId = null;

    document.getElementById("examActiveView")?.classList.remove("hidden");
    document.getElementById("examResultView")?.classList.add("hidden");
  }

  // ── Timer ─────────────────────────────────────────────────────────────────

  startTimer() {
    this.updateTimer();
    this.timerInterval = setInterval(() => {
      this.timeRemaining--;
      this.updateTimer();
      if (this.timeRemaining <= 0) { clearInterval(this.timerInterval); this.submitExam(true); }
    }, 1000);
  }

  updateTimer() {
    const m = Math.floor(this.timeRemaining / 60);
    const s = this.timeRemaining % 60;
    const txt = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    const el = document.getElementById("examTimerDisplay");
    if (el) el.textContent = txt;
    document.getElementById("examTimerBadge")?.classList.toggle("timer-warning", this.timeRemaining <= 120);
  }

  // ── Palette ───────────────────────────────────────────────────────────────

  renderPalette() {
    const strip = document.getElementById("questionNumbersStrip");
    if (!strip) return;
    strip.innerHTML = "";
    this.questions.forEach((_, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "q-num-btn";
      btn.textContent = i + 1;
      btn.dataset.index = i;
      if (i === this.currentIndex)        btn.classList.add("q-current");
      if (this.answers[i] !== null)       btn.classList.add("q-answered");
      if (this.markedForReview.has(i))    btn.classList.add("q-review");
      btn.addEventListener("click", () => this.goTo(i));
      strip.appendChild(btn);
    });
    this.updatePaletteSummary();
  }

  updatePaletteSummary() {
    const answered   = this.answers.filter(a => a !== null).length;
    const unanswered = this.questions.length - answered;
    const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    set("paletteAnsweredCount",   answered);
    set("paletteReviewCount",     this.markedForReview.size);
    set("paletteUnansweredCount", unanswered);
    const bar = document.getElementById("examProgressBar");
    if (bar) bar.style.width = `${(answered / this.questions.length) * 100}%`;
  }

  // ── Question Rendering ────────────────────────────────────────────────────

  renderQuestion() {
    const q = this.questions[this.currentIndex];
    if (!q) return;

    const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    set("currentQuestionPill",  `Question ${this.currentIndex + 1} of ${this.questions.length}`);
    set("currentQuestionTitle", q.question);

    const reviewBtn = document.getElementById("btnMarkReview");
    if (reviewBtn) {
      const marked = this.markedForReview.has(this.currentIndex);
      reviewBtn.classList.toggle("btn-review-active", marked);
      reviewBtn.innerHTML = marked ? "⭐ Marked for Review" : "☆ Mark for Review";
    }

    const container = document.getElementById("optionsContainer");
    if (container) {
      container.innerHTML = "";
      const letters = ["A", "B", "C", "D", "E", "F"];
      q.options.forEach((text, i) => {
        const div = document.createElement("div");
        div.className = "option-choice-item" + (this.answers[this.currentIndex] === i ? " selected" : "");
        div.innerHTML = `<div class="option-letter-badge">${letters[i] || i + 1}</div><div class="option-text">${this.esc(text)}</div>`;
        div.addEventListener("click", () => this.selectOption(i));
        container.appendChild(div);
      });
    }

    const prev = document.getElementById("btnPrevQuestion");
    const next = document.getElementById("btnNextQuestion");
    if (prev) prev.disabled = this.currentIndex === 0;
    if (next) next.innerHTML = this.currentIndex === this.questions.length - 1 ? "Submit Exam ✓" : "Next Question →";

    document.querySelectorAll(".q-num-btn").forEach((btn, i) => btn.classList.toggle("q-current", i === this.currentIndex));
    document.querySelector(`.q-num-btn[data-index="${this.currentIndex}"]`)?.scrollIntoView({ behavior: "smooth", inline: "nearest" });
  }

  // ── User Actions ──────────────────────────────────────────────────────────

  selectOption(i)  { this.answers[this.currentIndex] = i; this.renderQuestion(); this.renderPalette(); }
  clearSelection() { this.answers[this.currentIndex] = null; this.renderQuestion(); this.renderPalette(); }
  toggleReview()   { this.markedForReview[this.markedForReview.has(this.currentIndex) ? "delete" : "add"](this.currentIndex); this.renderQuestion(); this.renderPalette(); }
  goTo(i)          { if (i >= 0 && i < this.questions.length) { this.currentIndex = i; this.renderQuestion(); } }
  prev()           { if (this.currentIndex > 0)                                    { this.currentIndex--; this.renderQuestion(); } }
  next()           { if (this.currentIndex < this.questions.length - 1)            { this.currentIndex++; this.renderQuestion(); } else { this.openSubmitModal(); } }

  openSubmitModal() {
    const answered   = this.answers.filter(a => a !== null).length;
    const unanswered = this.questions.length - answered;
    const el = document.getElementById("submitModalSummary");
    if (el) el.innerHTML = `
      <div style="display:flex;flex-direction:column;gap:8px;margin:16px 0;">
        <p><strong>Total Questions:</strong> ${this.questions.length}</p>
        <p style="color:var(--success);"><strong>Answered:</strong> ${answered}</p>
        <p style="color:var(--warning);"><strong>Marked for Review:</strong> ${this.markedForReview.size}</p>
        <p style="color:var(--danger);"><strong>Unanswered:</strong> ${unanswered}</p>
      </div>`;
    document.getElementById("submitConfirmModal")?.classList.add("active");
  }

  closeSubmitModal() { document.getElementById("submitConfirmModal")?.classList.remove("active"); }

  // ── Submission & Scoring ──────────────────────────────────────────────────

  async submitExam(auto = false) {
    this.closeSubmitModal();
    if (this.isSubmitted) return;
    this.isSubmitted = true;
    clearInterval(this.timerInterval);

    const user = ExamAuth.getCurrentUser() || { username: "student", name: "Student", rollNo: "CS-001" };
    let correct = 0, wrong = 0, unanswered = 0;

    const detailed = this.questions.map((q, i) => {
      const sel = this.answers[i];
      const answered = sel !== null;
      const isCorrect = answered && sel === q.correctIndex;
      if (!answered) unanswered++; else if (isCorrect) correct++; else wrong++;
      return { questionId: q.id, question: q.question, options: q.options, selectedOption: sel, correctOption: q.correctIndex, isCorrect };
    });

    const total   = this.questions.length;
    const pct     = Math.round((correct / total) * 100);
    const passed  = pct >= this.topic.passingScore;
    const grade   = pct >= 90 ? "A+" : pct >= 80 ? "A" : pct >= 70 ? "B" : pct >= 60 ? "C" : pct >= 50 ? "D" : "F";
    const spent   = this.durationSeconds - this.timeRemaining;
    const certId  = passed ? `CERT-${this.topic.id.toUpperCase().slice(0, 4)}-${Math.floor(100000 + Math.random() * 900000)}` : null;

    let prevAttempts = 0;
    try { prevAttempts = await ExamDB.getAttemptCount(user.username, this.topic.id); } catch {}

    const record = {
      username: user.username, studentName: user.name, rollNo: user.rollNo || "N/A",
      quizId: this.topic.id, quizTitle: this.topic.title, quizIcon: this.topic.icon,
      marks: correct, totalMarks: total, percentage: pct, grade, passed,
      attemptNumber: prevAttempts + 1,
      attemptedCount: total - unanswered, correctCount: correct, wrongCount: wrong, unansweredCount: unanswered,
      timeSpentSeconds: spent, timeSpentFormatted: `${Math.floor(spent / 60)}m ${spent % 60}s`,
      certificateId: certId, answers: detailed
    };

    try { this.currentAttemptId = await ExamDB.saveAttempt(record); } catch (e) { console.error("Failed to save attempt:", e); }
    this.renderResult(record);
  }

  // ── Result View ───────────────────────────────────────────────────────────

  renderResult(r) {
    document.getElementById("examActiveView")?.classList.add("hidden");
    const rv = document.getElementById("examResultView");
    if (rv) { rv.classList.remove("hidden"); rv.scrollIntoView({ behavior: "smooth" }); }

    const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    const icon = document.getElementById("resStatusIcon");
    if (icon) { icon.className = `result-status-icon ${r.passed ? "passed" : "failed"}`; icon.innerHTML = r.passed ? "🏆" : "⚠️"; }

    set("resHeadline",          r.passed ? "Examination Passed!" : "Needs Improvement");
    set("resSubline",           r.passed ? `Congratulations! You scored ${r.percentage}% — Grade ${r.grade}.` : `You scored ${r.percentage}%. Minimum passing score is ${this.topic.passingScore}%.`);
    set("resScoreVal",          r.marks);
    set("resScoreTotal",        `/ ${r.totalMarks}`);
    set("resMetricPercentage",  `${r.percentage}%`);
    set("resMetricGrade",       r.grade);
    set("resMetricCorrect",     r.correctCount);
    set("resMetricWrong",       r.wrongCount);
    set("resMetricUnanswered",  r.unansweredCount);
    set("resMetricTime",        r.timeSpentFormatted);

    const certBtn = document.getElementById("btnViewCertificateResult");
    if (certBtn) {
      certBtn.classList.toggle("hidden", !r.passed);
      if (r.passed) certBtn.onclick = () => { window.location.href = `../certificates.html?id=${this.currentAttemptId || ""}`; };
    }

    this.renderReview(r.answers);
  }

  renderReview(answers) {
    const container = document.getElementById("reviewQuestionsList");
    if (!container) return;
    container.innerHTML = "";
    answers.forEach((item, i) => {
      const answered = item.selectedOption !== null;
      const status   = !answered ? "is-unanswered" : item.isCorrect ? "is-correct" : "is-wrong";
      const label    = !answered ? "Not Attempted"  : item.isCorrect ? "Correct"    : "Incorrect";
      const userAns  = answered ? item.options[item.selectedOption] : "None";
      const correctAns = item.options[item.correctOption];
      const div = document.createElement("div");
      div.className = `review-item ${status}`;
      div.innerHTML = `
        <div style="display:flex;justify-content:space-between;margin-bottom:8px;font-weight:700;">
          <span>Q${i + 1}: ${this.esc(item.question)}</span>
          <span class="badge ${item.isCorrect ? "badge-success" : answered ? "badge-danger" : "badge-info"}">${label}</span>
        </div>
        <div style="font-size:0.875rem;color:var(--text-secondary);display:flex;flex-direction:column;gap:4px;">
          <div>Your Answer: <strong style="color:${item.isCorrect ? "var(--success)" : "var(--danger)"};">${this.esc(userAns)}</strong></div>
          <div>Correct Answer: <strong style="color:var(--success);">${this.esc(correctAns)}</strong></div>
        </div>`;
      container.appendChild(div);
    });
  }

  // ── Retake ────────────────────────────────────────────────────────────────

  retake() {
    this.loadQuestions();
    this.resetState();
    this.renderPalette();
    this.renderQuestion();
    this.startTimer();
  }

  // ── Event Binding ─────────────────────────────────────────────────────────

  bindEvents() {
    const on = (id, fn) => { const el = document.getElementById(id); if (el) el.onclick = fn; };
    on("btnPrevQuestion",      () => this.prev());
    on("btnNextQuestion",      () => this.next());
    on("btnClearResponse",     () => this.clearSelection());
    on("btnMarkReview",        () => this.toggleReview());
    on("btnSubmitExamHeader",  () => this.openSubmitModal());
    on("btnRetakeQuizResult",  () => this.retake());
    on("btnConfirmFinalSubmit",() => this.submitExam(false));
    on("btnCancelSubmitModal", () => this.closeSubmitModal());

    const toggleBtn = document.getElementById("btnToggleReviewAnswers");
    const section   = document.getElementById("reviewQuestionsSection");
    if (toggleBtn && section) {
      toggleBtn.onclick = () => {
        section.classList.toggle("hidden");
        toggleBtn.textContent = section.classList.contains("hidden") ? "📋 Review All Questions & Answers" : "Hide Question Review";
      };
    }

    window.addEventListener("keydown", e => {
      if (this.isSubmitted) return;
      if (e.key >= "1" && e.key <= "4") this.selectOption(parseInt(e.key) - 1);
      else if (e.key === "ArrowRight")   this.next();
      else if (e.key === "ArrowLeft")    this.prev();
    });
  }

  // ── Utility ───────────────────────────────────────────────────────────────

  esc(str) {
    return String(str || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
}

window.ExamEngine = ExamEngine;
