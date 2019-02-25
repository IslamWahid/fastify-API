/**
 * get labyrinth handler
 *
 * @param {FastifyRequest} request
 * @param {FastifyReply} reply
 */
const getLabyrinth = (request, reply) => {
  reply.code(200).send({
    id: request.params.id
  })
}

/**
 * get all labyrinth handler
 *
 * @param {FastifyRequest} request
 * @param {FastifyReply} reply
 */
const getAllLabyrinths = (request, reply) => {
  reply.code(200).send({})
}

/**
 * create labyrinth handler
 *
 * @param {FastifyRequest} request
 * @param {FastifyReply} reply
 */
const createLabyrinth = (request, reply) => {
  reply.code(200).send({})
}

module.exports = { getLabyrinth, getAllLabyrinths, createLabyrinth }
