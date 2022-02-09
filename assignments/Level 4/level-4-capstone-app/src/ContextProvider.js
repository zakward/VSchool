import React from "react"
import axios from "axios"

const ListContext = React.createContext()

function ContextProvider(props) {



  


    return (
        <ListContext.Provider>
            {props.children}
        </ListContext.Provider>
    )
}
export {ContextProvider, ListContext}