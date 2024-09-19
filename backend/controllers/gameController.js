const Games = require("../models/Games");

const gameController = async (req, res) => {
  try {
    const newGame = new Games(req.body);
    const saveGame = await newGame.save();
    res.status(201).json({ log: "Save successfully!" });
  } catch (error) {
    res.status(400).json({ error: "Save error!" });
  }
};

module.exports = gameController;
