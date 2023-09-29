const express=require('express')
const mongoose=require('mongoose')
const app=express()
app.use(express.static(__dirname + '/public'));

const profileRouter=require('./routes/profile')
const bookRouter=require('./routes/books')

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser:true,useUnifiedTopology:true})


app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index')
})

app.use('/profile',profileRouter)
app.use('/books',bookRouter)

app.listen(process.env.PORT||3000);