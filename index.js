const express = require('express');
const playerRoutes = require('./api/routes/playerRoutes');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', playerRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
