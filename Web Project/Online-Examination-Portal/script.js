/* =========================================================
   EXAMPRO - ONLINE EXAMINATION PORTAL
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   1. GLOBAL VARIABLES
========================================================= */

let currentUser = null;

let selectedQuiz = null;

let examQuestions = [];

let currentQuestion = 0;

let answers = [];

let reviewQuestions = [];

let examTimer = null;

let examTimeRemaining = 60 * 60; // 60 minutes

let examStartTime = null;

let examFinished = false;

let finalScore = 0;

let finalPercentage = 0;

let finalGrade = "";

let finalCorrect = 0;

let finalWrong = 0;

let finalUnanswered = 0;

let finalTimeUsed = 0;

let certificateId = "";


/* =========================================================
   2. DEMO USERS
========================================================= */

const users = [

    {
        username: "student",
        password: "123456",
        name: "Student",
        role: "student"
    },

    {
        username: "santanu",
        password: "123456",
        name: "Santanu Ghosh",
        role: "student"
    }

];


/* =========================================================
   3. QUIZ INFORMATION
========================================================= */

const quizInformation = {

    mathematics: {
        title: "Mathematics",
        icon: "🧮"
    },

    "computer-fundamentals": {
        title: "Computer Fundamentals",
        icon: "💻"
    },

    "web-development": {
        title: "Web Development",
        icon: "🌐"
    },

    javascript: {
        title: "JavaScript",
        icon: "JS"
    },

    python: {
        title: "Python",
        icon: "🐍"
    },

    java: {
        title: "Java Programming",
        icon: "☕"
    },

    "operating-system": {
        title: "Operating System",
        icon: "🖥️"
    },

    dbms: {
        title: "DBMS",
        icon: "🗄️"
    },

    dsa: {
        title: "Data Structures & DSA",
        icon: "🧠"
    },

    "computer-networks": {
        title: "Computer Networks",
        icon: "🌐"
    },

    "c-programming": {
        title: "C Programming",
        icon: "C"
    },

    "software-engineering": {
        title: "Software Engineering",
        icon: "⚙️"
    }

};


/* =========================================================
   4. TEMPORARY QUESTION BANK
========================================================= */

/*
   The separate question files will replace these.

   Each question must have this structure:

   {
       question: "What is 2 + 2?",
       options: ["2", "3", "4", "5"],
       answer: 2
   }

   answer = correct option index.
*/


const sampleQuestions = [

    {
        question: "What is 2 + 2?",
        options: ["2", "3", "4", "5"],
        answer: 2
    },

    {
        question: "What is 10 × 5?",
        options: ["15", "50", "100", "25"],
        answer: 1
    },

    {
        question: "Which number is a prime number?",
        options: ["4", "6", "7", "9"],
        answer: 2
    },

    {
        question: "What is 100 ÷ 10?",
        options: ["5", "10", "20", "50"],
        answer: 1
    },

    {
        question: "What is the square of 5?",
        options: ["10", "15", "20", "25"],
        answer: 3
    }

];


/* =========================================================
   5. PAGE NAVIGATION
========================================================= */

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {

        page.classList.remove("active-page");

    });


    const targetPage = document.getElementById(pageId);

    if (targetPage) {

        targetPage.classList.add("active-page");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}


/* =========================================================
   6. LOGIN
========================================================= */

const loginForm = document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        loginUser();

    });

}


function loginUser() {

    const usernameInput =
        document.getElementById("username");

    const passwordInput =
        document.getElementById("password");

    const usernameError =
        document.getElementById("usernameError");

    const passwordError =
        document.getElementById("passwordError");

    const loginButtonText =
        document.getElementById("loginButtonText");

    const loginLoader =
        document.getElementById("loginLoader");


    const username =
        usernameInput.value.trim();

    const password =
        passwordInput.value;


    usernameError.textContent = "";

    passwordError.textContent = "";


    if (!username) {

        usernameError.textContent =
            "Please enter username.";

        usernameInput.focus();

        return;
    }


    if (!password) {

        passwordError.textContent =
            "Please enter password.";

        passwordInput.focus();

        return;
    }


    const user = users.find(item =>

        item.username.toLowerCase() ===
        username.toLowerCase() &&

        item.password === password

    );


    if (!user) {

        passwordError.textContent =
            "Invalid username or password.";

        showToast(
            "Invalid login details.",
            "error"
        );

        return;
    }


    loginButtonText.classList.add("hidden");

    loginLoader.classList.remove("hidden");


    setTimeout(() => {

        currentUser = user;


        if (
            document.getElementById("rememberMe").checked
        ) {

            localStorage.setItem(
                "examProUser",
                JSON.stringify(user)
            );

        }


        loginButtonText.classList.remove("hidden");

        loginLoader.classList.add("hidden");


        updateStudentInformation();


        showPage("quizSelectionPage");


        document
            .getElementById("logoutButton")
            .classList.remove("hidden");


        showToast(
            `Welcome ${user.name}!`,
            "success"
        );

    }, 700);

}


