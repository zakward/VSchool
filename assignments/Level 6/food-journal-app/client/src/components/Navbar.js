import React from "react"
import { Link, Outlet} from "react-router-dom"
import "../css/Navbar.css"


function Navbar(props){

    const { logout } = props

    return (

        <>
            <nav className = "navbar">
                <div className = "links-container">
                    <Link to = "/profile" className = "nav-link">Profile</Link>
                    <Link to = "/explore" className = "nav-link">Explore</Link>
                    <Link to = "" className = "nav-link">About Us</Link>
                </div>
                <h3 className = "nav-title">Re.Ward Nutrition</h3>
                <h3 onClick = {logout} className = "logout-btn">Logout</h3>
            </nav>
 
            <Outlet />
        </>

    )
}

export default Navbar