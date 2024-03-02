const clanModel = require('../models/clanModel');
require('dotenv').config();

const COC_API_KEY = process.env.COC_API_KEY

const clanTag = '2P9C9U9Y'

exports.getClanInfo = async (req, res) => {
    try {
        // const { clanTag } = req.params;
        if (!clanTag) {
            return res.status(400).json({ message: 'Clan tag is required.' });
        }
        const clanData = await clanModel.getClanData(clanTag, COC_API_KEY);
        console.log("clan Data:", clanData);
        return res.status(200).json(clanData);
    } catch (error) {
        console.error('Error fetching clan data:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getClanMembers = async (req, res) => {
    try {
         // const { clanTag } = req.params;
        if (!clanTag) {
            return res.status(400).json({ message: 'Clan tag is required.' });
        }
        const clanMembers = await clanModel.getClanMembersData(clanTag, COC_API_KEY);
        console.log("Clan Members Data:", clanMembers);
        return res.status(200).json(clanMembers);
    } catch (error) {
        console.error('Error fetching clan members:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};