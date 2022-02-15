const express = require("express")
const app = express()
const {v4: uuidv4} = require("uuid")

//middleware
app.use(express.json())

//routes
app.use("/todos", require("./todoRouter.js"))



app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})