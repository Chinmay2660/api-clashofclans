const express = require('express');
const router = express.Router();
const clanController = require('../controllers/clanControllers');

router.get('/clanTag=:clanTag/currentwar/leaguegroup', clanController.getClanCurrentWarLeagueGroupInfo);
router.get('/clanwarleagues/wars/warTag=:warTag', clanController.getClanWarLeagueIndividualWarInfo);
router.get('/clanTag=:clanTag/warlog', clanController.getClanWarInfo); //have query
router.get('/clans', clanController.getSearchClanInfo);  //have query
router.get('/clanTag=:clanTag/currentwar', clanController.getClanCurrentWarInfo);
router.get('/clanTag=:clanTag', clanController.getClanInfo);
router.get('/clanTag=:clanTag/members', clanController.getClanMembers); //have query
router.get('/clanTag=:clanTag/capitalraidseasons', clanController.getClanCapitalRaidSeaonsInfo); //have query

module.exports = router;