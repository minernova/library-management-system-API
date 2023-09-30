require('dotenv').config();
const connectDB = require('./db/connect');
const Book = require('./models/Book');

const BookJson = require('./books.json');

const start = async()=>{
    try{
        await connectDB(process.env.MONGODB_URI);
        await Book.create(BookJson);
    } catch(error){
        console.log(error);
    }
}

start();