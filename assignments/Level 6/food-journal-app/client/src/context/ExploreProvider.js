import React, { useState, useContext } from "react"
import axios from "axios"
import { UserContext } from "../context/UserProvider.js"

export const ExploreContext = React.createContext()


function ExploreProvider(props) {


    const { userAxios } = useContext(UserContext)

    function getRandomMeals() {
        userAxios.get("https://www.themealdb.com/api/json/v2/9973533/randomselection.php")
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }


    return (
        <>
            <ExploreContext.Provider value = { {
                getRandomMeals
            }}>
                {props.children}
            </ExploreContext.Provider>
        </>
    )
}

export default ExploreProvider