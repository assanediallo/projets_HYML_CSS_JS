const quizData = [
    {
        question: "Qui est le meilleur joueur de tous les temps ?",
        A: "Cristiano Ronaldo",
        B: "Maradona",
        C: "Leo Messi",
        D: "Assane Diallo",
        correct: "c",
    },
    {
        question: "Qui est le président des USA ?",
        A: "Drake",
        B: "Joe Biden",
        C: "Donald Trump",
        D: "Assane Diallo",
        correct: "b",
    },
    {
        question: "Qui est le langage de programmation le plus utilisé en 2022 ?",
        A: "Python",
        B: "JavaScript",
        C: "Java",
        D: "Go",
        correct: "a",
    },
    {
        question: "Que signifie HTML ?",
        A: "Hélicoptère Tesla Maserati Lamborghini",
        B: "HyperTransfer Markup Language",
        C: "Hailey Tafy Macy Lana",
        D: "Hypertext Markup Language",
        correct: "d",
    },
    {
        question: "De quand date JavaScript ?",
        A: "1996",
        B: "1995",
        C: "1994",
        D: "1999",
        correct: "b",
    }
]

const quiz = document.getElementById("quiz");

const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const nextBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.A;
    b_text.innerText = currentQuizData.B;
    c_text.innerText = currentQuizData.C;
    d_text.innerText = currentQuizData.D;
}

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

nextBtn.addEventListener('click', () => {

    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>Vous avez correctement répondu à 
            ${score} questions / ${quizData.length}.</h2>
            <button onclick="location.reload()">Recharger</button>`;
        }
    }
})