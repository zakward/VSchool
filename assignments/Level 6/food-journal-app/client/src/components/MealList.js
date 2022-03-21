import React, { useEffect, useContext, useState } from "react"
import Meal from "../components/Meal.js"
import "../css/MealList.css"
import { UserContext } from "../context/UserProvider.js"



function MealList(props) {

    const { meals, date, category } = props
    
    const { userAxios, editMeal, deleteMeal } = useContext(UserContext)

    console.log(date)
    // useEffect(() => {
        // console.log(date.toISOString())
    // }, [date])


    

    // meals.map(meal => {
    //     console.log(meal.totalCalories)
    //     console.log(calorieCount)
    //     console.log(calorieCount + meal.totalCalories)
    //     setCalorieCount(prevCalorieCount => {
    //         return prevCalorieCount + meal.totalCalories
    //     })

    // })


    const filteredMeals = meals.filter(meal => {  
        return meal.mealDate === date
    })

    console.log(filteredMeals)


 
    return (

    <>
        <hr className = "line-break"></hr>
        <span className = "calorie-total">Total Calories: {filteredMeals.reduce((sum1, meal) => {
            return sum1 + meal.totalCalories
        }, 0)}
        </span>
            <div className = "meal-list">
                {filteredMeals 
                .map(meal => <Meal {...meal} key = {meal._id} deleteMeal = {deleteMeal} editMeal = {editMeal} />)}
            </div>
    </>

    )
}

export default MealList