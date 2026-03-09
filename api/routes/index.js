const express = require('express');
const { apiLimiter } = require('../../config/rateLimit');

const playersRoutes = require('./playersRoutes');
const clansRoutes = require('./clansRoutes');
const locationsRoutes = require('./locationsRoutes');
const leaguesRoutes = require('./leaguesRoutes');
const leagueTiersRoutes = require('./leagueTiersRoutes');
const warLeaguesRoutes = require('./warLeaguesRoutes');
const capitalLeaguesRoutes = require('./capitalLeaguesRoutes');
const builderBaseLeaguesRoutes = require('./builderBaseLeaguesRoutes');
const labelsRoutes = require('./labelsRoutes');
const goldpassRoutes = require('./goldpassRoutes');

const router = express.Router();

router.use('/players', playersRoutes);
router.use('/clans', clansRoutes);
router.use('/locations', locationsRoutes);
router.use('/leagues', leaguesRoutes);
router.use('/leaguetiers', leagueTiersRoutes);
router.use('/warleagues', warLeaguesRoutes);
router.use('/capitalleagues', capitalLeaguesRoutes);
router.use('/builderbaseleagues', builderBaseLeaguesRoutes);
router.use('/labels', labelsRoutes);
router.use('/goldpass', goldpassRoutes);

const apiRouter = express.Router();
apiRouter.use(apiLimiter, router);

module.exports = apiRouter;
