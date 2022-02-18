const express = require('express');

const bodyParser = require('body-parser');
const middleware = require('./middlewares');
const loginRouter = require('./routers/loginRouter');
const talkerRouter = require('./routers/talkerRouter');

const app = express();
app.use(bodyParser.json());
app.use(middleware.errorHandler);

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.use('/login', loginRouter);
app.use('/talker', talkerRouter);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
