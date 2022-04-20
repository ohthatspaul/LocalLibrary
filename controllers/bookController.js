const Book = require('../models/book')

module.exports = {
  // Home page
  index: function (req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page')
  },

  // Display list of all books.
  book_list: function (req, res) {
    res.send('NOT IMPLEMENTED: Book list')
  },

  // Display detail page for a specific book.
  book_detail: function (req, res) {
    res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id)
  },

  // Display book create form on GET.
  book_create_get: function (req, res) {
    res.send('NOT IMPLEMENTED: Book create GET')
  },

  // Handle book create on POST.
  book_create_post: function (req, res) {
    res.send('NOT IMPLEMENTED: Book create POST')
  },

  // Display book delete form on GET.
  book_delete_get: function (req, res) {
    res.send('NOT IMPLEMENTED: Book delete GET')
  },

  // Handle book delete on POST.
  book_delete_post: function (req, res) {
    res.send('NOT IMPLEMENTED: Book delete POST')
  },

  // Display book update form on GET.
  book_update_get: function (req, res) {
    res.send('NOT IMPLEMENTED: Book update GET')
  },

  // Handle book update on POST.
  book_update_post: function (req, res) {
    res.send('NOT IMPLEMENTED: Book update POST')
  },
}
