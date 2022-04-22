const Genre = require('../models/genre')

module.exports = {
  // List all the Genres.
  genre_list: function (req, res, next) {
    Genre.find({}, 'name')
      .sort('ascending')
      .exec(function (err, list_genre) {
        if (err) {
          return next(err)
        }
        //Successful, so render
        res.render('genre_list', {
          title: 'Genre List',
          genre_list: list_genre,
        })
      })
  },

  // Display detail page for a specific Genre.
  genre_detail: function (req, res) {
    res.send('NOT IMPLEMENTED: Genre detail: ' + req.params.id)
  },

  // Display Genre create form on GET.
  genre_create_get: function (req, res) {
    res.send('NOT IMPLEMENTED: Genre create GET')
  },

  // Handle Genre create on POST.
  genre_create_post: function (req, res) {
    res.send('NOT IMPLEMENTED: Genre create POST')
  },

  // Display Genre delete form on GET.
  genre_delete_get: function (req, res) {
    res.send('NOT IMPLEMENTED: Genre delete GET')
  },

  // Handle Genre delete on POST.
  genre_delete_post: function (req, res) {
    res.send('NOT IMPLEMENTED: Genre delete POST')
  },

  // Display Genre update form on GET.
  genre_update_get: function (req, res) {
    res.send('NOT IMPLEMENTED: Genre update GET')
  },

  // Handle Genre update on POST.
  genre_update_post: function (req, res) {
    res.send('NOT IMPLEMENTED: Genre update POST')
  },
}
