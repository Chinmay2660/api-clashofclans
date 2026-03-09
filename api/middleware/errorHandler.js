const notFoundHandler = (req, res) => {
  res.status(404).json({
    error: true,
    message: 'Endpoint not found',
    path: req.path,
  });
};

const globalErrorHandler = (err, req, res, next) => {
  if (res.headersSent) return next(err);
  console.error('Error:', err.message);

  if (err.message === 'Not allowed by CORS') {
    return res.status(403).json({ error: true, message: 'Origin not allowed' });
  }
  if (err.status === 429) {
    return res.status(429).json({ error: true, message: 'Too many requests' });
  }

  const status = err.status || 500;
  const message = process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message;
  res.status(status).json({ error: true, message });
};

module.exports = { notFoundHandler, globalErrorHandler };
