const express = require("express")
const mealRouter = express.Router()
const Meal = require("../models/Meal.js")
const User = require("../models/User.js")


//Post a Meal
mealRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id // to make sure the meal is assigned to the id of the requestor
    const meal = new Meal(req.body)
    meal.save(function (err, newMeal) {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newMeal)
    })
})

//Get All Meals
mealRouter.get("/", (req, res, next) => {
    Meal.find((err, meals) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        res.status(200).send(meals)
    })
})

//Get meals by user id // getting all your meals on login
mealRouter.get("/user", (req, res, next) => {
    Meal.find( { user: req.user._id }, (err, meals) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(meals)
    })
})

mealRouter.get("/mealCategory", (req, res, next) => {
    Meal.find( {user: req.user._id, mealCategory: req.query.mealCategory}, (err, foundCategory) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        res.status(200).send(foundCategory)
    })
})

mealRouter.get("/date", (req, res, next) => {
    Meal.find( {user: req.user._id, mealDate: req.query.mealDate}, (err, foundDate) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        res.status(200).send(foundDate)
    })
})







module.exports = mealRouter


