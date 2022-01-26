// These link the HTML elements to the script.
const progressTextEl = document.getElementById("progress-text");
const countdownEl = document.getElementById("hud-timer");
const progressmeterEl = document.getElementById("progress-meter-100");
const startQuizEl = document.getElementById("start-quiz-btn");
const beginTimerEl = document.getElementById("start-reset-btn");
const interruptTimerEl = document.getElementById("stop-btn");
const seeHiscoresEl = document.getElementById("see-hiscores");
const clearHiscoresEl = document.getElementById("clear-hiscores");
const currentquestionEl = document.getElementById("current-q-num");
const totalquestionEl = document.getElementById("total-q-num");
const questionEl = document.getElementById("question");
const option1El = document.getElementById("option1");
const option2El = document.getElementById("option2");
const option3El = document.getElementById("option3");
const option4El = document.getElementById("option4");
const optionsEl = document.querySelectorAll("answer-button");

// Question Bank ... THIS IS SCALABLE
// so you can add or take away questions,and the quiz still fully-functions.
const setBank = [
	{
		question: 'Which is NOT a JavaScript data-type?',
		option1: 'parent',
		option2: 'number',
		option3: 'string',
		option4: 'boolean', 
		answer: 1,
	},
	{
		question: 'Which of these is NOT a JavaScript operator?',
		option1: 'not',
		option2: 'or',
		option3: 'and',
		option4: 'approximate-to',
		answer: 4,
	},
	{
		question: 'Javascript was invented in what year?',
		option1: '1985',
		option2: '1995',
		option3: '1989',
		option4: '1999',
		answer: 2,
	},
	{
		question: 'In Javascript, when can you use the semicolon?',
		option1: 'as a wildcard',
		option2: "never, it's banned from JS",
		option3: 'the end and beginning of lines',
		option4: "anytime, it's an invisible character",
		answer: 3,
	},
	{
		question: 'Which is NOT a browser popup?',
		option1: 'explain',
		option2: 'alert',
		option3: 'prompt',
		option4: 'confirm',
		answer: 1,
	},
	{
		question: 'To have the same instructions run multiple times, which should you use?',
		option1: 'a tape recorder',
		option2: 'a repeater',
		option3: 'a "for-loop"',
		option4: 'a key logger',
		answer: 3,
	},
	{
		question: 'The DOM is best-thought-of as a _____ ?',
		option1: 'list',
		option2: 'tree',
		option3: 'array',
		option4: 'Venn-Diagram',
		answer: 2,
	}
]

// Varaiables set to be called on by multiple other functions below.
var totalSets = setBank.length;
var currentSet = {}
var currentSetNumber = 0
var completedSets = 0
var randomizedSetBank = [];
var currentCorrectAnswer = currentSet.answer;
var secondsLeft
var timerInterval
var penaltySeconds = 15
currentquestionEl.innerHTML = 1
totalquestionEl.innerHTML = totalSets;
var initials;

// Chronologically, this is the first function to "fire".
function runQuiz (s) {
	randomizeSetOrder();
	currentSetNumber = 0;
	queueFirstSet();
	queueNextSet();
	startTimer(s);
}

// This re-orders the setBank questions.
function randomizeSetOrder () {
	randomizedSetBank = setBank.sort(() => (Math.random() > .5) ? 1 : -1);
	console.log(randomizedSetBank);
	return randomizedSetBank;
}	

// Slightly different than the other advance, due to the progress-meter.
function queueFirstSet () {
	clearCurrentSet () ;
	reassignCurrentSetContent ();
	changeProgMeterPercent (currentSetNumber-1,totalSets);
	showCurrentSet (currentSetNumber);
	return
}

// How all the other questions advance through the series.
function queueNextSet () {
	clearCurrentSet () ;
	reassignCurrentSetContent ();
	changeProgMeterPercent ((currentSetNumber),totalSets);
	showCurrentSet (currentSetNumber);
	return
}

// Resets the displayed text.
function clearCurrentSet () {
	questionEl.children[0].textContent = '';
	option1El.textContent = '';
	option2El.textContent = '';
	option3El.textContent = '';
	option4El.textContent = '';
}

