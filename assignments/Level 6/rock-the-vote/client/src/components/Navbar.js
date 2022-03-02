import React from "react"
import {Link, Outlet} from "react-router-dom"

function Navbar() {
    return (
        <>
             <nav className = "navbar">
                <Link to ="/profile" >Profile</Link>
                <Link to ="/public" >Public</Link>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar