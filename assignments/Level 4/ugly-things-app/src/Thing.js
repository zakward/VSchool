import React from "react"
import {ListContext} from "./ContextProvider"
import "./Thing.css"

function Thing(props) {
    const {handleDelete, handleEditChange, edits, setEdits, handleEditSave, isEditing, setIsEditing} = React.useContext(ListContext)
    // WHEN IS EDITS AND IS EDITING LIVES IN THING ONLY THE CURRENT THING IS EDITED but WHEN ITS IN CONTEXT ALL THINGS EDIT
    // const [isEditing, setIsEditing] = React.useState(false)
    // function toggleEdit() {
    //     setIsEditing(!isEditing)
    // }

    console.log(isEditing)
    return (
        <>
            <div className = "thing-container">
                {isEditing === props._id ? <input value={edits.title} onChange={handleEditChange} name = "title" className = "thing-edit" placeholder="New Title"/> : <h1 className = "thing-title">TITLE: {props.title}</h1>}
                {isEditing === props._id ? <input value = {edits.imgUrl} onChange = {handleEditChange} name = "imgUrl" className = "thing-edit" placeholder="New Img URL"/> : <img className = "thing-img" src = {props.imgUrl}/>}
                {isEditing === props._id ? <input value = {edits.description} onChange = {handleEditChange} name = "description" className = "thing-edit" placeholder="New Description"/> : <h2 className = "thing-description">DESCRIPTION: {props.description}</h2>}
                <button className = "thing-btn" onClick = {props.onDelete}>DELETE</button>
                {isEditing === props._id ? <button className = "thing-btn" onClick = {props.onEdit}>SAVE</button> : <button className = "thing-btn" onClick = {() => setIsEditing(isEditing === props._id ? -1 : props._id)}>EDIT</button>}
            </div>
        </>
    )
}



export default Thing