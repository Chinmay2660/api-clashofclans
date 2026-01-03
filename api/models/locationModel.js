/**
 * Location Model
 * Handles all location and ranking-related API calls
 */

const { get } = require('../utils/apiClient');

/**
 * Build pagination query string
 */
const buildPaginationQuery = (limit = 50, after, before) => {
  const params = new URLSearchParams();
  params.append('limit', limit);
  if (after) params.append('after', after);
  if (before) params.append('before', before);
  return params.toString();
};

/**
 * Get list of all locations
 */
exports.getLocations = async (token, limit = 50, after, before) => {
  const query = buildPaginationQuery(limit, after, before);
  const endpoint = `/locations?${query}`;
  return get(endpoint, token, 'GetLocations');
};

/**
 * Get location info by ID
 */
exports.getLocationById = async (locationId, token) => {
  const endpoint = `/locations/${locationId}`;
  return get(endpoint, token, 'GetLocationById');
};

/**
 * Get clan rankings for a location
 */
exports.getClanRankings = async (locationId, token, limit = 50, after, before) => {
  const query = buildPaginationQuery(limit, after, before);
  const endpoint = `/locations/${locationId}/rankings/clans?${query}`;
  return get(endpoint, token, 'GetClanRankings');
};

/**
 * Get player rankings for a location
 */
exports.getPlayerRankings = async (locationId, token, limit = 50, after, before) => {
  const query = buildPaginationQuery(limit, after, before);
  const endpoint = `/locations/${locationId}/rankings/players?${query}`;
  return get(endpoint, token, 'GetPlayerRankings');
};

/**
 * Get clan builder base rankings for a location
 */
exports.getClanBuilderBaseRankings = async (locationId, token, limit = 50, after, before) => {
  const query = buildPaginationQuery(limit, after, before);
  const endpoint = `/locations/${locationId}/rankings/clans-builder-base?${query}`;
  return get(endpoint, token, 'GetClanBuilderRankings');
};

/**
 * Get player builder base rankings for a location
 */
exports.getPlayerBuilderBaseRankings = async (locationId, token, limit = 50, after, before) => {
  const query = buildPaginationQuery(limit, after, before);
  const endpoint = `/locations/${locationId}/rankings/players-builder-base?${query}`;
  return get(endpoint, token, 'GetPlayerBuilderRankings');
};

/**
 * Get clan capital rankings for a location
 */
exports.getCapitalRankings = async (locationId, token, limit = 50, after, before) => {
  const query = buildPaginationQuery(limit, after, before);
  const endpoint = `/locations/${locationId}/rankings/capitals?${query}`;
  return get(endpoint, token, 'GetCapitalRankings');
};
