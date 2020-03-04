
var timer;
var score = 0;
// start button event listener
startButton.addEventListener("click", startQuiz);
// start button event listener
// event listener that includes interval and startquiz function

    


// hide beginning card, show question 1 content and start timer
function startQuiz () {
    timer = setInterval(startQuiz, 50000);
    beginningCard.style.display = "none";
    quizCard.style.display = "block";
    timerText.textContent = "Timer Remaining: ";
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
        timer = -30000;
        answeredQ1();
    }
    option2.onclick = function () {
        timer = -30000;
        answeredQ1(); 
    }
    option4.onclick = function () {
        timer = -30000;
        answeredQ1();
    }
}
// hide beginning card, show question 1 content and start timer

// show question 2 content after question 1 is answered
function answeredQ1 () {
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
        timer = -30000;
        answeredQ2();
    }
    option3.onclick = function () {
        timer = -30000;
        answeredQ2(); 
    }
    option4.onclick = function () {
        timer = -30000;
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
        timer = -30000;
        answeredQ3();
    }
    option2.onclick = function () {
        timer = -30000;
        answeredQ3(); 
    }
    option4.onclick = function () {
        timer = -30000;
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
        timer = -30000;
        answeredQ4();
    }
    option2.onclick = function () {
        timer = -30000;
        answeredQ4(); 
    }
    option4.onclick = function () {
        timer = -30000;
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

// show card for recording intials and show score after question 5 is answered
function answeredQ5 () {
    quizCard.style.display = "none";
    endingCard.style.display = "block";
    scoreTotal.textContent = "Your final score is " + score + " out of 100";

}
// show card for recording initals and show score after question 5 is answered

    // localStorage.setItem("initials", JSON.stringify(initials));
    // localStorage.setItem("score", JSON.stringify(score));

// show recorded high scores
recordButton.onclick = function (event) {
    endingCard.style.display = "none";
    scoreCard.style.display = "block";
    }

// show recorded high scores

// show beginning card to restart quiz
restartButton.onclick = function (){
    scoreCard.style.display = "none";
    beginningCard.style.display = "block";
    // highScoresList.append("initials " + score);
}
