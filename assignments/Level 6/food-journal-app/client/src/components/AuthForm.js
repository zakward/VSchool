import React from "react"
import "../css/AuthForm.css"


function AuthForm(props) {

    const { handleChange, btnText, handleSubmit, errMsg, inputs: {username, password} } = props

    return (
        <>
            <form className = "auth-form" onSubmit = {handleSubmit}>
                <input
                    type = "text"
                    value = {username}
                    name = "username"
                    onChange = {handleChange}
                    placeholder = "Username"
                    className = "auth-input"
                />
                <input 
                    type = "text"
                    value = {password}
                    name = "password"
                    onChange = {handleChange}
                    placeholder = "Password"
                    className = "auth-input"
                />
                <button className = "auth-btn">{btnText}</button>
                <p style = {{ color: "red" }}> {errMsg} </p>
            </form>
            
        </>
    )
}

export default AuthForm