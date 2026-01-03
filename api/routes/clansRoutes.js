const express = require('express');
const router = express.Router();
const clanController = require('../controllers/clanControllers');
const { validateClanTag, validateWarTag, handleValidationErrors } = require('../middleware/validation');

// GET /api/clans/search?name=XXX&warFrequency=XXX&locationId=XXX...
// Search clans with various filters (name is required, min 3 chars)
router.get('/search', 
    clanController.searchClans
);

// GET /api/clans?clanTag=XXXX
router.get('/', 
    validateClanTag, 
    handleValidationErrors, 
    clanController.getClanInfo
);

// GET /api/clans/currentwar/leaguegroup?clanTag=XXXX
router.get('/currentwar/leaguegroup', 
    validateClanTag, 
    handleValidationErrors, 
    clanController.getClanCurrentWarLeagueGroupInfo
);

// GET /api/clans/clanwarleagues/wars?warTag=XXXX
router.get('/clanwarleagues/wars', 
    validateWarTag, 
    handleValidationErrors, 
    clanController.getClanWarLeagueIndividualWarInfo
);

// GET /api/clans/warlog?clanTag=XXXX
router.get('/warlog', 
    validateClanTag, 
    handleValidationErrors, 
    clanController.getClanWarInfo
);

// GET /api/clans/clans?clanTag=XXXX
router.get('/clans', 
    validateClanTag, 
    handleValidationErrors, 
    clanController.getSearchClanInfo
);

// GET /api/clans/currentwar?clanTag=XXXX
router.get('/currentwar', 
    validateClanTag, 
    handleValidationErrors, 
    clanController.getClanCurrentWarInfo
);

// GET /api/clans/members?clanTag=XXXX
router.get('/members', 
    validateClanTag, 
    handleValidationErrors, 
    clanController.getClanMembers
);

// GET /api/clans/capitalraidseasons?clanTag=XXXX
router.get('/capitalraidseasons', 
    validateClanTag, 
    handleValidationErrors, 
    clanController.getClanCapitalRaidSeaonsInfo
);

module.exports = router;
