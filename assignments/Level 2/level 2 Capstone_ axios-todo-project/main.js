// GET's THE TODO's FROM THE DATABASE
function getData() {
    axios.get("https://api.vschool.io/zakward/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}

//clear the list every time submitted so new data will replace it
function clearList() {
    const el = document.getElementById("todo-list")
    while(el.firstChild) {
        el.removeChild(el.firstChild)
    }
}

function onPageLoad() {
    checkbox.checked = true
}

//UPDATE False and True for the updating completed in the database
const updateFalse = {
    completed: false
}

const updateTrue = {
    completed: true
}

function completeTask(dataID) {
    axios.put("https://api.vschool.io/zakward/todo/" + dataID, updateTrue)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
}

function completeTaskFalse(dataID) {
    axios.put("https://api.vschool.io/zakward/todo/" + dataID, updateFalse)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
}

// LISTS THE TODO TITLES TO THE DOM
function listData(data) {
        clearList()

        for (i = 0; i < data.length; i++) {            
            // add To Do List container as DIV    
                const todoListContainer = document.createElement("div")
                document.getElementById("todo-list").appendChild(todoListContainer)
                todoListContainer.className = "todoListContainer"

             // add image from data url in database
                const toDoImage =  document.createElement("img")    
                toDoImage.src = data[i].imgUrl
                toDoImage.textContent = "imgURL"
                todoListContainer.appendChild(toDoImage)
                toDoImage.className = "toDoImage"

                //new toDo Item as Span Element
                const todoItem = document.createElement("output")
                todoItem.value = data[i].title
                console.log(data[i]._id)
                const dataID = data[i]._id // declare dataID here so you can access it later
                const dataTitle = data[i].title
                todoListContainer.appendChild(todoItem)
                todoItem.className = "toDoItem"
                    if (data[i].completed === true) {
                        todoItem.style.textDecoration = "line-through"
                    }            

                //adding line break
                const lineBreak = document.createElement("br") 
                todoListContainer.appendChild(lineBreak)

                // Description DIV        
                const toDoDescription = document.createElement("output")    
                const dataDescription = data[i].description
                toDoDescription.value = dataDescription
                todoListContainer.appendChild(toDoDescription)
                console.log("Description: " + dataDescription)
                toDoDescription.className= "dataDescription"

                //adding line break
                const lineBreak2 = document.createElement("br") 
                todoListContainer.appendChild(lineBreak2)

                //data PRICE DIV
                const toDoPrice = document.createElement("output")
                // toDoPrice.setAttribute("name", "price")
                // toDoPrice.setAttribute("hidden", true)
                const dataPrice = data[i].price
                toDoPrice.value = dataPrice
                todoListContainer.appendChild(toDoPrice)
                toDoPrice.className = "toDoPrice"

                //adding line break
                const lineBreak3 = document.createElement("br") 
                todoListContainer.appendChild(lineBreak3)

                    //add label for checkbox
                const checkboxLabel = document.createElement("label")
                todoListContainer.appendChild(checkboxLabel)
                checkboxLabel.textContent = "complete"
                checkboxLabel.className = "checkboxLabel"

            //add checkbox inline with new toDoItem
                const checkbox = document.createElement("input")
                checkbox.type = "checkbox"       
                checkbox.className = "checkbox"
                checkbox.name = "checkbox"
                checkbox.value = "completed"
                todoListContainer.appendChild(checkbox)
                if (data[i].completed === true) {
                    checkbox.checked = true;  // set so when the page loads if task is completed it loads checked
                }
            //Checkbox event Listener
                checkbox.addEventListener("click", function() {
                if (checkbox.checked) {
                    completeTask(dataID)
                    todoItem.style.textDecoration = "line-through"
                    toDoPrice.style.textDecoration = "line-through"
                    toDoDescription.style.textDecoration = "line-through"
             } else if (!checkbox.checked) {
                    completeTaskFalse(dataID)
                    todoItem.style.textDecoration = "none"
                    toDoPrice.style.textDecoration = "none"
                    toDoDescription.style.textDecoration = "none"
             } 
            })   

            //adding DELETE btn here -- delete btn when clicked will run the axios.delete of the current and remove it from the list
            const deleteBtn = document.createElement("button")
            todoListContainer.appendChild(deleteBtn)
            deleteBtn.textContent = "DELETE"
            deleteBtn.className = "deleteBtn"

            //delete BTN event listener
            deleteBtn.addEventListener("click", function() {
                let isExecuted = confirm("Are you sure you want to delete this ToDo?") //confirmation box  if yes then complete deletion
                if (isExecuted === true) {
                    axios.delete("https://api.vschool.io/zakward/todo/" + dataID)
                    .then(res => console.log(res.data))
                    .catch(err => console.log(err))
                    document.getElementById("todo-list").removeChild(todoListContainer)
                } else if (isExecuted === false) {
                    return
                }
            })

            //adding EDIT btn -- when clicked the hidden form appears and becomes editable
            const editBtn = document.createElement("button")
            todoListContainer.appendChild(editBtn)
            editBtn.textContent = "EDIT"
            editBtn.className = "editBtn"

            const editForm = document["editForm"]

            // editBtn Event Listener
            editBtn.addEventListener("click", function() {
              
                editForm.style.display = "block"
                const editTitle = editForm["edit-title"]
                editTitle.value= dataTitle
                const editDescription = editForm["edit-description"]
                editDescription.value = dataDescription
                const editPrice = editForm["edit-price"]
                editPrice.value = dataPrice
                const editImgUrl = editForm["edit-imgUrl"]
                editImgUrl.value = toDoImage.src

                //SAVE BUTTON-- when clicked it will update the database and re run the get() to display the updated list
                const saveBtn = document.getElementById("saveBtn")
                saveBtn.addEventListener("click", function() {
                    const newTitle = editTitle.value
                    const newDescription = editDescription.value
                    const newPrice = editPrice.value
                    const newImgUrl = editImgUrl.value

                    const editUpdate = {
                        title: newTitle,
                        description: newDescription,
                        price: newPrice,
                        imgUrl: newImgUrl
                    }
                
                    function completeEdit(dataID) {
                        axios.put("https://api.vschool.io/zakward/todo/" + dataID, editUpdate)
                        .then(res => getData()) //making getData here resolved the primary issue of refreshing the page with updated and edited toDos
                        .catch(err => console.log(err))
                    }
    
                    completeEdit(dataID)
                    editForm.style.display = "none"
                })
            })
            } 
        }

//FORM FOR THE POST REQUEST -- when clicked will create the new ToDo and run the getData() to reflect updated list
const todoForm = document["todo-form"]
todoForm.addEventListener("submit", function(e) {
    e.preventDefault()

    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        price: todoForm.price.value,
        imgUrl: todoForm.imgUrl.value
    }

    todoForm.title.value = ""
    todoForm.description.value = ""
    todoForm.price.value = ""
    todoForm.imgUrl.value = ""

    axios.post("https://api.vschool.io/zakward/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
})

//first get request to display To Dos from the Database
getData()

