const crypto = require('crypto');
const Boom = require('boom');
const userService = require('./user-service');

module.exports = async function validate(username, password, request) {
  try {
    let user = await userService.getUser(username, hashPassword(password));
    if (!user) {
      user = await userService.createUser(username, hashPassword(password));
    }
    request.userId = user.id;
  } catch (e) {
    return Boom.boomify(e);
  }
};

const hashPassword = password =>
  crypto
    .createHmac('sha256', 'secret')
    .update(password)
    .digest('hex');
