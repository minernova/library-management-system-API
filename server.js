const express=require('express')
const mongoose=require('mongoose')
const app=express()
app.use(express.static(__dirname + '/public'));

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser:true,useUnifiedTopology:true})


app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/books',(req,res)=>{
    res.render('books')
})
app.get('/profile',(req,res)=>{
    res.render('profile')
})

app.listen(process.env.PORT||3000);