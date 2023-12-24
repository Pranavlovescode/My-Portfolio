const express = require("express");
const bodyParser = require("body-parser");
const Login = require("../models/Login");
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

const handelUserLogin = async (req, res) => {
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
        pass
      );
    } else {
      console.log(data);
      res.render("login_with_name", {
        loginName: data.name,
      });
      //   console.log('rendered successfully')
    }
  } catch (e) {
    // ErrorCaptureStackTrace(e);
    console.log("This error occured during login session ", e);
  }
};

const handelUserSignup = async (req, res) => {
    const data = {
      name: req.body.name,
      email: req.body.email,
      pass: req.body.pass,
    };
    try {
      const storedData = await Login.findOne({
        name: data.name,
        email: data.email,
        pass: data.pass,
      });
      if (storedData) {
        res.status(404).send("The user already exists");
      } else {
        const saveData = Login(data);
        saveData.save();
        // res.send('Data inserted to the database')
        res.render('respond')
        console.log(saveData);
        // res.status(600).send('You can make the login')
      }
    } catch (error) {
      console.error(error);
      res.status(401).send("Something wrong occured. Please try again.");
    }
  }

module.exports = {
    handelUserLogin,
    handelUserSignup,
}