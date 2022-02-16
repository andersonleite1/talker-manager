const { readFile } = require('fs/promises');

const listTalkerId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const talkers = await readFile('./talker.json', 'utf-8');
    const parsedTalkers = JSON.parse(talkers);
    const talker = parsedTalkers.find((t) => t.id === parseInt(id, 10));

    if (!talker) {
      return res.status(404).json(
        {
          message: 'Pessoa palestrante não encontrada', 
        },
      ); 
    }
    return res.status(200).json(talker);
  } catch (err) {
    return next(err);
  }
};

module.exports = listTalkerId;
