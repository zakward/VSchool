import React, { useState, useContext } from "react"
import AuthForm from "../components/AuthForm"
import { UserContext } from "../context/UserProvider.js"
import "../css/Auth.css"
import AuthPic from "../IMG_7353-2.jpg"
import RWlogo from "../logo.png"

function Auth(props) {

    const initInputs = {username: "", password: ""}

    const [inputs, setInputs] = useState(initInputs)

    const [ toggle, setToggle ] = useState(false)

    const { signup, login, errMsg, resetAuthErr } = useContext(UserContext)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name] : value
        }))
    }

    function toggleForm() {
        setToggle(prev => !prev)
        resetAuthErr()
    }

    function handleSignup(e) {
        e.preventDefault()
        signup(inputs)
    }

    function handleLogin(e) {
        e.preventDefault()
        login(inputs)
    }


    return (
        <>
            <h1 className = "main-header">Re.Ward Nutrition </h1>
            <div className = "auth-container">
            <img src = {RWlogo} className = "logo" />
                <div className = 'login-wrapper'>
                    <h2 className = "auth-title">The All-in-One Food Journal</h2>
                    <img src = {AuthPic} className = "auth-img" />
                    <ul className = "auth-description">
                        <li className = "item-one">Log/Track Meals</li>
                        <li className = "item-two">Filter lists by Meal Category/Date</li>
                        <li className = "item-three">Search for Meal Suggestions and Recipes</li>
                    </ul>
                </div>
                    { !toggle ?
                        <>
                            <AuthForm 
                                handleChange = {handleChange}
                                handleSubmit = {handleSignup}
                                inputs = {inputs}
                                btnText = "Sign Up"
                                errMsg = {errMsg}
                            />
                            <p onClick = {toggleForm} className = "auth-question">Already a member?</p>
                        </>

                        :

                        <>
                            <AuthForm
                                handleChange = {handleChange}
                                handleSubmit = {handleLogin}
                                inputs = {inputs}
                                btnText = "Login"
                                errMsg = {errMsg}
                            />
                            <p onClick = {toggleForm} className = "auth-question">Not a member?</p>
                        </>
                    }
            
        </div>
     </>
    )
}

export default Auth