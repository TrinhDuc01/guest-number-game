const Games = require("../models/Games");
const Users = require("../models/Users");

const checkUserController = async (req, res) => {
  try {
    const username = req.body.username;
    if (!username) {
      return res.status(400).json({ error: "Please Enter your username!" });
    }
    const user = await Users.findOne({ username: username });
    console.log(user);
    if (!user) {
      const newUser = new Users({ username: username });
      const saveUser = await newUser.save();
      return res.status(201).json({
        log: `Welcome, ${username}! It looks like this is your first time here.`,
        user_id: newUser._id,
      });
    }
    const gamePlayed = await Games.find({ user_id: user._id }).sort({
      numberOfGuess: 1,
    });
    if (!gamePlayed.length) {
      console.log(user._id);
      return res.status(201).json({
        log: `Welcome, ${username}! It looks like this is your first time here.`,
        user_id: user._id,
      });
    }
    return res.status(200).json({
      log: `Welcome back, ${username}! You have played ${gamePlayed.length} games, and your best game took ${gamePlayed[0].numberOfGuess} guesses.`,
      user_id: user._id,
    });
  } catch (error) {
    res.status(400).json({ error: "loi" });
  }
};

module.exports = checkUserController;
