/*
  usei como referência para desenvolver essa lógica o código
  da monitoria de revisão e esquenta pro projeto
  ref: https://github.com/tryber/sd-015-a-live-lectures/blob/monitoria/22.6/controllers/listBooks.js
*/
const { readFile } = require('fs/promises');

const listTalkers = async (_req, res, next) => {
  try {
    const talkers = await readFile('./talker.json', 'utf-8');
    const parsedTalkers = JSON.parse(talkers);

    if (parsedTalkers.length < 1) return res.status(200).send([]);
    return res.status(200).json(parsedTalkers);
  } catch (err) {
    return next(err);
  }
};

module.exports = listTalkers;
