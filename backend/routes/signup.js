const express = require("express");
const { handelUserSignup } = require("../controllers/user");
const router2 = express.Router();






//Create Operation with checking the already existing user
router2.post("/", handelUserSignup);



module.exports = router2;


