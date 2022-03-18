const express = require("express")
const commentRouter = express.Router()
const Comment = require("../models/Comment.js")
const User = require("../models/User.js")



//Post a Comment
commentRouter.post("/:issueId", (req, res, next) => {
    req.body.user = req.user._id
    req.body.issue = req.params.issueId
    const comment = new Comment(req.body)
    comment.save(function (err, newComment) {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newComment)
    })
})

//Get ALL Comments
commentRouter.get("/", (req, res, next) => {
    Comment.find((err, comments) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.send(comments)
    })
})

//Get Comment by Issue Id
commentRouter.get("/:issueId", (req, res, next) => {
    Comment.find({issue: req.params.issueId})
    .populate("user")
    .exec((err, comments) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.send(comments)
    })
})




module.exports = commentRouter


