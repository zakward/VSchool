import React from "react"
import Pet from "./Pet"


export default function Friend(props) {
        const petElements = props.pets.map(pet => {
            return <Pet
                            name = {pet.name}
                            breed = {pet.breed}
                             />
        })
    return (
        <>
            <div className = "friend-container">
                <h3 className= "friend-name">Name: {props.name}</h3>
                <h3 className = "friend-age">Age: {props.age}</h3>
                {petElements}
            </div>
        </>
    )
}