import React, {useContext} from "react"
import "./Footer.css"
import {ThemeContext} from "./ThemeContextProvider"



function Footer() {
    const {theme} = useContext(ThemeContext)
    return (
        <>
        <footer className = {`footer-${theme}`}>
            <h3>The Amazing Footer</h3>
        </footer>
        
        </>
    )
}

export default Footer