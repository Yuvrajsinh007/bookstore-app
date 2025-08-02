const express = require('express');
const {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle,
  getBookReview,
  addReview,
  deleteReview
} = require('../controllers/bookController');
const router = express.Router();

router.get('/', getAllBooks);
router.get('/isbn/:isbn', getBookByISBN);
router.get('/author/:author', getBooksByAuthor);
router.get('/title/:title', getBooksByTitle);
router.get('/review/:isbn', getBookReview);
router.put('/review/:isbn', addReview);
router.delete('/review/:isbn', deleteReview);

module.exports = router;