var express = require("express");
var router = express.Router();

var rankingController = require("../controllers/rankingController");

router.get("/ranquear", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    rankingController.ranquear(req, res);
});

module.exports = router;