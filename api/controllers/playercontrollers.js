/**
 * Player Controllers
 * Handles all player-related HTTP endpoints
 */

const playerModel = require('../models/playerModel');
const { asyncHandler, requireQueryParam, getApiKey } = require('../utils/controllerHelper');

// Get player info by tag
exports.getPlayerInfo = asyncHandler(async (req) => {
  const playerTag = requireQueryParam(req, 'playerTag', 'Player tag is required.');
  return playerModel.getPlayerData(playerTag, getApiKey());
});

// Verify player API token
exports.verifyPlayerToken = asyncHandler(async (req) => {
  const playerTag = requireQueryParam(req, 'playerTag', 'Player tag is required.');
  const { token } = req.body;
  
  if (!token) {
    const err = new Error('Player token is required in request body.');
    err.status = 400;
    err.reason = 'badRequest';
    throw err;
  }
  
  return playerModel.verifyPlayerToken(playerTag, token, getApiKey());
});
