const labelModel = require('../models/labelModel');
const { asyncHandler, getApiKey } = require('../utils/controllerHelper');

exports.getPlayerLabels = asyncHandler(async (req) => {
  const { limit = 50 } = req.query;
  return labelModel.getPlayerLabels(getApiKey(), limit);
});

exports.getClanLabels = asyncHandler(async (req) => {
  const { limit = 50 } = req.query;
  return labelModel.getClanLabels(getApiKey(), limit);
});
