const { DateTime } = require('luxon')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookInstanceSchema = new Schema({
  // this references the associated book
  book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'],
    default: 'Maintenance',
  },
  due_back: { type: Date, default: Date.now },
})

// Virtual for bookInstance's URL
BookInstanceSchema.virtual('url').get(function () {
  return '/catalog/bookinstance/' + this._id
})

// Format the date
BookInstanceSchema.virtual('due_back_formatted').get(function () {
  return DateTime.fromJSDate(this.due_back).toLocaleString(DateTime.DATE_MED)
})
// Export model
module.exports = mongoose.model('BookInstance', BookInstanceSchema)
