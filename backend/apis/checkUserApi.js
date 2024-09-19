const express = require("express");
const checkUserController = require("../controllers/checkUserController");
const checkUserRouter = express.Router();

checkUserRouter.post("/check-user", checkUserController);

module.exports = checkUserRouter;
