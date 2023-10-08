require('dotenv').config();
const connectDB = require('./db/connect');
const Student = require('./models/Student');

const StudentJson = require('./students.json');

const start = async()=>{
    try{
        await connectDB(process.env.MONGODB_URI);
        await Student.deleteMany();
        await Student.create(StudentJson);
    } catch(error){
        console.log(error);
    }
}

start();