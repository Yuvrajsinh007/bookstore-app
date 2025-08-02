const axios = require('axios');

const BASE_URL = 'http://localhost:5000'; // Make sure your server is running

// Task 10: Get all books (async/await)
async function getAllBooks() {
  try {
    const response = await axios.get(`${BASE_URL}/books`);
    console.log("All Books:\n", response.data);
  } catch (error) {
    console.error("Error fetching books:", error.message);
  }
}

// Task 11: Get book by ISBN (Promise)
function getByISBN(isbn) {
  axios.get(`${BASE_URL}/books/isbn/${isbn}`)
    .then(response => {
      console.log(`Book with ISBN ${isbn}:\n`, response.data);
    })
    .catch(error => {
      console.error("Error fetching by ISBN:", error.message);
    });
}

// Task 12: Get books by author (async/await)
async function getByAuthor(author) {
  try {
    const response = await axios.get(`${BASE_URL}/books/author/${author}`);
    console.log(`Books by ${author}:\n`, response.data);
  } catch (error) {
    console.error("Error fetching books by author:", error.message);
  }
}

// Task 13: Get books by title (async/await)
async function getByTitle(title) {
  try {
    const response = await axios.get(`${BASE_URL}/books/title/${title}`);
    console.log(`Books with title "${title}":\n`, response.data);
  } catch (error) {
    console.error("Error fetching books by title:", error.message);
  }
}

module.exports = {
  getAllBooks,
  getByISBN,
  getByAuthor,
  getByTitle
};