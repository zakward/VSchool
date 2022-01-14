import React from "react"

export default function Navbar() {
    return (
        <>
            <div className = "navbar-container">
                <h3>Start Bootstrap</h3>
                <div className = "links-container">
                    <ul>
                        <li className = "nav-link">HOME</li>
                        <li className = "nav-link">ABOUT</li>
                        <li className = "nav-link">SAMPLE POST</li>
                        <li className = "nav-link">CONTACT</li>
                    </ul>
                </div>
            </div>
        </>
    )
}