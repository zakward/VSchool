const express = require("express")
const todoRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const todos = [
    {
        name: "clean the barn",
        description: "shovel poop, add wood chips, fix stall door",
        imgUrl: "http://www.randomhorseimg",
        completed: false,
        _id: uuidv4()
    },
    {
    name: "take out the trash",
    description: "kids room, play room, kitchen",
    imgUrl: "http://www.manbeingwhipped.png",
    completed: false,
    _id: uuidv4()
    }
]

//getAll
todoRouter.get("/", (req, res) => {
    res.send(todos)
})

//getOne
todoRouter.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todos.find(todo => todo._id === todoId)
    res.send(foundTodo)
})

//postOne
todoRouter.post("/", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send(`Successfully added ${newTodo.name}`)
})

//deleteOne
todoRouter.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("Successfully deleted Todo!!!!")
})

//putOne
todoRouter.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const updateObject = req.body
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], updateObject)
    res.send(updatedTodo)
})


module.exports = todoRouter