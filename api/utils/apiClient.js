/**
 * Common API Client Utility
 * Centralized API request handling, logging, and error management
 */

const axios = require('axios');

// Base URL for Clash of Clans API (via RoyaleAPI proxy)
const COC_API_BASE = 'https://cocproxy.royaleapi.dev/v1';

// ========== LOGGING UTILITIES ==========

/**
 * Log levels with colors for terminal
 */
const LogLevel = {
  INFO: '\x1b[36m[INFO]\x1b[0m',    // Cyan
  SUCCESS: '\x1b[32m[SUCCESS]\x1b[0m', // Green
  WARN: '\x1b[33m[WARN]\x1b[0m',    // Yellow
  ERROR: '\x1b[31m[ERROR]\x1b[0m',  // Red
  DEBUG: '\x1b[35m[DEBUG]\x1b[0m',  // Magenta
};

/**
 * Get current timestamp for logging
 */
const getTimestamp = () => new Date().toISOString();

/**
 * Log API request
 */
const logRequest = (method, url, context = '') => {
  console.log(`${LogLevel.INFO} ${getTimestamp()} | ${method.toUpperCase()} ${context ? `[${context}]` : ''}`);
  console.log(`  → URL: ${url}`);
};

/**
 * Log API success response
 */
const logSuccess = (status, context = '') => {
  console.log(`${LogLevel.SUCCESS} ${getTimestamp()} | Response ${status} ${context ? `[${context}]` : ''}`);
};

/**
 * Log API error
 */
const logError = (error, context = '') => {
  const status = error.response?.status || 'N/A';
  const reason = error.response?.data?.reason || error.message;
  
  console.error(`${LogLevel.ERROR} ${getTimestamp()} | Error ${status} ${context ? `[${context}]` : ''}`);
  console.error(`  → Reason: ${reason}`);
  
  if (error.response?.data) {
    console.error(`  → Data: ${JSON.stringify(error.response.data)}`);
  }
};

/**
 * Log debug info
 */
const logDebug = (message, data = null) => {
  if (process.env.DEBUG === 'true') {
    console.log(`${LogLevel.DEBUG} ${getTimestamp()} | ${message}`);
    if (data) {
      console.log(`  → ${JSON.stringify(data)}`);
    }
  }
};

// ========== ERROR HANDLING ==========

/**
 * User-friendly error messages by status code
 */
const ERROR_MESSAGES = {
  400: 'Invalid request. Please check your input.',
  403: 'Access denied. Make sure your API key whitelists IP: 45.79.218.79',
  404: {
    player: 'Player not found. Please check the tag and try again.',
    clan: 'Clan not found. Please check the tag and try again.',
    default: 'Resource not found. Please check your request.',
  },
  429: 'Rate limit exceeded. Please wait a moment and try again.',
  500: 'Server error. Please try again later.',
  503: 'Clash of Clans API is currently unavailable. Please try again later.',
};

/**
 * Create a standardized API error
 */
const createApiError = (error, resourceType = 'default') => {
  const status = error.response?.status;
  const reason = error.response?.data?.reason;
  
  let message = error.message;
  
  if (status && ERROR_MESSAGES[status]) {
    const errorMsg = ERROR_MESSAGES[status];
    message = typeof errorMsg === 'object' 
      ? errorMsg[resourceType] || errorMsg.default 
      : errorMsg;
  }
  
  const apiError = new Error(message);
  apiError.status = status || 500;
  apiError.reason = reason || 'unknown';
  apiError.originalError = error;
  
  return apiError;
};

// ========== TAG UTILITIES ==========

/**
 * Clean and format a Clash of Clans tag
 * Removes #, converts to uppercase, trims whitespace
 */
const cleanTag = (tag) => {
  if (!tag) return '';
  return tag.replace('#', '').toUpperCase().trim();
};

/**
 * Encode tag for URL (adds %23 prefix)
 */
const encodeTag = (tag) => {
  return `%23${cleanTag(tag)}`;
};

// ========== API REQUEST METHODS ==========

/**
 * Validate API token exists
 */
const validateToken = (token) => {
  if (!token) {
    const err = new Error('API key is missing. Please set COC_API_KEY in your .env file');
    err.status = 401;
    err.reason = 'missingToken';
    throw err;
  }
};

/**
 * Make a GET request to the CoC API
 * 
 * @param {string} endpoint - API endpoint (without base URL)
 * @param {string} token - API authentication token
 * @param {string} context - Context for logging (e.g., 'GetPlayer', 'GetClan')
 * @param {string} resourceType - Resource type for error messages ('player', 'clan', etc.)
 * @returns {Promise<object>} - API response data
 */
const get = async (endpoint, token, context = '', resourceType = 'default') => {
  validateToken(token);
  
  const url = endpoint.startsWith('http') ? endpoint : `${COC_API_BASE}${endpoint}`;
  
  logRequest('GET', url, context);
  
  try {
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    
    logSuccess(response.status, context);
    return response.data;
    
  } catch (error) {
    logError(error, context);
    throw createApiError(error, resourceType);
  }
};

/**
 * Make a POST request to the CoC API
 * 
 * @param {string} endpoint - API endpoint (without base URL)
 * @param {object} data - Request body
 * @param {string} token - API authentication token
 * @param {string} context - Context for logging
 * @param {string} resourceType - Resource type for error messages
 * @returns {Promise<object>} - API response data
 */
const post = async (endpoint, data, token, context = '', resourceType = 'default') => {
  validateToken(token);
  
  const url = endpoint.startsWith('http') ? endpoint : `${COC_API_BASE}${endpoint}`;
  
  logRequest('POST', url, context);
  logDebug('Request body', data);
  
  try {
    const response = await axios.post(url, data, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    logSuccess(response.status, context);
    return response.data;
    
  } catch (error) {
    logError(error, context);
    throw createApiError(error, resourceType);
  }
};

// ========== EXPORTS ==========

module.exports = {
  // API methods
  get,
  post,
  
  // Tag utilities
  cleanTag,
  encodeTag,
  
  // Logging utilities
  logRequest,
  logSuccess,
  logError,
  logDebug,
  LogLevel,
  
  // Error handling
  createApiError,
  ERROR_MESSAGES,
  
  // Constants
  COC_API_BASE,
};

