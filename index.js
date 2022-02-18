const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const middleware = require('./middlewares');
const loginRouter = require('./routers/loginRouter');
const talkerRouter = require('./routers/talkerRouter');

const app = express();
app.use(bodyParser.json());
app.use(middleware.errorHandler);

const HTTP_OK_STATUS = 200;
const PORT = process.env.PORT || '3000';

app.use('/login', loginRouter);
app.use('/talker', talkerRouter);

app.get(
  '/', 
  (_request, response) => {
    response.status(HTTP_OK_STATUS).sendFile(path.join(`${__dirname}/index.html`));
  },
);

app.listen(PORT, () => {
  console.log('Online');
});
