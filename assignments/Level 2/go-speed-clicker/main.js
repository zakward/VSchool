let counter = 0;
let output = document.getElementById("output")
const btn = document.getElementById("button")
const resetBtn = document.getElementById("resetBtn")
output.textContent = sessionStorage.getItem("clickCount")
let timerRunning = true;


function clickCountFunc() {
    let timerRunning = true;
            if(timerRunning) {
                if(sessionStorage.getItem("clickCount") != 0) {
                    counter = sessionStorage.getItem("clickCount");    
                        }
            counter ++;
            sessionStorage.setItem("clickCount", counter);
            let output = document.getElementById("output");
            output.textContent = counter;
    } else {
        console.log("TIMES UP!!!")
    }
}

function resetPage() {
    sessionStorage.setItem("clickCount", 0);
    counter = 0;
    output.textContent = counter;
    timerRunning = true;

}

setTimeout(function () {
    console.log('Times Up!');
    timerRunning = false;
}, 10000);

btn.addEventListener("click", clickCountFunc) 

resetBtn.addEventListener("click", resetPage)

//only issue now is when reset btn is clicked it does not reset the timer.  refresh btn does