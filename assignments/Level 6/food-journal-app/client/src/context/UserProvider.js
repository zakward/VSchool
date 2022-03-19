import React, { useState } from "react"
import axios from "axios"

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function UserProvider(props) {

    const initState = { 
        user: JSON.parse(localStorage.getItem("user")) || { }, 
        token: localStorage.getItem("token") || "", 
        meals: [ ],
        errMsg: ""
    }

    const [ userState, setUserState ] = useState(initState)

    const [ calorieCounter, setCalorieCounter ] = useState(0)



    function signup(credentials) {
        axios.post("/auth/signup", credentials)
            .then(res => {
                const {user, token} = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
        .catch(err => handleAuthErr(err.response.data.message))
    }

    function login(credentials) {
        axios.post("/auth/login", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                // getUserPosts() /// change to get Meals
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.message))
    }

    function handleAuthErr(errMsg){
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg
        }))
    }

    function resetAuthErr(){
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg: ""
        }))
    }

    function logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState( {
            user: {},
            token: "",
            meals: [ ]
        })
    }

    function getUserMeals() {
        userAxios.get("/api/meal/user")
            .then(res => setUserState(prevUserState => ({
                ...prevUserState,
                meals: res.data
            })))
            .catch(err => console.log(err.response.data.errMsg))
    }

    function addMeal(newMeal) {
        userAxios.post("/api/meal", newMeal)
            .then(res => {
                console.log(res.data)
                setUserState(prevUserState => ({
                    ...prevUserState,
                    meals: [ ...prevUserState.meals, res.data]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
   }

   function editMeal(updates, mealId) {
    userAxios.put(`api/meal/${mealId}`, updates)
        .then(res => {   
              setUserState(prevUserState => prevUserState.meals.map(meal => meal._id !== mealId ? meal : res.data))
        })
        .catch(err => console.log(err))
}




    return (
        <UserContext.Provider
            value = { {
                ...userState,
                logout,
                login,
                signup,
                resetAuthErr,
                userAxios,
                getUserMeals,
                addMeal,    
                calorieCounter,
                setCalorieCounter, 
                editMeal        
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider