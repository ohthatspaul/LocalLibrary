const res = require('express/lib/response')
const BookInstance = require('../models/bookInstance')
const { DateTime } = require('luxon')

module.exports = {
  // Display list of all BookInstances
  book_instance_list: function (req, res, next) {
    BookInstance.find()
      .populate('book')
      .exec(function (err, list_book_instances) {
        if (err) {
          return next(err)
        }
        // Successful, so render
        res.render('book_instance_list', {
          title: 'Book Instance List',
          book_instance_list: list_book_instances,
        })
      })
  },

  // Display detail page for a specific BookInstance
  book_instance_detail: function (req, res) {
    res.send('NOT IMPLEMENTED: BookInstance detail' + req.params.id)
  },

  // Display BookInstance create form on GET
  book_instance_create_get: function (req, res) {
    res.send('NOT IMPLEMENTED: BookInstance create GET')
  },

  // Handle BookInstance create on POST
  book_instance_create_post: function (req, res) {
    res.send('NOT IMPLEMENTED: BookInstance create POST')
  },

  // Display BookInstance delete form on GET
  book_instance_delete_get: function (req, res) {
    res.send('NOT IMPLEMENTED: BookInstance delete GET')
  },

  // Handle BookInstance delete on POST
  book_instance_delete_post: function (req, res) {
    res.send('NOT IMPLEMENTED: BookInstance delete POST')
  },

  // Display BookInstance update form on GET
  book_instance_update_get: function (req, res) {
    res.send('NOT IMPLEMENTED: BookInstance update GET')
  },

  // Handle BookInstance update on POST
  book_instance_update_post: function (req, res) {
    res.send('NOT IMPLEMENTED: BookInstance update POST')
  },
}
