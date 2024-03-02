const express = require('express');
const router = express.Router();
const clanController = require('../controllers/clanControllers');

router.get('/api/clan/:clanTag/currentwar/leaguegroup', clanController.getClanMembers);
router.get('/api/clan/clanwarleagues/wars/:warTag', clanController.getClanMembers);
router.get('/api/clan/:clanTag/warlog', clanController.getClanMembers); //have query
router.get('/api/clan/clans', clanController.getClanMembers);  //have query
router.get('/api/clan/:clanTag/currentwar', clanController.getClanMembers);
router.get('/api/clan/:clanTag', clanController.getClanInfo);
router.get('/api/clan/:clanTag/members', clanController.getClanMembers); //have query
router.get('/api/clan/:clanTag/capitalraidseasons', clanController.getClanMembers); //have query

module.exports = router;