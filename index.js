const express = require('express');
const playersRoutes = require('./api/routes/playersRoutes');
const clansRoutes = require('./api/routes/clansRoutes');
const labelsRoutes = require('./api/routes/labelsRoutes');
const leaguesRoutes = require('./api/routes/leaguesRoutes');
const locationsRoutes = require('./api/routes/locationsRoutes');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/players', playersRoutes);
app.use('/api/clans', clansRoutes)
app.use('/api/labels', labelsRoutes)
app.use('/api/leagues', leaguesRoutes)
app.use('/api/locations', locationsRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
