import React from "react"
import {Link, Outlet, Routes, Route} from "react-router-dom"
import "./css/App.css"
import About from "./components/About"
import Home from "./components/Home"
import RandomDrink from "./components/RandomDrink"
// import SearchByIngredient from "./components/SearchByIngredient"
import SearchByName from "./components/SearchByName"
import DrinkDetail from "./components/DrinkDetail"

const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontSize: "25px",
    fontFamily: "Lora, serif"
}

function App() {
    return (
        <>
            <nav className = "navbar">
                <Link to ="/" style = {linkStyle}>HOME</Link>
                <Link to = "/about" style = {linkStyle}>ABOUT</Link>
                <h3 className = "nav-title">The Cocktail Connoisseur App</h3>
                <Link to = "/randomDrink" style = {linkStyle}>RANDOM DRINK GENERATOR</Link>
                <Link to = "/searchByName" style = {linkStyle}>SEARCH BY</Link>
            </nav>
            <Outlet />

            <Routes>
                <Route index path = "/" element = {<Home />} />
                <Route path = "/about" element = {<About />} />
                <Route path = "/randomDrink" element = {<RandomDrink />} />
                <Route path = "/drinkDetail/:drinkId" element ={<DrinkDetail />} />
                <Route path = "/searchByName" element ={<SearchByName />} />
            </Routes>
        </>         
    )
}
export default App


/* <nav className = "nav-container">
                    <ul className = "nav-list">
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>RANDOM DRINK</li>
                        <li>Search By <span className = "bolded-italic">Ingredient</span></li>
                        <li>Search By <span className = "bolded-italic">Name</span></li>
                    </ul>
                </nav>
            <Home />
        </> */