const express = require('express');
const bodyParser = require('body-parser');
const middleware = require('./middlewares');
const controllers = require('./controllers');

const app = express();
app.use(bodyParser.json());
app.use(middleware.errorHandler);

const HTTP_OK_STATUS = 200;
const PORT = '3000';

const validationLogin = [
  middleware.validateEmail,
  middleware.validatePassword,
];

const validationTalker = [
  middleware.validateName,
  middleware.validateAge,
  middleware.validateTalk,
];

app.get('/talker', controllers.listTalkers);
app.get(
  '/talker/search',
  middleware.validateToken,
  controllers.searchTalker,
);
app.get('/talker/:id', controllers.listTalkerId);

app.post(
  '/login', 
  validationLogin,
  controllers.createLogin,
);

app.use(middleware.validateToken);

app.post(
  '/talker',
  validationTalker,
  controllers.createTalker,
);

app.put(
  '/talker/:id',
  validationTalker,
  controllers.editTalker,
);

app.delete(
  '/talker/:id',
  controllers.deleteTalker,
);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
