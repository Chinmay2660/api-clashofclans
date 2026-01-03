const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playercontrollers');
const { validatePlayerTag, handleValidationErrors } = require('../middleware/validation');

// GET /api/players?playerTag=XXXX
router.get('/', 
    validatePlayerTag, 
    handleValidationErrors, 
    playerController.getPlayerInfo
);

// POST /api/players/verify?playerTag=XXXX
// Body: { "token": "player_api_token" }
router.post('/verify',
    validatePlayerTag,
    handleValidationErrors,
    playerController.verifyPlayerToken
);

module.exports = router;
