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