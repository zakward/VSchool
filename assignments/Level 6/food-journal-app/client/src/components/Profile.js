import React, {useEffect, useContext, useState} from "react"
import "../css/Profile.css"
import MealForm from "../components/MealForm.js"
import { UserContext } from "../context/UserProvider.js"
import MealList from "../components/MealList.js"

function Profile() {

    const {getUserMeals, user: {username}, meals, addMeal} = useContext(UserContext)
   
   
    const [ categoryFilterState, setCategoryFilterState ] = useState("All")

    const [ dateFilterState, setDateFilterState ] =useState("")

    function handleDateFilter(e) {
        console.log(e.target.value)
        setDateFilterState(e.target.value)
    }

    function handleCategoryFilter(e) {
        setCategoryFilterState(e.target.value)
    }

    useEffect(() => {
        getUserMeals()
    }, [ ])



    return (
        <>
            <h1 className = "profile-title">Profile</h1>
            <h2 className = "profile-header">Welcome {username}!</h2>
            <MealForm submit = {addMeal} btnText = "Add Meal" />
            <div className = "secondary-container">
                <h2 className = "saved-title">Your Meals</h2>
                <h3 className = "target">Target: 2200 Calories/Day</h3>
                <p className = "target" >Select date to view meal logs </p>
                <label className = "date-filter">Filter by Date :</label>
                <input type = "date" name = "date"   onChange = {handleDateFilter} value = {dateFilterState} className = "date-input" />
            </div>
            {/* <label className = "category-filter">Filter by Category :</label> */}
            {/* <select  onChange = {handleCategoryFilter} value = {categoryFilterState}>
                <option>--Category--</option>
                <option value = "All">All</option>
                <option value = "Breakfast">Breakfast</option>
                <option value = "Lunch">Lunch</option>
                <option value = "Dinner">Dinner</option>
                <option value = "Snack">Snack</option>
                <option value = "Dessert">Dessert</option>
            </select> */}
            <MealList meals = {meals} date = {dateFilterState }    />
        </>
    )
}

export default Profile