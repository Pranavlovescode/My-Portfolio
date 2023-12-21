const express = require("express");
const Login = require("../models/Login");
const bodyParser = require("body-parser");
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

// For getting all the data
router.get("/pyttsx3/give-me-the-data", async (req, res) => {
  const storedData = await Login.find({});
  res.send(storedData);
});

router.post("/pyttsx3", async (req, res) => {
    // Using the destruction method which takes name , email , pass from req.body
    const {name,email,pass}=req.body
  try {
    const storedData = await Login.findOne({
      name,email,pass
    });
    if (storedData) {
      res.status(404).send("The user already exists");
    } else {
      res.status(600).send("You can make the login");
    }
  } catch (error) {
    console.error(error);
    res.status(401).send("Something wrong occured. Please try again.");
  }
  
});

//For Login Operation
router.post("/api", async (req, res) => {
  const email = req.body.email;
  const pass = req.body.pass;
  try {
    const data = await Login.findOne({ email });
    if (!data || data.pass !== pass) {
      // res.status(404).sendFile("C:\\Users\\prana\\Desktop\\Portfolio\\pranav-portfolio\\public\\failed-login.html");
      
      console.log(
        "Attempted email and password\nemail : ",
        email,
        "\n",
        "password : ",
        pass
      );
    } else {
      console.log(data);
      res.sendFile(
        "C:\\Users\\prana\\Desktop\\Portfolio\\pranav-portfolio\\public\\login-respond.html"
      );
    
    }
  } catch (e) {
    ErrorCaptureStackTrace(e);
    res.send("This error occured during login session ");
  }
});

//Create Operation with checking the already existing user
router.post("/", async (req, res) => {
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
      res.sendFile(
        "C:\\Users\\prana\\Desktop\\Portfolio\\pranav-portfolio\\public\\respond.html"
      );
      console.log(saveData);
      // res.status(600).send('You can make the login')
    }
  } catch (error) {
    console.error(error);
    res.status(401).send("Something wrong occured. Please try again.");
  }
});



module.exports = router;
