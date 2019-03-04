const userService = require('./user-service');

module.exports = async function validate(username, password, request) {
  let user = await userService.getUser(username, password);

  if (!user) {
    user = await userService.createUser(username, password);
  }

  request.userId = user.id;
};
