const clanModel = require('../models/clanModel');
const { asyncHandler, requireQueryParam, getApiKey } = require('../utils/controllerHelper');

exports.getClanInfo = asyncHandler(async (req) => {
  const clanTag = requireQueryParam(req, 'clanTag', 'Clan tag is required.');
  return clanModel.getClanData(clanTag, getApiKey());
});

exports.getSearchClanInfo = asyncHandler(async (req) => {
  const clanTag = requireQueryParam(req, 'clanTag', 'Clan tag is required.');
  return clanModel.getSearchClanData(clanTag, getApiKey());
});

exports.getClanMembers = asyncHandler(async (req) => {
  const clanTag = requireQueryParam(req, 'clanTag', 'Clan tag is required.');
  return clanModel.getClanMembersData(clanTag, getApiKey());
});

exports.getClanWarInfo = asyncHandler(async (req) => {
  const clanTag = requireQueryParam(req, 'clanTag', 'Clan tag is required.');
  return clanModel.getClanWarData(clanTag, getApiKey());
});

exports.getClanCurrentWarInfo = asyncHandler(async (req) => {
  const clanTag = requireQueryParam(req, 'clanTag', 'Clan tag is required.');
  return clanModel.getClanCurrentWarData(clanTag, getApiKey());
});

exports.getClanCapitalRaidSeaonsInfo = asyncHandler(async (req) => {
  const clanTag = requireQueryParam(req, 'clanTag', 'Clan tag is required.');
  return clanModel.getClanCapitalRaidSeaonsData(clanTag, getApiKey());
});

exports.getClanCurrentWarLeagueGroupInfo = asyncHandler(async (req) => {
  const clanTag = requireQueryParam(req, 'clanTag', 'Clan tag is required.');
  return clanModel.getClanCurrentWarLeagueGroupData(clanTag, getApiKey());
});

exports.getClanWarLeagueIndividualWarInfo = asyncHandler(async (req) => {
  const warTag = requireQueryParam(req, 'warTag', 'War tag is required.');
  return clanModel.getClanWarLeagueIndividualWarData(warTag, getApiKey());
});

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
