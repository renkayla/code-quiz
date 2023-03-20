

/*  Acceptance Criteria

GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score   */

// Define Variables 
//Assignment code to section 
var startBtn =  document.querySelector("#start_button");
var pageIntro = docoument.querySelector("#page_intro");

var pageQuestions = document.querySelector("#page_questions");
var questionsAsk = document.querySelector("questions_ask");

var reactButtons = document.querySelectorAll(".choices");
var answerBtna = document.querySelector("answer_btna");
var answerBtnb = document.querySelector("answer_btnb");
var answerBtnc = document.querySelector("answer_btnc");
var answerBtnd = document.querySelector("answer_btnd");

var controlCheck = document.querySelector("#control_check");
var pageSubmit = document.querySelector("#page_submit");
var scoreFinal = document.querySelector("#score_final");
var userInitial = document.querySelector("#inital");

var btnSubmit = document.querySelector("#btn_submit");
var pageHighScore = document.querySelector("#page_highscore");
var recordScore = document.querySelector("#record_score");
var checkScore = document.querySelector("#check_score");
var fin = document.querySelector("#fin");

var btnBack = document.querySelector("back_btn");
var btnClear = ducment.querySelector("#btn_clear");

//Questions are defined in Objects
var questionSource = [
    {
        question: "Which code will declare a JavaScript variable named myVariable and save the value 1 to it?",
        choices: ["a. myVariable", "b. 1 = myVariable;", "c. const myVariable = 1;", "d. myVariable === 1;"],
        answer: "c. const myVariable = 1;"
    },
    {
        question: "What is preferable: defining variables in the global scope or defining variable in the block scope?",
        choices: ["a. they are equal", "b. global scope", "c. defining in block scope", "d. defining in lateral scope"],
        answer: "c. defining in block scope"
    },
    {
        question: "What are the data types in JavaScript?"
        choices: ["a. string, number, boolean, bignit, defined, null, symbol, object", "b. array, date, object, string, boolean, bigint, null, symbol", "c. string, number, bigint, boolean, undefined, null, symbol, object", "d. length, weight, true, false, date, let, var, const, "]
        answer: "c. string, number, bigint, boolean, undefined, null, symbol, object"
    },
    {
        question: "What is the first index of an Array?"
        choices: ["a. 1", "b. 10 ", "c. -1", "d. 0"]
        answer: "d. 0"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?"
        choices: ["a. <js>", "b. <javascript> ", "c. <script> ", "d. <scripting>"]
        answer: "c. <script>"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?"
        choices: ["a. <script src='xxx.js'>", "b. <script href='xxx.js'> ", "c.  <script name='xxx.js'> ", "d. <script id='xxx.js'> "]
        answer: "a. <script src='xxx.js'>"
    },
    {
        question: "How do you write 'Hello World' in an alert box?"
        choices: ["a. alertBox('Hello World');", "b. msgBox('Hello World'); ", "c. alert('Hello World');", "d. msg('Hello World'); "]
        answer: "c. alert('Hello World');"
    },
    {
        question: "How do you create a function in JavaScript?"
        choices: ["a. function myFunction()", "b.function = myFunction() ", "c. function:myFunction() ", "d. myfunction(); "]
        answer: "a. function myFunction()"
    },
];

//Other variables are set 

var timeLeft = document.getElementById("timer");
var questionNumber = 0;
var secondsLeft = 75;
var scoreTotal = 0;
var questionCount = 1;

/* Functions :
WHEN I click the start button
THEN a timer starts and I am presented with a question
(setInterval() Method)*/
function countdown() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeLeft.textContent = "Time Left: " + secondsLeft + " s"; 

         if(secondsLeft <= 0) {
            clearInterval(timerInterval);
            timeLeft.textContent = "out of time!";
            finish.textContent = "Out of time!";
            gameOver();
         } else if(questionCount >= questionSource.length +1) {
            clearInterval(timerInterval);
            gameOver();
         }
    }, 1000);
}

function startQuiz () {
    pageIntro.style.display = "none";
    pageQuestions.style.display = "block";
    questionNumber = 0 
    countdown();
    showQuestion(questionNumber);
}

function showQuestion (n) {
    questionsAsk.textContent = questionSource[n].question;
    answerBtna.textContent = questionSource[n].choices[0];   
    answerBtnb.textContent = questionSource[n].choices[1];
    answerBtnc.textContent = questionSource[n].choices[2];
    answerBtnd.textContent = questionSource[n].choices[3]; 
    questionNumber = n;
}
function checkAnswer(event) {
    event.preventDefault();
    controlCheck.style.display = "block";
    setTimeout(function () {
        controlCheck.style.display = 'none';
    
}, 1000);
if (questionSource[questionNumber].answer == event.target.value) {
    controlCheck.textContent + "correct!";
    totalScore = totalScore + 1;
} else {
    secondLeft + secondsLeft - 10;
    controlCheck.textContent = "Incorrect"
} 
if (questionNumber < questionSource.length -1) {
    showQuestion(questionNumber +1);
} else {
    gameOver();
}
questionCount++;
}
function gameOver(){
    pageQuestions.style.display = "none";
    padeSubmit.style.display = "block";
    scoreFinal.textContent = "Your Score:" + totalScore;
    timeLeft.style.display = "none";
}
/*
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score 
save initals and scores, store scores into local storage, and show high scores
*/

/* Add Event Listeners */

startBtn.addEventListener("click", startQuiz);

reactButtons.forEach(function(click){
    click.addEventListener("click", checkAnswer);
});