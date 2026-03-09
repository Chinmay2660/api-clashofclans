const helmet = require('helmet');
const hpp = require('hpp');

const BODY_LIMIT = '10kb';
const REQUEST_TIMEOUT_MS = 30000;

const helmetMiddleware = helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
});

const bodyParser = (express) => [
  express.json({ limit: BODY_LIMIT }),
  express.urlencoded({ extended: true, limit: BODY_LIMIT }),
];

const timeoutMiddleware = (req, res, next) => {
  req.setTimeout(REQUEST_TIMEOUT_MS);
  next();
};

module.exports = {
  helmetMiddleware,
  hppMiddleware: hpp(),
  bodyParser,
  timeoutMiddleware,
};
