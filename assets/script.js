var startButtonEl = document.getElementById('start');
var scoreEl = document.getElementById('score-id');
var question = document.getElementById("question-id");
var q1b1 = document.getElementById("button1");
var q1b2 = document.getElementById("button2");
var q1b3 = document.getElementById("button3");
var q1b4 = document.getElementById("button4");

var questionNum = 0;
var score = 0;

var questionArr = [
    {
        question: "What is a switch statement?",
        button1:"A code statement that allows us to change our mind.",
        button2:"A way to check a code value against multiple possibilities.",
        button3:"A variable that is declared inside of a function.",
        button4:"A way to pass data into an argument.",
        answer:"A way to check a code value against multiple possibilities.",
    },

    {
        question: "What is a 'while loop'?",
        button1:"Something that repeats in a loop if something is true.",
        button2:"A conditional statement that checks for bugs.",
        button3:"There is no such thing as a 'while loop'.",
        button4:"Code that loops repreatedly while a codition is true.",
        answer:"Code that loops repeatedly while a condition is true.",
    },

    {
        question: "var fight = function() {" + "<br>" +
                     "window.alert('Welcome to Robot Gladiators!);" + "<br>" +
                    "};",
        button1: "The code above is a function declaration.",
        button2:"The code above is a function expression.",
        button3:"The code above is a variable.",
        button4:"The code above is a boolean data type.",
        answer:"The code above is a function expression.",
    },

    {
        question: "What is an object?",
        button1:"Data that can store more than one value.",
        button2:"A subroutine that can be called.",
        button3:"A statement with a command.",
        answer:"Data tjat can store more than one value.",
    },
]
//User clicks on the start button to start the quiz. There is an even tlistener that captures
//the click. This starts a function that makes a timer countdown from 60 to zero. Question 
//1 is also displayed from the click. 

startButtonEl.addEventListener("click", startHandler);

//the start time of the timer is 60 seconds. If the time displayed is between 11 and 61, then the 
//time is displayed with just the number. If the time is between 11 and 0, then the time adds the "seconds left"
//words to the time number in red. If the time === 0, then the time is displayed as "time is up".
function startHandler() {
    var time = 60;

    displayQuestion();

    document.querySelector(".quiz").style.display="flex";

    var timer = setInterval(function() {
        if (time >10 && time<61) {
            scoreEl.textContent = time;
            time --;
        }
        else if (time >0 && time <11) {
            scoreEl.textContent = time + '  Seconds Left';
            time --;
            scoreEl.classList.add(".hurry-up");
            
        }
        else {
            time = "Time Is Up";
            scoreEl.textContent = time;
            clearInterval(timer);
        }
    }, 1000);  
};

//the time is organized in an array. Question Num will determine which question
//and answers show in the quiz section. 
//When the start button is clicked, the question Num = 0. 
//When an answer button is clicked, if it equals the questionArr[questionNum].answer, then the
//score will be score = score + 1
//Else, (if clicked button doesn't equal questionArr[questionNum].answer) then time = time - 10.
//Then run the display question function again using a for loop.

function displayQuestion () {
    question.innerHTML = questionArr[questionNum].question;
    q1b1.innerHTML = questionArr[questionNum].button1;
    q1b2.innerHTML = questionArr[questionNum].button2;
    q1b3.innerHTML = questionArr[questionNum].button3;
    q1b4.innerHTML = questionArr[questionNum].button4;

    for (i=0; i< questionArr.length; i++) {
        questionNum = (questionNum +1);

        console.log(questionNum);

        //if user clicks on a button to answer the question
        button.addEventListener("click", evalAnswer);


        evalAnswer();
    }
};

//evaluate answer function

var evalAnswer = function(event) {

    if (eventTarget === correctAnswer) {
        scoreEl.textContent = (score + 10);
    }
    else {
        time = (time - 10);
    }
}
//compare questionNum to answer
//return value of true or false
//if true add points to score
//else subtract time from timer

//event listener on each button that run the evaluate answer function

//after question 4,
//add to high score to array 
//(localStorate.getItem) as an array
//save to localStorage.setItem

//json parse and stringify 