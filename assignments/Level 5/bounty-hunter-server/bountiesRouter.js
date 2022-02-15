const express = require("express")
const bodyParser = require("body-parser")
const bountiesRouter = express.Router()
bountiesRouter.use(bodyParser.json()) // not sure why i needed this code
const jsonParser = bodyParser.json() // not sure why i needed this code
const {v4: uuidv4} = require("uuid")


const bounty = [
    {
        firstName: "Doc",
        lastName: "Holiday",
        isDead: false,
        bountyAmount: 500,
        type: "jedi" ,
        _id: uuidv4()
},
{
        firstName: "Hulk",
        lastName: "Hogan",
        isDead: true,
        bountyAmount: 250,
        type: "Sith" ,
        _id: uuidv4()
}
]

//Get All
bountiesRouter.route("/")
    .get((req, res) => {
        res.send(bounty)
    })
 //Post One
    .post(jsonParser, (req,res) => {
        console.log(req.body)
        const newBounty = req.body
        console.log(newBounty)
        newBounty._id = uuidv4()
        bounty.push(newBounty)
        res.send("Successfully added a new bounty!")
    })


 // Get One
bountiesRouter.get("/:bountyId",(req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounty.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})

//Get by Type
bountiesRouter.get("/search/type", (req, res) => {
   const type = req.query.type
   const filteredBounty = bounty.filter(bounty => bounty.type === type )
   res.send(filteredBounty)
    // const filteredBounty = bounty.filter(bounty => bounty.type === type)
    // res.send(filteredBounty)
    // console.log(req)
}
)

//Delete One
bountiesRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounty.findIndex(bounty => bounty._id === bountyId )
    console.log(bountyIndex)
    bounty.splice(bountyIndex, 1)
    res.send("Successfully deleted Bounty!")
})

//Put One
bountiesRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const updateObject = req.body
    const bountyIndex = bounty.findIndex(bounty => bounty._id === bountyId )
    const updatedBounty = Object.assign(bounty[bountyIndex], updateObject) //the edited bounty usses Object.assign()  1.  index 2. updated Object
    res.send(updatedBounty)
})


module.exports = bountiesRouter