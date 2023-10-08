const Student = require('../models/Student'); // Import your Book model
const router = require('express').Router();


router.get("/", async (req, res) => {
    var search = req.query.search || ''
    var student = await Student.find({})
    console.log(student)
    res.render("profile", { student: student})
})

module.exports = router;