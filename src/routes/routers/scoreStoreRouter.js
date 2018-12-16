const documentation = require('../documentation/scoreStoreApi')
const scoreStoreController = require('../../controllers/scoreStoreController')

const router = [
  {
    method: 'GET',
    url: '/api/scoreStores',
    handler: scoreStoreController.getScoreStores
  },
  {
    method: 'GET',
    url: '/api/scoreStores/:id',
    handler: scoreStoreController.getSingleScoreStore
  },
  {
    method: 'POST',
    url: '/api/scoreStores',
    handler: scoreStoreController.addScoreStore,
    // schema: documentation.addScoreStoreSchema
  },
  {
    method: 'PUT',
    url: '/api/scoreStores/:id',
    handler: scoreStoreController.updateScoreStore
  },
  {
    method: 'DELETE',
    url: '/api/scoreStores/:id',
    handler: scoreStoreController.deleteScoreStore
  }
]
module.exports = router