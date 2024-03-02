const axios = require('axios');

//required attention
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

//required attention
exports.getClanWarLeagueIndividualWarData = async (warTag, token) => {
    try {
        const response = await axios.get(`https://cocproxy.royaleapi.dev/v1/clans/clanwarleagues/wars/%23${warTag}`, {
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
        const response = await axios.get(`https://cocproxy.royaleapi.dev/v1/clans/%23${clanTag}/warlog`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

//required attention
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

exports.getClanCurrentWarData = async (clanTag, token) => {
    try {
        const response = await axios.get(`https://cocproxy.royaleapi.dev/v1/clans/%23${clanTag}/currentwar`, {
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

//required attention
exports.getClanCapitalRaidSeaonsData = async (clanTag, token) => {
    try {
        const response = await axios.get(`https://cocproxy.royaleapi.dev/v1/clans/%23${clanTag}/capitalraidseasons`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};