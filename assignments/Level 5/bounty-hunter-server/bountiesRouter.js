const express = require("express")
const bodyParser = require("body-parser")
const bountiesRouter = express.Router()
bountiesRouter.use(bodyParser.json()) // not sure why i needed this code
const jsonParser = bodyParser.json() // not sure why i needed this code
// const {v4: uuidv4} = require("uuid")
const Bounty = require("./models/bounty.js")
const mongoose = require("mongoose")




//Get All
// bountiesRouter.route("/")
//     .get((req, res) => {
//         res.status(200).send(bounty)
//     })

//Get All with Mongoose DB
bountiesRouter.get("/", (req, res, next) => {
    Bounty.find((err, bounties) => {
        if(err) {
            res.status(500)
            return next(err)
}
    return res.status(200).send(bounties)
    })
})

//Post One with Mongoose DB
bountiesRouter.post("/", (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })
})

 //Post One
    // bountiesRouter.post(jsonParser, (req,res) => {
    //     console.log(req.body)
    //     const newBounty = req.body
    //     console.log(newBounty)
    //     newBounty._id = uuidv4()
    //     bounty.push(newBounty)
    //     // res.send("Successfully added a new bounty!")
    //     res.status(201).send(newBounty)
    // })


 // Get One
bountiesRouter.get("/:bountyId",(req, res, next) => {
    const bountyId = req.params.bountyId
    Bounty.findOne( {_id: bountyId}, (err, foundBounty) => {
        if(!foundBounty) {
        const error = new Error("The bounty was not found.")
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundBounty)
})
    })
    

//Get by Type
// bountiesRouter.get("/search/type", (req, res, next) => {
//    const type = req.query.type
//    const filteredBounty = bounty.filter(bounty => bounty.type === type )
//    if(filteredBounty.length === 0) {
//        const error = new Error("No bounty type exists!")
//        res.status(500)
//        return next(error)
//    }
//    res.status(200).send(filteredBounty)
// }
// )

//Get by Type Mongoose DB
bountiesRouter.get("/search/type", (req, res, next) => {
    Bounty.find({ type: req.query.type }, (err, bounties) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

//Delete One
// bountiesRouter.delete("/:bountyId", (req, res, next) => {
//     const bountyId = req.params.bountyId
//     const bountyIndex = bounty.findIndex(bounty => bounty._id === bountyId )
//     if(bountyIndex === -1) {
//         const error = new Error("No bounty was found")
//         res.status(500)
//         return next(error)
//     }
//     console.log(bountyIndex)
//     bounty.splice(bountyIndex, 1)
//     res.send("Successfully deleted Bounty!")
// })

//DELETE ONE W/ Mongoose DB
bountiesRouter.delete("/:bountyId", (req, res, next) => {
    Bounty.findOneAndDelete({ _id: req.params.bountyId },(err, deletedItem) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted  ${deletedItem.firstName} ${deletedItem.lastName}`)
    })
})



//Put One
// bountiesRouter.put("/:bountyId", (req, res) => {
//     const bountyId = req.params.bountyId
//     const updateObject = req.body
//     const bountyIndex = bounty.findIndex(bounty => bounty._id === bountyId )
//     const updatedBounty = Object.assign(bounty[bountyIndex], updateObject) //the edited bounty usses Object.assign()  1.  index 2. updated Object
//     res.send(updatedBounty)
// })

//PUT ONE W/ Mongoos DB
bountiesRouter.put("/:bountyId", (req, res, next) => {
    Bounty.findOneAndUpdate(
        {_id: req.params.bountyId}, //find this one to update
        req.body, // update object with this data
        { new: true },  //send back updated version
        (err, updatedBounty) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }
    )
})


module.exports = bountiesRouter