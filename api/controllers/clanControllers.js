/**
 * Clan Controllers
 * Handles all clan-related HTTP endpoints
 */

const clanModel = require('../models/clanModel');
const { asyncHandler, requireQueryParam, getApiKey } = require('../utils/controllerHelper');

// Get clan info by tag
exports.getClanInfo = asyncHandler(async (req) => {
  const clanTag = requireQueryParam(req, 'clanTag', 'Clan tag is required.');
  return clanModel.getClanData(clanTag, getApiKey());
});

// Search clan by tag
exports.getSearchClanInfo = asyncHandler(async (req) => {
  const clanTag = requireQueryParam(req, 'clanTag', 'Clan tag is required.');
  return clanModel.getSearchClanData(clanTag, getApiKey());
});

// Get clan members
exports.getClanMembers = asyncHandler(async (req) => {
  const clanTag = requireQueryParam(req, 'clanTag', 'Clan tag is required.');
  return clanModel.getClanMembersData(clanTag, getApiKey());
});

// Get clan war log
exports.getClanWarInfo = asyncHandler(async (req) => {
  const clanTag = requireQueryParam(req, 'clanTag', 'Clan tag is required.');
  return clanModel.getClanWarData(clanTag, getApiKey());
});

// Get current clan war
exports.getClanCurrentWarInfo = asyncHandler(async (req) => {
  const clanTag = requireQueryParam(req, 'clanTag', 'Clan tag is required.');
  return clanModel.getClanCurrentWarData(clanTag, getApiKey());
});

// Get clan capital raid seasons
exports.getClanCapitalRaidSeaonsInfo = asyncHandler(async (req) => {
  const clanTag = requireQueryParam(req, 'clanTag', 'Clan tag is required.');
  return clanModel.getClanCapitalRaidSeaonsData(clanTag, getApiKey());
});

// Get clan war league group
exports.getClanCurrentWarLeagueGroupInfo = asyncHandler(async (req) => {
  const clanTag = requireQueryParam(req, 'clanTag', 'Clan tag is required.');
  return clanModel.getClanCurrentWarLeagueGroupData(clanTag, getApiKey());
});

// Get individual CWL war
exports.getClanWarLeagueIndividualWarInfo = asyncHandler(async (req) => {
  const warTag = requireQueryParam(req, 'warTag', 'War tag is required.');
  return clanModel.getClanWarLeagueIndividualWarData(warTag, getApiKey());
});

// Search clans with filters
exports.searchClans = asyncHandler(async (req) => {
  const { name, warFrequency, locationId, minMembers, maxMembers, minClanPoints, minClanLevel, labelIds, limit, after, before } = req.query;
  
  if (!name || name.length < 3) {
    const err = new Error('Clan name is required and must be at least 3 characters.');
    err.status = 400;
    err.reason = 'badRequest';
    throw err;
  }
  
  const params = {
    name,
    warFrequency,
    locationId,
    minMembers,
    maxMembers,
    minClanPoints,
    minClanLevel,
    labelIds,
    limit: limit || 20,
    after,
    before,
  };
  
  return clanModel.searchClans(params, getApiKey());
});
