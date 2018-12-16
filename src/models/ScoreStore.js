const mongoose = require('mongoose')

const scoreStoreSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  img: String,
  score: Number
})

module.exports = mongoose.model('ScoreStore', scoreStoreSchema)