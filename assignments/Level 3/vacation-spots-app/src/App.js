import React from "react"
import VacationCard from "./VacationCard"
import vacaData from "./spotsData"

export default function App() {
    const cardElements = vacaData.map(spot => {
        return <VacationCard 
            img = {spot.img}
            place = {spot.place}
            price = {spot.price}
            timeToGo = {spot.timeToGo}
        />
    })
    return (
      <>
        {cardElements}
      </>
    )
  }
//   return (
//     <>
//         <VacationCard
//               img = "https://images.unsplash.com/photo-1558390326-72dd7e654ca3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
//               place = "Meridian, Idaho"
//               price = "40"
//               timeToGo = "Spring"
//           />

//     <VacationCard
//               img = "https://images.unsplash.com/photo-1558390326-72dd7e654ca3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
//               place = "Cancun"
//               price = "900"
//               timeToGo = "Winter"
//       />
//     <VacationCard
//               img = "https://media.istockphoto.com/photos/cancun-beach-with-boat-picture-id956105474?s=2048x2048"
//               place = "Cancun"
//               price = "900"
//               timeToGo = "Winter"
//           />

//   <VacationCard
//               img = "https://media.istockphoto.com/photos/traffic-at-bridge-with-sunset-downtown-in-hong-kong-picture-id1299415909?s=2048x2048"
//               place = "China"
//               price = "1200"
//               timeToGo = "Fall"
//           /> 

// <VacationCard
//               img = "https://media.istockphoto.com/photos/brown-bear-or-ursus-arctos-beringianus-fishing-in-the-kurile-lake-picture-id1346389501?s=2048x2048"
//               place = "Russia"
//               price = "1100"
//               timeToGo = "Summer"
//           /> 

// <VacationCard
//               img = "https://media.istockphoto.com/photos/flag-of-lebanon-at-byblos-castle-picture-id1144376711?s=2048x2048"
//               place = "Lebanon"
//               price = "400"
//               timeToGo = "Spring"
//           /> 
//     </>

//   )
// }

