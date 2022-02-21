const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")


//middleware
app.use(express.json())
app.use(morgan("dev"))

mongoose.connect("mongodb+srv://zakward_bounty:AddyGrace18@cluster0.0cgyy.mongodb.net/inventoryDB?retryWrites=true&w=majority",
() => console.log("Connected to the inventory database")
)

//Routes
app.use("/inventory", require("./routes/inventoryRoutes.js"))

//Error Handling
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})



app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})