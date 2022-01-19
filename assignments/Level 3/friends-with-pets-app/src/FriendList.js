import React from "react"
import FriendData from "./FriendData"
import Friend from "./Friend"
import Pet from "./Pet"

export default function FriendList() {
    const friendElement = FriendData.map(friend => {
        return     <Friend
                            name = {friend.name}
                            age = {friend.age}
                            pets = {friend.pets}
                            />
                   
    })
    return (
        <>
         <h1 className = "friends-header">Friends List</h1>
        {friendElement}
        </>
            
    )
}
