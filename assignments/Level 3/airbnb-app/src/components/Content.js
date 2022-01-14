import React from "react"
// import contentPic from "../katie-zaferes.png"
import star from "../star.png"

export default function Content(props) {
    return (

        <>
            <div className = "content-container">
                <img src = {`../${props.img}`}/>
                <div className = "rating-container">
                    <img src = {star} />
                    <p className = "rating">{props.rating}</p>
                    <p>({props.reviewCount}) •</p>
                    <p className = "country"><span>{props.country}</span></p>
                </div>
                <div className = "content-title">
                    <p>{props.title}</p>
                    <p className = "price"><span className = "bold">From ${props.price}</span> / person</p>    
                    
                </div>

            </div>
            {console.log(props.img)}
        </>
    )
}

