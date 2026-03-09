const express = require('express');
const router = express.Router();
const leagueController = require('../controllers/leagueControllers');

router.get('/', leagueController.getCapitalLeagues);
router.get('/:leagueId', leagueController.getCapitalLeagueById);

module.exports = router;
