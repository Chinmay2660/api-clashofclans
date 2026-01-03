/**
 * Clan Model
 * Handles all clan-related API calls
 */

const { get, encodeTag, cleanTag } = require('../utils/apiClient');

/**
 * Get clan data by tag
 */
exports.getClanData = async (clanTag, token) => {
  const endpoint = `/clans/${encodeTag(clanTag)}`;
  return get(endpoint, token, 'GetClan', 'clan');
};

/**
 * Search clan by tag (alias for getClanData)
 */
exports.getSearchClanData = async (clanTag, token) => {
  return exports.getClanData(clanTag, token);
};

/**
 * Get clan members
 */
exports.getClanMembersData = async (clanTag, token) => {
  const endpoint = `/clans/${encodeTag(clanTag)}/members`;
  return get(endpoint, token, 'GetClanMembers', 'clan');
};

/**
 * Get clan war log
 */
exports.getClanWarData = async (clanTag, token) => {
  const endpoint = `/clans/${encodeTag(clanTag)}/warlog`;
  return get(endpoint, token, 'GetClanWarLog', 'clan');
};

/**
 * Get clan current war
 */
exports.getClanCurrentWarData = async (clanTag, token) => {
  const endpoint = `/clans/${encodeTag(clanTag)}/currentwar`;
  return get(endpoint, token, 'GetClanCurrentWar', 'clan');
};

/**
 * Get clan capital raid seasons
 */
exports.getClanCapitalRaidSeaonsData = async (clanTag, token) => {
  const endpoint = `/clans/${encodeTag(clanTag)}/capitalraidseasons`;
  return get(endpoint, token, 'GetCapitalRaidSeasons', 'clan');
};

/**
 * Get clan current war league group
 */
exports.getClanCurrentWarLeagueGroupData = async (clanTag, token) => {
  const endpoint = `/clans/${encodeTag(clanTag)}/currentwar/leaguegroup`;
  return get(endpoint, token, 'GetCWLGroup', 'clan');
};

/**
 * Get individual clan war league war
 */
exports.getClanWarLeagueIndividualWarData = async (warTag, token) => {
  const endpoint = `/clanwarleagues/wars/${encodeTag(warTag)}`;
  return get(endpoint, token, 'GetCWLWar', 'clan');
};

/**
 * Search clans with filters
 */
exports.searchClans = async (params, token) => {
  const queryParams = new URLSearchParams();
  
  // Build query parameters
  if (params.name) queryParams.append('name', params.name);
  if (params.warFrequency) queryParams.append('warFrequency', params.warFrequency);
  if (params.locationId) queryParams.append('locationId', params.locationId);
  if (params.minMembers) queryParams.append('minMembers', params.minMembers);
  if (params.maxMembers) queryParams.append('maxMembers', params.maxMembers);
  if (params.minClanPoints) queryParams.append('minClanPoints', params.minClanPoints);
  if (params.minClanLevel) queryParams.append('minClanLevel', params.minClanLevel);
  if (params.limit) queryParams.append('limit', params.limit);
  if (params.after) queryParams.append('after', params.after);
  if (params.before) queryParams.append('before', params.before);
  
  if (params.labelIds) {
    const labels = Array.isArray(params.labelIds) ? params.labelIds.join(',') : params.labelIds;
    queryParams.append('labelIds', labels);
  }
  
  const endpoint = `/clans?${queryParams.toString()}`;
  return get(endpoint, token, 'SearchClans', 'clan');
};
