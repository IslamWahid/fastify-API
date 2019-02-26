const env = {
  options: {
    logger: {
      prettyPrint: true,
      level: 'info'
    },
    https: {
      key: null, // .key file path
      cert: null // .crt file path
    }
  },
  mongodb: {
    url: 'mongodb://mongo/labyrinthDb',
    options: {
      useNewUrlParser: true
    }
  }
}

module.exports = env
