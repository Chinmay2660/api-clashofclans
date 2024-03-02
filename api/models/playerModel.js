const axios = require('axios');

const baseURL = 'https://cocproxy.royaleapi.dev/v1/players/';

const makeRequest = async (url, token) => {
    try {
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

exports.getPlayerData = async (playerTag, token) => {
    const url = `${baseURL}%23${playerTag}`;
    return makeRequest(url, token);
};
