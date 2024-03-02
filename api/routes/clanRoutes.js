const express = require('express');
const router = express.Router();
const clanController = require('../controllers/clanControllers');

router.get('/api/clan/:clanTag', clanController.getClanInfo);
router.get('/api/clan/:clanTag/members', clanController.getClanMembers);

module.exports = router;