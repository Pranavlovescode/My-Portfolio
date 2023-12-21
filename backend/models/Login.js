const mongoose = require('mongoose')
const {Schema} = mongoose
// Creating the model for the portfolio
const portfolioSchema = new Schema({
    name:{
        type:String,
        
    },
    email:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('login',portfolioSchema)