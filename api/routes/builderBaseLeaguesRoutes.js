const express = require('express');
const router = express.Router();
const leagueController = require('../controllers/leagueControllers');

router.get('/', leagueController.getBuilderBaseLeagues);
router.get('/:leagueId', leagueController.getBuilderBaseLeagueById);

module.exports = router;
