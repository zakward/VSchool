const express =require("express")
const app = express()


//middleware
app.use(express.json())



//Routes
app.use("/college", require("./collegesRouter.js"))















app.listen(8000, () => {
    console.log("The server is running on port 8000")
})