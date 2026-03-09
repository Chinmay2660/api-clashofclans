const express = require('express');
const router = express.Router();
const labelController = require('../controllers/labelControllers');

router.get('/players', labelController.getPlayerLabels);
router.get('/clans', labelController.getClanLabels);

module.exports = router;
