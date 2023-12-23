const express = require('express')
const Login = require("../models/Login");
const router3 = express.Router()


router3.get('/',(req,res)=>{
    return res.render('login_with_name',)
})