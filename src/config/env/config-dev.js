const env = {
  options: {
    logger: {
      prettyPrint: true,
      level: 'info'
    }
  },
  mongodb: {
    url: 'mongodb://192.168.99.100:27017/labyrinthDb',
    options: {
      useNewUrlParser: true
    }
  }
};

module.exports = env;
