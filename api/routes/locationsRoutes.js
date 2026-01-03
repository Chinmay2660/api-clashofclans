const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationControllers');

// GET /api/locations - Get all locations
router.get('/', locationController.getLocations);

// GET /api/locations/:locationId - Get location by ID
router.get('/:locationId', locationController.getLocationById);

// GET /api/locations/:locationId/rankings/clans - Get clan rankings
router.get('/:locationId/rankings/clans', locationController.getClanRankings);

// GET /api/locations/:locationId/rankings/players - Get player rankings
router.get('/:locationId/rankings/players', locationController.getPlayerRankings);

// GET /api/locations/:locationId/rankings/clans-builder-base
router.get('/:locationId/rankings/clans-builder-base', locationController.getClanBuilderBaseRankings);

// GET /api/locations/:locationId/rankings/players-builder-base
router.get('/:locationId/rankings/players-builder-base', locationController.getPlayerBuilderBaseRankings);

// GET /api/locations/:locationId/rankings/capitals
router.get('/:locationId/rankings/capitals', locationController.getCapitalRankings);

module.exports = router;

