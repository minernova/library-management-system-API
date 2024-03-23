require('dotenv').config();
const express=require('express')
const connectDB =require('./db/connect')
const cors =require('cors')
const app=express()

app.use(express.static(__dirname + '/public'));
const profileRouter=require('./routes/profile')
const bookRouter=require('./routes/books')
const validateStudentRoute=require('./routes/api/validate-student-route')
const issueBookRoute=require('./routes/api/issue-book-route')
const returnBookRoute=require('./routes/api/return-book-route')

app.set('view engine','ejs')

app.use(cors());


app.use('/profile',profileRouter)
app.use('/books',bookRouter)
app.use('/api/validate-student',validateStudentRoute)
app.use('/api/issue-book',issueBookRoute)
app.use('/api/return-book',returnBookRoute)

app.get('/',(req,res)=>{
    res.send(`Website hosted <a href='https://slms-wj6v.onrender.com'> here <a> `)
})
app.post('/books',(req,res)=>{
    res.render('books')
})
const start = async()=>{
    try{
        await connectDB(process.env.MONGODB_URI);
        app.listen(3000,()=>{
            console.log('listening on port 3000')
        })
    } catch(error){
        console.log(error);
    }
}

start();