var database = require("../database/config");

function buscar() {
    var instrucao = `
        select avg(tempo) as media, nome from tentativa join usuario on idUsuario = fkUsuario group by usuario.nome;
    `;

    var instrucao2 = `
        select tempo, usuario.nome as nome from tentativa join usuario on idUsuario = fkUsuario join jogo on idJogo = fkJogo where jogo.modo = 'normal' order by tempo;
    `;

    var instrucao3 = `
        select tempo, usuario.nome as nome from tentativa join usuario on idUsuario = fkUsuario join jogo on idJogo = fkJogo where jogo.modo = 'dificil' order by tempo;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao + instrucao2, + instrucao3);
    return database.executar(instrucao, instrucao2, instrucao3);
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