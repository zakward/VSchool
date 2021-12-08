const form = document["myForm"]
constsubBTN = document.getElementById("addBTN")
//ADD
addBTN.addEventListener("click", function(e) {
    e.preventDefault()
    let addNum1 = form.addNum1.value
    let addNum2 = form.addNum2.value
    let addSum = (+addNum1 + +addNum2)
    console.log(addSum)
    const addDiv = document.getElementById("add")
    const addSpan = document.createElement("span")
    addDiv.appendChild(addSpan)
    addSpan.textContent = addSum  
    addSpan.style.fontSize = "22px"
    addSpan.style.marginLeft = "5px"
})

//SUBTRACT
subBTN.addEventListener("click", function(e) {
    e.preventDefault()
    let subNum1 = form.subNum1.value
    let subNum2 = form.subNum2.value
    let subSum = (+subNum1 - +subNum2)
    console.log(subSum)
    const subDiv = document.getElementById("sub")
    const subSpan = document.createElement("span")
    subDiv.appendChild(subSpan)
    subSpan.textContent = subSum 
    subSpan.style.fontSize = "22px"
    subSpan.style.marginLeft = "5px"
})

//MULTIPLY
multBTN.addEventListener("click", function(e) {
    e.preventDefault()
    let multNum1 = form.multNum1.value
    let multNum2 = form.multNum2.value
    let multSum = (+multNum1 * +multNum2)
    console.log(multSum)
    const multDiv = document.getElementById("mult")
    const multSpan = document.createElement("span")
    multDiv.appendChild(multSpan)
    multSpan.textContent = multSum 
    multSpan.style.fontSize = "22px"
    multSpan.style.marginLeft = "5px"  
})