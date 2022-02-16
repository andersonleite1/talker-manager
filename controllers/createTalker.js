/*
  usei como referência para elaborar essa lógica o código
  da monitoria de revisão e esquenta pro projeto
  ref: https://github.com/tryber/sd-015-a-live-lectures/blob/monitoria/22.6/controllers/createBook.js
*/
const { readFile, writeFile } = require('fs/promises');

const createTalker = async (req, res, next) => {
  try {
    const { name, age, talk: { watchedAt, rate } } = req.body;
    const talkers = await readFile('./talker.json', 'utf-8');
    const parsedTalkers = JSON.parse(talkers);
    const id = parsedTalkers.length + 1;
  
    const newTalker = { id, name, age, talk: { watchedAt, rate } };
    parsedTalkers.push(newTalker);
    const stringTalkers = JSON.stringify(parsedTalkers, null, 2);
    await writeFile('./talker.json', stringTalkers);

    return res.status(201).json(newTalker);
  } catch (err) {
    next(err);
  }
};

module.exports = createTalker;
