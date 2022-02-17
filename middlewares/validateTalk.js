const MSG_EMPTY_TALK = 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios';

const isEmptyTalk = (talk) => {
  if (!talk) return true;
  if (talk.rate === 0) return false;
  return (!talk.watchedAt || !talk.rate);
};

/*
  para desenvolver a função que verifica se a data eh válida consultei um post
  no stackoverflow para construir a lógica do regex de validação
  ref: https://stackoverflow.com/questions/10194464/javascript-dd-mm-yyyy-date-check
*/
const isValidDate = (date) => {
  const reg = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
  return (date.match(reg)); 
};

const isValidRate = (rate) => parseInt(rate, 10) >= 1 && parseInt(rate, 10) <= 5;

const validateTalk = (req, res, next) => {
  try {
    const { talk } = req.body;

    if (isEmptyTalk(talk)) {
      return res.status(400).json({ message: MSG_EMPTY_TALK });
    }
    if (!isValidDate(talk.watchedAt)) {
     return res.status(400).json(
        { message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' },
      ); 
    }
    if (!isValidRate(talk.rate)) {
      return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    }
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = validateTalk;
