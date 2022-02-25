import React from "react"

function Event(props) {
    return(
        <>
            <h1>{props.name}</h1>
            <h3>{props.type}</h3>
        </>
    )
}

export default Event