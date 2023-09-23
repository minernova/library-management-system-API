const express=require('express')
const app=express()
app.use(express.static(__dirname + '/public'));




app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/books',(req,res)=>{
    res.render('books')
})
app.get('/profile',(req,res)=>{
    res.send('profile')
})

app.listen(process.env.PORT||3000);