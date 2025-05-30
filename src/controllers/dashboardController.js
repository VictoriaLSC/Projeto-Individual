var dashboardModel = require("../models/dashboardModel");

function contarUsuarios(req, res) {
    dashboardModel.contarUsuarios()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]);
            } else {
                res.status(204).send("Nenhum usuário encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Erro ao contar usuários: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function contarRelatos(req, res) {
    dashboardModel.contarRelatos()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]);
            } else {
                res.status(204).send("Nenhum relato encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Erro ao contar relatos: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function perfilMaisComumPorFaixa(req, res) {
    dashboardModel.perfilMaisComumPorFaixa()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum perfil encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Erro ao buscar perfil por faixa etária: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    contarUsuarios,
    contarRelatos,
    perfilMaisComumPorFaixa
};
