const mongoose = require("mongoose");

// Connecting to MongoDB

const connectToDatabase = () => {
    mongoose.connect("mongodb://localhost/portfolio-pranav")
    .then(() => console.log("connected to database->mongodb"))
    .catch((err) => console.error(err));
};
//Exporting the function as a module.
module.exports = connectToDatabase;