const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  user: String,
  target: String,
  description: String
})

module.exports = mongoose.model('Comment', commentSchema)