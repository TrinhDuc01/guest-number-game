const mongoose = require("mongoose");
const GamesSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
    require: true,
  },
  numberOfGuess: Number,
  secretNumber: Number,
});

const Games = mongoose.model("Games", GamesSchema);

module.exports = Games;
