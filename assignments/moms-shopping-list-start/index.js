const submitBtn = document.getElementById("submit-btn")
const form = document["my-form"]

form.addEventListener("submit",  (e) => {
        e.preventDefault()
        console.log(form.title.value)
        const mainList = document.getElementById("list")
        /*  ADD LINE ITEM  */
        const listItem =document.createElement("li")
        mainList.appendChild(listItem)
        /*   ADD NEW DIV   */
        const divItem = document.createElement("div")
        listItem.appendChild(divItem)
        const divItemValue = form.title.value
        divItem.textContent = divItemValue
        divItem.className = "label"
        form.title.value = ""
        /*   ADD EDIT BTN   */
        const editBtn = document.createElement("button")
        listItem.appendChild(editBtn)
        editBtn.textContent= "EDIT"
        editBtn.className = "submit-btn"
        /*    ADD DONE BTN   */
        const doneBtn = document.createElement("button")
        listItem.appendChild(doneBtn)
        doneBtn.textContent = "DONE"
        doneBtn.className = "submit-btn"
        /*    ADD DELETE BTN   */
        const deleteBtn = document.createElement("button")
        listItem.appendChild(deleteBtn)
        deleteBtn.textContent = "DELETE"
        deleteBtn.className = "submit-btn"
        /*   ADD CLICK FUNCTIONS TO BTNS   */
        deleteBtn.addEventListener("click",  () => {
            divItem.parentElement.remove()
        })
        editBtn.addEventListener("click", function() {
            divItem.contentEditable = true;
            divItem.focus()
            divItem.style.backgroundColor = "lightgrey"
            })
        doneBtn.addEventListener("click", function() {
            divItem.contentEditable = false;
            divItem.style.backgroundColor = "white"
        })
    }
)








