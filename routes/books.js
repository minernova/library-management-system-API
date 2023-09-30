const router = require('express').Router();
const Book = require('../models/Book'); // Import your Book model


const getBooks = async (req, res) => {
  const myBooks = await Book.find(req.query);
   
    res.status(200).json({ myBooks }); // Send the retrieved books
};


router.get('/', getBooks); // Handle GET requests to /books (Retrieve all books)

module.exports = router;