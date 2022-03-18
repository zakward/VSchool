import React, { useState } from "react"
import axios from "axios"

export const UserContext = React.createContext()

const userAxios = axios.create() // 

userAxios.interceptors.request.use(config => {
    const token  = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function UserProvider(props) {

    const initState = { 
        user: JSON.parse(localStorage.getItem("user")) || { }, 
        token: localStorage.getItem("token") || "", 
        post: [ ],
        errMsg: ""
    }

    const [ allPosts, setAllPosts ] = useState( [  ] )

    const [userState, setUserState] = useState(initState)

    function signup(credentials) {
        axios.post("/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data
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
                getUserPosts()
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.message))
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
            post: [ ]
        })
    }

    function handleAuthErr(errMsg){
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg
        }))
    }


    function getUserPosts() {
        userAxios.get("/api/issue/user")
            .then(res => setUserState(prevUserState => ({
                ...prevUserState,
                post: res.data
            })))
            .catch(err => console.log(err.response.data.errMsg))
    }


    function addPost(newPost) {
        userAxios.post("/api/issue", newPost)
        .then(res => {
            setUserState(prevUserState => ({
                ...prevUserState,
                post :  [ ...prevUserState.post, res.data ]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }


 

    function getAllPosts() {
        userAxios.get("/api/issue")
            .then(res => setAllPosts(res.data))
            .catch(err => console.log(err))
    }



    // function setUser(user, token) {
    //     setUserState(prevUserState => ({
    //         ...prevUserState,
    //         user,
    //         token
    //     }))
    // }
    

    return (
        <UserContext.Provider
            value = { { 
                ...userState,
                signup,
                login,
                logout,
                addPost,
                resetAuthErr,
                getAllPosts,
                setAllPosts,
                allPosts,
                userAxios,
                getUserPosts
            }
        }
        >
            { props.children }
        </UserContext.Provider>
    )
}

export default UserProvider
