const goldpassModel = require('../models/goldpassModel');
const { asyncHandler, getApiKey } = require('../utils/controllerHelper');

exports.getCurrentSeason = asyncHandler(async () => {
  return goldpassModel.getCurrentSeason(getApiKey());
});
