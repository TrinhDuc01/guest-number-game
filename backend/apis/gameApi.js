const express = require("express");
const gameController = require("../controllers/gameController");
const GameRouter = express.Router();

GameRouter.post("/game",gameController);

module.exports = GameRouter;
