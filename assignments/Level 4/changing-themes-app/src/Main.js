import React, {useContext} from "react"
import "./Main.css"
import {ThemeContext} from "./ThemeContextProvider"

function Main(props) {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <div className= {`main-${theme}-theme`}>
            <div className = "main-container">
                <h2 className = "main-header">Click the button to toggle the Dark theme!</h2>
                <button onClick = {toggleTheme} className = "toggle-btn">Toggle Theme</button>
            </div>
        </div>
    )
}

export default Main