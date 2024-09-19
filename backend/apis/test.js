const express = require("express");

const testRouter = express.Router();

testRouter.get("/", (re1, res) => {
  res.send("Hello world");
});
testRouter.get("/aaa", (re1, res) => {
  res.send("Hello world aaa");
});

module.exports = testRouter;
