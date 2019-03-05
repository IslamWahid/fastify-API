const labyrinthModel = require('../../models/labyrinth-model');

/**
 * get labyrinth controller
 *
 * @param {FastifyRequest} request
 * @param {FastifyReply} reply
 */
const getLabyrinth = (request, reply) => {
  reply.code(200).send({
    id: request.params.id
  });
};

/**
 * get all labyrinth controller
 *
 * @param {FastifyRequest} request
 * @param {FastifyReply} reply
 */
const getAllLabyrinths = async (request, reply) => {
  const all = await labyrinthModel.find({});
  request.log.info('all data');
  request.log.info(all);
  reply.code(200).send('all');
};

/**
 * create labyrinth controller
 *
 * @param {FastifyRequest} request
 * @param {FastifyReply} reply
 */
const createLabyrinth = async (request, reply) => {
  try {
    const { id } = await labyrinthModel.create({
      ...request.body,
      owner: request.userId
    });
    reply.code(201).send({ id });
  } catch (e) {
    request.log.error(e);
  }
};

module.exports = { getLabyrinth, getAllLabyrinths, createLabyrinth };
