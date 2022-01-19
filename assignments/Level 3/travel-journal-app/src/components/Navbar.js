import React from"react"
import navImg from "../navImg.png"
export default function Navbar() {
    return (
        <>
            <nav className = "nav-container">
                <img src = {navImg} />
                <p>my travel journal.</p>
            </nav>
        </>
    )
}