const express = require('express');
const router = express.Router();
const goldpassController = require('../controllers/goldpassControllers');

router.get('/current', goldpassController.getCurrentSeason);

module.exports = router;
