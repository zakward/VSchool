import React, { useContext, useEffect } from "react"
import axios from "axios"
import { ExploreContext } from "../context/ExploreProvider.js"

function Explore() {

    const {getRandomMeals} = useContext(ExploreContext)

 useEffect( () => {
     getRandomMeals()
 }, [ ]
 )
 


    return (
        <>
            <h1>Sorry this page is currently under construction!  Please check back soon!</h1>
        </>
    )
}

export default Explore