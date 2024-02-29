const Score = require("../models/Score");

exports.createScore = async (req, res) => {
  // console.log("Received POST request");
  // console.log("Request body:", req.body);
  try {
    const score = new Score(req.body);
    await score.save();
    res.status(201).json(score);
  } catch (error) {
    console.error("Error creating score:", error);
    res.status(500).json({ error: "Error creating score" });
  }
};

exports.getScores = async (req, res) => {
  try {
    const scores = await Score.find();
    res.status(200).json({ winner: "Team 1", matches: scores });
  } catch (error) {
    res.status(500).json({ error: "Error fetching scores" });
  }
};

exports.deleteData = async (req, res) => {
  try {
    await Score.deleteMany({});
    res.status(200).json({ message: "Data cleared successfully" });
  } catch (error) {
    console.error("Error clearing data:", error);
    res.status(500).json({ error: "Error clearing data" });
  }
};
