const documentation = require('../documentation/commentApi')
const commentController = require('../../controllers/commentController')

const router = [
  {
    method: 'GET',
    url: '/api/comments',
    handler: commentController.getComments
  },
  {
    method: 'GET',
    url: '/api/comments/:id',
    handler: commentController.getSingleComment
  },
  {
    method: 'POST',
    url: '/api/comments',
    handler: commentController.addComment,
    schema: documentation.addCommentSchema
  },
  {
    method: 'PUT',
    url: '/api/comments/:id',
    handler: commentController.updateComment
  },
  {
    method: 'DELETE',
    url: '/api/comments/:id',
    handler: commentController.deleteComment
  }
]
module.exports = router