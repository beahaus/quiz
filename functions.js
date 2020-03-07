// variable declarations
var beginningCard = document.getElementById("beginning-card");
var restartButton = document.getElementById("restart-button");
var startButton = document.getElementById("start-button");

var timer = document.getElementsByClassName("timer");
var timerText = document.getElementById("timer-text");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");

var quizCard = document.getElementById("quiz-card");

var questionNumber = document.getElementById("question-number");
var questionContent = document.getElementById("question-content");

var endingCard = document.getElementById("ending-card");
var scoreCard = document.getElementById("score-card");

var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");

// question contents
var questionContents = { 
    question1: {
        content: "Which of the following tags do you use to insert Javascript into an HTML page?",
        correctAnswer: "<script>",
        wrongAnswers: ["<style>", "<javascript>", "<script=javascript>"]
    },
    question2: {
        content: "What language defines the behavior of a web page?",
        correctAnswer: "Javascript",
        wrongAnswers: ["HTML", "CSS", "XHTML"]
    },
    question3: {
        content: "Does Javascript ignore extra spaces?",
        correctAnswer: "True",
        wrongAnswers: ["False"]
    },
    question4: {
        content: "Which of the below is used to insert special characters into Javascript?",
        correctAnswer: "\\",
        wrongAnswers: ["&", "$", "!"]
    },
    question5: {
        content: "Is Javascript and Object Oriented Language?",
        correctAnswer: "True",
        wrongAnswers: ["False"]
    },

};
// question contents 

var scoreTotal = document.getElementById("score-total");

var recordButton = document.getElementById("record-button");

var timer;
var score = 0;
var totalSeconds = 180;
var secondsElapsed = 0;

var initialsInput = [];
var quizScores = [];
// variable declarations

// attempt to remove prior users initials
// function clearInitialsInput() {
//     var clearInitials = document.querySelector("#initials");
//     clearInitials.textContent = "";
// }
// attempt to remove prior users initials

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
    if (secondsElapsed >= totalSeconds) {
        clearInterval(timer);
        alert("Time is up!");
        answeredQ5();
    }
}
     
function stopTimer() {
    secondsElapsed = 0;
    renderTime(); 
  }

function startTimer() {
  
  if (totalSeconds > 0) { 
    secondsElapsed = 0;   
      timer = setInterval(function() {
        secondsElapsed++;
        renderTime();
      }, 1000);
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
    //clearInitialsInput();
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
    option1.style.display = "none";
    option2.style.display = "none";
    questionContent.textContent = questionContents.question3.content;
    option3.textContent = questionContents.question3.correctAnswer;
    option4.textContent = questionContents.question3.wrongAnswers[0];

    option3.onclick = function () {
        score += 20;
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
    option1.style.display = "block";
    option2.style.display = "block";
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
    option3.style.display = "none";
    option4.style.display = "none";
    questionContent.textContent = questionContents.question5.content;
    option1.textContent = questionContents.question5.correctAnswer;
    option2.textContent = questionContents.question5.wrongAnswers[0];
   
    option1.onclick = function () {
        score += 20;
        answeredQ5();
    }
    option2.onclick = function () {
        answeredQ5();
    }
}
// show question 5 content after question 4 is answered

// show card for recording intials and show score after question 5 is answered
function answeredQ5 () {
    option3.style.display = "block";
    option4.style.display = "block";
    quizCard.style.display = "none";
    endingCard.style.display = "block";
    scoreTotal.textContent = "Your final score is " + score + " out of 100";
    score;
}
// show card for recording initals and show score after question 5 is answered

// show recorded scores
recordButton.onclick = function() {

    // push initials input and scores to localStorage
    var initials = document.querySelector("#initials").value.toUpperCase();
    var pushInitials = initialsInput.push(initials);
    var pushScore = quizScores.push(score);

    function storeInitials() {
        localStorage.setItem("Initials Input", JSON.stringify(pushInitials));
    }
    function storeScore() {
        localStorage.setItem("Quiz Scores", JSON.stringify(pushScore));
    }
    // push initials input and scores to localStorage

    storeInitials();
    storeScore();
    endingCard.style.display = "none";
    scoreCard.style.display = "block";

    // get stored initials and score from localStorage and create li for each item
    function scoresLists() {
        

        var highInitialsList = document.getElementById("high-scores-list");
        var initialsPop = initialsInput.pop();
        var scorePop = quizScores.pop();
        var pop = initialsPop + " | " + scorePop;

        //for (var x = 0; x < initialsInput.length; x++) {  

            var li = document.createElement("li");
            li.innerHTML = pop;
            //li.append(initialsInput);
            //li.append(quizScores);
            highInitialsList.append(li);
        //}
    }
    scoresLists();
}

// show beginning card to restart quiz
restartButton.onclick = function () {
    localStorage.removeItem(score);
    scoreCard.style.display = "none";
    beginningCard.style.display = "block";
    
}
// show beginning card to restart quiz
