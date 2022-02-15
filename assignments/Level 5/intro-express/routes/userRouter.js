const express = require("express")
const bodyParser = require("body-parser") // have to install body parser to get post requests to work $ npm install body-parser
const userRouter = express.Router()
const { v4: uuidv4} = require("uuid")  // $ npm install uuid
userRouter.use(bodyParser.json()) // not sure why i needed this code
const jsonParser = bodyParser.json() // not sure why i needed this code





const users = [
    {name: "joe", age: 20, _id: uuidv4() },
    {name: "fred", age: 30,  _id: uuidv4() },
    {name: "tom", age: 25,  _id: uuidv4() },
    {name: "bill", age: 45,  _id: uuidv4() },
    {name: "sam", age: 16,  _id: uuidv4() }
]

    //1. Endpoint( mount path)  2.  Callback   (req =request,  res =response)
    // userRouter.get("/", (req, res)=> {
    //     res.send(users)
    // })
    
    // userRouter.post("/", (req, res) => {
    //     const newUser = req.body
    //     newUser._id = uuidv4()
    //     users.push(newUser)
    //     res.send("Successfully added new user")
    // })


// Alternate way of routing
    userRouter.route("/")
        .get((req, res) => {
            res.send(users)
        })
        .post(jsonParser, (req, res) => {  //had to add jsonParser 
            console.log(req.body)
            const newUser = req.body
            console.log(newUser)
            newUser._id = uuidv4()
            users.push(newUser)
            res.send("Successfully added new user")
            })











module.exports = userRouter