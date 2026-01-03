const express = require('express');
const router = express.Router();
const leagueController = require('../controllers/leagueControllers');

// GET /api/builderbaseleagues - Get all builder base leagues
router.get('/', leagueController.getBuilderBaseLeagues);

// GET /api/builderbaseleagues/:leagueId - Get builder base league by ID
router.get('/:leagueId', leagueController.getBuilderBaseLeagueById);

module.exports = router;

