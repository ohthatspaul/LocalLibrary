const Author = require('../models/author')

module.exports = {
  // Display a list of all Authors
  author_list: function (req, res) {
    res.send('NOT IMPLEMENTED: Author list')
  },

  // Display detail page for a specific Author
  author_detail: function (req, res) {
    res.send('NOT IMPLEMENTED: Author detail' + req.params.id)
  },

  // Display Author create form on GET
  author_create_get: function (req, res) {
    res.send('NOT IMPLEMENTED: Author create GET')
  },

  // handle Author create on POST
  author_create_post: function (req, res) {
    res.send('NOT IMPLEMENTED: Author create post')
  },

  // Display Author delete form on GET
  author_delete_get: function (req, res) {
    res.send('NOT IMPLEMENTED: Author delete GET')
  },

  // Handle Author delete on POST
  author_delete_post: function (req, res) {
    res.send('NOT IMPLEMENTED: Author delete POST')
  },

  // Display Author update for on GET
  author_update_get: function (req, res) {
    res.send('NOT IMPLEMENTED: Author update GET')
  },

  // Handle Author update on POST
  author_update_post: function (req, res) {
    res.send('NOT IMPLEMENTED: Author update POST')
  },
}
