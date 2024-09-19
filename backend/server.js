const express = require("express");
const mongoose = require("mongoose");
const testRouter = require("./apis/test");
const checkUserRouter = require("./apis/checkUserApi");
const GameRouter = require("./apis/gameApi");
const cors = require("cors");

try {
  mongoose.connect("mongodb://127.0.0.1:27017/NumberGuessingGame");
  console.log("Connecting to mongodb");
} catch (error) {
  console.log("Can not connect to mongodb");
}
const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(testRouter);
app.use(checkUserRouter);
app.use(GameRouter);

app.listen((port = 8080), () => {
  console.log(`Server is running in port: ${8080}`);
});
