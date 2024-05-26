var database = require("../database/config");

function buscar() {
    var instrucaosql = `
        select round(avg(tempo), 0) as media, nome from tentativa join usuario on idUsuario = fkUsuario group by usuario.nome;
    `

    // var instrucaosql2 = `
    //     select tempo, usuario.nome as nome from tentativa join usuario on idUsuario = fkUsuario join jogo on idJogo = fkJogo where jogo.modo = 'normal' order by tempo;
    //  `;
    
    // var instrucaosql3 = `
    //     select tempo, usuario.nome as nome from tentativa join usuario on idUsuario = fkUsuario join jogo on idJogo = fkJogo where jogo.modo = 'dificil' order by tempo;
    // `;

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