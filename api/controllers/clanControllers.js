const clanModel = require('../models/clanModel');

const hardcodedToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjA1MTVkMGNiLWU1YTUtNDljNi04OGMzLTk4YzJhYjg4MGI1MiIsImlhdCI6MTcwOTM3NjEyMywic3ViIjoiZGV2ZWxvcGVyL2Y4NTE0YTFmLWE2NmItMzJmNS1mN2I5LWM3NWI3NWNjN2EyOCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjQzLjI0My4yMTQuMjAiXSwidHlwZSI6ImNsaWVudCJ9XX0.FOskusHMBd3616O8AN0bRlQdLCOKm2gyDaszaiv-yT9AC16j2KITD16Q8M_iimwGfxSDmLpZXiECy66YsTEdhQ';

const clanTag = '2P9C9U9Y'

exports.getClanInfo = async (req, res) => {
    try {
        // const { clanTag } = req.params;
        if (!clanTag) {
            return res.status(400).json({ message: 'Clan tag is required.' });
        }
        const clanData = await clanModel.getClanData(clanTag, hardcodedToken);
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
        const clanMembers = await clanModel.getClanMembersData(clanTag, hardcodedToken);
        console.log("Clan Members Data:", clanMembers);
        return res.status(200).json(clanMembers);
    } catch (error) {
        console.error('Error fetching clan members:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};