const express = require('express');
const router = express.Router();
const clanController = require('../controllers/clanControllers');

router.get('/clanTag=:clanTag/currentwar/leaguegroup', clanController.getClanMembers);
router.get('/clanwarleagues/wars/warTag=:warTag', clanController.getClanMembers);
router.get('/clanTag=:clanTag/warlog', clanController.getClanMembers); //have query
router.get('/clans', clanController.getClanMembers);  //have query
router.get('/clanTag=:clanTag/currentwar', clanController.getClanMembers);
router.get('/clanTag=:clanTag', clanController.getClanInfo);
router.get('/clanTag=:clanTag/members', clanController.getClanMembers); //have query
router.get('/clanTag=:clanTag/capitalraidseasons', clanController.getClanMembers); //have query

module.exports = router;