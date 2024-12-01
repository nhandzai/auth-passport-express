const db = require('../../library/models');

async function fetchUserById(id) {
  return await db.User.findByPk(id)
}

module.exports = { fetchUserById};
