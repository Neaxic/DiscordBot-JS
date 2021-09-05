const { MessageEmbed } = require('discord.js');
const firstMessage = require('../first-message')

const faqEmbed = new MessageEmbed()
    .setColor('#FF0000')
    .setTitle('𝐒𝐈𝐂𝐊𝐎𝐖𝐀𝐑𝐄 CS:GO STATUS') 
    .setDescription('**STATUS: UNDETECTED.** \n LATEST V4C BYPASS CHECK - 04/09/21!')
    .setThumbnail('https://i.pinimg.com/originals/b1/02/24/b10224ae75edd5debd06c44662cbcb30.png')

    .setFooter('0 REPORTS OF V4C DETECTION');

module.exports = (client) => {
    const channelId = '871766789925765120'
    const reactions = ['💯']

    firstMessage(client, channelId, faqEmbed, reactions)
}