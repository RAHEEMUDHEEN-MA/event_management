const express = require('express');
const cors = require("cors");
const Router = require('./router/Router');
const Connection = require('./configs/Connection');

const app=express()
app.use(express.json()); 
app.use(cors()); 
Connection()
// app.get("/",(req,res)=>{
//     res.send("hi du-ude ")
// })

app.use("/",Router)

const PORT=8585
app.listen(PORT,console.log(`server is running on ${PORT}`))     