/**
 * Label Model
 * Handles all label-related API calls
 */

const { get } = require('../utils/apiClient');

/**
 * Get list of all player labels
 */
exports.getPlayerLabels = async (token, limit = 50) => {
  const endpoint = `/labels/players?limit=${limit}`;
  return get(endpoint, token, 'GetPlayerLabels');
};

/**
 * Get list of all clan labels
 */
exports.getClanLabels = async (token, limit = 50) => {
  const endpoint = `/labels/clans?limit=${limit}`;
  return get(endpoint, token, 'GetClanLabels');
};
