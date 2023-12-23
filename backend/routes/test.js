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
  const { name, email, pass } = req.body;
  try {
    const storedData = await Login.findOne({
      name,
      email,
      pass,
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

router.get('/',(req,res)=>{
    return res.render('home')
})

module.exports = router;