/* =========================================================
   7. REMEMBER LOGIN
========================================================= */

window.addEventListener("DOMContentLoaded", function () {

    const savedUser =
        localStorage.getItem("examProUser");


    if (savedUser) {

        try {

            currentUser =
                JSON.parse(savedUser);


            updateStudentInformation();

            showPage("quizSelectionPage");

            document
                .getElementById("logoutButton")
                .classList.remove("hidden");

        }

        catch (error) {

            localStorage.removeItem("examProUser");

        }

    }

});


/* =========================================================
   8. UPDATE STUDENT INFORMATION
========================================================= */

function updateStudentInformation() {

    if (!currentUser) {
        return;
    }


    const studentName =
        document.getElementById("studentName");

    const profileUsername =
        document.getElementById("profileUsername");


    if (studentName) {

        studentName.textContent =
            currentUser.name;

    }


    if (profileUsername) {

        profileUsername.textContent =
            currentUser.name;

    }


    const avatar =
        document.querySelector(".profile-avatar");


    if (avatar) {

        avatar.textContent =
            currentUser.name
                .charAt(0)
                .toUpperCase();

    }

}


/* =========================================================
   9. PASSWORD VISIBILITY
========================================================= */

function togglePassword() {

    const password =
        document.getElementById("password");


    const button =
        document.querySelector(".password-toggle");


    if (password.type === "password") {

        password.type = "text";

        button.textContent = "🙈";

    } else {

        password.type = "password";

        button.textContent = "👁️";

    }

}


/* =========================================================
   10. FORGOT PASSWORD
========================================================= */

function showForgotPassword() {

    document
        .getElementById("forgotPasswordModal")
        .classList.remove("hidden");

}


function closeForgotPassword() {

    document
        .getElementById("forgotPasswordModal")
        .classList.add("hidden");

}


/* =========================================================
   11. QUIZ SEARCH
========================================================= */

function searchQuiz() {

    const searchInput =
        document.getElementById("quizSearch");

    const searchText =
        searchInput.value
            .trim()
            .toLowerCase();


    const cards =
        document.querySelectorAll(".quiz-card");


    let visibleCards = 0;


    cards.forEach(card => {

        const quizName =
            card
                .getAttribute("data-quiz")
                .toLowerCase();


        const cardText =
            card.textContent.toLowerCase();


        if (
            quizName.includes(searchText) ||
            cardText.includes(searchText)
        ) {

            card.style.display = "flex";

            visibleCards++;

        } else {

            card.style.display = "none";

        }

    });


    const noResult =
        document.getElementById("noQuizFound");


    if (visibleCards === 0) {

        noResult.classList.remove("hidden");

    } else {

        noResult.classList.add("hidden");

    }

}


/* =========================================================
   12. SELECT QUIZ
========================================================= */

