import React, {useState} from "react"
import {Link} from "react-router-dom"
import axios from "axios"
import "../css/SearchByName.css"

function SearchByName() {

    const [searchedDrink, setSearchedDrink] = useState({
        strDrink: "",
        strDrinkThumb: "",
        idDrink: "",
        ingredient: ""
    })

    function getSearchedDrinkByName() {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchedDrink.strDrink}`)
            .then(res => setDrinksArr(res.data.drinks))
            // .catch(err =>  <h1>It looks nothing matches your search!</h1>) // render an error message
            .catch(err => console.log(err))
    }

    function getSearchedDrinkByIngredient() {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchedDrink.ingredient}`)
            .then(res =>setDrinksArr(res.data.drinks) )
            .catch(err => console.log(err))
    }

    function handleChange(event){
        const {name, value} = event.target
        setSearchedDrink(prevSearchedDrink => ({...prevSearchedDrink, [name]: value}))
    }


    const [drinksArr, setDrinksArr] = useState([])
    const drinkElement = drinksArr.map(drink => {
        return (
            <>
               <Link className = "detail-link" to = {`/drinkDetail/${drink.idDrink}`}><h1 className = "drinks-title">"{drink.strDrink}"</h1></Link>
                <img src = {drink.strDrinkThumb} className = "drinks-img"/>
                < hr className = "search-break" />
            </>
        )
    })

    return (
        <>
        <div className = "main-container">
             <div className = "search-container">
                <h1 className= "search-title">SEARCH BY COCKTAIL NAME</h1>
                <input  className = "search-input" placeholder = "Cocktail Name" onChange = {handleChange} type="text" name ="strDrink" value = {searchedDrink.strDrink}/>
                <button className = "search-btn" type="submit" onClick = {getSearchedDrinkByName}>SEARCH</button> 
                < hr className = "search-break" />
            </div> 
            <div className = "search-container">
                <h1 className= "search-title">SEARCH BY COCKTAIL INGREDIENT</h1>
                <input  className = "search-input" placeholder = "Cocktail Ingredient" onChange = {handleChange} type="text" name ="ingredient" value = {searchedDrink.ingredient}/>
                <button className = "search-btn" type="submit" onClick = {getSearchedDrinkByIngredient}>SEARCH</button> 
                < hr className = "search-break" />
            </div>
        </div>
           
            <div className = "drinks-container">
                {drinkElement}
            </div>
        </>
    )
}

export default SearchByName