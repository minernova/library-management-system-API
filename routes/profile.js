const Student = require('../models/Student'); // Import your Book model
const router = require('express').Router();


router.get("/", async (req, res) => {
    var search = req.query.search || ''
    var students = await Student.find({})
    var student={}
    if(search){
        student=students.find(student => student.enrollment_no.toLowerCase().match(search))

    }
    console.log(student)
    res.send({ student: student,search: search})
})

module.exports = router;