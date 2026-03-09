const express = require('express');
const router = express.Router();
const leagueController = require('../controllers/leagueControllers');

router.get('/', leagueController.getLeagues);
router.get('/:leagueId', leagueController.getLeagueById);
router.get('/:leagueId/seasons', leagueController.getLeagueSeasons);
router.get('/:leagueId/seasons/:seasonId', leagueController.getLeagueSeasonRankings);

module.exports = router;
