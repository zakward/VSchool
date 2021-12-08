
const addBtn = document.getElementById("add")
const colors = ["red", "blue", "green"]


addBtn.addEventListener("click", (function createSubItem(e) {
    const divList = document.getElementById("list")
    const subItem = document.createElement("div")
    const subItemValue = document.getElementById("input").value
    subItem.textContent = subItemValue
    subItem.setAttribute = ("class", "subItem")
    divList.appendChild(subItem)
    const dropDown = document.createElement("select")
    subItem.append(dropDown) 
    for (let i = 0; i < colors.length; i++) {
        const option = document.createElement("option") 
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.append(option)    
            }
        }
    )
)

dropDown.addEventListener("change", function(e) {
    var value = e.target.value
        if(value === "red") {
            e.target.parent.style.backgroundColor ="red"
        }
    }
)