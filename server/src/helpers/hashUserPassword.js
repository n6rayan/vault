const bcrypt = require('bcrypt');

module.exports = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync());
};