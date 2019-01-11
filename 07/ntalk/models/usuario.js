const mongoose = require('mongoose');


module.exports = () => {
  const db = global.db;
  console.log(db);
  
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
