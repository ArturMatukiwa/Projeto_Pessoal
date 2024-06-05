var database = require("../database/config");

function buscar() {
    var instrucaosql = `
        select round(avg(tempo), 0) as media, nome from tentativa join usuario on idUsuario = fkUsuario group by usuario.nome;
    `

    console.log("Executando a instrução SQL: \n" + instrucaosql);
    return database.executar(instrucaosql);
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