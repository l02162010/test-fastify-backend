const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  birthday: Date,
  email: String,
  phone: String,
  address: String,
  score: Number,
  love: Number,
  badge: {
    type: Map,
    of: String
  }
})

module.exports = mongoose.model('User', userSchema)