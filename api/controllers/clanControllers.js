const clanModel = require('../models/clanModel');
require('dotenv').config();

const COC_API_KEY = process.env.COC_API_KEY;

const formatClanTag = (clanTag) => {
    return clanTag.replace('clanTag=', '');
};

const handleRequest = async (req, res, getDataFunction) => {
    try {
        const { clanTag } = req.params;
        if (!clanTag) {
            return res.status(400).json({ message: 'Clan tag is required.' });
        }
        const formattedClanTag = formatClanTag(clanTag);
        const data = await getDataFunction(formattedClanTag, COC_API_KEY);
        console.log("Clan Data:", data);
        return res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching clan data:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getClanCurrentWarLeagueGroupInfo = async (req, res) => {
    await handleRequest(req, res, clanModel.getClanCurrentWarLeagueGroupData);
};

exports.getClanWarLeagueIndividualWarInfo = async (req, res) => {
    try {
        const { warTag } = req.params;
        if (!warTag) {
            return res.status(400).json({ message: 'War tag is required.' });
        }
        const formattedWarTag = clanTag.replace('warTag=', '');
        const clanWarLeagueIndividualWarData = await clanModel.getClanWarLeagueIndividualWarData(formattedWarTag, COC_API_KEY);
        console.log("clan Data:", clanWarLeagueIndividualWarData);
        return res.status(200).json(clanWarLeagueIndividualWarData);
    } catch (error) {
        console.error('Error fetching clanWarIndividualWar data:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getClanWarInfo = async (req, res) => {
    await handleRequest(req, res, clanModel.getClanWarData);
};

exports.getSearchClanInfo = async (req, res) => {
    await handleRequest(req, res, clanModel.getSearchClanData);
};

exports.getClanCurrentWarInfo = async (req, res) => {
    await handleRequest(req, res, clanModel.getClanCurrentWarData);
};

exports.getClanInfo = async (req, res) => {
    await handleRequest(req, res, clanModel.getClanData);
};

exports.getClanMembers = async (req, res) => {
    await handleRequest(req, res, clanModel.getClanMembersData);
};

exports.getClanCapitalRaidSeaonsInfo = async (req, res) => {
    await handleRequest(req, res, clanModel.getClanCapitalRaidSeaonsData);
};
