/*
  Essa função de validação de email contem um regex
  cuja a lógica de referência foi retirada de um post
  no stackoveflow
  ref: https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
 */
const isValidEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
};

const validateEmail = (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    if (!isValidEmail(email)) {
      return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' }); 
    }
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = validateEmail;
