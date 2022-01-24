import React , {useState} from "react"

export default function DiceBox() {

    // const randomNumber = Math.floor(Math.random() * 6) + 1
    // console.log(randomNumber)

    function getRandomNumber() {
        return Math.floor(Math.random() * 6) + 1
    }

    const [numbers, setNumbers] = useState([0, 0, 0, 0, 0])

    function roll() {
        setNumbers([getRandomNumber(), getRandomNumber(),getRandomNumber(), getRandomNumber(), getRandomNumber(),])
    }

    return (
        <>
            <h1 className = "header">React Dice App</h1>
            <div className = "dice-container">
                <div className = "dice--number">{numbers[0]}</div>
                <div className = "dice--number">{numbers[1]}</div>
                <div className = "dice--number">{numbers[2]}</div>
                <div className = "dice--number">{numbers[3]}</div>
                <div className = "dice--number">{numbers[4]}</div>
                <button className = "roll--btn" onClick = {roll}>ROLL</button>
            </div>
            <p className = "instructions">Instructions: Click ROLL for new dice!</p>
        </>
    )
}