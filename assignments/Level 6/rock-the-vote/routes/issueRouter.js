  const express = require("express")
const issueRouter = express.Router()
const Issue = require("../models/Issue.js")
const User = require("../models/User.js")
const jwt = require("jsonwebtoken")
const { useRoutes } = require("react-router-dom")

//Get all issues
issueRouter.get("/", (req, res, next) => {
    Issue.find((err, issues) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.send(issues)
    })
})

//Post an issue by user Id
issueRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id //makes sure the issue is = to the id of the requestor
    const issue = new Issue(req.body)
    issue.save(function (err, newIssue) {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newIssue)
    })
})

//Get issues by user id // getting all your posts on login
issueRouter.get("/user", (req, res, next) => {
    Issue.find( { user: req.user._id }, (err, issues) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

//get user by id
issueRouter.get("/:userId", (req, res, next) => {
    User.findById(req.params.userId,
        (err, issues) => {               
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues.username)
    })
})

//Get issue by id
issueRouter.get("/:issueId", (req, res, next) => {
    Issue.findById(req.params.issueId, (err, issue) => {
        if (err) {
            res.status(500)
            return next(new Error("No issue was found"))
        }
        return res.send(issue)
    })
})

//EDIT an Issue
issueRouter.put("/:issueId", (req, res, next) => {
    Issue.findByIdAndUpdate(
        {_id: req.params.issueId, user: req.user._id},
        req.body,
        { new : true },
        (err, updatedIssue) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        }
    )
})

//Edit the Total Votes
issueRouter.put("/upVotesUsers/:issueId", (req, res, next) => {
    Issue.findByIdAndUpdate(
        {_id: req.params.issueId},
        {
            $addToSet: {upVoteUsers: req.user._id},
            $pull: {downVoteUsers: req.user._id},
    },
        { new : true },
        (err, updatedVoteCount) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedVoteCount)
        }
    )
})


issueRouter.put("/downVotesUsers/:issueId", (req, res, next) => {
    Issue.findByIdAndUpdate(
        {_id: req.params.issueId},
        {
            $addToSet: {downVoteUsers: req.user._id},
            $pull: {upVoteUsers: req.user._id}
    },
        { new : true },
        (err, updatedVoteCount) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedVoteCount)
        }
    )
})






//DELETE an Issue by ID
issueRouter.delete("/:issueId", (req, res, next) => {
    Issue.findByIdAndDelete( {_id: req.params.issueId, user: req.user._id },
        (err, deletedIssue) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted Issue: ${deletedIssue.title}`)
        })
})


module.exports = issueRouter