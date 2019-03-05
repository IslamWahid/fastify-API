const swagger = require('fastify-swagger');
const cors = require('cors');
const mongoose = require('mongoose');

const { v1 } = require('./routes');
const config = require('./config/config');
const validate = require('./services/auth-service');

const fastify = require('fastify')(config.options);

// Connect to DB
mongoose
  .connect(config.mongodb.url, config.mongodb.options)
  .then(() => {
    fastify.log.info('Monogodb Connected')
    // Middlewares
    fastify.use(cors());
    // Plugins
    fastify.register(require('fastify-boom'))
    fastify.register(swagger, config.documentation);
    fastify.register(require('fastify-basic-auth'), { validate });
    fastify.after(() => fastify.register(v1, { prefix: '/v1' }));

    // Server
    fastify.listen(config.port, '0.0.0.0', err => {
      if (err) {
        fastify.log.error(err);
        process.exit(1);
      }

      fastify.swagger();
      fastify.log.info(
        '%s listening in %s environment',
        config.name,
        process.env.NODE_ENV
      );
    });
  })
  .catch(err => fastify.log.error(err));

// Export fastify for testing purpose
module.exports = { fastify };
