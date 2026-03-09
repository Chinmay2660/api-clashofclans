const { query, validationResult } = require('express-validator');

const TAG_REGEX = /^[A-Z0-9]{3,15}$/;

const tagSanitizer = (value) => value.replace('#', '').toUpperCase();

const validatePlayerTag = [
  query('playerTag')
    .trim()
    .notEmpty()
    .withMessage('Player tag is required')
    .customSanitizer(tagSanitizer)
    .matches(TAG_REGEX)
    .withMessage('Invalid player tag format. Tags should be 3-15 alphanumeric characters.')
    .escape(),
];

const validateClanTag = [
  query('clanTag')
    .trim()
    .notEmpty()
    .withMessage('Clan tag is required')
    .customSanitizer(tagSanitizer)
    .matches(TAG_REGEX)
    .withMessage('Invalid clan tag format. Tags should be 3-15 alphanumeric characters.')
    .escape(),
];

const validateWarTag = [
  query('warTag')
    .trim()
    .notEmpty()
    .withMessage('War tag is required')
    .customSanitizer(tagSanitizer)
    .matches(TAG_REGEX)
    .withMessage('Invalid war tag format. Tags should be 3-15 alphanumeric characters.')
    .escape(),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((err) => err.msg);
    return res.status(400).json({
      error: true,
      message: errorMessages[0],
      errors: errorMessages,
    });
  }
  next();
};

module.exports = {
  validatePlayerTag,
  validateClanTag,
  validateWarTag,
  handleValidationErrors,
};
