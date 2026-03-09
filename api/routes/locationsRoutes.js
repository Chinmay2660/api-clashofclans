const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationControllers');

router.get('/', locationController.getLocations);
router.get('/:locationId', locationController.getLocationById);
router.get('/:locationId/rankings/clans', locationController.getClanRankings);
router.get('/:locationId/rankings/players', locationController.getPlayerRankings);
router.get('/:locationId/rankings/clans-builder-base', locationController.getClanBuilderBaseRankings);
router.get('/:locationId/rankings/players-builder-base', locationController.getPlayerBuilderBaseRankings);
router.get('/:locationId/rankings/capitals', locationController.getCapitalRankings);

module.exports = router;
