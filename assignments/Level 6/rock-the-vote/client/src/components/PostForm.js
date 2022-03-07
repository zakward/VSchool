import React,  {useState } from "react"


const initInputs = {
    title: "",
    description: "",
    imgUrl: ""
}

function PostForm(props) {

    const { addPost } = props
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name] :  value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        addPost(inputs)
        setInputs(initInputs)
    }

    const { title, description, imgUrl } = inputs
    return (
        <>
            <form onSubmit = {handleSubmit}>
                <input 
                    type = "text"
                    name = "title"
                    value = {title}
                    onChange = {handleChange}
                    placeholder = "Title"
                />
                <input
                    type = "text"
                    name = "description"
                    value = {description}
                    onChange = {handleChange}
                    placeholder = "Description"
                />
                <input 
                    type = "text"
                    name = "imgUrl"
                    value = {imgUrl}
                    onChange = {handleChange}
                    placeholder = "Image Url"
                />
                <button>Add Post</button>
            </form>
        </>
    )
}

export default PostForm