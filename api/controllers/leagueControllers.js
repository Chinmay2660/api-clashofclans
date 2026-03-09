const leagueModel = require('../models/leagueModel');
const { asyncHandler, requireRouteParam, getApiKey } = require('../utils/controllerHelper');

exports.getLeagueTiers = asyncHandler(async (req) => {
  const { limit = 50 } = req.query;
  return leagueModel.getLeagueTiers(getApiKey(), limit);
});

exports.getLeagueTierById = asyncHandler(async (req) => {
  const tierId = requireRouteParam(req, 'tierId', 'Tier ID is required.');
  return leagueModel.getLeagueTierById(tierId, getApiKey());
});

exports.getLeagues = asyncHandler(async (req) => {
  const { limit = 50 } = req.query;
  return leagueModel.getLeagues(getApiKey(), limit);
});

exports.getLeagueById = asyncHandler(async (req) => {
  const leagueId = requireRouteParam(req, 'leagueId', 'League ID is required.');
  return leagueModel.getLeagueById(leagueId, getApiKey());
});

exports.getLeagueSeasons = asyncHandler(async (req) => {
  const leagueId = requireRouteParam(req, 'leagueId', 'League ID is required.');
  const { limit = 50 } = req.query;
  return leagueModel.getLeagueSeasons(leagueId, getApiKey(), limit);
});

exports.getLeagueSeasonRankings = asyncHandler(async (req) => {
  const leagueId = requireRouteParam(req, 'leagueId', 'League ID is required.');
  const seasonId = requireRouteParam(req, 'seasonId', 'Season ID is required.');
  const { limit = 200, after, before } = req.query;
  return leagueModel.getLeagueSeasonRankings(leagueId, seasonId, getApiKey(), limit, after, before);
});

exports.getWarLeagues = asyncHandler(async (req) => {
  const { limit = 50 } = req.query;
  return leagueModel.getWarLeagues(getApiKey(), limit);
});

exports.getWarLeagueById = asyncHandler(async (req) => {
  const leagueId = requireRouteParam(req, 'leagueId', 'League ID is required.');
  return leagueModel.getWarLeagueById(leagueId, getApiKey());
});

exports.getCapitalLeagues = asyncHandler(async (req) => {
  const { limit = 50 } = req.query;
  return leagueModel.getCapitalLeagues(getApiKey(), limit);
});

exports.getCapitalLeagueById = asyncHandler(async (req) => {
  const leagueId = requireRouteParam(req, 'leagueId', 'League ID is required.');
  return leagueModel.getCapitalLeagueById(leagueId, getApiKey());
});

exports.getBuilderBaseLeagues = asyncHandler(async (req) => {
  const { limit = 50 } = req.query;
  return leagueModel.getBuilderBaseLeagues(getApiKey(), limit);
});

exports.getBuilderBaseLeagueById = asyncHandler(async (req) => {
  const leagueId = requireRouteParam(req, 'leagueId', 'League ID is required.');
  return leagueModel.getBuilderBaseLeagueById(leagueId, getApiKey());
});
