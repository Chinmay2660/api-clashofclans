/**
 * Location Controllers
 * Handles all location and ranking-related HTTP endpoints
 */

const locationModel = require('../models/locationModel');
const { asyncHandler, requireRouteParam, getApiKey } = require('../utils/controllerHelper');

// Get all locations
exports.getLocations = asyncHandler(async (req) => {
  const { limit = 50, after, before } = req.query;
  return locationModel.getLocations(getApiKey(), limit, after, before);
});

// Get location by ID
exports.getLocationById = asyncHandler(async (req) => {
  const locationId = requireRouteParam(req, 'locationId', 'Location ID is required.');
  return locationModel.getLocationById(locationId, getApiKey());
});

// Get clan rankings for location
exports.getClanRankings = asyncHandler(async (req) => {
  const locationId = requireRouteParam(req, 'locationId', 'Location ID is required.');
  const { limit = 50, after, before } = req.query;
  return locationModel.getClanRankings(locationId, getApiKey(), limit, after, before);
});

// Get player rankings for location
exports.getPlayerRankings = asyncHandler(async (req) => {
  const locationId = requireRouteParam(req, 'locationId', 'Location ID is required.');
  const { limit = 50, after, before } = req.query;
  return locationModel.getPlayerRankings(locationId, getApiKey(), limit, after, before);
});

// Get clan builder base rankings for location
exports.getClanBuilderBaseRankings = asyncHandler(async (req) => {
  const locationId = requireRouteParam(req, 'locationId', 'Location ID is required.');
  const { limit = 50, after, before } = req.query;
  return locationModel.getClanBuilderBaseRankings(locationId, getApiKey(), limit, after, before);
});

// Get player builder base rankings for location
exports.getPlayerBuilderBaseRankings = asyncHandler(async (req) => {
  const locationId = requireRouteParam(req, 'locationId', 'Location ID is required.');
  const { limit = 50, after, before } = req.query;
  return locationModel.getPlayerBuilderBaseRankings(locationId, getApiKey(), limit, after, before);
});

// Get capital rankings for location
exports.getCapitalRankings = asyncHandler(async (req) => {
  const locationId = requireRouteParam(req, 'locationId', 'Location ID is required.');
  const { limit = 50, after, before } = req.query;
  return locationModel.getCapitalRankings(locationId, getApiKey(), limit, after, before);
});
