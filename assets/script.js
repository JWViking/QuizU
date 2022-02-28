var startButtonEl = document.getElementById('start');
var scoreEl = document.getElementById('score-id');
var question = document.getElementById("question-id");
var timerEl = document.getElementById("timer-display");
var q1b1 = document.getElementById("button1");
var q1b2 = document.getElementById("button2");
var q1b3 = document.getElementById("button3");
var q1b4 = document.getElementById("button4");
var gradedQuestion = document.getElementById("graded-question");

var questionNum = 0;
var time = 60;
var score = 0;

// var user = [
//     {
//         name: userName,
//         score: userScore,
//     }
// ]

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
        button4:"Code that loops repeatedly while a codition is true.",
        answer:"Code that loops repeatedly while a codition is true.",
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
        button4:"A barbie doll.",
        answer:"Data that can store more than one value.",
    },
]
// display beginning score of 0
scoreEl.textContent=score;

//User clicks on the start button to start the quiz. There is an even tlistener that captures
//the click. This starts a function that makes a timer countdown from 60 to zero. Question 
//1 is also displayed from the click. 
startButtonEl.addEventListener("click", startHandler);

//the start time of the timer is 60 seconds. If the time displayed is between 11 and 61, then the 
//time is displayed with just the number. If the time is between 11 and 0, then the time adds the "seconds left"
//words to the time number in red. If the time === 0, then the time is displayed as "time is up".
function startHandler() {

    displayQuestion();

    document.querySelector(".quiz").style.display="flex";

    var timer = setInterval(function() {
        if (time >10 && time<61) {
            timerEl.textContent = time;
            time --;
        }
        else if (time >0 && time <11) {
            timerEl.textContent = time + '  Seconds Left';
            time --;
            timerEl.classList.add("hurry-up");
            
        }
        else {
            time = "Time Is Up";
            timerEl.textContent = time;
            clearInterval(timer);

            var title = document.getElementById("quiz-title-display");
            title.textContent = "Game Over"
            title.classList.add("hurry-up");
            endGame(evalAnswer);
        }
    }, 1000);  

};

//the time is organized in an array. Question Num will determine which question
//and answers show in the quiz section. 
//When the start button is clicked, the question Num = 0. 
//When an answer button is clicked, if it equals the questionArr[questionNum].answer, then the
//score will be score = score + 1
//Else, (if clicked button doesn't equal questionArr[questionNum].answer) then time = time - 10.
//Then make questionNum = 

function displayQuestion () {
    question.innerHTML = questionArr[questionNum].question;
    q1b1.innerHTML = questionArr[questionNum].button1;
    q1b2.innerHTML = questionArr[questionNum].button2;
    q1b3.innerHTML = questionArr[questionNum].button3;
    q1b4.innerHTML = questionArr[questionNum].button4;

};

//evaluate answer function
//compare questionNum to answer
//return value of true or false
//if true add points to score
//else subtract time from timer

var evalAnswer = function() {
    console.log(this.textContent);
    
    document.querySelector(".score").style.display="flex";

    if (questionNum < questionArr.length-1) {
        console.log(questionNum);
        if (this.textContent === questionArr[questionNum].answer) {
            score = (score + 10);
            scoreEl.textContent = score;

            questionNum = (questionNum + 1);
            gradedQuestion.textContent = "Correct!"
        }
        else {
            time = (time - 10);
            questionNum = (questionNum +1);
            gradedQuestion.classList.add("hurry-up");
            gradedQuestion.textContent = "Wrong!"
        };
    };

    if (this.textContent === questionArr[questionNum].answer) {
        console.log(questionNum);
        score = (score + 10);
        scoreEl.textContent = score;
    } 
    else {
        time = (time - 10);
        gradedQuestion.classList.add("hurry-up");
    }
    displayQuestion();
};



//endgame function.
//change display of #quiz-display to hidden
//change display of #end-modal to flex
//in a function passing an argument of data, brought in by answerText,  

var endGame = function (answerText) {
    console.log("endGame");
    console.log(answerText);
    document.querySelector("#quiz-display").style.display="none";
    document.querySelector("#end-modal").style.display="flex";
    //document.querySelector("#high-score").style.display="flex";
    var lastQuestion = document.getElementById("last-graded-id");
    
    if (data = questionArr[questionNum].answer){
        lastQuestion.textContent = "Correct!";
    }
    else{
        lastQuestion.textContent = "Wrong!"
    }


};

 //if user clicks on a button to answer the question
 q1b1.addEventListener("click", evalAnswer);
 q1b2.addEventListener("click", evalAnswer);
 q1b3.addEventListener("click", evalAnswer);
 q1b4.addEventListener("click", evalAnswer);

//after question 4,
//add to high score to array 
//(localStorate.getItem) as an array
//save to localStorage.setItem

//json parse and stringify 