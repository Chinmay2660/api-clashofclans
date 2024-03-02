const axios = require('axios');

exports.getClanData = async (clanTag, token) => {
    try {
        const response = await axios.get(`https://cocproxy.royaleapi.dev/v1/clans/%23${clanTag}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

exports.getClanMembersData = async (clanTag, token) => {
    try {
        const response = await axios.get(`https://cocproxy.royaleapi.dev/v1/clans/%23${clanTag}/members`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};