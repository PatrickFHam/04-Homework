const seeHiScoresEl = document.getElementById("see-hiscores");
const resetBtnEl = document.getElementById("clear-hiscores");
const startResetBtnEl = document.getElementById("start-reset-btn");
const stopBtnEl = document.getElementById("stop-btn");
const readyToTryAgainEl = document.getElementById("option1");

function resetHighScores () {
  localStorage.clear();
}

function goToHighScoresPage () {
  window.location.assign("./hiscores.html");
}

function cantStopHere () {
  window.alert("You can't end something you haven't begun. ;) ")
}

resetBtnEl.onclick = function() {
	resetHighScores();
  console.log("cleared the local storage");
	localStorage.clear();
};

seeHiScoresEl.onclick = function() {
	goToHighScoresPage();
  console.log("go to high scores");
};

stopBtnEl.onclick = function() {
  cantStopHere();
  console.log("can't stop here, cuz you haven't started!")
}

startResetBtnEl.onclick = function () {
  window.location.assign("./quizrun.html");
}

readyToTryAgainEl.onclick = function () {
  window.location.assign("./quizrun.html")
}