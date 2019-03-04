module.exports = async function validate(username, password) {
  if (username !== 'Tyrion' || password !== 'wine') {
    return new Error('Winter is coming');
  }
};
