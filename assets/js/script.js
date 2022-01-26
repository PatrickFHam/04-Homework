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

const setBank = [
	{
		question: 'The correct answer should be APPLES.',
		option1: 'Apples',
		option2: 'Bananas',
		option3: 'Cucumbers',
		option4: 'Delicious', 
		answer: 1,
	},
	{
		question: 'The correct answer should be HAM.',
		option1: 'Eggs.',
		option2: 'Flour',
		option3: 'Grains',
		option4: 'Ham',
		answer: 4,
	},
	{
		question: 'The correct answer should be JELLY',
		option1: 'Izzy',
		option2: 'Jelly',
		option3: 'Ketchup',
		option4: 'Limes',
		answer: 2,
	},
	{
		question: 'The correct answer should be ORANGES.',
		option1: 'Mayo',
		option2: 'Nectarines',
		option3: 'Oranges',
		option4: 'Peppers',
		answer: 3,
	},
	{
		question: 'The correct answer should be QUIK.',
		option1: 'Quik',
		option2: 'Rice',
		option3: 'Saltines',
		option4: 'Taffy',
		answer: 1,
	},
	{
		question: 'The correct answer should be WONDERBREAD.',
		option1: 'Ugly Fruit',
		option2: 'Velveeta',
		option3: 'Wonderbread',
		option4: 'Xyzal',
		answer: 3,
	},
	{
		question: 'The correct answer should be ZZ-Nytol',
		option1: 'Yams',
		option2: 'ZZ-Nytol',
		option3: 'One a Day',
		option4: 'Tweezers',
		answer: 2,
	}
]

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

function test (s) {
	randomizeSetOrder();
	currentSetNumber = 0;
	queueFirstSet();
	queueNextSet();
	startTimer(s);
}

function randomizeSetOrder () {
	randomizedSetBank = setBank.sort(() => (Math.random() > .5) ? 1 : -1);
	console.log(randomizedSetBank);
	return randomizedSetBank;
}	

function queueFirstSet () {
	clearCurrentSet () ;
	reassignCurrentSetContent ();
	changeProgMeterPercent (currentSetNumber-1,totalSets);
	showCurrentSet (currentSetNumber);
	return
}

function queueNextSet () {
	clearCurrentSet () ;
	reassignCurrentSetContent ();
	changeProgMeterPercent ((currentSetNumber),totalSets);
	showCurrentSet (currentSetNumber);
	return
}

function clearCurrentSet () {
	questionEl.children[0].textContent = '';
	option1El.textContent = '';
	option2El.textContent = '';
	option3El.textContent = '';
	option4El.textContent = '';
}

function showCurrentSet(x) {
	questionEl.children[0].textContent = randomizedSetBank[x].question;
	option1El.textContent = randomizedSetBank[x].option1;
	option2El.textContent = randomizedSetBank[x].option2;
	option3El.textContent = randomizedSetBank[x].option3;
	option4El.textContent = randomizedSetBank[x].option4;
}

function reassignCurrentSetContent () {
	currentSet = randomizedSetBank[currentSetNumber];
	currentCorrectAnswer = currentSet.answer;
	return currentSet;
}

function changeProgMeterPercent(a,b) {
	percentFinished = Math.round((a / b) * 100) + '%';
	progressmeterEl.style.width = percentFinished;
	currentquestionEl.textContent = (currentSetNumber +1);
	totalquestionEl.textContent = totalSets;
}

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

function outOfTimeSeq () {
	window.location.assign("./outoftime.html")
}

function tooManyWrongs () {
	window.location.assign("./toomanywrongs.html")
}

function endAndSaveScore() {
	initials = window.prompt("Nice job! Type your initials!", "Your Initials Here");
	localStorage.setItem("lsMostRecentScore", secondsLeft);
	localStorage.setItem("lsMostRecentInitials", initials);
	window.location.assign("./hiscores.html");
}

function chooseOption (o) {
	console.log(o)
	if (currentCorrectAnswer === o) {
		console.log('yep');
		choseCorrectly();}
		else {
		console.log('nope');
		choseWrongly();}
};

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

beginTimerEl.addEventListener("click", userRestart);
interruptTimerEl.addEventListener("click", userStopped);
seeHiscoresEl.addEventListener("click", seeHighScores);
clearHiscoresEl.addEventListener("click", resetHighScores);

function userRestart () {
	window.location.reload();
};

function userStopped () {
	window.location.assign("./userstopped.html");
};

function seeHighScores () {
	window.location.assign("./hiscores.html");
}

function resetHighScores () {
	localStorage.clear();
}

function choseCorrectly () {
	currentSetNumber ++;
	if (currentSetNumber < totalSets) {
		queueNextSet();
	}
	else {
		changeProgMeterPercent ((currentSetNumber),totalSets);
		endAndSaveScore()};
};


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

test(60);