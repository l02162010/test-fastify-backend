// Require the fastify framework and instantiate it
const fastify = require('fastify')({
  logger: true
})

// Require external modules
const mongoose = require('mongoose')

// Import Routes
const routes = require('./routes')

// Import Swagger Options
const swagger = require('./config/swagger')
const cors = require('cors')

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)
fastify.use(cors())
fastify.options('*', (request, reply) => { reply.send() })

fastify.register(require('fastify-jwt'), {
  secret: 'supersecret'
})
// Connect to DB
mongoose.connect('mongodb://admin:aa1234@ds037468.mlab.com:37468/baoyoutest', { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))
// Loop over each route
routes.forEach((route, index) => {
  fastify.route(route)
})

let PORT = process.env.PORT || 4000
// Run the server!
const start = async () => {
  try {
    await fastify.listen(PORT, '0.0.0.0')
    fastify.swagger()
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
