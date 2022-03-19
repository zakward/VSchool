const mongoose = require("mongoose")
const Schema = mongoose.Schema

const mealSchema = new Schema( {

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    mealCategory: {
        type: String,
        required: true
    },
    totalCalories: {
        type: Number
    },
    imgUrl: {
        type: String
    },
    mealDate: {
        type: String
    },
    user : {
        type: Schema.Types.ObjectId, //id from another item 
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Meal", mealSchema)