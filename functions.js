
var timer;
var score = 0;
var totalSeconds = 180;
var secondsElapsed = 0;
var initialsInput = [];
var finalScores = [];

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
    answeredQ5();
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
    questionNumber.textContent = "Question 1 of 5";
    questionContent.textContent = question1content;
    option1.textContent = question1answers[1];
    option2.textContent = question1answers[3];
    option3.textContent = question1answers[0];
    option4.textContent = question1answers[2];

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
    questionContent.textContent = question2content;
    option1.textContent = question2answers[0];
    option2.textContent = question2answers[3];
    option3.textContent = question2answers[2];
    option4.textContent = question2answers[1];

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
    questionContent.textContent = question3content;
    option1.textContent = question3answers[3];
    option2.textContent = question3answers[1];
    option3.textContent = question3answers[0];
    option4.textContent = question3answers[2];

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
    questionContent.textContent = question4content;
    option1.textContent = question4answers[1];
    option2.textContent = question4answers[2];
    option3.textContent = question4answers[0];
    option4.textContent = question4answers[3];
    
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
    questionContent.textContent = question5content;
    option1.textContent = question5answers[3];
    option2.textContent = question5answers[2];
    option3.textContent = question5answers[1];
    option4.textContent = question5answers[0];
   
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
function storeInitials() {
    localStorage.setItem("initials", JSON.stringify(initialsInput));
}
function storeScore() {
    localStorage.setItem("score", JSON.stringify(finalScores));
}
// store initials and score in localStorage and stringify

// get stored initials and score from localStorage and parse into object

// get stored initials and score from localStorage and parse into object

// show card for recording intials and show score after question 5 is answered
function answeredQ5 () {
    quizCard.style.display = "none";
    endingCard.style.display = "block";
    scoreTotal.textContent = "Your final score is " + score + " out of 100";
    stopTimer();
    
    // call functions to store initials and score
    storeInitials();
    storeScore();
}
// show card for recording initals and show score after question 5 is answered

// show recorded high scores
recordButton.onclick = function (event) { 
    endingCard.style.display = "none";
    scoreCard.style.display = "block";
    // render initials and scores in ul

    }
// show recorded high scores

// show beginning card to restart quiz
restartButton.onclick = function (){
    scoreCard.style.display = "none";
    beginningCard.style.display = "block";
}
// show beginning card to restart quiz
