const router = require('express').Router();
const Book = require('../models/Book'); // Import your Book model

// GET route for the Books page
router.get("/", async (req, res) => {
  try {
    const search = req.query.search || ''; 
    var book = await Book.find({});
    if (search) {
      book=book.filter(b => b.title.toLowerCase().includes(search) || b.authors.toLowerCase().includes(search));
    }

    const response = { book, search};
    console.log(response);
    res.status(200).send({books : response.book, search: response.search});
    

  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
