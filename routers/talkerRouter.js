const express = require('express');

const router = express.Router();
const middleware = require('../middlewares');
const controllers = require('../controllers');

const validationTalker = [
  middleware.validateName,
  middleware.validateAge,
  middleware.validateTalk,
];

router.get(
  '/', 
  controllers.listTalkers,
);

router.get(
  '/search',
  middleware.validateToken,
  controllers.searchTalker,
);

router.get(
  '/:id', 
  controllers.listTalkerId,
);

router.use(middleware.validateToken);

router.post(
  '/',
  validationTalker,
  controllers.createTalker,
);

router.put(
  '/:id',
  validationTalker,
  controllers.editTalker,
);

router.delete(
  '/:id',
  controllers.deleteTalker,
);

module.exports = router;
