import React, {useState, useContext} from "react"
import axios from "axios"
import { UserContext } from "../context/UserProvider.js"


function MealForm(props) {

    const initInputs = {
        title:  props.title || "",
        description : props.description || "",
        mealCategory: props.mealCategory || "",
        imgUrl: props.imgUrl || "",
        totalCalories: props.totalCalories || 0,
        mealDate: props.mealDate || ""
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
        console.log(inputs)
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    const {title, description, imgUrl, totalCalories, mealDate, mealCategory } = inputs
   

return (

<>
    <div className = "meal-form-wrapper">
            <h2 className = "form-header">Log Meal</h2>
            <form onSubmit = {handleSubmit} className = "meal-form">
                Meal Title:<input type = "text" name= "title" value= {title} onChange = {handleChange} className = "meal-form-input" placeholder="add meal title"/>
                Meal Description:<input type = "text" name= "description" value= {description}onChange = {handleChange} className = "meal-form-input" placeholder="add meal description"/>
                Meal Calories: <input type = "text" name= "totalCalories" value= {totalCalories} onChange = {handleChange} className = "meal-form-input" placeholder="add meal total calories"/>
                Meal Image URL: <input type = "text" name= "imgUrl" value= {imgUrl} onChange = {handleChange} className = "meal-form-input" placeholder="add meal imgUrl"/>
               Meal Date: <input type = "date" name= "mealDate" value= {mealDate} onChange = {handleChange} className = "meal-form-input" placeholder="add meal date"/>
                <select name = "mealCategory" value = {mealCategory} onChange = {handleChange}>
                    <option>--Category--</option>
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                    <option>Snack</option>
                    <option>Dessert</option>   
                </select>
                <button className = "addMeal-btn">{props.btnText}</button>
            </form>
    </div>
</>

)

}

export default MealForm