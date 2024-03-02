const axios = require('axios');

const baseURL = 'https://cocproxy.royaleapi.dev/v1/clans/';

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

exports.getClanCurrentWarLeagueGroupData = async (clanTag, token) => {
    const url = `${baseURL}%23${clanTag}/currentwar/leaguegroup`;
    return makeRequest(url, token);
};

exports.getClanWarLeagueIndividualWarData = async (warTag, token) => {
    const url = `${baseURL}clanwarleagues/wars/%23${warTag}`;
    return makeRequest(url, token);
};

exports.getClanWarData = async (clanTag, token) => {
    const url = `${baseURL}%23${clanTag}/warlog`;
    return makeRequest(url, token);
};

exports.getSearchClanData = async (clanTag, token) => {
    const url = `${baseURL}%23${clanTag}`;
    return makeRequest(url, token);
};

exports.getClanCurrentWarData = async (clanTag, token) => {
    const url = `${baseURL}%23${clanTag}/currentwar`;
    return makeRequest(url, token);
};

exports.getClanData = async (clanTag, token) => {
    const url = `${baseURL}%23${clanTag}`;
    return makeRequest(url, token);
};

exports.getClanMembersData = async (clanTag, token) => {
    const url = `${baseURL}%23${clanTag}/members`;
    return makeRequest(url, token);
};

exports.getClanCapitalRaidSeaonsData = async (clanTag, token) => {
    const url = `${baseURL}%23${clanTag}/capitalraidseasons`;
    return makeRequest(url, token);
};
