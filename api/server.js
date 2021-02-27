const express = require("express")
const carRouter=require("./cars/cars-router")
const server = express()

server.use(express.json())

server.use("/api/cars",carRouter)
server.get("/",(req,res)=>{
    res.send("hello from the server")
})

// DO YOUR MAGIC

module.exports = server
