const express = require("express");
const Login = require("../models/Login");
const bodyParser = require("body-parser");
const router2 = express.Router();


router2.use(bodyParser.urlencoded({ extended: true }));


//Create Operation with checking the already existing user
router2.post("/", async (req, res) => {
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
});



module.exports = router2;


