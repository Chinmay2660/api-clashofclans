require('dotenv').config();

const COC_API_KEY = process.env.COC_API_KEY;

const getApiKey = () => COC_API_KEY;

const asyncHandler = (handler) => {
  return async (req, res) => {
    try {
      const result = await handler(req, res, COC_API_KEY);
      if (res.headersSent) return;
      res.status(200).json(result);
    } catch (error) {
      if (res.headersSent) return;
      const statusCode = error.status || 500;
      res.status(statusCode).json({
        error: true,
        message: error.message || 'Internal server error',
        reason: error.reason || 'unknown',
      });
    }
  };
};

const requireQueryParam = (req, paramName, errorMessage) => {
  const value = req.query[paramName];
  if (!value) {
    const err = new Error(errorMessage || `${paramName} is required.`);
    err.status = 400;
    err.reason = 'badRequest';
    throw err;
  }
  return value;
};

const requireRouteParam = (req, paramName, errorMessage) => {
  const value = req.params[paramName];
  if (!value) {
    const err = new Error(errorMessage || `${paramName} is required.`);
    err.status = 400;
    err.reason = 'badRequest';
    throw err;
  }
  return value;
};

const sendSuccess = (res, data, statusCode = 200) => {
  res.status(statusCode).json(data);
};

const sendError = (res, message, statusCode = 500, reason = 'unknown') => {
  res.status(statusCode).json({ error: true, message, reason });
};

module.exports = {
  getApiKey,
  asyncHandler,
  requireQueryParam,
  requireRouteParam,
  sendSuccess,
  sendError,
  COC_API_KEY,
};
