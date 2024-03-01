const express = require('express');
const router = express.Router();
const clanController = require('../controllers/clanControllers');

router.get('/api/clan', clanController.getClanInfo);

module.exports = router;