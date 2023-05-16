var addbook = require('./AddBook').addBook
var updatebook = require('./UpdateBook').updateBook
var deletebook = require('./DeleteBook').remove
module.exports = {
  addbook,
  updatebook,
  deletebook
}