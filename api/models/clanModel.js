const axios = require('axios');

exports.getClanData = async (clanTag, token) => {
    try {
        const response = await axios.get(`https://api.clashofclans.com/v1/clans/%23${clanTag}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};