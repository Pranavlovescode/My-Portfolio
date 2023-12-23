const express = require("express");
const Login = require("../models/Login");
const bodyParser = require("body-parser");
const router1 = express.Router();
// const path = require('path')

router1.use(bodyParser.urlencoded({ extended: true }));

//For Login Operation
router1.post("/", async (req, res) => {
  const email = req.body.email;
  const pass = req.body.pass;
  try {
    const data = await Login.findOne({ email });
    // const name = await Login.find({name})
    if (!data || data.pass !== pass) {
      console.log(
        "Attempted email and password\nemail : ",
        email,
        "\n",
        "password : ",
        pass,
        
      );
    } else {      
      console.log(data);    
      res.render('login_with_name',{
        loginName: data.name,
      })
    //   console.log('rendered successfully')
    }
  } catch (e) {
    // ErrorCaptureStackTrace(e);
    console.log("This error occured during login session ",e);
  }
});

module.exports = router1;
