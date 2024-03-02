const express = require('express');
const router = express.Router();
const clanController = require('../controllers/clanControllers');

router.get('/currentwar/leaguegroup', clanController.getClanCurrentWarLeagueGroupInfo);
router.get('/clanwarleagues/wars', clanController.getClanWarLeagueIndividualWarInfo);
router.get('/warlog', clanController.getClanWarInfo); // have query
router.get('/clans', clanController.getSearchClanInfo); // have query
router.get('/currentwar', clanController.getClanCurrentWarInfo);
router.get('/', clanController.getClanInfo);
router.get('/members', clanController.getClanMembers); // have query
router.get('/capitalraidseasons', clanController.getClanCapitalRaidSeaonsInfo); // have query

module.exports = router;