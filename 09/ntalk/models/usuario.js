const mongoose = require('mongoose');
const db = require('../libs/db.js');

module.exports = () => {
  
  const contato = mongoose.Schema({
    nome: String,
    email: String
  });

  const usuario = mongoose.Schema({
    nome: {
      type: String,
      required: true
    },
    email: { type: String, required: true, index: { unique: true } },
    contatos: [contato]
  });
  return mongoose.model('usuarios', usuario);
};
