/**
 * Controller Helper Utility
 * Common request/response handling for controllers
 */

require('dotenv').config();

const COC_API_KEY = process.env.COC_API_KEY;

// Log on startup
console.log('\x1b[36m[API]\x1b[0m COC_API_KEY loaded:', COC_API_KEY ? '✓ Yes' : '✗ NO - CHECK YOUR .env FILE!');
if (!COC_API_KEY) {
  console.log('\x1b[33m[WARN]\x1b[0m Create API key at https://developer.clashofclans.com');
  console.log('\x1b[33m[WARN]\x1b[0m Whitelist IP: 45.79.218.79 (RoyaleAPI proxy server)');
}

/**
 * Get the API key
 */
const getApiKey = () => COC_API_KEY;

/**
 * Wrap an async controller function with error handling
 * 
 * @param {Function} handler - Async function that performs the API call
 * @returns {Function} - Express middleware function
 */
const asyncHandler = (handler) => {
  return async (req, res) => {
    try {
      const result = await handler(req, res, COC_API_KEY);
      
      // If handler already sent response, skip
      if (res.headersSent) return;
      
      res.status(200).json(result);
    } catch (error) {
      // If handler already sent response, skip
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

/**
 * Extract and validate a required query parameter
 * 
 * @param {object} req - Express request object
 * @param {string} paramName - Parameter name to extract
 * @param {string} errorMessage - Error message if missing
 * @returns {string} - Parameter value
 * @throws {Error} - If parameter is missing
 */
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

/**
 * Extract and validate a required route parameter
 * 
 * @param {object} req - Express request object
 * @param {string} paramName - Parameter name to extract
 * @param {string} errorMessage - Error message if missing
 * @returns {string} - Parameter value
 * @throws {Error} - If parameter is missing
 */
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

/**
 * Send success response
 */
const sendSuccess = (res, data, statusCode = 200) => {
  res.status(statusCode).json(data);
};

/**
 * Send error response
 */
const sendError = (res, message, statusCode = 500, reason = 'unknown') => {
  res.status(statusCode).json({
    error: true,
    message,
    reason,
  });
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

