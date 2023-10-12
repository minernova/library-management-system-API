const Book = require('../../models/Book');
const Student = require('../../models/Student');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const studentRFID = req.query.sId;
    const bookRFID = req.query.bId;

    var student = await Student.findOne({ rfid_no: studentRFID });
    var book = await Book.findOne({ rfid: bookRFID });
    console.log(student);
    console.log(book);

    var contains = false;
    var newArray = student.books_issued.filter((b, i) => {
        if (!b.book_id.equals(book._id)) {
            return true;
        }
        else {
            contains = true;
            return false;
        }
    })
    console.log(newArray);

    student.books_issued = newArray

    if (contains)
        book.available_count = book.available_count + 1;
    await book.save();
    await student.save();
    console.log("-------------after--------------");
    console.log(book, student);




    res.send({ isValidStudent: true });
});

module.exports = router;