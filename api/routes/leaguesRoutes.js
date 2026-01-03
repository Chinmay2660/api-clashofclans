const express = require('express');
const router = express.Router();
const leagueController = require('../controllers/leagueControllers');

// ========== REGULAR LEAGUES ==========

// GET /api/leagues - Get all leagues
router.get('/', leagueController.getLeagues);

// GET /api/leagues/:leagueId - Get league by ID
router.get('/:leagueId', leagueController.getLeagueById);

// GET /api/leagues/:leagueId/seasons - Get league seasons
router.get('/:leagueId/seasons', leagueController.getLeagueSeasons);

// GET /api/leagues/:leagueId/seasons/:seasonId - Get league season rankings
router.get('/:leagueId/seasons/:seasonId', leagueController.getLeagueSeasonRankings);

module.exports = router;

