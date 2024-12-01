const db = require('../../library/models');

async function fetchUserById(id) {
   console.log("id11",db.User.findByPk(id));
  return await db.User.findByPk(id)
}

module.exports = { fetchUserById};
