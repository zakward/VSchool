const express = require("express")
const app = express()
const bountiesRouter = require("./bountiesRouter.js")
const {v4: uuidv4} = require("uuid")
const morgan = require("morgan")

//Middleware
app.use(express.json())
app.use(morgan("dev")) //logs requests to the console

//Routes
app.use("/bounty", require("./bountiesRouter.js"))



//error handler  usually placed right above app.listen
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(8000, () => {
    console.log("The server is running on port 8000")
})