function selectQuiz(quizName) {

    if (examFinished) {

        showToast(
            "Please start a new examination.",
            "error"
        );

        return;
    }


    selectedQuiz = quizName;


    const info =
        quizInformation[quizName];


    if (!info) {

        showToast(
            "Quiz information not found.",
            "error"
        );

        return;
    }


    /*
       Get question bank.

       The separate question files will later provide
       100 questions for every subject.
    */

    let questionBank =
        getQuestionBank(quizName);


    /*
       For now, if the subject file is not connected,
       use sample questions.
    */

    if (
        !questionBank ||
        questionBank.length === 0
    ) {

        questionBank =
            sampleQuestions;

    }


    /*
       We need exactly 100 questions.

       Until the 100-question files are created,
       sample questions are repeated for testing.
    */

    questionBank =
        prepareQuestionBank(questionBank, 100);


    /*
       IMPORTANT:

       Create a NEW copy.

       This prevents one student's shuffle
       from changing the original question bank.
    */

    examQuestions =
        questionBank.map(question => ({

            question: question.question,

            options: [...question.options],

            answer: question.answer

        }));


    /*
       RANDOM QUESTION ORDER

       Every student gets a different pattern.
    */

    shuffleArray(examQuestions);


    /*
       RANDOM OPTION ORDER

       Every student can also get different
       option positions.
    */

    examQuestions.forEach(question => {

        randomizeQuestionOptions(question);

    });


    /*
       Reset exam state.
    */

    currentQuestion = 0;

    answers =
        new Array(examQuestions.length)
            .fill(null);


    reviewQuestions =
        new Array(examQuestions.length)
            .fill(false);


    examTimeRemaining = 60 * 60;

    examStartTime = Date.now();

    examFinished = false;

    finalScore = 0;

    finalPercentage = 0;

    finalGrade = "";

    finalCorrect = 0;

    finalWrong = 0;

    finalUnanswered = 0;

    finalTimeUsed = 0;


    /*
       Update exam title.
    */

    document.getElementById("examTitle").textContent =
        info.title;


    document.getElementById("examSubjectIcon").textContent =
        info.icon;


    /*
       Build question palette.
    */

    buildQuestionPalette();


    /*
       Display first question.
    */

    displayQuestion();


    /*
       Start timer.
    */

    startExamTimer();


    /*
       Open exam page.
    */

    showPage("examPage");


    showToast(
        `${info.title} examination started.`,
        "success"
    );

}


/* =========================================================
   13. GET QUESTION BANK
========================================================= */

function getQuestionBank(quizName) {

    /*
       These variables will be created by
       the separate subject files.

       Example:

       window.mathematicsQuestions

       window.javascriptQuestions
    */


    const banks = {

        mathematics:
            window.mathematicsQuestions,

        "computer-fundamentals":
            window.computerFundamentalsQuestions,

        "web-development":
            window.webDevelopmentQuestions,

        javascript:
            window.javascriptQuestions,

        python:
            window.pythonQuestions,

        java:
            window.javaQuestions,

        "operating-system":
            window.operatingSystemQuestions,

        dbms:
            window.dbmsQuestions,

        dsa:
            window.dsaQuestions,

        "computer-networks":
            window.computerNetworksQuestions,

        "c-programming":
            window.cProgrammingQuestions,

        "software-engineering":
            window.softwareEngineeringQuestions

    };


    return banks[quizName] || null;

}


/* =========================================================
   14. PREPARE 100 QUESTIONS
========================================================= */

function prepareQuestionBank(bank, totalQuestions) {

    if (!Array.isArray(bank)) {

        return [];

    }


    /*
       If we have exactly 100 or more questions,
       use the first 100 after shuffling.
    */

    let prepared =
        [...bank];


    shuffleArray(prepared);


    /*
       If there are less than 100 questions,
       temporarily repeat questions.

       Later every subject will contain
       exactly 100 unique questions.
    */

    if (prepared.length > 0) {

        let index = 0;

        while (
            prepared.length < totalQuestions
        ) {

            prepared.push(

                prepared[
                    index % prepared.length
                ]

            );

            index++;

        }

    }


    return prepared.slice(
        0,
        totalQuestions
    );

}


/* =========================================================
   15. RANDOMIZE ARRAY
========================================================= */

function shuffleArray(array) {

    /*
       Fisher-Yates Shuffle
    */

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const randomIndex =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            array[i],
            array[randomIndex]
        ] =
        [
            array[randomIndex],
            array[i]
        ];

    }


    return array;

}


/* =========================================================
   16. RANDOMIZE OPTIONS
========================================================= */

function randomizeQuestionOptions(question) {

    /*
       Save the correct answer text first.

       Because when we shuffle options,
       the answer index changes.
    */

    const correctAnswer =
        question.options[
            question.answer
        ];


    shuffleArray(question.options);


    /*
       Find the new position of
       the correct answer.
    */

    question.answer =
        question.options.indexOf(
            correctAnswer
        );

}


/* =========================================================
   17. BUILD QUESTION PALETTE
========================================================= */

function buildQuestionPalette() {

    const palette =
        document.getElementById(
            "questionPalette"
        );


    palette.innerHTML = "";


    examQuestions.forEach(
        (question, index) => {

            const button =
                document.createElement("button");


            button.type = "button";

            button.className =
                "palette-button unanswered";


            button.textContent =
                index + 1;


            button.dataset.index =
                index;


            button.addEventListener(
                "click",
                function () {

                    goToQuestion(index);

                }
            );


            palette.appendChild(button);

        }
    );


    updateQuestionPalette();

}


