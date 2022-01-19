import React from "react"
import star from "../star.png"

export default function Content(props) {
let badgeText
if(props.openSpots === 0) {
    badgeText = "SOLD OUT"
} else if (props.location === "Online") {
    badgeText = "ONLINE"
}

    return (
        <>
            <div className = "content-container">
                {badgeText && <div className = "card-badge">{badgeText}</div>}
                <img src = {`../${props.coverImg}`}/>
                <div className = "rating-container">
                    <img src = {star} />
                    <p className = "rating">{props.stats.rating}</p>
                    <p>({props.stats.reviewCount}) •</p>
                    <p className = "location"><span>{props.location}</span></p>
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

