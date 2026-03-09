const express = require('express');
const router = express.Router();
const leagueController = require('../controllers/leagueControllers');

router.get('/', leagueController.getLeagueTiers);
router.get('/:tierId', leagueController.getLeagueTierById);

module.exports = router;
