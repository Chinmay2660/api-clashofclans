/**
 * Label Controllers
 * Handles all label-related HTTP endpoints
 */

const labelModel = require('../models/labelModel');
const { asyncHandler, getApiKey } = require('../utils/controllerHelper');

// Get all player labels
exports.getPlayerLabels = asyncHandler(async (req) => {
  const { limit = 50 } = req.query;
  return labelModel.getPlayerLabels(getApiKey(), limit);
});

// Get all clan labels
exports.getClanLabels = asyncHandler(async (req) => {
  const { limit = 50 } = req.query;
  return labelModel.getClanLabels(getApiKey(), limit);
});
