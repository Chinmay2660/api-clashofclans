const axios = require('axios');

exports.getPlayerData = async (playerTag, token) => {
    try {
        const response = await axios.get(`https://cocproxy.royaleapi.dev/v1/players/%23${playerTag}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};