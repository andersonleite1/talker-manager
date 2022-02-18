const express = require('express');

const router = express.Router();
const middleware = require('../middlewares');
const controllers = require('../controllers');

const validationLogin = [
  middleware.validateEmail,
  middleware.validatePassword,
];

router.post(
  '/', 
  validationLogin,
  controllers.createLogin,
);

module.exports = router;
