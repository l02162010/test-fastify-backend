// External Dependancies
const boom = require('boom')

// Get Data Models
const ScoreStore = require('../models/ScoreStore')

// Get all scoreStores
exports.getScoreStores = async (req, reply) => {
  try {
    const scoreStores = await ScoreStore.find()
    return scoreStores
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single scoreStore by ID
exports.getSingleScoreStore = async (req, reply) => {
  try {
    const id = req.params.id
    const scoreStore = await ScoreStore.findById(id)
    return scoreStore
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new scoreStore
exports.addScoreStore = async (req, reply) => {
  try {
    const scoreStore = new ScoreStore(req.body)
    return scoreStore.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing scoreStore
exports.updateScoreStore = async (req, reply) => {
  try {
    const id = req.params.id
    const scoreStore = req.body
    const { ...updateData } = scoreStore
    const update = await ScoreStore.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a scoreStore
exports.deleteScoreStore = async (req, reply) => {
  try {
    const id = req.params.id
    const scoreStore = await ScoreStore.findByIdAndRemove(id)
    return scoreStore
  } catch (err) {
    throw boom.boomify(err)
  }
}
