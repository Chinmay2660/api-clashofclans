const express = require('express');
const router = express.Router();
const clanController = require('../controllers/clanControllers');
const { validateClanTag, validateWarTag, handleValidationErrors } = require('../middleware/validation');

router.get('/search', clanController.searchClans);
router.get('/', validateClanTag, handleValidationErrors, clanController.getClanInfo);
router.get('/currentwar/leaguegroup', validateClanTag, handleValidationErrors, clanController.getClanCurrentWarLeagueGroupInfo);
router.get('/clanwarleagues/wars', validateWarTag, handleValidationErrors, clanController.getClanWarLeagueIndividualWarInfo);
router.get('/warlog', validateClanTag, handleValidationErrors, clanController.getClanWarInfo);
router.get('/clans', validateClanTag, handleValidationErrors, clanController.getSearchClanInfo);
router.get('/currentwar', validateClanTag, handleValidationErrors, clanController.getClanCurrentWarInfo);
router.get('/members', validateClanTag, handleValidationErrors, clanController.getClanMembers);
router.get('/capitalraidseasons', validateClanTag, handleValidationErrors, clanController.getClanCapitalRaidSeaonsInfo);

module.exports = router;
