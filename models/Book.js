const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    authors:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    total_count:{
        type:Number,
        required:true
    },
    available_count:{
        type:Number,
        required:true
    },

});