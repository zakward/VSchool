import React, {useContext, useState} from "react"
import "../css/Meal.css"
import MealForm from "../components/MealForm.js"



function Meal(props) {

    const { title, description, totalCalories, imgUrl, mealDate, mealCategory, _id, deleteMeal } = props

    const [ editToggle, setEditToggle ] = useState(false)



    const date= new Date(mealDate).getUTCDate()
    let month = new Date(mealDate).getUTCMonth()
    month = month +1
    const year = new Date(mealDate).getUTCFullYear()

    console.log(month, date, year)

    function toggleForm() {
        setEditToggle(prevEditToggle => {
            return !prevEditToggle
        })
    }

    console.log(editToggle)

    return (
        <>
        { !editToggle ?
            <> 
            <div className = "meal-wrapper">
                <div className = "header-container">
                    <span className = "meal-category">{mealCategory}</span>
                    <span className = "meal-calories">({totalCalories} cals)</span>
                    <span className = "meal-date">{month}-{date}-{year}</span>
                </div>
                <p className = "meal-label"> Today I ate: </p>
                <div className = "description-wrapper">
                    <div className = "title-description">
                        <h1 className = "meal-title">{title}</h1>
                        <p className = "meal-description">{description}</p>
                        <button className = "button delete" onClick = {() => deleteMeal(_id)}>X</button>
                        <button className = "button edit" onClick = {() => toggleForm() }>Edit</button>
                    </div>
                        <img src = {imgUrl} className = "meal-img"/>
                </div>
            </div>
            </>
        

        :

        <>
        <div className = "edit-form">
               <MealForm
                title = {title}
                description = {description}
                totalCalories = {totalCalories}
                imgUrl = {imgUrl}
                mealDate = {mealDate}
                mealCategory = {mealCategory}
                btnText = "SAVE"
                submit = {props.editMeal}
                _id = {_id}
            />
            <button className = "button edit" onClick = {toggleForm}>CLOSE</button>
        </div>
         
        </>
}
</>
    )
}

export default Meal