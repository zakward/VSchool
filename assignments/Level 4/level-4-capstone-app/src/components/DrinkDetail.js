import React from "react"
import {useParams} from "react-router-dom"
import axios from "axios"
import "../css/DrinkDetail.css"

function DrinkDetail() {
const {drinkId} = useParams()
console.log(drinkId)

const [cocktailDetail, setCocktailDetail] = React.useState({
    strDrink: "",
    strDrinkThumb: "",
    idDrink: "",
    strCategory: "",
    strGlass: "",
    strInstructions: "",
    strIngredients : [ ],
    strMeasures : [ ]
})
    React.useEffect( () => {
     axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
        .then(res => { 
            const ingredientsArr = [ ]
            const measuresArr = [ ]
            // for in loop = use this to map over an object to get the key and the value of each item within the object
            for (const [key, value] of Object.entries(res.data.drinks[0])) {
                console.log(`${key}: ${value}`);
                if (key.includes("strIngredient") && value !== null) {
                    ingredientsArr.push(value)
                } 
              }

              for (const [key, value] of Object.entries(res.data.drinks[0])) {
                  if (key.includes("strMeasure") && value !== null) {
                      measuresArr.push(value)
                  }
              }
              

              setCocktailDetail({
                strDrink: res.data.drinks[0].strDrink,
                strDrinkThumb: res.data.drinks[0].strDrinkThumb,
                idDrink: res.data.drinks[0].idDrink,
                strCategory: res.data.drinks[0].strCategory,
                strGlass: res.data.drinks[0].strGlass,
                strInstructions: res.data.drinks[0].strInstructions,
                strIngredients : ingredientsArr,
                strMeasures: measuresArr
              })
        })   
    }, []
        
    )
    
  
    

    return (
        <>
            <div className = "title-container">
                <h1 className ="detail-title">"{cocktailDetail.strDrink}"</h1>
                <img className = "detail-img"src = {cocktailDetail.strDrinkThumb} />
            </div>
            <div className = "details-container">
                <h3 className = "detail category"><b>Cocktail Category:</b> {cocktailDetail.strCategory}</h3>
                <h3 className = "detail glass "><b>Cocktail Glass: </b> {cocktailDetail.strGlass}</h3>
                <h3 className = "detail instructions "><b>Instructions:</b> {cocktailDetail.strInstructions}</h3>
                <h3 className = "detail ingredients"><b>Ingredients: </b>{cocktailDetail.strIngredients}</h3>
                <h3 className = "detail measures"><b>Measurements:</b>{cocktailDetail.strMeasures}</h3> 
            </div>
        </>
    )
}
export default DrinkDetail