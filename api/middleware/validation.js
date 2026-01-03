const { query, validationResult } = require('express-validator');

// Clash of Clans tag validation regex
// Tags are alphanumeric, 3-12 characters, uppercase
const TAG_REGEX = /^[A-Z0-9]{3,15}$/;

// Validate and sanitize player tag
const validatePlayerTag = [
    query('playerTag')
        .trim()
        .notEmpty()
        .withMessage('Player tag is required')
        .customSanitizer(value => value.replace('#', '').toUpperCase())
        .matches(TAG_REGEX)
        .withMessage('Invalid player tag format. Tags should be 3-15 alphanumeric characters.')
        .escape(),
];

// Validate and sanitize clan tag
const validateClanTag = [
    query('clanTag')
        .trim()
        .notEmpty()
        .withMessage('Clan tag is required')
        .customSanitizer(value => value.replace('#', '').toUpperCase())
        .matches(TAG_REGEX)
        .withMessage('Invalid clan tag format. Tags should be 3-15 alphanumeric characters.')
        .escape(),
];

// Validate and sanitize war tag
const validateWarTag = [
    query('warTag')
        .trim()
        .notEmpty()
        .withMessage('War tag is required')
        .customSanitizer(value => value.replace('#', '').toUpperCase())
        .matches(TAG_REGEX)
        .withMessage('Invalid war tag format. Tags should be 3-15 alphanumeric characters.')
        .escape(),
];

// Validation result handler middleware
const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(err => err.msg);
        console.log('Validation failed:', errorMessages);
        
        return res.status(400).json({
            error: true,
            message: errorMessages[0],
            errors: errorMessages
        });
    }
    
    next();
};

module.exports = {
    validatePlayerTag,
    validateClanTag,
    validateWarTag,
    handleValidationErrors
};

