exports.addCommentSchema = {
  description: 'Create a new comment',
  tags: ['comment'],
  summary: 'Creates new comment',
  body: {
    type: 'object',
    properties: {
      user: { type: 'string' },
      target: { type: 'string' },
      description: { type: 'string' }
    },
    required: ['user', 'target', 'description']
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: { type: 'string' },
        user: { type: 'string' },
        target: { type: 'string' },
        description: { type: 'string' },
        __v: { type: 'number' }
      }
    }
  }
}
