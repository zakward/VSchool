import React from "react"
import Meal from "../components/Meal.js"
import "../css/MealList.css"

function MealList(props) {

    const { meals } = props

    return (

    <>
            <div className = "meal-list">
                { meals.map(meal => <Meal {...meal} key = {meal._id} />) }
            </div>
    </>

    )
}

export default MealList