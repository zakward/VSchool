const mongoose = require("mongoose")
const Schema = mongoose.Schema

const issueSchema = new Schema( {
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imgUrl : {
        type: String
    },
    user : {
        type: Schema.Types.ObjectId, //id from another item in
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Issue", issueSchema)