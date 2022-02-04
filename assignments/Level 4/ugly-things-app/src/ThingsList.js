import React from "react"
import Thing from "./Thing"
import axios from "axios"
import {ListContext} from "./ContextProvider"

// Make the Things List get the data from the API... map over it and add <Thing /> to the list

function ThingsList() {
const {thingsArray, handleDelete, handleEditSave} = React.useContext(ListContext)

const thingsListElement = thingsArray.map((thing, index) => {
    return <Thing key = {thing._id} {...thing} index = {index} onSave ={ ()=> handleEditSave(index)} onDelete= { () => handleDelete(index) } />
})
    return(
        <>
           {thingsListElement}
        </>
        
    )
}

export default ThingsList