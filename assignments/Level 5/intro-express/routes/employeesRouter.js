const express = require("express")
const bodyParser = require("body-parser")
const employeesRouter = express.Router()
const { v4: uuidv4 } = require('uuid');
employeesRouter.use(bodyParser.json()) // not sure why i needed this code
const jsonParser = bodyParser.json() // not sure why i needed this code


const employees = [
    {name: "wilma", age: 20, _id: uuidv4() },
    {name: "betsy", age: 30,  _id: uuidv4() },
    {name: "tina", age: 25,  _id: uuidv4() },
    {name: "rebecca", age: 45,  _id: uuidv4() },
    {name: "natalie", age: 16,  _id: uuidv4() }
]


//Routes

employeesRouter.get("/", (req, res) => {
    res.send(employees)
})

employeesRouter.post("/", jsonParser, (req, res) => {
    const newEmployee = req.body
    newEmployee._id = uuidv4()
    employees.push(newEmployee)
    res.send("New Employee has been added!!!")
})





module.exports = employeesRouter