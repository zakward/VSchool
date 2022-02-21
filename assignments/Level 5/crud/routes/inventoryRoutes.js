const express = require("express")
const inventoryRoutes = express.Router()
const mongoose = require("mongoose")
const Inventory = require("../models/inventory.js")


//Get All
inventoryRoutes.get("/", (req, res, next) => {
    Inventory.find((err, inventories) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventories)
    })
})

//Get One
inventoryRoutes.get("/:inventoryId", (req, res, next) => {
    const inventoryId = req.params.inventoryId
    Inventory.findById(inventoryId, (err, item) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(item)
    })
})

//Delete One
inventoryRoutes.delete("/:inventoryId", (req, res, next) => {
    Inventory.findOneAndDelete({ _id: req.params.inventoryId }, (err, deletedItem) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedItem.item}`)
    })
})

//Post One
inventoryRoutes.post("/", (req, res, next) => {
    const newInventory = new Inventory(req.body)
    newInventory.save((err, savedInventory) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedInventory)
    })
})

//Put One
inventoryRoutes.put("/:inventoryId", (req, res, next) => {
    Inventory.findByIdAndUpdate(
        {_id: req.params.inventoryId},
        req.body,
        {new: true},
        (err, updatedInventory) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedInventory)
        }
    )
})






module.exports = inventoryRoutes