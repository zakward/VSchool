const express = require("express")
const app = express()
const fruitRouter = require("./fruitRouter.js")


//middleware
app.use(express.json())

//Route
app.use("/fruits", require("./fruitRouter.js"))





app.listen(7000, () => {
    console.log("The server is running on Port 7000")
})