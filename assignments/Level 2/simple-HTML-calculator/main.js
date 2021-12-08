const form = document["myForm"]
constsubBTN = document.getElementById("addBTN")
//ADD
addBTN.addEventListener("click", function(e) {
    e.preventDefault()
    let addNum1 = form.addNum1.value
    let addNum2 = form.addNum2.value
    let addSum = (+addNum1 + +addNum2)
    console.log(addSum)
    form.addOutput.textContent = addSum  
    form.addOutput.style.fontSize = "22px"
    form.addOutput.style.marginLeft = "5px"
})

//SUBTRACT
subBTN.addEventListener("click", function(e) {
    e.preventDefault()
    let subNum1 = form.subNum1.value
    let subNum2 = form.subNum2.value
    let subSum = (+subNum1 - +subNum2)
    console.log(subSum)
    form.subOutput.textContent = subSum
    form.subOutput.textContent = subSum 
    form.subOutput.style.fontSize = "22px"
    form.subOutput.style.marginLeft = "5px"
})

//MULTIPLY
multBTN.addEventListener("click", function(e) {
    e.preventDefault()
    let multNum1 = form.multNum1.value
    let multNum2 = form.multNum2.value
    let multSum = (+multNum1 * +multNum2)
    console.log(multSum)
    form.multOutput.textContent = multSum
    form.multOutput.textContent = multSum 
    form.multOutput.style.fontSize = "22px"
    form.multOutput.style.marginLeft = "5px"  
})
