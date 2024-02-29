const express = require("express");
const router = express.Router();
const scoreController = require("../controllers/scoreControllers");

router.post("/api/postData", scoreController.createScore);
router.get("/api/getData", scoreController.getScores);
router.delete("/api/clearData", scoreController.deleteData)

module.exports = router;
