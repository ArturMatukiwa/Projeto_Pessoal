var database = require("../database/config");

function buscar() {
    var instrucao = `
        
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function inserir(tempo, modo, idUsuario, tentativas) {
    var instrucao = `
    insert into tentativa (idTentativa, fkUsuario, fkJogo, tempo) values (${tentativas}, ${idUsuario}, ${modo}, ${tempo}); 
    `

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    buscar,
    inserir
}