// Shows a specific question, designated by the 'current set' as 'x'.
function showCurrentSet(x) {
	questionEl.children[0].textContent = randomizedSetBank[x].question;
	option1El.textContent = randomizedSetBank[x].option1;
	option2El.textContent = randomizedSetBank[x].option2;
	option3El.textContent = randomizedSetBank[x].option3;
	option4El.textContent = randomizedSetBank[x].option4;
}

// Swaps-out the question and answers for a new set.
function reassignCurrentSetContent () {
	currentSet = randomizedSetBank[currentSetNumber];
	currentCorrectAnswer = currentSet.answer;
	return currentSet;
}

// Advances the progress meter, based on what question you're on vs how many total questions there are.
function changeProgMeterPercent(a,b) {
	percentFinished = Math.round((a / b) * 100) + '%';
	progressmeterEl.style.width = percentFinished;
	currentquestionEl.textContent = (currentSetNumber +1);
	totalquestionEl.textContent = totalSets;
}

// All the timer magic is here.  Also has within it, the "out of time" trigger.
function startTimer (t) {
	secondsLeft = t;
	countdownEl.children[1].textContent = secondsLeft;
	timerInterval = setInterval(timer, 1000);	
	}
	
	function timer() {
		secondsLeft--;
		countdownEl.children[1].textContent = secondsLeft;
		if(secondsLeft <= 0) {
			timeOut ();
		}
	}
	
	function timeOut (){
		clearInterval(timerInterval);
		outOfTimeSeq();
}

// Simply takes you to a page that says you ran out of time.
function outOfTimeSeq () {
	window.location.assign("./outoftime.html")
}

// Takes you to a different page, if the penalty is greater than the number of seconds remaining.
function tooManyWrongs () {
	window.location.assign("./toomanywrongs.html")
}

// If all the questions are answered, this is triggered, stores the score (secondsLeft) and stores the player's initials.
function endAndSaveScore() {
	initials = window.prompt("Nice job! Type your initials!", "Your Initials Here");
	localStorage.setItem("lsMostRecentScore", secondsLeft);
	localStorage.setItem("lsMostRecentInitials", initials);
	window.location.assign("./hiscores.html");
}

// Compares the chosen option with the correct answer.  Fires a function for each, right or wrong.
function chooseOption (o) {
	console.log(o)
	if (currentCorrectAnswer === o) {
		console.log('yep');
		choseCorrectly();}
		else {
		console.log('nope');
		choseWrongly();}
};

// Click listeners for the buttons.
option1El.onclick = function() {
	console.log("you pressed option 1");
	chooseOption(1);
};

option2El.onclick = function() {
	console.log("you pressed option 2");
	chooseOption(2);
};

option3El.onclick = function() {
	console.log("you pressed option 2");
	chooseOption(3);
};

option4El.onclick = function() {
	console.log("you pressed option 2");
	chooseOption(4);
};

// More click-listeners for control buttons in the "hud".
beginTimerEl.addEventListener("click", userRestart);
interruptTimerEl.addEventListener("click", userStopped);
seeHiscoresEl.addEventListener("click", seeHighScores);
clearHiscoresEl.addEventListener("click", resetHighScores);

// starts the quiz from the top, but does re-order the questions
function userRestart () {
	window.location.reload();
};

// ...for when the user chooses to end the quiz
function userStopped () {
	window.location.assign("./userstopped.html");
};

// This takes the player to the High Scores page.
function seeHighScores () {
	window.location.assign("./hiscores.html");
}

// Clears high-scores.
function resetHighScores () {
	localStorage.removeItem("storedHighScores");
  clearScorerLines();
}

// This is when the player chooses correctly.
// It adds to the question number, queues the next one, or ends the quiz.'
function choseCorrectly () {
	currentSetNumber ++;
	if (currentSetNumber < totalSets) {
		queueNextSet();
	}
	else {
		changeProgMeterPercent ((currentSetNumber),totalSets);
		endAndSaveScore()};
};

// This is when the player chooses an incorrect answer.
// This will either (1) subtract seconds from the time (less score),
// or (2) fire the end-sequence if too many are wrong.
function choseWrongly () {
	if (penaltySeconds >= secondsLeft) {
		tooManyWrongs();
	}
	else {
		secondsLeft -= penaltySeconds;
		if (currentSetNumber <= totalSets) {
			currentSetNumber ++;
			queueNextSet();
		} else {
			tooManyWrongs();
		}
	};
};

// This is the master-app, that fires as soon as the page is loaded.
runQuiz(60);