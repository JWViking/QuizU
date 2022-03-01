var startButtonEl = document.getElementById('start');
var scoreEl = document.getElementById('score-id');
var question = document.getElementById("question-id");
var timerEl = document.getElementById("timer-display");
var q1b1 = document.getElementById("button1");
var q1b2 = document.getElementById("button2");
var q1b3 = document.getElementById("button3");
var q1b4 = document.getElementById("button4");
var gradedQuestion = document.getElementById("graded-question");
var saveScoreButton = document.getElementById("save-score");
var title = document.getElementById("quiz-title-display");

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

//startHandler is called when the start button is clicked
function startHandler() {
    
    //call displayQuestion to set text for first question
    displayQuestion();

    //display start score of 0
    scoreEl.textContent=score;

    //change display of quiz from none to flex.
    document.querySelector(".quiz").style.display="flex";

    //start a countdown timer that starts at 60
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
        }
    }, 1000);  

};

//controls which object is being displayed from the array for each question
function displayQuestion () {
    question.innerHTML = questionArr[questionNum].question;
    q1b1.innerHTML = questionArr[questionNum].button1;
    q1b2.innerHTML = questionArr[questionNum].button2;
    q1b3.innerHTML = questionArr[questionNum].button3;
    q1b4.innerHTML = questionArr[questionNum].button4;

};

//When an answer button is clicked, this function is called.
//??? Do I need to put a placeholder into the function to tell it data is coming?
var evalAnswer = function() {
    console.log(this.textContent);
    
    document.querySelector(".score").style.display="flex";

    if (questionNum <= 2) {
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
        displayQuestion();
        console.log(time);
        console.log ("score" + score);
    };

    var lastQuestion = document.getElementById("last-graded-question");

    if (questionNum === 3) {
        console.log(this.textContent);
        console.log(questionNum);
        if (this.textContent === questionArr[questionNum].answer) {
            score = (score + 10);
            scoreEl.textContent = score;
            lastQuestion.textContent = "Correct!";

            //title.textContent = "Game Over";
            //title.classList.add("hurry-up");
            //time = 0;
            questionNum = (questionNum +1);

        }
        else {
            time = (time - 10);
            lastQuestion.textContent = "Wrong!"
            lastQuestion.classList.add("hurry-up");
            //time = 0;
            questionNum = (questionNum +1);
        }
        console.log(time);
        console.log("score" + score);
        displayQuestion();
    }
    //displayQuestion();

    if (questionNum >= 4 || time === "Time Is Up") {
         endGame();
    }
};

//endgame function.
//change display of #quiz-display to hidden
//change display of #end-modal to flex
//in a function passing an argument of data, brought in by answerText,  

var endGame = function () {
    console.log("endGame");
    time = 0;
    document.querySelector("#quiz-display").style.display="none";
    document.querySelector("#end-modal").style.display="flex";
    document.getElementById("final-score").textContent = "Your final score is " + score + "!";


    //document.querySelector("#high-score").style.display="flex";
};

var newHighScore = function () {
    document.querySelector("#end-modal").style.display="none";
    document.querySelector("#high-score").style.display="flex";
    
    //localStorage.setItem
    //json stringify
    //localStorage.getItam
    //json parse
}

//var saveScoreButton = document.getElementById("save-score")

startButtonEl.addEventListener("click", startHandler);
q1b1.addEventListener("click", evalAnswer);
q1b2.addEventListener("click", evalAnswer);
q1b3.addEventListener("click", evalAnswer);
q1b4.addEventListener("click", evalAnswer);
saveScoreButton.addEventListener("click", newHighScore());