var database = require("../database/config");

function ranquear() {
    var instrucaosql = `
    select tempo, nome, modo from tentativa join usuario on idUsuario = fkUsuario join jogo on idJogo = fkJogo order by tempo; 
    `
    console.log("Executando a instrução SQL: \n" + instrucaosql);
    return database.executar(instrucaosql);
}

module.exports = {
    ranquear
}