const tasks = require('./utils/asyncAxios');

tasks.getAllBooks();               // Task 10
tasks.getByISBN("9780001");        // Task 11
tasks.getByAuthor("Author A");     // Task 12
tasks.getByTitle("Book One");      // Task 13