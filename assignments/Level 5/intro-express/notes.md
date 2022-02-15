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
        