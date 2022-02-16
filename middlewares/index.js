const errorHandler = require('./errorHandler');
const validateToken = require('./validateToken');
const validateEmail = require('./validateEmail');
const validatePassword = require('./validatePassword');
const validateName = require('./validateName');
const validateAge = require('./validateAge');
const validateTalk = require('./validateTalk');

module.exports = { 
  errorHandler,
  validateToken,
  validateEmail,
  validatePassword,
  validateName,
  validateAge,
  validateTalk,
};
