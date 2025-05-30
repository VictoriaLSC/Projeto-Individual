var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/total-usuarios", function (req, res) {
    dashboardController.contarUsuarios(req, res);
});

router.get("/total-relatos", function (req, res) {
    dashboardController.contarRelatos(req, res);
});

router.get("/perfil-por-faixa", function (req, res) {
    dashboardController.perfilMaisComumPorFaixa(req, res);
});

module.exports = router;
