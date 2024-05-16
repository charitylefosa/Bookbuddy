// bookRoutes.js
const express = require('express');
const router = express.Router();
const Book = require('../models/bookModel');

// Display books by genre
router.get('/books/:genre', async (req, res) => {
  try {
    const genre = req.params.genre;
    const books = await Book.find({ genre });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