/* =========================================================
   18. DISPLAY QUESTION
========================================================= */

function displayQuestion() {

    if (
        !examQuestions.length
    ) {

        return;

    }


    const question =
        examQuestions[currentQuestion];


    /*
       Question number
    */

    document.getElementById(
        "currentQuestionNumber"
    ).textContent =
        currentQuestion + 1;


    document.getElementById(
        "questionBadge"
    ).textContent =
        `Question ${currentQuestion + 1}`;


    /*
       Question text
    */

    document.getElementById(
        "questionText"
    ).textContent =
        question.question;


    /*
       Options
    */

    const optionsContainer =
        document.getElementById(
            "optionsContainer"
        );


    optionsContainer.innerHTML = "";


    const letters =
        ["A", "B", "C", "D"];


    question.options.forEach(
        (option, index) => {

            const optionElement =
                document.createElement("div");


            optionElement.className =
                "option";


            if (
                answers[currentQuestion] ===
                index
            ) {

                optionElement.classList.add(
                    "selected"
                );

            }


            optionElement.innerHTML = `

                <div class="option-letter">
                    ${letters[index]}
                </div>

                <div class="option-text">
                    ${escapeHTML(option)}
                </div>

            `;


            optionElement.addEventListener(
                "click",
                function () {

                    selectAnswer(index);

                }
            );


            optionsContainer.appendChild(
                optionElement
            );

        }
    );


    /*
       Review button
    */

    const reviewButton =
        document.getElementById(
            "reviewButton"
        );


    if (
        reviewQuestions[currentQuestion]
    ) {

        reviewButton.classList.add(
            "reviewed"
        );

        reviewButton.innerHTML =
            "★ Marked for Review";

    } else {

        reviewButton.classList.remove(
            "reviewed"
        );

        reviewButton.innerHTML =
            "☆ Mark for Review";

    }


    /*
       Previous / Next button
    */

    updateNavigationButton();


    /*
       Question palette
    */

    updateQuestionPalette();


    /*
       Progress
    */

    updateExamProgress();

}


/* =========================================================
   19. SELECT ANSWER
========================================================= */

function selectAnswer(answerIndex) {

    if (examFinished) {
        return;
    }


    answers[currentQuestion] =
        answerIndex;


    displayQuestion();


    showToast(
        "Answer saved.",
        "success"
    );

}


/* =========================================================
   20. NEXT QUESTION
========================================================= */

function nextQuestion() {

    if (
        currentQuestion <
        examQuestions.length - 1
    ) {

        currentQuestion++;

        displayQuestion();

    } else {

        openSubmitModal();

    }

}


/* =========================================================
   21. PREVIOUS QUESTION
========================================================= */

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        displayQuestion();

    } else {

        showToast(
            "This is the first question.",
            "error"
        );

    }

}


/* =========================================================
   22. GO TO QUESTION
========================================================= */

function goToQuestion(index) {

    if (
        index < 0 ||
        index >= examQuestions.length
    ) {

        return;

    }


    currentQuestion =
        index;


    displayQuestion();

}


/* =========================================================
   23. MARK FOR REVIEW
========================================================= */

function toggleReview() {

    reviewQuestions[currentQuestion] =
        !reviewQuestions[currentQuestion];


    displayQuestion();


    if (
        reviewQuestions[currentQuestion]
    ) {

        showToast(
            "Question marked for review.",
            "success"
        );

    } else {

        showToast(
            "Review mark removed.",
            "success"
        );

    }

}


/* =========================================================
   24. UPDATE NAVIGATION BUTTON
========================================================= */

function updateNavigationButton() {

    const previousButton =
        document.getElementById(
            "previousButton"
        );


    const nextButton =
        document.getElementById(
            "nextButton"
        );


    if (currentQuestion === 0) {

        previousButton.disabled = true;

        previousButton.style.opacity =
            "0.5";

        previousButton.style.cursor =
            "not-allowed";

    } else {

        previousButton.disabled = false;

        previousButton.style.opacity =
            "1";

        previousButton.style.cursor =
            "pointer";

    }


    if (
        currentQuestion ===
        examQuestions.length - 1
    ) {

        nextButton.textContent =
            "Submit →";

    } else {

        nextButton.textContent =
            "Next →";

    }

}


