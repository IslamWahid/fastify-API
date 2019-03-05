const labyrinthModel = require('../../models/labyrinth-model');
const Boom = require('boom');

/**
 * get labyrinth controller
 *
 * @param {FastifyRequest} request
 * @param {FastifyReply} reply
 */
const getLabyrinth = async (request, reply) => {
  try {
    const labyrinth = await labyrinthModel.findById(request.params.id);
    reply.send(labyrinth);
  } catch (e) {
    request.log.error(e);
    return Boom.boomify(e);
  }
};

/**
 * get all labyrinth controller
 *
 * @param {FastifyRequest} request
 * @param {FastifyReply} reply
 */
const getAllLabyrinths = async (request, reply) => {
  try {
    const labyrinthsIds = (await labyrinthModel.find({}, '_id')).map(
      model => model.id
    );
    reply.send(labyrinthsIds);
  } catch (e) {
    request.log.error(e);
    return Boom.boomify(e);
  }
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
    return Boom.boomify(e);
  }
};

module.exports = { getLabyrinth, getAllLabyrinths, createLabyrinth };
