import React from"react"
import memesData from "../memesData"

export default function Meme() {
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
    }
    return (
        <>
            <div className = "form">
                <input type = "text" placeholder ="top text" className = "form--input"/>
                <input type = "text" placeholder = "bottom text" className = "form--input"/>
                <button onClick = {getMemeImage} className = "form--button">Get a new meme image 🖼</button>
            </div>
        </>
    )
}
