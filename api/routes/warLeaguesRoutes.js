const express = require('express');
const router = express.Router();
const leagueController = require('../controllers/leagueControllers');

// GET /api/warleagues - Get all war leagues
router.get('/', leagueController.getWarLeagues);

// GET /api/warleagues/:leagueId - Get war league by ID
router.get('/:leagueId', leagueController.getWarLeagueById);

module.exports = router;

