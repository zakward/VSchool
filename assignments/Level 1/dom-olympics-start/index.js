var javaHeader = document.getElementById("header")
var newH1 = document.createElement("h1")
newH1.textContent = "JavaScript Made This!!"
javaHeader.append(newH1)


var myName = document.createElement("span")
myName.textContent = "[Zak Ward]"
javaHeader.append(myName)

var newH2 = document.createElement("span")
newH2.textContent = " wrote the JavaScript"
javaHeader.append(newH2)

myName.style.color = "#cd7f32"
myName.style.fontWeight = "bold"

newH2.style.fontWeight = "bold"

javaHeader.style.marginBottom = "20px"

var leftFirst = document.getElementById("left-first")
leftFirst.textContent = "Luke...you do not yet realize your importance"

var rightFirst = document.getElementById("right-first")
rightFirst.textContent = "I'll never join you!"

var leftSecond = document.getElementById("left-second")
leftSecond.textContent = "Obi-Wan never told you what happened to your father!"

var rightSecond = document.getElementById("right-second")
rightSecond.textContent = "He told me you killed him!!"



// TRY TO SET A GLOBAL THEME 1 and THEME 2 Style setting
// var themeOne = messageLeft.style.backgroundColor = "burlywood"
//     messageRight.style.backgroundColor = "lightblue"
//     messageLeft.style.color = "black"

// var themeTwo = messageLeft.style.backgroundColor = "lightcoral"
// messageRight.style.backgroundColor = "black"
// messageLeft.style.color = "black"
// messageRight.style.color = "white"


// CLEAR BUTTON
var clearButton = document.getElementById("clear-button")
clearButton.addEventListener("click", function() {  
    var messages = document.getElementById("messages")
        console.log("clear test")
        messages.textContent = ""
}
)
/* NEW MESSAGE */
const sendBtn = document.getElementById("send-btn")

sendBtn.addEventListener("click", () => {
    
    const newMessageDiv = document.createElement("div");
    const messageHeader = document.getElementById("messages");
    const value = document.getElementById("input").value;
    newMessageDiv.textContent = value;
    messageHeader.appendChild(newMessageDiv)
    newMessageDiv.className = "message right"
}
)


var dropDown = document.getElementById("theme-drop-down")

dropDown.addEventListener("change", function(e) {
var messageLeft  = document.querySelectorAll(".message.left")
var messageRight = document.querySelectorAll(".message.right")

var value = e.target.value
        if(value === "theme-one") {
        console.log("test")
        messageLeft.forEach(element => {
            element.style.backgroundColor = "burlywood";
            element.style.color = "black";
        });
        messageRight.forEach(element => {
            element.style.backgroundColor = "lightblue";
            element.style.color = "black";
        });
      
 }   else if(value === "theme-two") {
    messageLeft.forEach(element => {
        element.style.backgroundColor = "lightcoral";
        element.style.color = "black";
    });
    messageRight.forEach(element => {
        element.style.backgroundColor = "black";
        element.style.color = "white";
    });

        }
    }
)


