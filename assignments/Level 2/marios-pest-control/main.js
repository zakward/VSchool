const form = document["myForm"]
const submitBTN = form.submit
const resetBTN = form.reset

submitBTN.addEventListener("click",function(e) {
    e.preventDefault()
    const goombaInput = form.goombaInput.value * 5
    const bobombInput = form.bobombInput.value * 7
    const cheepCheepInput = form.cheepCheepInput.value * 11
    const totalCost = (+goombaInput + +bobombInput + +cheepCheepInput)
    form.output.textContent = totalCost + " coins"

} )

resetBTN.addEventListener("click", function() {
    form.output.textContent = ""
})