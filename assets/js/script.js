var countdown = document.getElementById("hud-timer");
var progressmeter = document.getElementById("progress-meter-100");

var question = document.getElementById("question");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");

var totalQuestions
var currentQuestion
var completedQuestions
var randomQuestionNumber

let allQuestions = [
	{
		question: 'This is question 1, and the answer should be number 4.',
		choice1: 'Answer number 1.',
		choice2: 'Answer number 2.',
		choice3: 'Answer number 3.',
		choice4: 'Answer number 4.',
		answer: 4,
	},
	{
		question: 'This is question 2, and the answer should be number 3.',
		choice1: 'Answer number 1.',
		choice2: 'Answer number 2.',
		choice3: 'Answer number 3.',
		choice4: 'Answer number 4.',
		answer: 3,
	},
	{
		question: 'This is question 3, and the answer should be number 2.',
		choice1: 'Answer number 1.',
		choice2: 'Answer number 2.',
		choice3: 'Answer number 3.',
		choice4: 'Answer number 4.',
		answer: 2,
	},
	{
		question: 'This is question 4, and the answer should be number 1.',
		choice1: 'Answer number 1.',
		choice2: 'Answer number 2.',
		choice3: 'Answer number 3.',
		choice4: 'Answer number 4.',
		answer: 1,
	},
	{
		question: 'This is question 5, and the answer should be number 2.',
		choice1: 'Answer number 1.',
		choice2: 'Answer number 2.',
		choice3: 'Answer number 3.',
		choice4: 'Answer number 4.',
		answer: 2,
	},
	{
		question: 'This is question 6, and the answer should be number 3.',
		choice1: 'Answer number 1.',
		choice2: 'Answer number 2.',
		choice3: 'Answer number 3.',
		choice4: 'Answer number 4.',
		answer: 3,
	},
]

totalQuestions = allQuestions.length;

function startCountdown (z) {
	  // Sets interval in variable
		var secondsLeft = z;
		countdown.children[1].textContent = secondsLeft;
		var timerInterval = setInterval(function() {
			secondsLeft--;
			countdown.children[1].textContent = secondsLeft;
	
			if(secondsLeft === 0) {
				// Stops execution of action at set interval
				clearInterval(timerInterval);
				// Calls function to create and append image
				console.log("timer is done!");
			}
	
		}, 1000);
}

function randomQuestionNumber () {
	var random
	random = Math.floor(Math.random()*allQuestions.length);
	console.log(random);
	return random;
}

function showQuestion(x) {
	question.children[0].textContent = allQuestions[x-1].question;
	choice1.textContent = allQuestions[x-1].choice1;
	choice2.textContent = allQuestions[x-1].choice2;
	choice3.textContent = allQuestions[x-1].choice3;
	choice4.textContent = allQuestions[x-1].choice4;
}

function changeProgMeterPercent(a,b) {
	percentFinished = Math.round((a / b) * 100) + '%';
	progressmeter.style.width = percentFinished;
}
