const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    isDead: {
        type: String,
        required: true
    },
    bountyAmount: {
        type: String,
        required: true
    },
    type: String,
})

module.exports = mongoose.model("Bounty", bountySchema)