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
    const labyrinth = await labyrinthModel.findOne({
      _id: request.params.id,
      owner: request.userId
    });
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
    const labyrinthsIds = (await labyrinthModel.find(
      { owner: request.userId },
      '_id'
    )).map(model => model.id);
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

/**
 * update labyrinth controller
 *
 * @param {FastifyRequest} request
 * @param {FastifyReply} reply
 */
const updateLabyrinth = async (request, reply) => {
  try {
    request.log.info(request.params);
    // const labyrinth = await labyrinthModel.update(
    //   {
    //     _id: request.params.id,
    //     owner: request.userId
    //   },
    //   {}
    // );
    // reply.send(labyrinth);
  } catch (e) {
    request.log.error(e);
    return Boom.boomify(e);
  }
};

/**
 * update labyrinth start controller
 *
 * @param {FastifyRequest} request
 * @param {FastifyReply} reply
 */
const updateLabyrinthStart = async (request, reply) => {
  try {
    request.log.info(request.params);
    // const labyrinth = await labyrinthModel.update(
    //   {
    //     _id: request.params.id,
    //     owner: request.userId
    //   },
    //   {}
    // );
    // reply.send(labyrinth);
  } catch (e) {
    request.log.error(e);
    return Boom.boomify(e);
  }
};

/**
 * update labyrinth end controller
 *
 * @param {FastifyRequest} request
 * @param {FastifyReply} reply
 */
const updateLabyrinthEnd = async (request, reply) => {
  try {
    request.log.info(request.params);
    // const labyrinth = await labyrinthModel.update(
    //   {
    //     _id: request.params.id,
    //     owner: request.userId
    //   },
    //   {}
    // );
    // reply.send(labyrinth);
  } catch (e) {
    request.log.error(e);
    return Boom.boomify(e);
  }
};

module.exports = {
  getLabyrinth,
  getAllLabyrinths,
  createLabyrinth,
  updateLabyrinthStart,
  updateLabyrinthEnd
};
