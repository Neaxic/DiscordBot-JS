const { MessageEmbed } = require('discord.js');
const firstMessage = require('../first-message')

const faqEmbed = new MessageEmbed()
    .setColor('#FF0000')
    .setTitle('𝐒𝐈𝐂𝐊𝐎𝐖𝐀𝐑𝐄 EXCLUSIVE ZONE') 

    .setFields(
        { name: 'Why is this exclusive?', value: 'By regulating access & keeping development under closed doors, we lower the chance of detections.'},
        { name: 'Any advantages of being exclusive?', value: 'Theres lots. You gain access to directly message DEVs, a likelier chance of your suggestions getting added, and last but not least beta access & early stages of new games juice'},
        { name: 'Want to gain access?', value: 'You have to be invited form somebody on the inside & send a 5$ donation, after your account will get access upgraded.'}
    )

module.exports = (client) => {
    const channelId = '872107021200146463'
    const reactions = ['💯']

    firstMessage(client, channelId, faqEmbed, reactions)
}