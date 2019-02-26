const swagger = require('fastify-swagger')
const cors = require('cors')
const mongoose = require('mongoose')

const config = require('./config/config')
const { v1 } = require('./routes')

const fastify = require('fastify')(config.options)

// Connect to DB
mongoose
  .connect(config.mongodb.url, config.mongodb.options)
  .then(() => fastify.log.info('mongoDB connected'))
  .catch(err => fastify.log.error(err))

// Middlewares
fastify.use(cors())
// Plugins
fastify.register(swagger, config.documentation)
fastify.register(v1, { prefix: '/v1' })

// Server
fastify.listen(config.port, '0.0.0.0', err => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }

  fastify.swagger()
  fastify.log.info(
    '%s listening in %s environment',
    config.name,
    process.env.NODE_ENV
  )
})

// Export fastify for testing purpose
module.exports = { fastify }
