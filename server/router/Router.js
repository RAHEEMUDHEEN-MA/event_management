const express = require('express');
const SignUp = require('../controllers/Sign_up');
const UserLogin = require('../controllers/UserLogin');
const AdminLogin = require('../controllers/AdminLogin');
const AllUsers = require('../controllers/AllUsers');
const VerifyToken = require('../middlewares/verifyToken');
const NewEvent = require('../controllers/NewEvent');
const viewEvents = require('../controllers/viewevents');
const deleteEvent = require('../controllers/deleteEvent');
const AllEvents = require('../controllers/AllEvents');
const deleteUser = require('../controllers/dltuser');
const Router=express.Router()

Router.route("/test").get((req,res)=>{res.send("hi duddeee, You are Home")})

Router.route("/usersignup").post(SignUp)
Router.route("/userlogin").post(UserLogin)
Router.route("/adminlogin").post(AdminLogin)
Router.route("/users").get(AllUsers)
Router.route("/addevent").post(NewEvent)
Router.route("/viewevents").get(VerifyToken,viewEvents)
Router.route("/discover").get(AllEvents)
Router.route("/deletevent").delete(VerifyToken,deleteEvent)
Router.route("/deleteuser").delete(VerifyToken,deleteUser)  

 
   
module.exports=Router 