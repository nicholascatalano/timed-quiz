// dependecies for highscores page
var highscoreCard = document.querySelector("#highscoreCard");
var clearScore = document.querySelector("#clearScore");
var homeButton = document.querySelector("#homeButton");

// data to retrieve local storage
var highscoreList = localStorage.getItem("highscoreList");

// user clicks home button to return to main html page
homeButton.addEventListener("click", function () {
  window.location.replace("./index.html");
});

// user clicks clear scores button to clear highscores
clearScore.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

highscoreList = JSON.parse("highscoreList");

if (highscoreList !== null) {
  for (var i = 0; i < highscoresList.length; i++) {
    var addLi = document.createElement("li");
    addLi.textContent =
      highscoreList[i].userName + " " + highscoreList[i].score;
    highscoreCard.appendChild(addLi);
  }
}
