const { MessageEmbed } = require('discord.js');
const firstMessage = require('../first-message')

const faqEmbed = new MessageEmbed()
    .setColor('#FF6E33')
    .setTitle('𝐒𝐈𝐂𝐊𝐎𝐖𝐀𝐑𝐄 CS:GO FEATURES') 
    .setDescription('THE CURRENT CS:GO (LEGIT) FEATURES \n All visual features are color and thickness customizable!')
    .setThumbnail('https://i.pinimg.com/originals/b1/02/24/b10224ae75edd5debd06c44662cbcb30.png')

    .setFields(
        { name: 'VISUAL FEATURES', value: 'BoundingBoxESP\nCornorBoxESP\nRardarESP\nTracerESP\nSkeletonESP\nPlayer Glow\nHealth & Armor bar\nNo-Flash', inline: true},
        { name: 'AIMING FEATURES', value: 'Triggerbot\nTriggerbot Delays', inline: true },
        { name: 'MISC FEATURES', value: 'FOV-Changer\nBhop\nThirdperson', inline: true },
        { name: 'new row test', value: 'FOV-Changer\nBhop\nThirdperson'},
        { name: 'test', value: 'FOV-Changer\nBhop\nThirdperson', inline: true }
    )

    .setFooter('Hope this helps, otherwise contact staff.');

module.exports = (client) => {
    const channelId = '883773859847880716'
    const reactions = ['💯', '💦']

    firstMessage(client, channelId, faqEmbed, reactions)
}