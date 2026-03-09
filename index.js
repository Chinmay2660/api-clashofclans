require('dotenv').config();
const express = require('express');

const corsMiddleware = require('./config/cors');
const { generalLimiter } = require('./config/rateLimit');
const {
  helmetMiddleware,
  hppMiddleware,
  bodyParser,
  timeoutMiddleware,
} = require('./config/security');
const requestLogger = require('./api/middleware/requestLogger');
const { notFoundHandler, globalErrorHandler } = require('./api/middleware/errorHandler');
const apiRoutes = require('./api/routes');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(helmetMiddleware);
app.use(corsMiddleware);
app.use(generalLimiter);
app.use(hppMiddleware);
app.use(bodyParser(express));
app.use(timeoutMiddleware);
app.use(requestLogger);

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

app.use('/api', apiRoutes);

app.use(notFoundHandler);
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} (${process.env.NODE_ENV || 'development'})`);
});
