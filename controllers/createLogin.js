/*
  Para desenvolver a logica de gerar um 'token' automatico
  consultei um post no stackoveflow sobre o assunto
  ref: https://stackoverflow.com/questions/8532406/create-a-random-token-in-javascript-based-on-user-details
*/
const rand = () => Math.random(0).toString(36).substr(2);
const tokenGenerator = (length) => (rand() + rand() + rand() + rand()).substr(0, length);

const createLogin = (_req, res, next) => {
  try {
    const token = tokenGenerator(16);
    return res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = createLogin;
