var quizModel = require("../models/quizModel");

function cadastrarPerfil(req, res) {
    var id = req.body.idUsuario;
    var fk = req.body.tipoPerfil;
    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    }
    else {
        quizModel.cadastrarPerfil(id, fk)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o select! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrarPerfil,
}