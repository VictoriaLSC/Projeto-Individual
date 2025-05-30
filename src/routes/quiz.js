var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/quizPerfil", function (req, res) {
    quizController.cadastrarPerfil(req, res);
});


module.exports = router;