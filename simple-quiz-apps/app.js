// Questions list
const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Elephant", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which country do yo live?",
    answers: [
      { text: "Bangladesh", correct: true },
      { text: "Japan", correct: false },
      { text: "India", correct: false },
      { text: "Nepal", correct: false },
    ],
  },
  {
    question: "Which is your hometown?",
    answers: [
      { text: "Khulna", correct: false },
      { text: "Dhaka", correct: false },
      { text: "Chottogram", correct: false },
      { text: "Rangpur", correct: true },
    ],
  },
  {
    question: "Which programming language are you learning now?",
    answers: [
      { text: "C++", correct: false },
      { text: "JavaScript", correct: true },
      { text: "Python", correct: false },
      { text: "Swift", correct: false },
    ],
  },
  {
    question:
      "Which much time do you practice everyday for learning programming language?",
    answers: [
      { text: "4 hours", correct: true },
      { text: "5 hours", correct: false },
      { text: "6 hours", correct: false },
      { text: "7 hours", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
}
