const documentation = require('../documentation/userApi')
const userController = require('../../controllers/userController')

const router = [
  {
    method: 'GET',
    url: '/api/users',
    handler: userController.getUsers
  },
  {
    method: 'GET',
    url: '/api/user',
    handler: userController.getSingleUser,
    schema: documentation.getSingleUser
  },
  {
    method: 'POST',
    url: '/api/users',
    handler: userController.addUser,
    schema: documentation.addUserSchema
  },
  {
    method: 'PUT',
    url: '/api/users/:id',
    handler: userController.updateUser
  },
  {
    method: 'DELETE',
    url: '/api/users/:id',
    handler: userController.deleteUser
  },
  {
    method: 'POST',
    url: '/api/login',
    handler: userController.login
  }
]
module.exports = router