/* =========================================================
   25. UPDATE QUESTION PALETTE
========================================================= */

function updateQuestionPalette() {

    const buttons =
        document.querySelectorAll(
            ".palette-button"
        );


    buttons.forEach(
        (button, index) => {

            button.classList.remove(
                "current",
                "answered",
                "unanswered",
                "review"
            );


            /*
               Current question
            */

            if (
                index === currentQuestion
            ) {

                button.classList.add(
                    "current"
                );

            }


            /*
               Answer status
            */

            if (
                answers[index] !== null &&
                answers[index] !== undefined
            ) {

                button.classList.add(
                    "answered"
                );

            } else {

                button.classList.add(
                    "unanswered"
                );

            }


            /*
               Review status
            */

            if (
                reviewQuestions[index]
            ) {

                button.classList.add(
                    "review"
                );

            }

        }
    );


    updateAnsweredCount();

}


/* =========================================================
   26. ANSWERED COUNT
========================================================= */

function updateAnsweredCount() {

    const answered =
        answers.filter(
            answer =>
                answer !== null &&
                answer !== undefined
        ).length;


    const total =
        examQuestions.length;


    const counter =
        document.getElementById(
            "answeredCount"
        );


    if (counter) {

        counter.textContent =
            `${answered}/${total}`;

    }

}


/* =========================================================
   27. EXAM PROGRESS
========================================================= */

function updateExamProgress() {

    const answered =
        answers.filter(
            answer =>
                answer !== null &&
                answer !== undefined
        ).length;


    const total =
        examQuestions.length;


    const percentage =
        total === 0
            ? 0
            : Math.round(
                (answered / total) * 100
            );


    document.getElementById(
        "examProgressText"
    ).textContent =
        `${percentage}%`;


    document.getElementById(
        "examProgressFill"
    ).style.width =
        `${percentage}%`;

}


/* =========================================================
   28. EXAM TIMER
========================================================= */

function startExamTimer() {

    clearInterval(examTimer);


    examTimeRemaining =
        60 * 60;


    updateTimerDisplay();


    examTimer =
        setInterval(() => {

            if (examFinished) {

                clearInterval(examTimer);

                return;

            }


            examTimeRemaining--;


            updateTimerDisplay();


            /*
               Automatically submit at zero.
            */

            if (
                examTimeRemaining <= 0
            ) {

                clearInterval(examTimer);

                showToast(
                    "Time is over. Examination submitted automatically.",
                    "error"
                );


                finishExam(true);

            }

        }, 1000);

}


/* =========================================================
   29. UPDATE TIMER
========================================================= */

function updateTimerDisplay() {

    const timerDisplay =
        document.getElementById(
            "timerDisplay"
        );


    const timerBox =
        document.getElementById(
            "examTimer"
        );


    let seconds =
        Math.max(
            0,
            examTimeRemaining
        );


    const hours =
        Math.floor(
            seconds / 3600
        );


    seconds %= 3600;


    const minutes =
        Math.floor(
            seconds / 60
        );


    const remainingSeconds =
        seconds % 60;


    let display;


    if (hours > 0) {

        display =
            `${String(hours).padStart(2, "0")}:` +
            `${String(minutes).padStart(2, "0")}:` +
            `${String(remainingSeconds).padStart(2, "0")}`;

    } else {

        display =
            `${String(minutes).padStart(2, "0")}:` +
            `${String(remainingSeconds).padStart(2, "0")}`;

    }


    timerDisplay.textContent =
        display;


    /*
       RED WARNING WHEN LESS THAN 5 MINUTES
    */

    if (
        examTimeRemaining <= 5 * 60
    ) {

        timerBox.classList.add(
            "danger"
        );

    } else {

        timerBox.classList.remove(
            "danger"
        );

    }

}


/* =========================================================
   30. SUBMIT EXAM
========================================================= */

function submitExam() {

    if (examFinished) {
        return;
    }


    const answered =
        answers.filter(
            answer =>
                answer !== null &&
                answer !== undefined
        ).length;


    const unanswered =
        examQuestions.length -
        answered;


    const modalText =
        document.getElementById(
            "submitModalText"
        );


    modalText.textContent =

        `You have answered ${answered} ` +
        `of ${examQuestions.length} questions. ` +
        `${unanswered} question(s) remain unanswered. ` +
        `Are you sure you want to submit?`;


    document
        .getElementById("submitModal")
        .classList.remove("hidden");

}


