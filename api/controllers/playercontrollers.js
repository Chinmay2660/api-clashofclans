const playerModel = require('../models/playerModel');

const getPlayerInfo = async (req, res) => {
    try {
        const { playerTag, token } = req.query;
        if (!playerTag || !token) {
            return res.status(400).json({ message: 'Player tag and token are required.' });
        }
        const playerData = await playerModel.getPlayerData(playerTag, token);
        return res.status(200).json(playerData);
    } catch (error) {
        console.error('Error fetching player data:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    getPlayerInfo
};
