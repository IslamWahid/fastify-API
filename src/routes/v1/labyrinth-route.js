const labyrinthSchema = require('../../schemas/v1/labyrinth-schema')
const labyrinthController = require('../../controllers/v1/labyrinth-controller')

/**
 * labyrinth endpoints
 */
const routes = [
  {
    method: 'GET',
    url: '/labyrinth/:id',
    schema: labyrinthSchema.getLabyrinth,
    handler: labyrinthController.getLabyrinth
  },
  {
    method: 'GET',
    url: '/labyrinth',
    schema: labyrinthSchema.getAllLabyrinths,
    handler: labyrinthController.getAllLabyrinths
  },
  {
    method: 'POST',
    url: '/labyrinth',
    schema: labyrinthSchema.createLabyrinth,
    handler: labyrinthController.createLabyrinth
  }
]

module.exports = routes
