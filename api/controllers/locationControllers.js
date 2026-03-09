const locationModel = require('../models/locationModel');
const { asyncHandler, requireRouteParam, getApiKey } = require('../utils/controllerHelper');

exports.getLocations = asyncHandler(async (req) => {
  const { limit = 50, after, before } = req.query;
  return locationModel.getLocations(getApiKey(), limit, after, before);
});

exports.getLocationById = asyncHandler(async (req) => {
  const locationId = requireRouteParam(req, 'locationId', 'Location ID is required.');
  return locationModel.getLocationById(locationId, getApiKey());
});

exports.getClanRankings = asyncHandler(async (req) => {
  const locationId = requireRouteParam(req, 'locationId', 'Location ID is required.');
  const { limit = 50, after, before } = req.query;
  return locationModel.getClanRankings(locationId, getApiKey(), limit, after, before);
});

exports.getPlayerRankings = asyncHandler(async (req) => {
  const locationId = requireRouteParam(req, 'locationId', 'Location ID is required.');
  const { limit = 50, after, before } = req.query;
  return locationModel.getPlayerRankings(locationId, getApiKey(), limit, after, before);
});

exports.getClanBuilderBaseRankings = asyncHandler(async (req) => {
  const locationId = requireRouteParam(req, 'locationId', 'Location ID is required.');
  const { limit = 50, after, before } = req.query;
  return locationModel.getClanBuilderBaseRankings(locationId, getApiKey(), limit, after, before);
});

exports.getPlayerBuilderBaseRankings = asyncHandler(async (req) => {
  const locationId = requireRouteParam(req, 'locationId', 'Location ID is required.');
  const { limit = 50, after, before } = req.query;
  return locationModel.getPlayerBuilderBaseRankings(locationId, getApiKey(), limit, after, before);
});

exports.getCapitalRankings = asyncHandler(async (req) => {
  const locationId = requireRouteParam(req, 'locationId', 'Location ID is required.');
  const { limit = 50, after, before } = req.query;
  return locationModel.getCapitalRankings(locationId, getApiKey(), limit, after, before);
});
