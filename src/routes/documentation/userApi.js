exports.addUserSchema = {
  description: 'Create a new user',
  tags: ['user'],
  summary: 'Creates new user',
  body: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      account: { type: 'string' },
      password: { type: 'string' },
      birthday: { type: 'number' },
      email: { type: 'string' },
      phone: { type: 'string' },
      address: { type: 'string' },
      score: { type: 'number' },
      love: { type: 'number' },
      badge: { type: 'object' }
    },
    required: ['name', 'account', 'password', 'birthday', 'email', 'phone']
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: { type: 'string' },
        name: { type: 'string' },
        account: { type: 'string' },
        password: { type: 'string' },
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