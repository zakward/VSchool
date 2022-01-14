import { props } from "bluebird"
import React from "react"


let vacationSpots = [
    {
      place: "Meridian, Idaho",
      price: 40,
      timeToGo: "Spring"
    },{
      place: "Cancun",
      price: 900,
      timeToGo: "Winter"
    },{
      place: "China",
      price: 1200,
      timeToGo: "Fall"
    },{
      place: "Russia",
      price: 1100,
      timeToGo: "Summer"
    },{
      place: "Lebanon",
      price: 400,
      timeToGo: "Spring"
    }
  ]


export default function VacationCard(props) {
    return (
      <>
            <div className = "vacation-card">
              <img className = "card-img" src = {props.img} />
              <h1>Place: {props.place}</h1>
              <p>Price: ${props.price}</p>
              <p>Time To Go: {props.timeToGo}</p>
            </div>
   
      </>
  
    )
  }



 