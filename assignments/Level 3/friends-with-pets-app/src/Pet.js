import React from "react"

export default function Pet(props) {
    return (
        <>
            <div className = "pet-container">
                <h3 className = "pet-name">Pet Name: {props.name}</h3>
                <h3 className = "pet-breed">Pet Breed: {props.breed}</h3>
            </div>
        </>
    )
}