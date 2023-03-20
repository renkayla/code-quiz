

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

/* Define Variables 
Assignment code to section 
Questions are defined in Objects
Other variables are set */

var timeLeft = document.getElementById("timer");

var secondsLeft = 100;

/* Functions :
WHEN I click the start button
THEN a timer starts and I am presented with a question
(setInterval() Method)*/
function countdown() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeLeft.textContent = "Time Left: " + secondsLeft + " s"; 
         if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
         }
    }  )
}
function sendMessage() {
    timeLeft.textContent = "Out of time!"
}
countdown();
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