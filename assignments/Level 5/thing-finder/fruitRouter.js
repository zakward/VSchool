const express = require("express")
const fruitRouter = express.Router()


const fruits = [
    {
        type: "banana",
        brand: "chiquita",
        price: 0.5
    },
    {
        type: "apple",
        brand: "gala",
        price: 0.5
    },
    {
        type: "orange",
        brand: "naval",
        price: 0.75
    },
    {
        type: "grape",
        brand: "purple",
        price: 1005
    },
    {
        type: "strawberry",
        brand: 'shortcake',
        price: 0
    }
]

//Get All
fruitRouter.get("/", (req, res) => {
    res.send(fruits)
})

//Post One
fruitRouter.post("/", (req, res) => {
    const newFruit = req.body
    fruits.push(newFruit)
    res.send(`You have successfully added ${newFruit.type} to the database! `)
})

//Get by Type
fruitRouter.get("/search/type", (req, res) => {
    const type = req.query.type
    const filteredFruit = fruits.filter(fruit => fruit.type === type)
    res.send(filteredFruit)
})

fruitRouter.get("/search/price", (req, res) => {
    const max = req.query.max === "" ? 1000 : Number(req.query.max)
    const min = req.query.min === ""  ? 0 : Number(req.query.min)
    console.log(max, min)
    const pricedFruit = fruits.filter(fruit => fruit.price <= max && fruit.price > min)
    res.send(pricedFruit)
})



module.exports = fruitRouter