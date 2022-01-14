import React from "react"
import picture1 from "../image 28.png"
import picture2 from "../image 30.png"
import picture3 from "../image 26.png"
import picture4 from "../image 27.png"
import picture5 from "../image 29.png"
import picture6 from "../image 22.png"
import picture7 from "../image 23.png"
import picture8 from "../image 25.png"
import picture9 from "../image 24.png"


export default function Main() {
    return (
        <>
            <div className = "pictures-container">
                <img src ={picture1} className = "picture1" />
                <img src ={picture2} className = "picture2" />
                <img src ={picture3} className = "picture3" />
                <img src ={picture4} className = "picture4" />
                <img src ={picture5} className = "picture5" />
                <img src ={picture6} className = "picture6" />
                <img src ={picture7} className = "picture7" />
                <img src ={picture8} className = "picture8" />
                <img src ={picture9} className = "picture9" />
            </div>
            <div className = "main-container">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts--all without leaving home.</p>
            </div>
        </>
    )
}