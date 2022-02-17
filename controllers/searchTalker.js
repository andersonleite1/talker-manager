const { readFile } = require('fs/promises');

const searchTalker = async (req, res, next) => {
  try {
    const { q = '' } = req.query;

    const talkers = await readFile('./talker.json', 'utf-8');
    const parsedTalkers = JSON.parse(talkers);

    const lowerCasedQuery = q.toLowerCase();
    const filteredTalkers = parsedTalkers.filter((talker) => {
      const lowerCasedTalker = talker.name.toLowerCase();
      return lowerCasedTalker.includes(lowerCasedQuery);
    });

    return res.status(200).json(filteredTalkers);
  } catch (err) {
    return next(err);
  }
};

module.exports = searchTalker;
