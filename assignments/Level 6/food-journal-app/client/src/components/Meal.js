import React from "react"
import "../css/Meal.css"


function Meal(props) {

    const { title, description, totalCalories, imgUrl, mealDate, mealCategory } = props

    return (
        <>
            <div className = "meal-wrapper">
                <div className = "header-container">
                    <span className = "meal-category">{mealCategory}</span>
                    <span className = "meal-calories">({totalCalories} cals)</span>
                    <span className = "meal-date">{new Date(mealDate).toDateString()}</span>
                </div>
                <p className = "meal-label"> Today I ate: </p>
                <div className = "description-wrapper">
                    <div className = "title-description">
                        <h1 className = "meal-title">{title}</h1>
                        <p className = "meal-description">{description}</p>
                    </div>
                        <img src = {imgUrl} className = "meal-img"/>
                </div>
                
            </div>
            
        </>
    )
}

export default Meal