const axios = require('axios');

exports.getClanCurrentWarLeagueGroupData = async (clanTag, token) => {
    try {
        const response = await axios.get(`https://cocproxy.royaleapi.dev/v1/clans/%23${clanTag}/currentwar/leaguegroup`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

exports.getClanWarLeagueIndividualWarData = async (warTag, token) => {
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

exports.getClanWarData = async (clanTag, token) => {
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

exports.getClanCurrentWarData = async (clanTag, token) => {
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

exports.getSearchClanData = async (clanTag, token) => {
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

exports.getClanCapitalRaidSeaonsData = async (clanTag, token) => {
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