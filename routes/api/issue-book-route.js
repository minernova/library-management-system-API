const Book = require('../../models/Book');
const Student = require('../../models/Student');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const studentRFID = req.query.sId;
    const bookRFID = req.query.bId;
    var message='';

    var student = await Student.findOne({ rfid_no: studentRFID });
    var book=await Book.findOne({ rfid: bookRFID });
    console.log(student);
    console.log(book);

    if(book.available_count==0) {
        res.send({ message:"book not available" });
    }
    if(student.books_issued){
        student.books_issued.forEach(b=>{
            if(b.book_id===book._id){
                message="book already issued to student"
                return;
            }
        })

    }
    if(message){
        res.send({ message:message});
    }
    else{
        student.books_issued.push({
            book_id: book._id,
            name: book.title,
            issue_date: Date.now()
        });
        book.available_count=book.available_count-1;
        await book.save();
        await student.save();
        console.log("-------------after--------------");
        console.log(book,student);
        res.send({message:book.title+" issued to "+student.name})

    }





});

module.exports = router;