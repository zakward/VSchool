import React, {useState} from "react"
import Badge from "./Badge"

export default function Form() {
    
    const [formData, setFormData] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favoriteFood: "",
            aboutYourself: ""
        }
    )
        const [badgeArray, setBadgeArray] = useState([ ]) 

        //gather data
        function handleChange(event) {
            const {name, value} = event.target
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    [name]: value
                }
            })
        }
        //push data to new badge
        function handleSubmit(event) {
            event.preventDefault()
            console.log(formData)
            // const newBadge = {...FormData}
            setBadgeArray(prevBadgeArray => {
                return [...prevBadgeArray, 
                {
                    firstName : formData.firstName,
                    lastName: formData.lastName,
                    phone: formData.phone,
                    email: formData.email,
                    placeOfBirth: formData.placeOfBirth,
                    favoriteFood: formData.favoriteFood,
                    aboutYourself: formData.aboutYourself
                }]
            })
        }

        const badgeElements = badgeArray.map((badge, index) => {
          return <Badge key = {index} {...badge} />
        })
        // console.log(formData)

    return (
        <>
            <form className = "form"
                        onSubmit={handleSubmit}            
            >
                <input 
                    type = "text" 
                    minLength= {3}
                    placeholder="First Name"
                    name= "firstName"
                    value= {formData.firstName}
                    onChange= {handleChange}
                    required

                />

                <input 
                    type = "text" 
                    minLength= {3}
                    placeholder="Last Name" 
                    name= "lastName"
                    value= {formData.lastName}
                    onChange= {handleChange}
                    required
                />

                <input 
                    type = "email" 
                    minLength= {3}
                    placeholder="Email"
                    name= "email"
                    value= {formData.email}
                    onChange= {handleChange}
                    required
                />

                <input 
                    type = "text" 
                    minLength= {3}
                    placeholder="Place of Birth" 
                    name= "placeOfBirth"
                    value= {formData.placeOfBirth}
                    onChange= {handleChange}
                    required
                />

                <input 
                    type = "number" 
                    minLength= {3}
                    placeholder="Phone" 
                    name= "phone"
                    value= {formData.phone}
                    onChange= {handleChange}
                    required
                />

                <input 
                    type = "text" 
                    minLength= {3}
                    placeholder="Favorite Food"
                    name= "favoriteFood" 
                    value= {formData.favoriteFood}
                    onChange= {handleChange}
                    required
                />

                <textarea 
                    className = "aboutYourself" 
                    type = "text" 
                    minLength= {3}
                    placeholder="Tell us about yourself" 
                    name= "aboutYourself"
                    value= {formData.aboutYourself}
                    onChange= {handleChange}
                    required
                />

                <button className = "submit--btn"
                                type = "submit">Submit
                </button>
            </form>

            <ul>
                {badgeElements}
            </ul>
        </>
    )
}