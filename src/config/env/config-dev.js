const env = {
  options: {
    logger: {
      prettyPrint: true,
      level: 'info'
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
