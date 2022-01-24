const countdown = document.getElementById("hud-timer");
const progressmeter = document.getElementById("progress-meter-100");
const question = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");

const questionBank = [
	{
		question: 'This is question 1, and the answer should be number 4.',
		option1: 'Answer number 1.',
		option2: 'Answer number 2.',
		option3: 'Answer number 3.',
		option4: 'Answer number 4.', 
		answer: 4,
	},
	{
		question: 'This is question 2, and the answer should be number 3.',
		option1: 'Answer number 1.',
		option2: 'Answer number 2.',
		option3: 'Answer number 3.',
		option4: 'Answer number 4.',
		answer: 3,
	},
	{
		question: 'This is question 3, and the answer should be number 2.',
		option1: 'Answer number 1.',
		option2: 'Answer number 2.',
		option3: 'Answer number 3.',
		option4: 'Answer number 4.',
		answer: 2,
	},
	{
		question: 'This is question 4, and the answer should be number 1.',
		option1: 'Answer number 1.',
		option2: 'Answer number 2.',
		option3: 'Answer number 3.',
		option4: 'Answer number 4.',
		answer: 1,
	},
	{
		question: 'This is question 5, and the answer should be number 2.',
		option1: 'Answer number 1.',
		option2: 'Answer number 2.',
		option3: 'Answer number 3.',
		option4: 'Answer number 4.',
		answer: 2,
	},
	{
		question: 'This is question 6, and the answer should be number 3.',
		option1: 'Answer number 1.',
		option2: 'Answer number 2.',
		option3: 'Answer number 3.',
		option4: 'Answer number 4.',
		answer: 3,
	},
	{
		question: 'This is question 7, and the answer should be number 4.',
		option1: 'Answer number 1.',
		option2: 'Answer number 2.',
		option3: 'Answer number 3.',
		option4: 'Answer number 4.',
		answer: 4,
	}
]

var totalQuestions = questionBank.length;
var currentQuestion = {}
var currentQuestionNumber = 0
var completedQuestions = 0
var randomQuestionOrder = [];

function startCountdown (t) {
	  // Sets interval in variable
		var secondsLeft = t;
		countdown.children[1].textContent = secondsLeft;
		var timerInterval = setInterval(function() {
			secondsLeft--;
			countdown.children[1].textContent = secondsLeft;
	
			if(secondsLeft === 0) {
				clearInterval(timerInterval);
				// Show "timeout" message.
				console.log("timer is done!");
				timeOut ();
			}
	
		}, 1000);
}

function timeOut (){
		window.location.assign("./outoftime.html");
}

function randomizeQuestionOrder () {
	randomQuestionOrder = questionBank.sort(() => (Math.random() > .5) ? 1 : -1);
	console.log(randomQuestionOrder);
	return randomQuestionOrder
}		

function showQuestion(x) {
	question.children[0].textContent = questionBank[x-1].question;
	option1.textContent = questionBank[x-1].option1;
	option2.textContent = questionBank[x-1].option2;
	option3.textContent = questionBank[x-1].option3;
	option4.textContent = questionBank[x-1].option4;
}

function clearQuestion () {
	question.children[0].textContent = '';
	option1.textContent = '';
	option2.textContent = '';
	option3.textContent = '';
	option4.textContent = '';
}

function changeProgMeterPercent(a,b) {
	percentFinished = Math.round((a / b) * 100) + '%';
	progressmeter.style.width = percentFinished;
}

function startQuiz (){
	startCountdown(30);
	randomizeQuestionOrder();
	showQuestion(randomQuestionOrder[0]);
}

// maybe not use the t,x, ... just make the start button work

// START BUTTON
// start countdown
// randomize the question set
// show the active question 
// 
// 
// 
// 
// 
// 
// 
