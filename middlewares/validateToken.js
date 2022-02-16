/*
  usei como referencia o codigo do 'course' conteudo 'Criando middlewares globais com app.use'
  para desenvolver e implementar a logica do 'headers'
  ref: https://app.betrybe.com/course/back-end/introducao-ao-desenvolvimento-web-com-nodejs/express-middlewares/0ba5165f-5fda-4b6b-8de7-d2ccf5782c18/conteudos/ed35233a-77ef-45c5-b7e1-7d2adfb89234/criando-middlewares-globais-com-appuse/a75950a7-4658-461c-9d00-b46526418d68?use_case=side_bar
*/
const validateToken = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: 'Token não encontrado' });
    const isValidToken = token.length === 16;
    if (!isValidToken) return res.status(401).json({ message: 'Token inválido' });
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = validateToken;
