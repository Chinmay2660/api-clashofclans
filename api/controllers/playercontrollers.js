const playerModel = require('../models/playerModel');

const hardcodedToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijk4MGE4YmY3LThjZmYtNGUxOC1iN2ExLTZlMTk0ODY2MjA0OCIsImlhdCI6MTcwOTMyMDU4OCwic3ViIjoiZGV2ZWxvcGVyL2Y4NTE0YTFmLWE2NmItMzJmNS1mN2I5LWM3NWI3NWNjN2EyOCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjQzLjI0My4yMTQuMjIxIl0sInR5cGUiOiJjbGllbnQifV19.kzEjt5lFG5uZ62h5GJy7QahDSgbds5nT7RTkliVm4CF1lPAfIa9acLNKnUyBWxRVSwj5qWezj_j5h5BNj4e4Eg';

const playerTag = '29PUGJQ9P'

exports.getPlayerInfo = async (req, res) => {
    try {
        // const { playerTag } = req.params;
        if (!playerTag) {
            return res.status(400).json({ message: 'Player tag is required.' });
        }
        const playerData = await playerModel.getPlayerData(playerTag, hardcodedToken);
        console.log("Player Data:", playerData);
        return res.status(200).json(playerData);
    } catch (error) {
        console.error('Error fetching player data:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
