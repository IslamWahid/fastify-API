module.exports = async function validate(username, password) {
  if (username !== 'islam' || password !== 'pass') {
    return new Error('invalid credentials');
  }
};
