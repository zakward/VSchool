import React, {useState, useContext} from "react"
import axios from "axios"
import { UserContext } from "../context/UserProvider.js"


function MealForm() {

    const initInputs = {
        title:  "",
        description : "",
        mealCategory: "",
        imgUrl: "",
        totalCalories: 0,
        mealDate: ""
    }

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name] :  value
        }))
    }

    const {addMeal } = useContext(UserContext)

    function handleSubmit(e) {
        e.preventDefault()
        addMeal(inputs)
        setInputs(initInputs)
    }

    const {title, description, imgUrl, totalCalories, mealDate, mealCategory } = inputs
   

return (

<>
    <div className = "meal-form-wrapper">
            <h2 className = "form-header">Log Meal</h2>
            <form onSubmit = {handleSubmit} className = "meal-form">
                <input type = "text" name= "title" value= {title} onChange = {handleChange} className = "meal-form-input" placeholder="add meal title"/>
                <input type = "text" name= "description" value= {description}onChange = {handleChange} className = "meal-form-input" placeholder="add meal description"/>
                <input type = "text" name= "totalCalories" value= {totalCalories} onChange = {handleChange} className = "meal-form-input" placeholder="add meal total calories"/>
                <input type = "text" name= "imgUrl" value= {imgUrl} onChange = {handleChange} className = "meal-form-input" placeholder="add meal imgUrl"/>
                <input type = "date" name= "mealDate" value= {mealDate} onChange = {handleChange} className = "meal-form-input" placeholder="add meal date"/>
                <select name = "mealCategory" value = {mealCategory} onChange = {handleChange}>
                    <option>--Category--</option>
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                    <option>Snack</option>
                    <option>Dessert</option>   
                </select>
                <button className = "addMeal-btn">Add Meal</button>
            </form>
    </div>


</>

)

}

export default MealForm