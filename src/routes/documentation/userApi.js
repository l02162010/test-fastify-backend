exports.addUserSchema = {
  description: 'Create a new user',
  tags: ['user'],
  summary: 'Creates new user',
  body: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      password: { type: 'string' },
      confirmPwd: { type: 'string' },
      gender: {type: 'string' },
      birthday: { type: 'number' },
      email: { type: 'string' },
      phone: { type: 'string' },
      address: { type: 'string' },
      score: { type: 'number' },
      love: { type: 'number' },
      badge: { type: 'object' }
    },
    required: ['email', 'password', 'confirmPwd', 'gender']
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: { type: 'string' },
        name: { type: 'string' },
        password: { type: 'string' },
        confirmPwd: { type: 'string' },
        gender: {type: 'string' },
        birthday: { type: 'number' },
        email: { type: 'string' },
        phone: { type: 'string' },
        address: { type: 'string' },
        score: { type: 'number' },
        love: { type: 'number' },
        badge: { type: 'object' },
        __v: { type: 'number' }
      }
    }
  }
}
exports.getSingleUser = {
  description: 'Create a new user',
  tags: ['user'],
  summary: 'Creates new user',
  headers: {
    type: 'object',
    properties: {
      'Authorization': { type: 'string' }
    },
    required: ['Authorization']
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        data: { type: 'object',
          properties: {
            email: { type: 'string' },
            name: { type: 'string' },
            gender: {type: 'string' },
            birthday: { type: 'object',
            properties: {
              year: {type: 'number'},
              month: {type: 'number'},
              date: {type: 'number'}
            }},
            email: { type: 'string' },
            phone: { type: 'string' },
            address: { type: 'string' },
            score: { type: 'number' },
            love: { type: 'number' },
            discription: { type: 'string' },
            badge: { type: 'object' }
          }
        },
        _id: { type: 'string' },
        message: { type: 'string' },
        success: { type: 'boolean'},
        __v: { type: 'number' }
      }
    }
  }
}
