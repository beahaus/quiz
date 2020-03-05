// variable declarations
var beginningCard = document.getElementById("beginning-card");

var startButton = document.getElementById("start-button");

var timer = document.getElementsByClassName("timer");
var timerText = document.getElementById("timer-text");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");

var quizCard = document.getElementById("quiz-card");
var questionNumber = document.getElementById("question-number");
var questionContent = document.getElementById("question-content");

var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");

// question contents
var questionContents = { 
    question1: {
        content: "Question 1 Content",
        correctAnswer: "correct",
        wrongAnswers: ["wrong1", "wrong2", "wrong3"]
    },
    question2: {
        content: "Question 2 Content",
        correctAnswer: "correct",
        wrongAnswers: ["wrong1", "wrong2", "wrong3"]
    },
    question3: {
        content: "Question 3 Content",
        correctAnswer: "correct",
        wrongAnswers: ["wrong1", "wrong2", "wrong3"]
    },
    question4: {
        content: "Question 4 Content",
        correctAnswer: "correct",
        wrongAnswers: ["wrong1", "wrong2", "wrong3"]
    },
    question5: {
        content: "Question 5 Content",
        correctAnswer: "correct",
        wrongAnswers: ["wrong1", "wrong2", "wrong3"]
    },

};
// question contents 

var scoreTotal = document.getElementById("score-total");

var endingCard = document.getElementById("ending-card");
var scoreCard = document.getElementById("score-card");
var highScoresList = document.getElementsByClassName("high-scores-list");
var recordButton = document.getElementById("record-button");
var restartButton = document.getElementById("restart-button");


var timer;
var score = 0;
var totalSeconds = 180;
var secondsElapsed = 0;

var initialsInput = [];
var quizScores = [];
// variable declarations

// timer functions
function getFormattedMinutes() { 
  var secondsLeft = totalSeconds - secondsElapsed;
  var minutesLeft = Math.floor(secondsLeft / 60);
  var formattedMinutes;{
    formattedMinutes = "0" + minutesLeft;
  } 
  return formattedMinutes;
}
function getFormattedSeconds() {
  var secondsLeft = (totalSeconds - secondsElapsed) % 60;
  var formattedSeconds;
  if (secondsLeft < 10) {
    formattedSeconds = "0" + secondsLeft;
  } else {
    formattedSeconds = secondsLeft;
  }
  return formattedSeconds;
}

function renderTime() {
    timerText.textContent = "Time Remaining: " + getFormattedMinutes() + " : " + getFormattedSeconds();
}
     
function stopTimer() {
    secondsElapsed = 0;
    renderTime(); 
    // answeredQ5();
  }

function startTimer() {
  secondsElapsed = 0;
  if (totalSeconds > 0) {    
      timer = setInterval(function() {
        secondsElapsed++;
        renderTime();
      }, 1000);
      if (secondsElapsed >= totalSeconds) {
        stopTimer();
        alert("Time is up!");
        answeredQ5();
      }
}
  renderTime();
}
// timer functions 

// start button event listener
startButton.addEventListener("click", startQuiz)
// start button event listener

// hide beginning card, show question 1 content and start timer
function startQuiz () {
    startTimer();
    beginningCard.style.display = "none";
    quizCard.style.display = "block";
    score = 0;
    questionNumber.textContent = "Question 1 of 5";
    questionContent.textContent = questionContents.question1.content;
    option1.textContent = questionContents.question1.wrongAnswers[1];
    option2.textContent = questionContents.question1.wrongAnswers[2];
    option3.textContent = questionContents.question1.correctAnswer;
    option4.textContent = questionContents.question1.wrongAnswers[0];

    option3.onclick = function () {
        score += 20;
        answeredQ1();
    }
    option1.onclick = function () {
        secondsElapsed= secondsElapsed+30;
        answeredQ1();
    }
    option2.onclick = function () {
        secondsElapsed= secondsElapsed+30;
        answeredQ1(); 
    }
    option4.onclick = function () {
        secondsElapsed= secondsElapsed+30;
        answeredQ1();
    }
}
// hide beginning card, show question 1 content and start timer

