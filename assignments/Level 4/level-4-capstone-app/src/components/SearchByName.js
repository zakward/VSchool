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

    const [errMessage, setErrMessage] = useState(null)

    function getSearchedDrinkByName() {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchedDrink.strDrink}`)
            .then(res => {
                if (res.data.drinks === null) {
                    setDrinksArr([])
                    setErrMessage("I'm sorry!!  No results were found!!")
                } else {
                    sessionStorage.setItem("drinks", JSON.stringify(res.data.drinks))
                setDrinksArr(res.data.drinks)
                }
            })
            .catch(err => console.log(err))

            setSearchedDrink({
                strDrink: "",
                strDrinkThumb: "",
                idDrink: "",
                ingredient: ""
            })
    }

    function getSearchedDrinkByIngredient() {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchedDrink.ingredient}`)
            .then(res => {setDrinksArr(res.data.drinks)})
            .catch(err => console.log(err))

            setSearchedDrink({
                strDrink: "",
                strDrinkThumb: "",
                idDrink: "",
                ingredient: ""
            })
    }

    function handleChange(event){
        const {name, value} = event.target
        setSearchedDrink(prevSearchedDrink => ({...prevSearchedDrink, [name]: value}))
    }


    const [drinksArr, setDrinksArr] = useState(JSON.parse(sessionStorage.getItem("drinks")) || [ ] )
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
                <hr className = "search-break" />
            </div> 
            <div className = "search-container">
                <h1 className= "search-title">SEARCH BY COCKTAIL INGREDIENT</h1>
                <input  className = "search-input" placeholder = "Cocktail Ingredient" onChange = {handleChange} type="text" name ="ingredient" value = {searchedDrink.ingredient}/>
                <button className = "search-btn" type="submit" onClick = {getSearchedDrinkByIngredient}>SEARCH</button> 
                < hr className = "search-break" />
            </div>
        </div>
           
            <div className = "drinks-container">
               {errMessage !== null ? <h1>{errMessage}</h1> : drinkElement}
            </div>
        </>
    )
}

export default SearchByName