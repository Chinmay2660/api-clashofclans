const express = require('express');
const router = express.Router();
const leagueController = require('../controllers/leagueControllers');

// GET /api/leaguetiers - Get all league tiers
router.get('/', leagueController.getLeagueTiers);

// GET /api/leaguetiers/:tierId - Get league tier by ID
router.get('/:tierId', leagueController.getLeagueTierById);

module.exports = router;

