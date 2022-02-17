/*
  usei como referência para elaborar essa lógica o código
  da monitoria de revisão e esquenta pro projeto
  ref: https://github.com/tryber/sd-015-a-live-lectures/blob/monitoria/22.6/controllers/updateBook.js
*/
const { readFile, writeFile } = require('fs/promises');

const editTalker = async (req, res, next) => {
  try {
    let { id } = req.params;
    const { name, age, talk: { watchedAt, rate } } = req.body;
    id = parseInt(id, 10);

    const talkers = await readFile('./talker.json', 'utf-8');
    const parsedTalkers = JSON.parse(talkers);
    const talkerIndex = parsedTalkers.find((tlk) => tlk.id === id);
    if (talkerIndex === -1) return res.status(404).json({ message: 'Talker is not found' });
    const updatedTalker = { id, name, age, talk: { watchedAt, rate } };
    parsedTalkers.splice(talkerIndex, 1, updatedTalker);

    const stringTalkers = JSON.stringify(parsedTalkers, null, 2);
    await writeFile('./talker.json', stringTalkers);
    return res.status(200).json(updatedTalker);
  } catch (err) {
    next(err);
  }
};

module.exports = editTalker;