/* =========================================================
   31. OPEN SUBMIT MODAL
========================================================= */

function openSubmitModal() {

    submitExam();

}


/* =========================================================
   32. CLOSE SUBMIT MODAL
========================================================= */

function closeSubmitModal() {

    document
        .getElementById("submitModal")
        .classList.add("hidden");

}


/* =========================================================
   33. CONFIRM SUBMIT
========================================================= */

function confirmSubmitExam() {

    closeSubmitModal();

    finishExam(false);

}


/* =========================================================
   34. FINISH EXAM
========================================================= */

function finishExam(autoSubmitted = false) {

    if (examFinished) {
        return;
    }


    examFinished = true;


    clearInterval(examTimer);


    /*
       Calculate time used.
    */

    finalTimeUsed =
        (60 * 60) -
        examTimeRemaining;


    calculateResult();


    /*
       Generate certificate ID.
    */

    generateCertificateId();


    /*
       Update result page.
    */

    updateResultPage();


    /*
       Open result page.
    */

    showPage("resultPage");


    if (autoSubmitted) {

        showToast(
            "Time expired. Exam submitted automatically.",
            "error"
        );

    } else {

        showToast(
            "Examination submitted successfully.",
            "success"
        );

    }

}


/* =========================================================
   35. CALCULATE RESULT
========================================================= */

function calculateResult() {

    let correct = 0;

    let wrong = 0;

    let unanswered = 0;


    examQuestions.forEach(
        (question, index) => {

            const userAnswer =
                answers[index];


            if (
                userAnswer === null ||
                userAnswer === undefined
            ) {

                unanswered++;

            }

            else if (
                userAnswer ===
                question.answer
            ) {

                correct++;

            }

            else {

                wrong++;

            }

        }
    );


    finalCorrect =
        correct;


    finalWrong =
        wrong;


    finalUnanswered =
        unanswered;


    finalScore =
        correct;


    finalPercentage =
        Math.round(
            (correct /
                examQuestions.length) *
            100
        );


    finalGrade =
        getGrade(finalPercentage);

}


/* =========================================================
   36. GRADE
========================================================= */

function getGrade(percentage) {

    if (percentage >= 90) {
        return "A+";
    }

    if (percentage >= 80) {
        return "A";
    }

    if (percentage >= 70) {
        return "B+";
    }

    if (percentage >= 60) {
        return "B";
    }

    if (percentage >= 50) {
        return "C";
    }

    if (percentage >= 40) {
        return "D";
    }

    return "F";

}


/* =========================================================
   37. UPDATE RESULT PAGE
========================================================= */

function updateResultPage() {

    const info =
        quizInformation[selectedQuiz];


    document.getElementById(
        "resultExamName"
    ).textContent =
        info
            ? info.title
            : "Online Examination";


    document.getElementById(
        "resultScore"
    ).textContent =
        finalScore;


    document.getElementById(
        "resultPercentage"
    ).textContent =
        `${finalPercentage}%`;


    document.getElementById(
        "resultGrade"
    ).textContent =
        finalGrade;


    document.getElementById(
        "correctAnswers"
    ).textContent =
        finalCorrect;


    document.getElementById(
        "wrongAnswers"
    ).textContent =
        finalWrong;


    document.getElementById(
        "unansweredQuestions"
    ).textContent =
        finalUnanswered;


    document.getElementById(
        "timeUsed"
    ).textContent =
        formatTime(finalTimeUsed);


    /*
       Result message
    */

    const message =
        document.getElementById(
            "resultMessage"
        );


    if (finalPercentage >= 40) {

        message.textContent =
            "Congratulations!";

    } else {

        message.textContent =
            "Keep Practicing!";

    }


    /*
       Animate score circle.
    */

    const circle =
        document.querySelector(
            ".score-circle"
        );


    if (circle) {

        const degrees =
            finalPercentage * 3.6;


        circle.style.background =

            `conic-gradient(
                #6366f1 0deg,
                #8b5cf6 ${degrees}deg,
                rgba(255,255,255,0.05)
                ${degrees}deg
            )`;

    }

}


/* =========================================================
   38. OPEN CERTIFICATE
========================================================= */

function openCertificate() {

    if (!examFinished) {

        showToast(
            "Complete the examination first.",
            "error"
        );

        return;

    }


    updateCertificate();


    showPage("certificatePage");

}


/* =========================================================
   39. UPDATE CERTIFICATE
========================================================= */

