// Import our Controllers
const userRouter = require('./routers/userRouter')
const commentRouter = require('./routers/commentRouter')
const scoreStoreRouter = require('./routers/scoreStoreRouter')

const routes = [...userRouter, ...commentRouter, ...scoreStoreRouter]

module.exports = routes
