exports.addScoreStoreSchema = {
  description: 'Create a new scoreStore',
  tags: ['scoreStore'],
  summary: 'Create a new scoreStore',
  body: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      price: { type: 'number' },
      description: { type: 'string' },
      img: { type: 'string' },
      score: { type: 'number' }
    },
    required: ['name', 'price', 'score']
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: { type: 'string' },
        name: { type: 'string' },
        price: { type: 'number' },
        description: { type: 'string' },
        img: { type: 'string' },
        score: { type: 'number' },
        __v: { type: 'number' }
      }
    }
  }
}
