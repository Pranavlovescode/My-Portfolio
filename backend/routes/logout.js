const express = require("express");
const router4 = express.Router();

router4.post("/", (req, res) => {
  res.sendFile(
    "C:\\Users\\prana\\Desktop\\Portfolio\\pranav-portfolio\\public\\index.html"
  );
});

module.exports=router4
