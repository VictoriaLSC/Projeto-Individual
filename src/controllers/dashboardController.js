var dashboardModel = require("../models/dashboardModel");
//---------------------------------------------------------------GRÁFICOS------------------------------------------------
function contarUsuarios(req, res) {
    dashboardModel.contarUsuarios()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
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
                res.status(200).json(resultado);
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
function perfilMaisComum(req, res) {
    dashboardModel.perfilMaisComum()
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
function totalQuiz(req, res) {
    dashboardModel.totalQuiz()
         .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum perfil encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Erro ao buscar quantos quizzes feitos: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}
//-------------------------------------------------------KPIS----------------------------------------------
function faixaEtariaPredominante(req, res) {
    dashboardModel.faixaEtariaPredominante()
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
function quantidadePorPerfil(req, res) {
    dashboardModel.quantidadePorPerfil()
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
    faixaEtariaPredominante,
    perfilMaisComum,
    quantidadePorPerfil,
    totalQuiz
};
