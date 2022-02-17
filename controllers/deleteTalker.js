const { readFile, writeFile } = require('fs/promises');

const deleteTalker = async (req, res, next) => {
  try {
    let { id } = req.params;
    id = parseInt(id, 10);

    const talkers = await readFile('./talker.json', 'utf-8');
    const parsedTalkers = JSON.parse(talkers);
    const newTalkers = parsedTalkers.filter((talker) => talker.id !== id);

    const stringTalkers = JSON.stringify(newTalkers, null, 2);
    await writeFile('./talker.json', stringTalkers);
    return res.status(204).end();
  } catch (err) {
    next(err);
  }
};

module.exports = deleteTalker;
