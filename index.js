require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');

// Routes
const playersRoutes = require('./api/routes/playersRoutes');
const clansRoutes = require('./api/routes/clansRoutes');
const locationsRoutes = require('./api/routes/locationsRoutes');
const leaguesRoutes = require('./api/routes/leaguesRoutes');
const leagueTiersRoutes = require('./api/routes/leagueTiersRoutes');
const warLeaguesRoutes = require('./api/routes/warLeaguesRoutes');
const capitalLeaguesRoutes = require('./api/routes/capitalLeaguesRoutes');
const builderBaseLeaguesRoutes = require('./api/routes/builderBaseLeaguesRoutes');
const labelsRoutes = require('./api/routes/labelsRoutes');
const goldpassRoutes = require('./api/routes/goldpassRoutes');

const app = express();
const PORT = process.env.PORT || 8000;

// ===================
// SECURITY MIDDLEWARE
// ===================

// 1. Helmet - Set security HTTP headers
app.use(helmet({
    contentSecurityPolicy: false, // Disable for API
    crossOriginEmbedderPolicy: false,
}));

// 2. CORS - Configure allowed origins
const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://ui-clashofclans.vercel.app',
    'https://clasherstats.vercel.app',
    // Add your production domains here
];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (mobile apps, curl, etc.)
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.log('Blocked by CORS:', origin);
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    maxAge: 86400, // 24 hours
}));

// 3. Rate Limiting - Prevent brute force & DDoS
const generalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // 100 requests per 15 minutes per IP
    message: {
        error: true,
        message: 'Too many requests. Please try again in 15 minutes.',
        retryAfter: '15 minutes'
    },
    standardHeaders: true,
    legacyHeaders: false,
    // Skip rate limiting for health checks
    skip: (req) => req.path === '/health',
});

// Stricter rate limit for API endpoints
const apiLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 30, // 30 requests per minute per IP
    message: {
        error: true,
        message: 'Rate limit exceeded. Maximum 30 requests per minute.',
        retryAfter: '1 minute'
    },
    standardHeaders: true,
    legacyHeaders: false,
});

// Apply general rate limiting to all routes
app.use(generalLimiter);

// 4. HPP - Prevent HTTP Parameter Pollution
app.use(hpp());

// 5. Body parsing with size limits
app.use(express.json({ limit: '10kb' })); // Limit body size
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// 6. Request timeout
app.use((req, res, next) => {
    req.setTimeout(30000); // 30 seconds timeout
    next();
});

// ===================
// LOGGING MIDDLEWARE
// ===================
app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`${req.method} ${req.path} - ${res.statusCode} (${duration}ms)`);
    });
    next();
});

// ===================
// HEALTH CHECK
// ===================
app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// ===================
// API ROUTES
// ===================

// Core game data
app.use('/api/players', apiLimiter, playersRoutes);
app.use('/api/clans', apiLimiter, clansRoutes);

// Locations & Rankings
app.use('/api/locations', apiLimiter, locationsRoutes);

// Leagues
app.use('/api/leagues', apiLimiter, leaguesRoutes);
app.use('/api/leaguetiers', apiLimiter, leagueTiersRoutes);
app.use('/api/warleagues', apiLimiter, warLeaguesRoutes);
app.use('/api/capitalleagues', apiLimiter, capitalLeaguesRoutes);
app.use('/api/builderbaseleagues', apiLimiter, builderBaseLeaguesRoutes);

// Labels
app.use('/api/labels', apiLimiter, labelsRoutes);

// Gold Pass
app.use('/api/goldpass', apiLimiter, goldpassRoutes);

// ===================
// ERROR HANDLING
// ===================

// 404 Handler
app.use((req, res) => {
    res.status(404).json({
        error: true,
        message: 'Endpoint not found',
        path: req.path
    });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    
    // CORS error
    if (err.message === 'Not allowed by CORS') {
        return res.status(403).json({
            error: true,
            message: 'Origin not allowed'
        });
    }
    
    // Rate limit error
    if (err.status === 429) {
        return res.status(429).json({
            error: true,
            message: 'Too many requests'
        });
    }
    
    // Default error
    res.status(err.status || 500).json({
        error: true,
        message: process.env.NODE_ENV === 'production' 
            ? 'Internal server error' 
            : err.message
    });
});

// ===================
// START SERVER
// ===================
app.listen(PORT, () => {
    console.log('=================================');
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🔒 Security: Helmet, CORS, Rate Limiting enabled`);
    console.log(`⏱️  Rate Limit: 30 req/min per IP`);
    console.log('=================================');
});
