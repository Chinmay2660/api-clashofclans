const express = require('express');
const router = express.Router();
const labelController = require('../controllers/labelControllers');

// GET /api/labels/players - Get all player labels
router.get('/players', labelController.getPlayerLabels);

// GET /api/labels/clans - Get all clan labels
router.get('/clans', labelController.getClanLabels);

module.exports = router;

