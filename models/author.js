const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
})

// Virtual for author's full name

AuthorSchema.virtual('name').get(function () {
  // handle exception where author does not have a name by returning empty string
  let full_name = ''
  if (this.first_name && this.family_name) {
    full_name = this.family_name + ', ' + this.first_name
  }
  if (!this.first_name || !this.family_name) {
    full_name = ''
  }
  return full_name
})

// Virtual for author's lifespan
AuthorSchema.virtual('lifespan').get(function () {
  let life_time = ''
  if (this.date_of_birth) {
    life_time = this.date_of_birth.getYear().toString()
  }
  life_time += ' - '
  if (this.date_of_death) {
    life_time += this.date_of_death.getYear()
  }
  return life_time
})

// Virtual for author's URL
AuthorSchema.virtual('url').get(function () {
  return '/catalog/author/' + this._id
})

// Export model
module.exports = mongoose.model('Author', AuthorSchema)
