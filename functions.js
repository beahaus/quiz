
// button event listeners
startButton.addEventListener("click", startQuiz);
// button event listeners

// hide beginning card, show quiz card, question 1 content and start timer
function startQuiz () {
    beginningCard.style.display = "none";
    quizCard.style.display = "block";
    questionNumber.textContent = "Question 1 of 5";
    questionContent.textContent = question1content;
    option1.textContent = question1answers[1];
    option2.textContent = question1answers[3];
    option3.textContent = question1answers[0];
    option4.textContent = question1answers[2];
    if (option3.addEventListener("click", answeredQ1)) {

    }
    else if (option1.addEventListener("click", answeredQ1) || option2.addEventListener("click", answeredQ1) || option4.addEventListener("click", answeredQ1)) {

    } 
}
// hide beginning card, show quiz card, question 1 content and start timer

// change quiz card content after question 1 is answered
function answeredQ1 () {
    questionNumber.textContent = "Question 2 of 5";
    questionContent.textContent = question2content;
    option1.textContent = question2answers[0];
    option2.textContent = question2answers[3];
    option3.textContent = question2answers[2];
    option4.textContent = question2answers[1];
    if (option1.addEventListener("click", answeredQ2)){

    }
    else if (option2.addEventListener("click", answeredQ2) || option3.addEventListener("click", answeredQ2) || option4.addEventListener("click", answeredQ2)) {

    }
}
// change quiz card content after question 1 is answered

// change quiz card content after question 2 is answered
function answeredQ2 () {
    questionNumber.textContent = "Question 3 of 5";
    questionContent.textContent = question3content;
    option1.textContent = question3answers[3];
    option2.textContent = question3answers[1];
    option3.textContent = question3answers[0];
    option4.textContent = question3answers[2];
    if (option3.addEventListener("click", answeredQ3)) {

    }
    else if (option1.addEventListener("click", answeredQ3) || option2.addEventListener("click", answeredQ3) || option4.addEventListener("click", answeredQ3)) {

    }
}
// change quiz card content after question 2 is answered

// change quiz card content after question 3 is answered
function answeredQ3 () {
    questionNumber.textContent = "Question 4 of 5";
    questionContent.textContent = question4content;
    option1.textContent = question4answers[1];
    option2.textContent = question4answers[2];
    option3.textContent = question4answers[0];
    option4.textContent = question4answers[3];
    if (option3.addEventListener("click", answeredQ4)) {

    }
    else if (option1.addEventListener("click", answeredQ4) || option2.addEventListener("click", answeredQ4) || option4.addEventListener("click", answeredQ4)) {

    }
}
// change quiz card content after question 3 is answered

// change quiz card content after question 4 is answered
function answeredQ4 () {
    questionNumber.textContent = "Question 5 of 5";
    questionContent.textContent = question5content;
    option1.textContent = question5answers[3];
    option2.textContent = question5answers[2];
    option3.textContent = question5answers[1];
    option4.textContent = question5answers[0];
    if (option4.addEventListener("click", answeredQ5)) {
        score++;
    }
    else if (option1.addEventListener("click", answeredQ5) || option2.addEventListener("click", answeredQ5) || option3.addEventListener("click", answeredQ5)) {

    }
    
}
// change quiz card content after question 4 is answered

// show card for recording intials and show score after question 5 is answered
function answeredQ5 () {
    quizCard.style.display = "none";
    endingCard.style.display = "block";
    scoreTotal.textContent = "Your final score is " + score + " out of 100";
}
// show card for recording initals and show score after question 5 is answered