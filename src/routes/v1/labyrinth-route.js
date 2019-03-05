const labyrinthSchema = require('../../schemas/v1/labyrinth-schema');
const labyrinthController = require('../../controllers/v1/labyrinth-controller');

/**
 * labyrinth endpoints
 */
module.exports = fastify => {
  return [
    {
      method: 'GET',
      url: '/labyrinth/:id',
      preHandler: fastify.basicAuth,
      schema: labyrinthSchema.getLabyrinth,
      handler: labyrinthController.getLabyrinth
    },
    {
      method: 'GET',
      url: '/labyrinth',
      preHandler: fastify.basicAuth,
      schema: labyrinthSchema.getAllLabyrinths,
      handler: labyrinthController.getAllLabyrinths
    },
    {
      method: 'POST',
      url: '/labyrinth',
      preHandler: fastify.basicAuth,
      schema: labyrinthSchema.createLabyrinth,
      handler: labyrinthController.createLabyrinth
    },
    {
      method: 'PATCH',
      url: '/labyrinth/:id/start/:x/:y',
      preHandler: fastify.basicAuth,
      schema: labyrinthSchema.updateLabyrinthTerminal,
      handler: labyrinthController.updateLabyrinthStart
    },
    {
      method: 'PATCH',
      url: '/labyrinth/:id/end/:x/:y',
      preHandler: fastify.basicAuth,
      schema: labyrinthSchema.updateLabyrinthTerminal,
      handler: labyrinthController.updateLabyrinthEnd
    }
  ];
};
