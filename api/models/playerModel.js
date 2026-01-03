/**
 * Player Model
 * Handles all player-related API calls
 */

const { get, post, encodeTag } = require('../utils/apiClient');

/**
 * Get player data by tag
 */
exports.getPlayerData = async (playerTag, token) => {
  const endpoint = `/players/${encodeTag(playerTag)}`;
  return get(endpoint, token, 'GetPlayer', 'player');
};

/**
 * Verify player API token
 */
exports.verifyPlayerToken = async (playerTag, playerToken, apiToken) => {
  const endpoint = `/players/${encodeTag(playerTag)}/verifytoken`;
  return post(endpoint, { token: playerToken }, apiToken, 'VerifyPlayerToken', 'player');
};
