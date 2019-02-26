const schema = require('../../schemas/v1/info-schema')
const infoController = require('../../controllers/v1/info-controller')

/**
 * Info routes endpoints
 */
const routes = [
  {
    method: 'GET',
    url: '/keep-alive',
    schema: schema.keepAlive,
    handler: infoController.keepAlive
  }
]

module.exports = routes
