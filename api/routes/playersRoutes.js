const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playercontrollers');

router.get('/playerTag=:playerTag', playerController.getPlayerInfo);

module.exports = router;