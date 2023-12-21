const express = require("express");
const connectToDatabase = require("./db");
// const path = require('path')

connectToDatabase();

const app = express();

PORT = 3000;

// app.use(express.static('public'));
app.use(express.json())
app.use(express.static('../public'))
app.use('/api/auth',require('./routes/auth'))
app.use('/api/auth/api',require('./routes/auth'))


app.get('/login-page',(req,res)=>{
  res.sendFile('C:\\Users\\prana\\Desktop\\Portfolio\\pranav-portfolio\\public\\login.html')
})

app.post('/signup-page',(req,res)=>{
  res.sendFile('C:\\Users\\prana\\Desktop\\Portfolio\\pranav-portfolio\\public\\signup.html')
})

app.get('/',(req,res)=>{
  res.sendFile('C:\\Users\\prana\\Desktop\\Portfolio\\pranav-portfolio\\public\\index.html')  
})
app.get('/failed',(req,res)=>{
  res.sendFile('C:\\Users\\prana\\Desktop\\Portfolio\\pranav-portfolio\\public\\login.html')  
})



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

