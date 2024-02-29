const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
  team1: {
    type: String,
    required: true,
  },
  team2: {
    type: String,
    required: true,
  },
  matches: [
    {
      matchSelects: {
        type: String,
      },
      gameSelects: {
        type: String,
      },
      team1Players: {
        type: [String],
      },
      team2Players: {
        type: [String],
      },
      winnerSelects: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("Score", scoreSchema, "TournamentDB");
