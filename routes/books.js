const router = require('express').Router();
//const Book = require('../models/Book'); // Import your Book model

router.get("/",(req,res)=>{
    res.render("books")
})


router.get("/", (req, res) => {
    const searchQuery = req.query.search || ''; 
    filterBooksByTitle(searchQuery, res);
  });
  
  // Function to filter books by title
  function filterBooksByTitle(searchQuery, res) {
    // Here, you would perform a database query to find books based on the search query.
    // For the sake of this example, let's assume you have a "Book" model and you want
    // to find books whose title contains the search query.
  
    // Replace this with your actual database query
    Book.find({ title: { $regex: new RegExp(searchQuery, 'i') } })
      .then((books) => {
        res.render("books", { books }); // Render the books view with filtered books
      })
      .catch((err) => {
        console.error("Error filtering books:", err);
        res.status(500).send("An error occurred while filtering books.");
      });
  }
module.exports = router;