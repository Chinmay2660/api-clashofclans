/**
 * Gold Pass Model
 * Handles Gold Pass API calls
 */

const { get } = require('../utils/apiClient');

/**
 * Get current gold pass season info
 */
exports.getCurrentSeason = async (token) => {
  const endpoint = '/goldpass/seasons/current';
  return get(endpoint, token, 'GetGoldPassSeason');
};
