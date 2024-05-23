var express = require("express");
var router = express.Router();

var jogoController = require("../controllers/jogoController");

router.post("/inserir", function (req, res) {
    jogoController.inserir(req, res);
});

router.get("/buscar", function (req, res) {
    jogoController.buscar(req, res)
});

module.exports = router;

