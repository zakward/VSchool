import React, {useState} from "react"
import axios from "axios"

const ListContext = React.createContext()

function ContextProvider(props) {
    const defaultThing = {
        title: "",
        imgUrl: "",
        description: ""
    }
    const [thing, setThing] = React.useState(defaultThing)

    function handleChange(event) {
        const {name, value} = event.target
        setThing(prevThing => ({...prevThing, [name] : value}))
    }
    const [thingsArray, setThingsArray] = useState([])

    React.useEffect( ( ) =>
        axios.get("https://api.vschool.io/zakward/thing")
        // .then(res =>console.log(res.data))
        .then(res => setThingsArray(res.data))
        .catch(err => console.log(err))
        , [] )

    //post request on submit
    function handleSubmit(e) {
        e.preventDefault()

        //new item being added to API
        const newThing = {
            title: thing.title,
            imgUrl: thing.imgUrl,
            description : thing.description
        }

        console.log(newThing)
        // posted new item to API
        axios.post("https://api.vschool.io/zakward/thing", newThing)
            .then(res => setThingsArray(prevThingsArray => (
                [...prevThingsArray, res.data]
            )))
            .catch(err => console.log(err))

        setThing(defaultThing)
    }
    
    //DELETE THING FUNCTION
    function handleDelete(index) {
        console.log(thingsArray[index])
        axios.delete("https://api.vschool.io/zakward/thing/" + thingsArray[index]._id)
            .then(res => setThingsArray(prevThingsArray => {
                return prevThingsArray.filter(thing => thing._id !== thingsArray[index]._id )
            }))
            .catch(err => console.log(err))
    }
    
    //EDITING
    const [edits, setEdits] = React.useState({
        title: "",
        imgUrl: "",
        description: ""
    })
    function handleEditChange(e){
        const {name, value} = e.target
        setEdits(prevEdits => ({...prevEdits, [name]: value}))
    }
    const [isEditing, setIsEditing] = React.useState(-1)

    function handleEditSave(index) {
        thingsArray.map(thing => {
                setIsEditing(-1)
                console.log(thing._id)
                console.log(thingsArray[index]._id)
                console.log(edits)
                axios.put("https://api.vschool.io/zakward/thing/" + thingsArray[index]._id, edits)
                    .then(res => setThingsArray(prevThingsArray => {
                        return prevThingsArray.map(thing => {
                            return thing._id === thingsArray[index]._id ? edits : thing
                        })
                    }))
                    .catch(err => console.log(err))
        } )
    }
  

    // JSX
    return (
        <ListContext.Provider value = {{edits, isEditing, setIsEditing, setEdits, handleEditSave, handleEditChange, handleChange, handleDelete, handleSubmit, thing, thingsArray, setThingsArray}}>
            {props.children}
        </ListContext.Provider >
    )
}


export {ContextProvider, ListContext}