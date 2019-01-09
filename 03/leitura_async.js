const fs = require('fs');
const leituraAsync = arquivo => {
  console.log('Fazendo leitura assíncrona');
  const inicio = new Date().getTime();
  fs.readFile(arquivo, (err, file) => {console.log('terminei async');
  });
  const fim = new Date().getTime();
  console.log(`Bloqueio assíncrono: ${fim - inicio}ms`);
};
module.exports = leituraAsync;
