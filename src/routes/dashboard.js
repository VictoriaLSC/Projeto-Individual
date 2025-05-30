var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

//KPI:


//KPI - TOTAL DE USUÁRIOS CADASTRADOS
router.get("/contarUsuarios", function (req, res) {
    dashboardController.contarUsuarios(req, res);
});
// KPI - TOTAL DE RELATOS POSTADOS
router.get("/contarRelatos", function (req, res) {
    dashboardController.contarRelatos(req, res);
});
// KPI - PERFIL MAIS COMUM
router.get("/perfilMaisComum", function (req, res) {
    dashboardController.perfilMaisComum(req, res);
});


// GRÁFICOS:

// GRÁFICO DE PIZZA - replicar
router.get("/perfilMaisComumPorFaixa", function (req, res) {
    dashboardController.perfilMaisComumPorFaixa(req, res);
});

// GRÁFICO DE BARRA
router.get("/quantidadePorPerfil", function (req, res) {
    dashboardController.quantidadePorPerfil(req, res);
});
module.exports = router;