function updateCertificate() {

    const info =
        quizInformation[selectedQuiz];


    const name =
        currentUser
            ? currentUser.name
            : "Student";


    document.getElementById(
        "certificateName"
    ).textContent =
        name;


    document.getElementById(
        "certificateExamName"
    ).textContent =
        info
            ? info.title
            : "Online Examination";


    document.getElementById(
        "certificateScore"
    ).textContent =
        `${finalScore} / ${examQuestions.length}`;


    document.getElementById(
        "certificatePercentage"
    ).textContent =
        `${finalPercentage}%`;


    document.getElementById(
        "certificateGrade"
    ).textContent =
        finalGrade;


    document.getElementById(
        "certificateId"
    ).textContent =
        certificateId;


    document.getElementById(
        "certificateDate"
    ).textContent =
        new Date().toLocaleDateString(
            "en-IN",
            {
                day: "2-digit",
                month: "long",
                year: "numeric"
            }
        );


    generateQRVisual();

}


/* =========================================================
   40. GENERATE CERTIFICATE ID
========================================================= */

function generateCertificateId() {

    const random =
        Math.floor(
            100000 +
            Math.random() * 900000
        );


    certificateId =
        `EXAM-${Date.now()
            .toString()
            .slice(-6)}-${random
            .toString()
            .slice(-4)}`;

}


/* =========================================================
   41. QR VISUAL
========================================================= */

function generateQRVisual() {

    const qr =
        document.getElementById(
            "certificateQR"
        );


    if (!qr) {
        return;
    }


    /*
       This is currently a visual certificate code.

       Later we can replace it with a REAL
       scannable QR code connected to a
       verification URL/database.
    */

    qr.textContent = "";

    qr.style.background =
        "white";


    const size = 9;


    const grid =
        document.createElement("div");


    grid.style.display =
        "grid";


    grid.style.gridTemplateColumns =
        `repeat(${size}, 5px)`;


    grid.style.gridTemplateRows =
        `repeat(${size}, 5px)`;


    grid.style.gap =
        "1px";


    for (
        let i = 0;
        i < size * size;
        i++
    ) {

        const cell =
            document.createElement("span");


        const random =
            Math.random() > 0.5;


        cell.style.width =
            "5px";


        cell.style.height =
            "5px";


        cell.style.background =
            random
                ? "#111827"
                : "#ffffff";


        grid.appendChild(cell);

    }


    qr.appendChild(grid);

}


/* =========================================================
   42. PRINT CERTIFICATE
========================================================= */

function printCertificate() {

    if (!examFinished) {

        showToast(
            "Complete the examination first.",
            "error"
        );

        return;

    }


    window.print();

}


/* =========================================================
   43. BACK TO RESULT
========================================================= */

function backToResult() {

    showPage("resultPage");

}


/* =========================================================
   44. BACK TO DASHBOARD
========================================================= */

function backToDashboard() {

    /*
       A completed exam remains completed.

       Student can return to dashboard
       and select another exam.
    */

    showPage("quizSelectionPage");

}


/* =========================================================
   45. LOGOUT
========================================================= */

function logout() {

    /*
       Do not leave an active exam accidentally.
    */

    if (
        !examFinished &&
        selectedQuiz &&
        examTimer
    ) {

        const confirmLogout =
            confirm(
                "An examination is currently active. " +
                "Are you sure you want to logout?"
            );


        if (!confirmLogout) {
            return;
        }

    }


    clearInterval(examTimer);


    currentUser = null;

    selectedQuiz = null;

    examQuestions = [];

    answers = [];

    reviewQuestions = [];

    examFinished = false;


    localStorage.removeItem(
        "examProUser"
    );


    document
        .getElementById("logoutButton")
        .classList.add("hidden");


    document
        .getElementById("loginForm")
        .reset();


    showPage("loginPage");


    showToast(
        "You have been logged out.",
        "success"
    );

}


/* =========================================================
   46. THEME TOGGLE
========================================================= */

function toggleTheme() {

    document.body.classList.toggle(
        "light"
    );


    const isLight =
        document.body.classList.contains(
            "light"
        );


    const button =
        document.getElementById(
            "themeToggle"
        );


    button.textContent =
        isLight
            ? "☀️"
            : "🌙";


    localStorage.setItem(
        "examProTheme",
        isLight
            ? "light"
            : "dark"
    );

}


/* =========================================================
   47. LOAD THEME
========================================================= */

