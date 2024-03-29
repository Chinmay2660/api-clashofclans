const playerModel = require('../models/playerModel');
require('dotenv').config();

const COC_API_KEY = process.env.COC_API_KEY;

exports.getPlayerInfo = async (req, res) => {
    try {
        const { playerTag } = req.query;
        if (!playerTag) {
            return res.status(400).json({ message: 'Player tag is required.' });
        }
        const playerData = await playerModel.getPlayerData(playerTag, COC_API_KEY);
        console.log("Player Data:", playerData);
        return res.status(200).json(playerData);
    } catch (error) {
        console.error('Error fetching player data:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
