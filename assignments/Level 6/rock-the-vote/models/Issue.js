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
    upVoteUsers: [{
        type: Schema.Types.ObjectId, 
        ref: "User"
    }],
    downVoteUsers: [{
        type: Schema.Types.ObjectId, 
        ref: "User"
    }],
    // totalVotes : {
    //     type : Number
    //     // default: upVoteUsers.length - downVoteUsers.length
    // },
    user : {
        type: Schema.Types.ObjectId, //id from another item 
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Issue", issueSchema)