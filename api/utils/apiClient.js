const axios = require('axios');

const COC_API_BASE = 'https://cocproxy.royaleapi.dev/v1';

const CACHE_TTL_MS = {
  LONG: 15 * 60 * 1000,
  MEDIUM: 5 * 60 * 1000,
  SHORT: 2 * 60 * 1000,
};

const responseCache = new Map();

const getCacheTtlMs = (endpoint) => {
  const path = (endpoint.startsWith('http') ? endpoint.replace(COC_API_BASE, '') : endpoint).split('?')[0];
  if (/^\/(leagues|leaguetiers|warleagues|capitalleagues|builderbaseleagues|locations|labels|goldpass)/.test(path)) return CACHE_TTL_MS.LONG;
  if (/^\/players\/.+/.test(path) || /^\/clans\/%23/.test(path) || /^\/clanwarleagues/.test(path)) return CACHE_TTL_MS.SHORT;
  return CACHE_TTL_MS.MEDIUM;
};

const cacheGet = (key) => {
  const entry = responseCache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    responseCache.delete(key);
    return null;
  }
  return entry.data;
};

const cacheSet = (key, data, ttlMs) => {
  responseCache.set(key, { data, expiresAt: Date.now() + ttlMs });
};

const LogLevel = {
  INFO: '\x1b[36m[INFO]\x1b[0m',
  SUCCESS: '\x1b[32m[SUCCESS]\x1b[0m',
  WARN: '\x1b[33m[WARN]\x1b[0m',
  ERROR: '\x1b[31m[ERROR]\x1b[0m',
  DEBUG: '\x1b[35m[DEBUG]\x1b[0m',
};

const getTimestamp = () => new Date().toISOString();

const logRequest = (method, url, context = '') => {
  console.log(`${LogLevel.INFO} ${getTimestamp()} | ${method.toUpperCase()} ${context ? `[${context}]` : ''}`);
  console.log(`  → URL: ${url}`);
};

const logSuccess = (status, context = '') => {
  console.log(`${LogLevel.SUCCESS} ${getTimestamp()} | Response ${status} ${context ? `[${context}]` : ''}`);
};

const logError = (error, context = '') => {
  const status = error.response?.status || 'N/A';
  const reason = error.response?.data?.reason || error.message;
  console.error(`${LogLevel.ERROR} ${getTimestamp()} | Error ${status} ${context ? `[${context}]` : ''}`);
  console.error(`  → Reason: ${reason}`);
  if (error.response?.data) console.error(`  → Data: ${JSON.stringify(error.response.data)}`);
};

const logDebug = (message, data = null) => {
  if (process.env.DEBUG === 'true') {
    console.log(`${LogLevel.DEBUG} ${getTimestamp()} | ${message}`);
    if (data) console.log(`  → ${JSON.stringify(data)}`);
  }
};

const ERROR_MESSAGES = {
  400: 'Invalid request. Please check your input.',
  403: 'Access denied. Make sure your API key whitelists IP: 45.79.218.79',
  404: {
    player: 'Player not found. Please check the tag and try again.',
    clan: 'Clan not found. Please check the tag and try again.',
    leagueGroup: 'No current war league group found. The clan may not be in an active Clan War League season.',
    default: 'Resource not found. Please check your request.',
  },
  429: 'Rate limit exceeded. Please wait a moment and try again.',
  500: 'Server error. Please try again later.',
  503: 'Clash of Clans API is currently unavailable. Please try again later.',
};

const createApiError = (error, resourceType = 'default') => {
  const status = error.response?.status;
  const reason = error.response?.data?.reason;
  let message = error.message;
  if (status && ERROR_MESSAGES[status]) {
    const errorMsg = ERROR_MESSAGES[status];
    message = typeof errorMsg === 'object' ? errorMsg[resourceType] || errorMsg.default : errorMsg;
  }
  const apiError = new Error(message);
  apiError.status = status || 500;
  apiError.reason = reason || 'unknown';
  apiError.originalError = error;
  return apiError;
};

const cleanTag = (tag) => (tag ? tag.replace('#', '').toUpperCase().trim() : '');
const encodeTag = (tag) => `%23${cleanTag(tag)}`;

const validateToken = (token) => {
  if (!token) {
    const err = new Error('API key is missing. Please set COC_API_KEY in your .env file');
    err.status = 401;
    err.reason = 'missingToken';
    throw err;
  }
};

const get = async (endpoint, token, context = '', resourceType = 'default') => {
  validateToken(token);
  const url = endpoint.startsWith('http') ? endpoint : `${COC_API_BASE}${endpoint}`;
  const cacheKey = url;
  const ttlMs = getCacheTtlMs(endpoint);
  const cached = cacheGet(cacheKey);
  if (cached !== null) {
    logDebug(`Cache hit [${context}]`);
    return cached;
  }
  logRequest('GET', url, context);
  try {
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    logSuccess(response.status, context);
    cacheSet(cacheKey, response.data, ttlMs);
    return response.data;
  } catch (error) {
    logError(error, context);
    throw createApiError(error, resourceType);
  }
};

const post = async (endpoint, data, token, context = '', resourceType = 'default') => {
  validateToken(token);
  const url = endpoint.startsWith('http') ? endpoint : `${COC_API_BASE}${endpoint}`;
  logRequest('POST', url, context);
  logDebug('Request body', data);
  try {
    const response = await axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
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

module.exports = {
  get,
  post,
  cleanTag,
  encodeTag,
  logRequest,
  logSuccess,
  logError,
  logDebug,
  LogLevel,
  createApiError,
  ERROR_MESSAGES,
  COC_API_BASE,
};
