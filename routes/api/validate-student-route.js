const Student = require('../../models/Student');

const router = require('express').Router();

router.get('/', async (req, res)=> {
    var rfid = req.query.rfid || '';
    var isValidStudent = false;
    if (rfid) {
        var student=await Student.findOne({rfid_no:rfid});
        if(student) {
            console.log(student);
            isValidStudent=true;
        }
        
    }

    res.send({ isValidStudent });
});

module.exports = router;