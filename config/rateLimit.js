const rateLimit = require('express-rate-limit');

const WINDOW_MS_GENERAL = 15 * 60 * 1000;
const MAX_GENERAL = 100;
const WINDOW_MS_API = 60 * 1000;
const MAX_API = 30;

const rateLimitMessage = (message, retryAfter) => ({
  error: true,
  message,
  retryAfter,
});

const generalLimiter = rateLimit({
  windowMs: WINDOW_MS_GENERAL,
  max: MAX_GENERAL,
  message: rateLimitMessage('Too many requests. Please try again in 15 minutes.', '15 minutes'),
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => req.path === '/health',
});

const apiLimiter = rateLimit({
  windowMs: WINDOW_MS_API,
  max: MAX_API,
  message: rateLimitMessage('Rate limit exceeded. Maximum 30 requests per minute.', '1 minute'),
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = { generalLimiter, apiLimiter };
