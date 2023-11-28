// DEPENDENCIES
var timeLeft = document.querySelector("#timeLeft");
var startTimer = document.querySelector("#startQuiz");
var questionsCard = document.querySelector("#questionCard");
var wrapper = document.querySelector(".wrapper");

// DATA
// starting score variable
var score = 0;
// variable to determine what question to start on, 0 in this case
var questionIndex = 0;

// questions array
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
    question: "What color is an orange?",
    choices: ["Red", "Yellow", "Orange", "Blue"],
    answer: "Orange",
  },
  {
    question: "What color is a strawberry?",
    choices: ["Red", "Yellow", "Orange", "Green"],
    answer: "Red",
  },
];

// variable for starting timer count
var secondsLeft = 75;
// variable for how much time to subtract from timer count
var subtractSeconds = 10;
// variable to add list element
var ulAdd = document.createElement("ul");
// variable to check time is at 0
var zeroTime = 0;

//FUNCTIONS

// renders questions and answers to page depending on index
function renderQuestions(questionIndex) {
  // clear page
  questionsCard.innerHTML = "";
  ulAdd.innerHTML = "";
}

// game ending function
function gameOver() {
  // clear page
  questionsCard.innerHTML = "";
  timeLeft.innerHTML = "";

  var heading1 = document.createElement("h1");
  heading1.setAttribute();
}

//USER INPUT
// clicks start button, timer begins, and first question renders
startTimer.addEventListener("click", function () {
  if (zeroTime === 0) {
    zeroTime = setInterval(function () {
      secondsLeft--;
      timeLeft.textContent = "Time remaining: " + secondsLeft;

      if (secondsLeft <= 0) {
        clearInterval(zeroTime);
        gameOver();
        timeLeft.textContent = "Game Over!";
      }
    }, 1000);
  }
  renderQuestions(questionIndex);
});
// click one of the choices
// enter innitials on final score screen
// click submit on final score screen
// click clear highscore on highscores screen
// click go back on highscore screen

//INITIALIZATION
