const axios = require('axios');

const getPlayerData = async (playerTag, token) => {
    try {
        const response = await axios.get(`https://api.clashofclans.com/v1/players/%23${playerTag}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getPlayerData
};