// show question 2 content after question 1 is answered
function answeredQ1 () {
    renderTime();
    questionNumber.textContent = "Question 2 of 5";
    questionContent.textContent = questionContents.question2.content;
    option1.textContent = questionContents.question2.correctAnswer;
    option2.textContent = questionContents.question2.wrongAnswers[2];
    option3.textContent = questionContents.question2.wrongAnswers[1];
    option4.textContent = questionContents.question2.wrongAnswers[0];

    option1.onclick = function () {
        score += 20;
        answeredQ2();
    }
    option2.onclick = function () {
        secondsElapsed= secondsElapsed+30;
        answeredQ2();
    }
    option3.onclick = function () {
        secondsElapsed= secondsElapsed+30;
        answeredQ2(); 
    }
    option4.onclick = function () {
        secondsElapsed= secondsElapsed+30;
        answeredQ2();
    }
    
}
// show question 2 content after question 1 is answered

// show question 3 content after question 2 is answered
function answeredQ2 () {
    questionNumber.textContent = "Question 3 of 5";
    questionContent.textContent = questionContents.question3.content;
    option1.textContent = questionContents.question3.wrongAnswers[1];
    option2.textContent = questionContents.question3.wrongAnswers[2];
    option3.textContent = questionContents.question3.correctAnswer;
    option4.textContent = questionContents.question3.wrongAnswers[0];

    option3.onclick = function () {
        score += 20;
        answeredQ3();
    }
    option1.onclick = function () {
        secondsElapsed= secondsElapsed+30;
        answeredQ3();
    }
    option2.onclick = function () {
        secondsElapsed= secondsElapsed+30;
        answeredQ3(); 
    }
    option4.onclick = function () {
        secondsElapsed= secondsElapsed+30;
        answeredQ3();
    }
}
// show question 3 content after question 2 is answered

// show question 4 content after question 3 is answered
function answeredQ3 () {
    questionNumber.textContent = "Question 4 of 5";
    questionContent.textContent = questionContents.question4.content;
    option1.textContent = questionContents.question4.wrongAnswers[1];
    option2.textContent = questionContents.question4.wrongAnswers[2];
    option3.textContent = questionContents.question4.correctAnswer;
    option4.textContent = questionContents.question4.wrongAnswers[0];
    
    option3.onclick = function () {
        score += 20;
        answeredQ4();
    }
    option1.onclick = function () {
        secondsElapsed= secondsElapsed+30;
        answeredQ4();
    }
    option2.onclick = function () {
        secondsElapsed= secondsElapsed+30;
        answeredQ4(); 
    }
    option4.onclick = function () {
        secondsElapsed= secondsElapsed+30;
        answeredQ4();
    }
}
// show question 4 content after question 3 is answered

// show question 5 content after question 4 is answered
function answeredQ4 () {
    questionNumber.textContent = "Question 5 of 5";
    questionContent.textContent = questionContents.question5.content;
    option1.textContent = questionContents.question5.wrongAnswers[0];
    option2.textContent = questionContents.question5.wrongAnswers[2];
    option3.textContent = questionContents.question5.wrongAnswers[1];
    option4.textContent = questionContents.question5.correctAnswer;
   
    option4.onclick = function () {
        score += 20;
        answeredQ5();
    }
    option1.onclick = function () {
        answeredQ5();
    }
    option2.onclick = function () {
        answeredQ5(); 
    }
    option3.onclick = function () {
        answeredQ5();
    }
}
// show question 5 content after question 4 is answered

// store initials and score in localStorage and stringify

// store initials and score in localStorage and stringify

// get stored initials and score from localStorage

// get stored initials and score from localStorage

// show card for recording intials and show score after question 5 is answered
function answeredQ5 () {
    quizCard.style.display = "none";
    endingCard.style.display = "block";
    scoreTotal.textContent = "Your final score is " + score + " out of 100";
    finalScore = score;
    stopTimer();
}
// show card for recording initals and show score after question 5 is answered

// show recorded high scores
recordButton.onclick = function () { 

    var initials = document.querySelector("#initials").value;
    var pushInitials = initialsInput.push(initials);
    var pushScore = quizScores.push(finalScore);
    endingCard.style.display = "none";
    scoreCard.style.display = "block"; 
    function storeInitials() {
        localStorage.setItem("Initials Input", JSON.stringify(pushInitials));
    }
    function storeScore() {
        localStorage.setItem("Quiz Scores", JSON.stringify(pushScore));
    }
    storeInitials();
    storeScore();     
    }
// show recorded high scores

// show beginning card to restart quiz
restartButton.onclick = function (){
    for (i=0; i < initialsInput; i ++) {
        
    }
    scoreCard.style.display = "none";
    beginningCard.style.display = "block";
}
// show beginning card to restart quiz
