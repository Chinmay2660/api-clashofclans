/**
 * League Model
 * Handles all league-related API calls
 */

const { get } = require('../utils/apiClient');

// ========== LEAGUE TIERS ==========

/**
 * Get list of all league tiers
 */
exports.getLeagueTiers = async (token, limit = 50) => {
  const endpoint = `/leaguetiers?limit=${limit}`;
  return get(endpoint, token, 'GetLeagueTiers');
};

/**
 * Get league tier info by ID
 */
exports.getLeagueTierById = async (tierId, token) => {
  const endpoint = `/leaguetiers/${tierId}`;
  return get(endpoint, token, 'GetLeagueTierById');
};

// ========== REGULAR LEAGUES ==========

/**
 * Get list of all leagues
 */
exports.getLeagues = async (token, limit = 50) => {
  const endpoint = `/leagues?limit=${limit}`;
  return get(endpoint, token, 'GetLeagues');
};

/**
 * Get league info by ID
 */
exports.getLeagueById = async (leagueId, token) => {
  const endpoint = `/leagues/${leagueId}`;
  return get(endpoint, token, 'GetLeagueById');
};

/**
 * Get league seasons (only Legend League has seasons)
 */
exports.getLeagueSeasons = async (leagueId, token, limit = 50) => {
  const endpoint = `/leagues/${leagueId}/seasons?limit=${limit}`;
  return get(endpoint, token, 'GetLeagueSeasons');
};

/**
 * Get league season rankings
 */
exports.getLeagueSeasonRankings = async (leagueId, seasonId, token, limit = 200, after, before) => {
  let endpoint = `/leagues/${leagueId}/seasons/${seasonId}?limit=${limit}`;
  if (after) endpoint += `&after=${after}`;
  if (before) endpoint += `&before=${before}`;
  return get(endpoint, token, 'GetLeagueSeasonRankings');
};

// ========== WAR LEAGUES ==========

/**
 * Get list of all war leagues
 */
exports.getWarLeagues = async (token, limit = 50) => {
  const endpoint = `/warleagues?limit=${limit}`;
  return get(endpoint, token, 'GetWarLeagues');
};

/**
 * Get war league info by ID
 */
exports.getWarLeagueById = async (leagueId, token) => {
  const endpoint = `/warleagues/${leagueId}`;
  return get(endpoint, token, 'GetWarLeagueById');
};

// ========== CAPITAL LEAGUES ==========

/**
 * Get list of all capital leagues
 */
exports.getCapitalLeagues = async (token, limit = 50) => {
  const endpoint = `/capitalleagues?limit=${limit}`;
  return get(endpoint, token, 'GetCapitalLeagues');
};

/**
 * Get capital league info by ID
 */
exports.getCapitalLeagueById = async (leagueId, token) => {
  const endpoint = `/capitalleagues/${leagueId}`;
  return get(endpoint, token, 'GetCapitalLeagueById');
};

// ========== BUILDER BASE LEAGUES ==========

/**
 * Get list of all builder base leagues
 */
exports.getBuilderBaseLeagues = async (token, limit = 50) => {
  const endpoint = `/builderbaseleagues?limit=${limit}`;
  return get(endpoint, token, 'GetBuilderBaseLeagues');
};

/**
 * Get builder base league info by ID
 */
exports.getBuilderBaseLeagueById = async (leagueId, token) => {
  const endpoint = `/builderbaseleagues/${leagueId}`;
  return get(endpoint, token, 'GetBuilderBaseLeagueById');
};
