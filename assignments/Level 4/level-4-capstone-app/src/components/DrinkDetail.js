import React from "react"
import {Link, useParams, useNavigate} from "react-router-dom"
import axios from "axios"
import "../css/DrinkDetail.css"

function DrinkDetail() {
const {drinkId} = useParams()
const navigate = useNavigate()

const [cocktailDetail, setCocktailDetail] = React.useState({
    strDrink: "",
    strDrinkThumb: "",
    idDrink: "",
    strCategory: "",
    strGlass: "",
    strInstructions: "",
    strIngredients: []
})
    React.useEffect( () => {
     axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
        .then(res => { 
            const ingredientsArr = [ ]
            const measuresArr = [ ]
            // for in loop = use this to map over an object to get the key and the value of each item within the object
            for (const [key, value] of Object.entries(res.data.drinks[0])) {
                if (key.includes("strIngredient") && value !== null) {
                    ingredientsArr.push(value)
                } 
              }

              for (const [key, value] of Object.entries(res.data.drinks[0])) {
                  if (key.includes("strMeasure") && value !== null) {
                      measuresArr.push(value)
                  }
              }

              const ingredientList = [ ]

              for (let i = 0; i < ingredientsArr.length; i++) {
                  ingredientList.push({
                      ingredientName: ingredientsArr[i],
                      ingredientMeasure: measuresArr[i]
                  })
              }

              console.log(ingredientList)

              setCocktailDetail({
                strDrink: res.data.drinks[0].strDrink,
                strDrinkThumb: res.data.drinks[0].strDrinkThumb,
                idDrink: res.data.drinks[0].idDrink,
                strCategory: res.data.drinks[0].strCategory,
                strGlass: res.data.drinks[0].strGlass,
                strInstructions: res.data.drinks[0].strInstructions,
                strIngredients : ingredientList
              })
        })   
        .catch(err => console.log(err))
    }, []
        
    )
   

    return (
        <>
            <div className = "title-container">
                <h1 className ="detail-title">"{cocktailDetail.strDrink}"</h1>
            </div>
            <div className = "drink-container">
                <img className = "detail-img"src = {cocktailDetail.strDrinkThumb} />
                <div className = "details-container">
                <h3 className = "detail category"><b>Cocktail Category:</b> {cocktailDetail.strCategory}</h3>
                <h3 className = "detail glass "><b>Cocktail Glass: </b> {cocktailDetail.strGlass}</h3>
                <h3 className = "detail ingredients"><b>Ingredients: </b>{cocktailDetail.strIngredients.map(ingredient => {
                    return (
                        <span key = {cocktailDetail.idDrink+ingredient.ingredientName}>{ingredient.ingredientMeasure}  {ingredient.ingredientName}, </span>
                    )
                })}</h3>
                <h3 className = "detail instructions "><b>Instructions:</b> {cocktailDetail.strInstructions}</h3>
                <button className = "back-btn" onClick = {()=> navigate(-1)}>BACK</button>
            </div>
            </div>
          
        </>
    )
}
export default DrinkDetail