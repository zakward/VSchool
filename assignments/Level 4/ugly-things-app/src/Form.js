import React, {useContext} from "react"
import "./Form.css"
import {ListContext} from "./ContextProvider"

function Form() {
    const {thing, handleChange, handleSubmit} = useContext(ListContext)

    return (
        <>
            <form className = "form">
                <ul className = "form-container">
                    <li>
                        <input className = "form-input" 
                                    type ="text" 
                                    placeholder="Title" 
                                    name = "title"
                                    value = {thing.title}
                                    onChange = {handleChange}
                                    required
                        /> 
                    </li>
                    <li>
                        <input className = "form-input" 
                                    type ="text" 
                                    placeholder="Img Url"
                                    name ="imgUrl"
                                    value = {thing.imgUrl}
                                    onChange = {handleChange}
                                    required
                        />
                    </li>
                    <li>
                        <input className = "form-input" 
                                    type ="text" 
                                    placeholder="Description" 
                                    name = "description"
                                    value = {thing.description}
                                    onChange = {handleChange}
                                    required
                        />
                    </li>
                </ul>
                <button className = "submit-btn" 
                                onClick = {handleSubmit}
                               type = "submit">SUBMIT
                               
                               
                </button>
                
            </form>
        </>
    )
}

export default Form