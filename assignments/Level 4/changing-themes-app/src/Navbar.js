import React, {useContext} from "react"
import "./Navbar.css"
import {ThemeContext} from "./ThemeContextProvider"

function Navbar(props) {
    const {theme} = useContext(ThemeContext)
    return (
        <div className ={`nav-${theme}-theme`}>
                <ul className = "nav-container">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
        </div>
    )
}

export default Navbar