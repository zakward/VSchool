import React, {useState} from "react"
import {Link, Route} from "react-router-dom"
import "../css/RandomDrink.css"
import axios from "axios"
import DrinkDetail from "./DrinkDetail"

function RandomDrink() {

    const defaultCocktail = { 
        strDrink: "Cranberry Cordial",
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/qtspsx1472667392.jpg",
        idDrink: "12802"
    }

    const [randomCocktail, setRandomCocktail] = useState(JSON.parse(sessionStorage.getItem("drink")) || defaultCocktail)

    function getRandomCocktail() {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
             .then(res => {
                 sessionStorage.setItem("drink", JSON.stringify(res.data.drinks[0]))
                 setRandomCocktail( {
                strDrink : res.data.drinks[0].strDrink,
                strDrinkThumb:  res.data.drinks[0].strDrinkThumb,
                idDrink: res.data.drinks[0].idDrink
        })})    
            .catch(err => console.log(err))
    }



    return (
        <>
            <h1 className = "random-title">Random Cocktail Generator</h1>
            <div className = "random-container">
                <Link className = "detail-link" to = {`/drinkDetail/${randomCocktail.idDrink}`}><h3 className = "random-name">"{randomCocktail.strDrink}"</h3></Link>
                <Link to = {`/drinkDetail/${randomCocktail.idDrink}`}><img className = "random-img" src = {randomCocktail.strDrinkThumb} /></Link>
                <button onClick = {getRandomCocktail} type="button" className="generate-btn">GENERATE NEW COCKTAIL</button>
            </div>

            
        </>
    )
}

export default RandomDrink