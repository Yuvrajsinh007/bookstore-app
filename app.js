const express = require('express');
const app = express();
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use('/books', bookRoutes);
app.use('/', userRoutes);

module.exports = app;