import React from "react"
import "../css/About.css"

function About() {
    return (
        <>
            <div className = "about-header-container">
                <img className = "about-img" src = "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.6435-9/71578934_10104375353323867_2926410438537117696_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=vtZpxiMNAvIAX_CeaXa&_nc_ht=scontent-dfw5-1.xx&oh=00_AT-SKLQIWIXCOU60MoL6IsOKwfvKbk2F973tNuenLnMhZQ&oe=6227E594"/>
                <h1 className = "about-title">The Cocktail Connoisseur</h1>
                <p className = "about-description">The Cocktail Connoisseur App was created by Zak Ward as part of the VSchool Level 4 Captstone Project. The project focus is on the planning, organizing, and creation of a responsive React App that allows the User to interact with an online API to get specific data requests from the CocktailDB.</p>
                <hr className = "line-break"/>
            </div>
            <h2 className = "functions-title">PRIMARY FUNCTION</h2>
            <div className = "functions-container">
                <h3>Generate a Random Cocktail</h3>
                    <p>Description:  Click "Generate a New Cocktail" to access a random cocktail from the CocktailDB API</p>
                    <p>Click the Name or Image to view a detail page with ALL the details regarding the Cocktail</p>
            </div>
      
        </>
    )
}

export default About