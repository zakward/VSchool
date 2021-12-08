var box = document.getElementById("box")

// console.log("box")

box.addEventListener("mouseover", function() {
    box.style.backgroundColor = "blue"  
    }
)

box.addEventListener("mouseout", function() {
    box.style.backgroundColor = "white"
    }
)

box.addEventListener("mousedown", function() {
    box.style.backgroundColor = "red"
    }
)

box.addEventListener("mouseup", function() {
    box.style.backgroundColor = "yellow"
    }
)

box.addEventListener("dblclick", function() {
    box.style.backgroundColor = "green"
    }
)

var html = document.getElementsByClassName("html")

document.addEventListener("wheel", function() {
    box.style.backgroundColor = "orange"
    }
)

document.addEventListener("keydown", event => {
    if (event.keyCode=== 66) {
        box.style.backgroundColor = "blue"
        }   else if(event.keyCode === 87) {
            box.style.backgroundColor = "white"
        }   else if(event.keyCode === 82) {
            box.style.backgroundColor = "red"
        }   else if(event.keyCode === 89) {
            box.style.backgroundColor = "yellow"
        }   else if(event.keyCode === 71) {
            box.style.backgroundColor = "green"
        }   else if(event.keyCode === 79) {
            box.style.backgroundColor = "orange"
        }   
    }    
)    