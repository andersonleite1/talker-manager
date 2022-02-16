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

app.get('/talker', controllers.listTalkers);
app.get('/talker/:id', controllers.listTalkerId);

app.post(
  '/login', 
  validationLogin,
  controllers.createLogin,
);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
