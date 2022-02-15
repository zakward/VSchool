const express = require("express") // import express to use express packages
const app = express() // good convention for server is to call it app...   express is a function that returns all the parts to be a server
// import { v4 as uuidv4 } from 'uuid';
// const uuid = require("uuidv4")
const userRouter = require("./routes/userRouter.js")
const employeesRouter = require("./routes/employeesRouter.js")


// middleware that fires on every request
userRouter.use(express.json())
employeesRouter.use(express.json()) //looks for a request body, and turns it into `req.body`


//Routes
app.use("/users", require("./routes/userRouter.js"))

app.use("/employees", require("./routes/employeesRouter.js"))


app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})  // function given by express // needs to arguments   1- PORT  2-  CALLBACK