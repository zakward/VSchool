const express = require("express")
const app = express()
require("dotenv").config()
const morgan = require("morgan")
const mongoose = require("mongoose")
const expressJwt = require("express-jwt")  //acts as gatekeeper to check for tokens
const uri = process.env.MONGODB_URI
const PORT = process.env.PORT || 6000

app.use(morgan("dev")) //dev mode for error handling
app.use(express.json()) // make everything json


//connect to mongodb
mongoose.connect(
 uri, 
    (err) => {
        if (err) throw err
        console.log("Connected to the database")
    }
)

//routes
app.use("/auth", require("./routes/authRouter"))
app.use("/api", expressJwt( {secret: process.env.SECRET, algorithms: ['HS256']}))
app.use("/api/issue", require("./routes/issueRouter"))



//Error Handling
app.use((err, req, res, next) => {
    console.error(err)
    if(err.name === "UnathorizedError") {
        res.status(err.status)
    }
    return res.send({ message: err.message })
})

app.listen(PORT, () => {
    console.log(`[+] Starting server on port ${PORT}`)
})
