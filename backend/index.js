const express = require("express");
const connectToDatabase = require("./db");
const login = require('./routes/login')
const signup = require('./routes/signup')
const test = require('./routes/test')
const logout_page = require('./routes/logout')

const path = require('path')
// const path = require('path')

connectToDatabase();

const app = express();

PORT = 8000;

// app.use(express.static('public'));
app.use(express.json())
app.use(express.static('../public'))

app.set('view engine','ejs')
app.set('views',path.resolve('./views'))

app.use('/api/signup',signup)
app.use('/api/login',login)
app.use('/test',test)
app.use('/logout-page',logout_page)

// app.get('/test/render',(req,res)=>{
//   return res.render('home')
// })


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

