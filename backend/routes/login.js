const express = require("express");
const { handelUserLogin } = require("../controllers/user");
const bodyParser = require("body-parser");
const router1 = express.Router();

router1.use(bodyParser.urlencoded({ extended: true }));




//For Login Operation
router1.post("/",handelUserLogin);

module.exports = router1;
