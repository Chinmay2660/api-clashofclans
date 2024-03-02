const express = require('express');
const router = express.Router();
const clanController = require('../controllers/clanControllers');

router.get('/:clanTag/currentwar/leaguegroup', clanController.getClanMembers);
router.get('/clanwarleagues/wars/:warTag', clanController.getClanMembers);
router.get('/:clanTag/warlog', clanController.getClanMembers); //have query
router.get('/clans', clanController.getClanMembers);  //have query
router.get('/:clanTag/currentwar', clanController.getClanMembers);
router.get('/:clanTag', clanController.getClanInfo);
router.get('/:clanTag/members', clanController.getClanMembers); //have query
router.get('/:clanTag/capitalraidseasons', clanController.getClanMembers); //have query

module.exports = router;