const books = require('../data/books.json');
const fs = require('fs');

exports.getAllBooks = (req, res) => {
  res.status(200).json(books);
};

exports.getBookByISBN = (req, res) => {
  const isbn = req.params.isbn;
  const book = books[isbn];
  book ? res.json(book) : res.status(404).json({ msg: "Book not found" });
};

exports.getBooksByAuthor = (req, res) => {
  const author = req.params.author.toLowerCase();
  const result = Object.values(books).filter(
    (book) => book.author.toLowerCase() === author
  );
  res.json(result);
};

exports.getBooksByTitle = (req, res) => {
  const title = req.params.title.toLowerCase();
  const result = Object.values(books).filter(
    (book) => book.title.toLowerCase() === title
  );
  res.json(result);
};

exports.getBookReview = (req, res) => {
  const isbn = req.params.isbn;
  const book = books[isbn];
  book ? res.json(book.reviews) : res.status(404).json({ msg: "Book not found" });
};

exports.addReview = (req, res) => {
  const { isbn } = req.params;
  const { username, review } = req.body;
  if (!books[isbn]) return res.status(404).json({ msg: "Book not found" });
  books[isbn].reviews[username] = review;
  fs.writeFileSync('./data/books.json', JSON.stringify(books, null, 2));
  res.json({ msg: "Review added/updated" });
};

exports.deleteReview = (req, res) => {
  const { isbn } = req.params;
  const { username } = req.body;
  if (!books[isbn]?.reviews[username]) {
    return res.status(404).json({ msg: "Review not found" });
  }
  delete books[isbn].reviews[username];
  fs.writeFileSync('./data/books.json', JSON.stringify(books, null, 2));
  res.json({ msg: "Review deleted" });
};
