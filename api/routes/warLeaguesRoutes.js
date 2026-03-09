const express = require('express');
const router = express.Router();
const leagueController = require('../controllers/leagueControllers');

router.get('/', leagueController.getWarLeagues);
router.get('/:leagueId', leagueController.getWarLeagueById);

module.exports = router;
