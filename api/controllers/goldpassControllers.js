/**
 * Gold Pass Controllers
 * Handles Gold Pass HTTP endpoints
 */

const goldpassModel = require('../models/goldpassModel');
const { asyncHandler, getApiKey } = require('../utils/controllerHelper');

// Get current gold pass season
exports.getCurrentSeason = asyncHandler(async () => {
  return goldpassModel.getCurrentSeason(getApiKey());
});
