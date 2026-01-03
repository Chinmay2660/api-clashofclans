const express = require('express');
const router = express.Router();
const leagueController = require('../controllers/leagueControllers');

// GET /api/capitalleagues - Get all capital leagues
router.get('/', leagueController.getCapitalLeagues);

// GET /api/capitalleagues/:leagueId - Get capital league by ID
router.get('/:leagueId', leagueController.getCapitalLeagueById);

module.exports = router;

