const validateToken = (req, res, next) => {
  try {
    const { token } = req.body;
    if (!token) return res.status(400).json({ message: 'O campo "token" é obrigatório' });
    const isValidToken = token.length === 16;
    if (!isValidToken) return res.status(400).json({ message: '"token" invalido' });
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = validateToken;
