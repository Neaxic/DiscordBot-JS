const { MessageEmbed } = require('discord.js');
const firstMessage = require('../first-message')

const faqEmbed = new MessageEmbed()
    .setColor('#FF0000')
    .setTitle('𝐒𝐈𝐂𝐊𝐎𝐖𝐀𝐑𝐄 LOADER FEATURES')
    .setDescription('THE CURRENT LOADER IS UNDER DEVELOPMENT \n Its therefore currently not downloadable - unless you are beta tester for us or a Exclusive member. \n Currently set for relase 20/09/21')

    .setFooter('Thanks for understanding.');

module.exports = (client) => {
    const channelId = '871502434210558013'
    const reactions = ['💯']

    firstMessage(client, channelId, faqEmbed, reactions)
}