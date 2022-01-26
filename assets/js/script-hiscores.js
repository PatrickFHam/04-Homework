const scoreBoxEl = document.getElementById("scoresBox");
const hiScoreLineEl = document.getElementsByClassName("hiscoreline");
const hiScorer1El = document.getElementById("hiscorer1");
const hiScorer2El = document.getElementById("hiscorer2");
const hiScorer3El = document.getElementById("hiscorer3");
const hiScorer4El = document.getElementById("hiscorer4");
const hiScorer5El = document.getElementById("hiscorer5");

const initials1El = document.getElementById("initials1");
const initials2El = document.getElementById("initials2");
const initials3El = document.getElementById("initials3");
const initials4El = document.getElementById("initials4");
const initials5El = document.getElementById("initials5");

const seeHiScoresEl = document.getElementById("see-hiscores");
const resetBtnEl = document.getElementById("clear-hiscores");
const startResetBtnEl = document.getElementById("start-reset-btn");
const stopBtnEl = document.getElementById("stop-btn");

function resetHighScores () {
  localStorage.clear();
}

function alreadyOnHighScoresPage () {
  window.alert("You're already on the leaderboard, silly!");
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
	alreadyOnHighScoresPage();
  console.log("already here!");
};

stopBtnEl.onclick = function() {
  cantStopHere();
  console.log("can't stop here, cuz you haven't started!")
}

startResetBtnEl.onclick = function () {
  window.location.assign("./quizrun.html");
}

var scoresList = [
  {
    score: '',
    initials: ''
  }
];
