import React from "react"
import Navbar from "./Navbar"

export default function Header() {
    return (
        <>
            <div className = "header-container">
            <Navbar />
            <div className = "header-title">
                <h1>Clean Blog</h1>
                <h3>A Blog Theme by Start Bootstrap</h3>
            </div>
                
            </div>
        </>
    
    )
}