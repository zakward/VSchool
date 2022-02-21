const express = require("express")
const app = express()
const bountiesRouter = require("./bountiesRouter.js")
const {v4: uuidv4} = require("uuid")
const morgan = require("morgan")
const mongoose = require("mongoose")

//Middleware
app.use(express.json()) // looks for request body, and turns it into `req.body`
app.use(morgan("dev")) //logs requests to the console


//Connect to Mongoose DB
mongoose.connect("mongodb+srv://zakward_bounty:AddyGrace18@cluster0.0cgyy.mongodb.net/bountydb?retryWrites=true&w=majority", 
    {
        // useNewUrlParser : true,
        // useUnifiedTypology: true,
        // useCreateIndex : true,
        // useFindAndModify: false
    },
    ()=> console.log("Connected to the bounty database")
)

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