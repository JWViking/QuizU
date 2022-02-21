var startButtonEl = document.getElementById('start');
var scoreEl = document.getElementById('score-id');

startButtonEl.addEventListener("click", startHandler);

function startHandler() {
    var startTime = 60;

    var timer = setInterval(function() {
        if (startTime >10 && startTime<61) {
            scoreEl.textContent = startTime;
            startTime --;
            console.log(startTime);
        }
        else if (startTime >0 && startTime <11) {
            scoreEl.textContent = startTime + 'Seconds Left';
            let scoreEl = ".hurry-up";
            
        }
        else {
            startTime = "Time Is Out"
        }
    })  
};






// //setInterval(quizTimer, 1000);

// var i= 60;
// var startButton = getElementById("start");
// startButton.addEventListener("click", startClickHandler);

// // if click on start, start timer.

// function startClickHandler () {
//     //If  i is 1-60 i--. display score every second.
//     // if(i=60, i>0, i--) {
//     //     setInterval(function() {
//     //         getElementById("score-id").innerHTML = i;
//     //         console.log(i);
//     //     }, 1000);

//     }
// }

//Question 1:


//Question 2:

//Question 3:

//Queestion 4: