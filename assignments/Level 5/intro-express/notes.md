Steps to set up Express Environment to start a node server

$ npm init -y   -- creates a package JSON

$ npm install express  -- creates express dependencies

create main file  -- changed to server.js  
    -create server.js


SETUP
Beginning of the document////
const express = require("express") // import express to use express packages
const app = express() // good convention for server is to call it app...   express is a function that returns all the parts to be a server

//End of the document
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})  // function given by express // needs to arguments   1- PORT  2-  CALLBACK

express automatically creates JSON from your javascript


Vocabulary

# Route
    * like an eventListener for http requests

# Endpoint
    * "/utem"  "/user"    

# PORT

    *localhost: 9000/  //your machine

    stay above 3000 and less than 9000..  React runs on 3000
    
# Nodemon

    *npm install -g nodemon

    -global install allows you to only have to install once


    REST API architecture

 # REST
    -representational state transfer

# RESOURCE
    - single item (object) in a database
    /user

# COLLECTION
    -collection of similar items in a database
    /users

# BASE (root) URL -http://amazon.com

# API Endpoint
    -http://amazon.com/movies/fjskl92070r59823 --id of a movie

# PARAMETERS    
    /movies/: movieID

# QUERY (QUERY STRING   ) - /movies?genre=action&year=1999

# CLIENT
    -FRONTEND

# SERVER
    -Intermediary (API, database)

# REQUEST METHOD
    CRUD
    -get, post, put, delete

# Middleware 
    -a function that fires on the inbetween
    What is it?
        app.use()
        1. (optional) - mount Path ( endpoint)
        1. callback function - receives the request, response objects, also the "next" function

        "next function"
            -moves on to the next middleware in line on our server
            - next()

# Request Body
    req.body

# UUID 
    -$ npm install uuid
    -creates unique IDs

# Express Router - 
    -enables to modularize our routes in express

# Modular File

# URL PARAMETERS

Parts of a URL
    - base - http://amazon.com
    - endpoint - http://amazon.com/images
    - parameter - http://amazon.com/images/02938r490wuf09

# URL Queries

    -Query string - (typically to filter results)
    - begins with the "?"
    - built of key=value pairs
    -multiple queries separated by "&"

# installing Morgan
    -console errors in express

    logger
        -npm install morgan  locally
        

# Status Codes

    #200 -- successful request (get requests)
    #201 -- successful insert / successful update (post requests)
    #401 -- Unathorized
    #404 -- Not Found
    #500 -- Server Error

# Introduction to Mongoose

    -PURPOSE
        - create models
        -query data

    -Connect
    npm install mongoose


# Mongoose Schemas
    -Blueprints for our data


# Mongoose Models
    -Models have a Name, and a Blueprint (Schema)
    -Models are used to perform the CRUD operations on data created with the Model

Mongoose MongoDB Methods

$inc
    - increment
    - increment properties from the scheme
    - ex.. likes by book

$regex
    - regular expression
    -search by a specific expression

$pull
    -updates
$push
    -updates

$where
    -in depth and specific search


$exec    

where("likes).gte(5).exec(err, books)


# Git Collaboration

# Start the Repo, clone master

# Start the Repo, Clone Master

1) Create git repository on github
2) Connect/Clone locally
3) Set up the code base   -get add --all, git commit -m, and git push ( all from master or main) - only time to push to main

4) Clone the Repository
    -clone or copy to your termain
    - git clone <pasted command from github>

5) Create a feature branch
    -git branch <branchname>
6) Checkout to that branch
-git checkout <branchname>
7) Commit and push branch to github
    --get add --all, git commit -m, and git push 
8) locally run git checkout master
9) pull down remote master
    -git pull
10) checkout back to local branch
    -git checkout <branchname>

11) merge local master into local branch
    - git merge --no-ff master
    -if goes well
        -shift + ZZ
    -if it goes badly
        -resolve conflicts locally
12) push branch to github
    ---get add --all, git commit -m, and git push 
 13) create pull request on github
 