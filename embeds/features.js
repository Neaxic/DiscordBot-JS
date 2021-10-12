const { MessageEmbed } = require('discord.js');
const firstMessage = require('../first-message')

const faqEmbed = new MessageEmbed()
    .setColor('#FF6E33')
    .setTitle('𝐒𝐈𝐂𝐊𝐎𝐖𝐀𝐑𝐄 CS:GO FEATURES') 
    .setDescription('THE CURRENT CS:GO (LEGIT) FEATURES \n In short we have: Aimbot, Triggerbot, Backtrack, Anti-Aim, Glow, Charms, ESP, Various visuals, Inventory changer, Custom sounds, custom menu, general micellaneous features, and config loading & saving.\nWe used to have a listed version in text, but theres simply too much to cover. - So insted, heres screenshots:')
    .setThumbnail('https://i.pinimg.com/originals/b1/02/24/b10224ae75edd5debd06c44662cbcb30.png')

    .setFooter('Hope this helps, otherwise contact staff.');

module.exports = (client) => {
    const channelId = '883773859847880716'
    const reactions = ['💯', '💦']

    firstMessage(client, channelId, faqEmbed, reactions)
}