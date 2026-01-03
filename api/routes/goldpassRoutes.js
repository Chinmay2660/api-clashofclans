const express = require('express');
const router = express.Router();
const goldpassController = require('../controllers/goldpassControllers');

// GET /api/goldpass/current - Get current gold pass season
router.get('/current', goldpassController.getCurrentSeason);

module.exports = router;

