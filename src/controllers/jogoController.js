var jogoModel = require("../models/jogoModel");

function buscar(req, res) {
    jogoModel.buscar()
        .then(function(resultadoMediaTempo) {  
                console.log(`\nResultados encontrados: ${resultadoMediaTempo.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoMediaTempo)}`); // transforma JSON em String
                res.status(200).json(resultadoMediaTempo)
                // resultadoRankingNormal,
                                // resultadoRankingDificil
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar a busca! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function inserir(req, res) {
    var tempo = req.body.tempoServer;
    var modo = req.body.modoServer;
    var idUsuario = req.body.idServer;
    var tentativas = req.body.tentativasServer;

    if(tempo == undefined) {
        res.status(400).send("Seu tempo está undefined");
        console.log('Seu tempo está undefined')
    } else if(modo == undefined) {
        res.status(400).send("Seu modo está undefined");
        console.log('Seu modo está undefined')
    } else if(idUsuario == undefined) {
        res.status(400).send("Seu idUsuário está undefined");
        console.log('Seu idUsuário está undefined')
    }

    jogoModel.inserir(tempo, modo, idUsuario, tentativas)
    .then(function(resposta) {
        res.json(resposta)
        res.status(200).send("Tempo inserido com sucesso");
    }).catch(function(erro) {
        res.status(500).json(erro.sqlMessage);
        console.log(
            "\nHouve um erro ao realizar o insert! Erro: ",
            erro.sqlMessage
        );
    })
}

module.exports = {
    buscar,
    inserir
}