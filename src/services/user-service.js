var userModel = require('../models/user-model');

module.exports = {
  getUser: (username, password) => userModel.findOne({ username, password }),

  createUser: (username, password) => userModel.create({ username, password })
};
