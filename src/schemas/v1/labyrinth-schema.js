var errorSchema = require('../common/error-schema')
var notFoundSchema = require('../common/not-found-schema')

module.exports = {
  getLabyrinth: {
    description: 'Get Labyrinth with id',
    tags: ['API'],
    summary: 'Obtain Labyrinth with id',
    params: {
      type: 'object',
      properties: {
        id: {
          type: 'number',
          description: 'labyrinth id'
        }
      }
    },
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          id: { type: 'number' }
        }
      },
      400: notFoundSchema,
      500: errorSchema
    }
  },

  getAllLabyrinths: {
    description: 'Get all labyrinths',
    tags: ['API'],
    summary: 'Obtain all labyrinths ids',
    params: {
      type: 'object',
      properties: {
        id: {
          type: 'number',
          description: 'labyrinth id'
        }
      }
    },
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          id: { type: 'number' }
        }
      },
      400: notFoundSchema,
      500: errorSchema
    }
  },

  createLabyrinth: {
    description: 'create new labyrinth',
    tags: ['API'],
    summary: 'create new labyrinth and get its id',
    params: {
      type: 'object',
      properties: {
        id: {
          type: 'number',
          description: 'labyrinth id'
        }
      }
    },
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          id: { type: 'number' }
        }
      },
      400: notFoundSchema,
      500: errorSchema
    }
  }
}
