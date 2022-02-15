const express = require("express")
const collegesRouter = express.Router()

const college = {
        name: "Arkansas",
        location: "Fayetteville, Arkansas",
        mascot: "Razorbacks"
    }


//middleware
collegesRouter.use("/", (req, res, next) => {
    console.log("The first middleware was detected")
    next()
})

collegesRouter.use("/", (req, res, next) => {
    console.log("The req property was added")
    req.body = {name : "UofA"} 
    next()
})


collegesRouter.get("/", (req, res) => {
    console.log(college)
    res.send(college)
})

module.exports = collegesRouter