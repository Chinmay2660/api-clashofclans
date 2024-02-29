const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playercontrollers');

router.get('/api/player', playerController.getPlayerInfo);

module.exports = router;