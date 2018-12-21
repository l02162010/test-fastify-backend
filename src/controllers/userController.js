// External Dependancies
const boom = require('boom')
// Get Data Models
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const moment = require('moment')



// Get all users
exports.getUsers = async (req, reply) => {
  try {
    const users = await User.find()
    return users
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single user by ID
exports.getSingleUser = async (req, reply) => {
  try {
    let authToken = req.headers.authorization
    var decoded = jwt.verify(authToken, 'shhhhh')
    let result = null
    let id = decoded.userId
    let exp = decoded.exp
    let now = Math.floor(Date.now() / 1000)
    if(now < exp) {
      let res = await User.findById(id)
      result = {
        success: true,
        message: '成功',
        data: res
      }
      console.log(res)
      reply
      .send(result)
    }else{
      result = {
        success: false,
        message: 'token 過期'
      }
      reply
      .code(401)
      .send(result)
    }
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new user
exports.addUser = async (req, reply) => {
  try {
    const user = new User(req.body)
    // const token = fastify.jwt.sign(req.body, onToken)
    return user.save()
  } catch (err) {
    throw boom.boomify(err)
  }
  function onToken (err, token) {
    if (err) return reply.send(err)
    req.log.info('User created')
    reply.send({ token })
  }
}

// Update an existing user
exports.updateUser = async (req, reply) => {
  try {
    let authToken = req.headers.authorization
    var decoded = jwt.verify(authToken, 'shhhhh')
    const id = decoded.userId
    let exp = decoded.exp
    let now = Math.floor(Date.now() / 1000)
    if (now < exp) {
      const user = req.body
      const { ...updateData } = user
      console.log(user)
      const update = await User.findByIdAndUpdate(id, updateData, { new: true })
      console.log(update)
      reply
      .send(update)
    }else{
      reply
      .code(401)
      .send({
        success: false,
        message: 'token 過期'
      })
    }

  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a user
exports.deleteUser = async (req, reply) => {
  try {
    const id = req.params.id
    const user = await User.findByIdAndRemove(id)
    return user
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.login = async (req, reply) => {
  try {

    const email = req.body.email
    const password = req.body.password
    let res = await User.findOne({ email })
    if(!res){
      return { success: false, message: '登入失敗'}
    }else{
      if (res.password === password){
        let token = jwt.sign({ userId: res._id , exp: Math.floor(Date.now() / 1000) + (60 * 60)}, 'shhhhh')
        return { success: true, message: '登入成功' , token}
      } else {
        return { success: false, message: '登入失敗'}
      }
    }
    // req.log.info('some info')
    // return 'hi'
  } catch (err) {
    throw boom.boomify(err)
  }
}
