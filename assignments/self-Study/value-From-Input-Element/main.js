function getInputValue() {
    let text = document.getElementById("text").value
        console.log(text)
    var newLi = document.createElement("li")
        newLi.textContent = text
    var myList = document.getElementById("list")
        myList.append(newLi)
}