function loadTheme() {

    const savedTheme =
        localStorage.getItem(
            "examProTheme"
        );


    if (savedTheme === "light") {

        document.body.classList.add(
            "light"
        );


        const button =
            document.getElementById(
                "themeToggle"
            );


        if (button) {

            button.textContent =
                "☀️";

        }

    }

}


loadTheme();


/* =========================================================
   48. TOAST
========================================================= */

function showToast(
    message,
    type = "success"
) {

    const toast =
        document.getElementById(
            "toast"
        );


    const toastMessage =
        document.getElementById(
            "toastMessage"
        );


    const toastIcon =
        document.getElementById(
            "toastIcon"
        );


    if (!toast) {
        return;
    }


    toastMessage.textContent =
        message;


    if (type === "error") {

        toastIcon.textContent =
            "✕";


        toastIcon.style.background =
            "rgba(239,68,68,0.15)";


        toastIcon.style.color =
            "#f87171";

    } else {

        toastIcon.textContent =
            "✓";


        toastIcon.style.background =
            "rgba(34,197,94,0.15)";


        toastIcon.style.color =
            "#4ade80";

    }


    toast.classList.add("show");


    clearTimeout(
        window.examToastTimer
    );


    window.examToastTimer =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 3000);

}


/* =========================================================
   49. FORMAT TIME
========================================================= */

function formatTime(totalSeconds) {

    totalSeconds =
        Math.max(
            0,
            totalSeconds
        );


    const hours =
        Math.floor(
            totalSeconds / 3600
        );


    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );


    const seconds =
        totalSeconds % 60;


    if (hours > 0) {

        return (

            `${String(hours).padStart(2, "0")}:` +

            `${String(minutes).padStart(2, "0")}:` +

            `${String(seconds).padStart(2, "0")}`

        );

    }


    return (

        `${String(minutes).padStart(2, "0")}:` +

        `${String(seconds).padStart(2, "0")}`

    );

}


/* =========================================================
   50. ESCAPE HTML
========================================================= */

function escapeHTML(value) {

    const div =
        document.createElement("div");


    div.textContent =
        String(value);


    return div.innerHTML;

}


/* =========================================================
   51. PREVENT ACCIDENTAL PAGE LEAVE
========================================================= */

window.addEventListener(
    "beforeunload",
    function (event) {

        if (
            selectedQuiz &&
            !examFinished &&
            examTimeRemaining > 0
        ) {

            event.preventDefault();

            event.returnValue = "";

        }

    }
);


/* =========================================================
   52. KEYBOARD NAVIGATION
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        /*
           Don't interfere with typing
           in input fields.
        */

        const activeElement =
            document.activeElement;


        if (
            activeElement &&
            (
                activeElement.tagName === "INPUT" ||
                activeElement.tagName === "TEXTAREA"
            )
        ) {

            return;

        }


        /*
           Only during examination.
        */

        const examPage =
            document.getElementById(
                "examPage"
            );


        if (
            !examPage.classList.contains(
                "active-page"
            )
        ) {

            return;

        }


        /*
           Arrow Right = Next
        */

        if (
            event.key === "ArrowRight"
        ) {

            nextQuestion();

        }


        /*
           Arrow Left = Previous
        */

        if (
            event.key === "ArrowLeft"
        ) {

            previousQuestion();

        }

    }
);


/* =========================================================
   53. ESC CLOSE MODALS
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key !== "Escape") {
            return;
        }


        closeForgotPassword();

        closeSubmitModal();

    }
);


/* =========================================================
   54. CLICK OUTSIDE MODAL
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        const forgotModal =
            document.getElementById(
                "forgotPasswordModal"
            );


        const submitModal =
            document.getElementById(
                "submitModal"
            );


        if (
            event.target ===
            forgotModal
        ) {

            closeForgotPassword();

        }


        if (
            event.target ===
            submitModal
        ) {

            closeSubmitModal();

        }

    }
);


/* =========================================================
   55. CONSOLE INFORMATION
========================================================= */

console.log(
    "%c ExamPro Online Examination Portal ",
    "background:#6366f1;color:white;font-size:16px;padding:8px;"
);


console.log(
    "Random question pattern: ENABLED"
);


console.log(
    "Random option pattern: ENABLED"
);


console.log(
    "Exam duration: 60 minutes"
);


console.log(
    "5-minute red timer warning: ENABLED"
);


/* =========================================================
   END OF SCRIPT
========================================================= */