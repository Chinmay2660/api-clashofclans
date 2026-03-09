const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playercontrollers');
const { validatePlayerTag, handleValidationErrors } = require('../middleware/validation');

router.get('/', validatePlayerTag, handleValidationErrors, playerController.getPlayerInfo);
router.post('/verify', validatePlayerTag, handleValidationErrors, playerController.verifyPlayerToken);

module.exports = router;
