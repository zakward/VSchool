import { props } from "bluebird"
import React from "react"
import data from "./data"

export default function TravelCard(props) {
    return (
        <>
            <div className = "travel-card-container">
                <img className = "card-img" src = {props.imageUrl}/>
                <div className = "location-container">
                    <img className = "maps-img" src = "./mapsImg.png" />
                    <span className = "location">{props.location}</span>
                    <a href = {props.googleMapsUrl}><span className = "map-link" >View On Google Maps</span></a>
                </div>
                <h1 className = "title">{props.title}</h1>
                <p className = "dates">{props.startDate} - {props.endDate}</p>
                <p className = "description">{props.description}</p>
                

            </div>
        </>
    )
}