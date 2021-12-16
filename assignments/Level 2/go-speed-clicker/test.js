let counter = 0;
let output = document.getElementById("output")
const btn = document.getElementById("button")
output.textContent = localStorage.getItem("clickCount")
let timerRunning = true;


function clickCountFunc() {
    if(timerRunning) {
            if(localStorage.getItem("clickCount") != 0) {
            counter = localStorage.getItem("clickCount");  
            } 
        counter ++;
        localStorage.setItem("clickCount", counter);
        let output = document.getElementById("output");
        output.textContent = counter
    }   else {
        console.log("TIMES UP!")
    }
}
btn.addEventListener("click", clickCountFunc) 
