const clanModel = require('../models/clanModel');
require('dotenv').config();

const COC_API_KEY = process.env.COC_API_KEY;

exports.getClanCurrentWarLeagueGroupInfo = async (req, res) => {
    try {
        const { clanTag } = req.params;
        if (!clanTag) {
            return res.status(400).json({ message: 'Clan tag is required.' });
        }
        const formattedClanTag = clanTag.replace('clanTag=', '');
        const clanCurrentWarLeagueGroupData = await clanModel.getClanCurrentWarLeagueGroupData(formattedClanTag, COC_API_KEY);
        console.log("clan Data:", clanCurrentWarLeagueGroupData);
        return res.status(200).json(clanCurrentWarLeagueGroupData);
    } catch (error) {
        console.error('Error fetching clanCurrentWarLeagueGroup data:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
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
    try {
        const { clanTag } = req.params;
        if (!clanTag) {
            return res.status(400).json({ message: 'Clan tag is required.' });
        }
        const formattedClanTag = clanTag.replace('clanTag=', '');
        const clanWarData = await clanModel.getClanWarData(formattedClanTag, COC_API_KEY);
        console.log("clan Data:", clanWarData);
        return res.status(200).json(clanWarData);
    } catch (error) {
        console.error('Error fetching clanWar data:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getSearchClanInfo = async (req, res) => {
    try {
        const { clanTag } = req.params;
        if (!clanTag) {
            return res.status(400).json({ message: 'Clan tag is required.' });
        }
        const formattedClanTag = clanTag.replace('clanTag=', '');
        const clanSearchData = await clanModel.getSearchClanData(formattedClanTag, COC_API_KEY);
        console.log("clan Data:", clanSearchData);
        return res.status(200).json(clanSearchData);
    } catch (error) {
        console.error('Error fetching clanSearch data:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getClanCurrentWarInfo = async (req, res) => {
    try {
        const { clanTag } = req.params;
        if (!clanTag) {
            return res.status(400).json({ message: 'Clan tag is required.' });
        }
        const formattedClanTag = clanTag.replace('clanTag=', '');
        const clanCurrentWarData = await clanModel.getClanCurrentWarData(formattedClanTag, COC_API_KEY);
        console.log("clan Data:", clanCurrentWarData);
        return res.status(200).json(clanCurrentWarData);
    } catch (error) {
        console.error('Error fetching clanCurrentWar data:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getClanInfo = async (req, res) => {
    try {
        const { clanTag } = req.params;
        if (!clanTag) {
            return res.status(400).json({ message: 'Clan tag is required.' });
        }
        const formattedClanTag = clanTag.replace('clanTag=', '');
        const clanData = await clanModel.getClanData(formattedClanTag, COC_API_KEY);
        console.log("clan Data:", clanData);
        return res.status(200).json(clanData);
    } catch (error) {
        console.error('Error fetching clan data:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getClanMembers = async (req, res) => {
    try {
        const { clanTag } = req.params;
        if (!clanTag) {
            return res.status(400).json({ message: 'Clan tag is required.' });
        }
        const formattedClanTag = clanTag.replace('clanTag=', '');
        const clanMembers = await clanModel.getClanMembersData(formattedClanTag, COC_API_KEY);
        console.log("Clan Members Data:", clanMembers);
        return res.status(200).json(clanMembers);
    } catch (error) {
        console.error('Error fetching clan members:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getClanCapitalRaidSeaonsInfo = async (req, res) => {
    try {
        const { clanTag } = req.params;
        if (!clanTag) {
            return res.status(400).json({ message: 'Clan tag is required.' });
        }
        const formattedClanTag = clanTag.replace('clanTag=', '');
        const clanCapitalRaidSeaonsData = await clanModel.getClanCapitalRaidSeaonsData(formattedClanTag, COC_API_KEY);
        console.log("clan Data:", clanCapitalRaidSeaonsData);
        return res.status(200).json(clanCapitalRaidSeaonsData);
    } catch (error) {
        console.error('Error fetching clanCapitalRaidSeaons data:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
