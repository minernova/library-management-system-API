const mongoose=require('mongoose')

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    enrollment_no:{
        type:String,
        required:true
    },
    rfid_no:{
        type:String,
        required:true
    },
    books_issued:{
        type:Array,
        default:[]
    },

})

module.exports=mongoose.model('Student',studentSchema)