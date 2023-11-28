// DEPENDENCIES
var timeLeft = document.querySelector("#timeLeft");
var startTimer = document.querySelector("#startQuiz");
var questionsCard = document.querySelector("#questionsCard");
var wrapper = document.querySelector(".wrapper");

// DATA
var score = 0;
var questionIndex = 0;

var questions = [
  {
    question: "What color is a banana?",
    choices: ["Red", "Yellow", "Orange", "Blue"],
    answer: "Yellow",
  },
  {
    question: "What color is an apple?",
    choices: ["Red", "Yellow", "Orange", "Blue"],
    answer: "Yellow",
  },
  {
    question: "What color is a blueberry?",
    choices: ["Red", "Yellow", "Green", "Blue"],
    answer: "Yellow",
  },
  {
    question: "What color is a orange?",
    choices: ["Red", "Yellow", "Orange", "Blue"],
    answer: "Orange",
  },
];

var secondsLeft = 75
var subtractSeconds = 10
