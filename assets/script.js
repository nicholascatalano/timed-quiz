// DEPENDENCIES

// dependecies for quiz
var timeLeft = document.querySelector("#timeLeft");
var startQuiz = document.querySelector("#startQuiz");
var questionsCard = document.querySelector("#questionsCard");
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
    answer: "Red",
  },
  {
    question: "What color is a blueberry?",
    choices: ["Red", "Yellow", "Green", "Blue"],
    answer: "Blue",
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
// interval for timer
var timer;

//FUNCTIONS

// renders questions and answers to page depending on index
function renderQuestions(questionIndex) {
  // clear page
  questionsCard.innerHTML = "";
  ulAdd.innerHTML = "";

  // for loop to cycle through info in each question array
  for (var i = 0; i < questions.length; i++) {
    var question = questions[questionIndex].question;
    var choice = questions[questionIndex].choices;
    questionsCard.textContent = question;
  }

  // referenced mdn article on foreach to apply attributes to each array element
  choice.forEach(function (updatedCard) {
    var listItem = document.createElement("button");
    listItem.textContent = updatedCard;
    questionsCard.appendChild(ulAdd);
    ulAdd.appendChild(listItem);
    listItem.addEventListener("click", result);
  });
}

// function to determine if user is right or wrong
function result(event) {
  var element = event.target;

  if (element.matches("button")) {
    var divAdd = document.createElement("div");
    divAdd.setAttribute("id", "divAdd");

    // if user is correct
    if (element.textContent == questions[questionIndex].answer) {
      score++;
      divAdd.textContent = "Correct!";
      // if user is incorrect
    } else {
      secondsLeft = secondsLeft - subtractSeconds;
      divAdd.textContent =
        "Incorrect - the answer is: " + questions[questionIndex].answer;
    }
  }

  // refer to question index, moves up one in the index
  questionIndex++;

  // game over will trigger if the user has gone through all questions
  if (questionIndex >= questions.length) {
    gameOver();
    divAdd.textContent =
      "The quiz is now complete, thank you for participating! " +
      "You finished with a score of: " +
      score +
      "/" +
      questions.length +
      "!";
  } else {
    renderQuestions(questionIndex);
  }
  questionsCard.appendChild(divAdd);
}

// game ending function
function gameOver() {
  // clear page
  questionsCard.innerHTML = "";
  timeLeft.innerHTML = "";
  clearInterval(timer);

  // Below lines of code are used to create and append elements to for highscores screen

  // Heading
  var addH1 = document.createElement("h1");
  addH1.setAttribute("id", "addH1");
  addH1.textContent = "Game Over!";
  //append new H1 element to original card
  questionsCard.appendChild(addH1);

  // Paragraph (spaces out)
  var addP = document.createElement("p");
  addP.setAttribute("id", "p");
  questionsCard.appendChild(addP);

  // Paragraph 2: time remaining will be the final score
  if (secondsLeft >= 0) {
    var secondsRemaining = secondsLeft;
    var addP2 = document.createElement("p");
    addP2.textContent = "Your final tally is: " + secondsRemaining;
    questionsCard.appendChild(addP2);
  }

  // Text element to indicate you should enter your name for highscore
  var addName = document.createElement("label");
  addName.setAttribute("id", "addName");
  addName.textContent = "Please enter your name here: ";
  questionsCard.appendChild(addName);

  // Player input name for highscore
  var inputName = document.createElement("input");
  inputName.setAttribute("id", "inputName");
  inputName.setAttribute("type", "text");
  inputName.textContent = "";
  questionsCard.appendChild(inputName);

  // Submit button for user to submit score
  var submitButton = document.createElement("button");
  submitButton.setAttribute("id", "submitButton");
  submitButton.textContent = "Submit Score";
  questionsCard.appendChild(submitButton);

  // Click event listener for submit button
  submitButton.addEventListener("click", function () {
    var userName = inputName.value;
    // If user enters nothing, receive alert, else push username and score to highscore page.
    if (userName === null) {
      alert("Please enter a username for the highscore page!");
    } else {
      var highScore = {
        inputName: userName,
        score: secondsRemaining,
      };
      var highscoreList = localStorage.getItem("highscoreList");
      if (highscoreList === null) {
        highscoreList = [];
      } else {
        highscoreList = JSON.parse(highscoreList);
      }
      highscoreList.push(highScore);
      var updatedScores = JSON.stringify(highscoreList);
      localStorage.setItem("highscoreList", updatedScores);
      // referenced https://developer.mozilla.org/en-US/docs/Web/API/Location/replace to automatically move user to highscores page
      window.location.replace("./highscores.html");
    }
  });
}

function timerBegin() {
  timer = setInterval(function () {
    secondsLeft--;
    timeLeft.textContent = secondsLeft;
    if (secondsLeft <= 0) {
      gameOver();
      timeLeft.textContent =
        "Thanks for playing! You finished with a score of: " +
        score +
        "/" +
        questions.length +
        "!";
    }
  }, 1000);
}

//USER INPUT

// user clicks start button, timer begins, and first question renders
startQuiz.addEventListener("click", function () {
  timerBegin();
  renderQuestions(questionIndex);
});
