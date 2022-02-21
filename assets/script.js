setInterval(quizTimer, 1000);

var i= 60;

var start = addEventListener("click", ".start-btn", startClickHandler);

// if click on start, start timer.

function startClickHandler () {
    //If  i is 1-60 i--. display score every second.
    if(i=60, i>0, i--);
        setInterval(function() {
            getElementById("score-id").innerHTML = i;
            console.log(i);
        }

    }, 1000);