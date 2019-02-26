const labyrinthSchema = require('../../schemas/v1/labyrinth-schema')
const labyrinthHandler = require('../../handlers/v1/labyrinth-handler')

/**
 * labyrinth endpoints
 */
const routes = [
  {
    method: 'GET',
    url: '/labyrinth/:id',
    schema: labyrinthSchema.getLabyrinth,
    handler: labyrinthHandler.getLabyrinth
  },
  {
    method: 'GET',
    url: '/labyrinth',
    schema: labyrinthSchema.getAllLabyrinths,
    handler: labyrinthHandler.getAllLabyrinths
  },
  {
    method: 'POST',
    url: '/labyrinth',
    schema: labyrinthSchema.createLabyrinth,
    handler: labyrinthHandler.createLabyrinth
  }
]

module.exports = routes
