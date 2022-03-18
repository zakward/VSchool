import React, {useEffect, useContext} from "react"
import "../css/Profile.css"
import MealForm from "../components/MealForm.js"
import { UserContext } from "../context/UserProvider.js"
import MealList from "../components/MealList.js"

function Profile() {

    const {getUserMeals, user: {username}, meals, handleFilter, categoryFilterState, handleDateFilter, dateFilterState } = useContext(UserContext)

    useEffect(() => {
        getUserMeals()
    }, [ ])



    return (
        <>
            <h1 className = "profile-title">Profile</h1>
            <h2 className = "profile-header">Welcome {username} !</h2>
            <MealForm />
            <h2 className = "saved-title">Saved Meals</h2>
            <h3 className = "target">Target: 2200 Calories/Day</h3>
            <h3 className = "current-total">Current Total : </h3>
            <label className = "date-filter">Filter by Date :</label>
            <input type = "date" name = "date"   onChange = {handleDateFilter} value = {dateFilterState} />
            <label className = "category-filter">Filter by Category :</label>
            <select  onChange = {handleFilter} value = {categoryFilterState}>
                <option>--Category--</option>
                <option value = "All">All</option>
                <option value = "Breakfast">Breakfast</option>
                <option value = "Lunch">Lunch</option>
                <option value = "Dinner">Dinner</option>
                <option value = "Snack">Snack</option>
                <option value = "Dessert">Dessert</option>
            </select>
            <MealList meals = {meals} />
        </>
    )
}

export default Profile