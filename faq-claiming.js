const { MessageEmbed } = require('discord.js');
const firstMessage = require('./first-message')

const faqEmbed = new MessageEmbed()
    .setColor('#ff0000')
    .setTitle('X 𝐒𝐈𝐂𝐊𝐎𝐖𝐀𝐑𝐄 𝐅𝐀𝐐 X') 
    .setDescription('Some very frequent questions the community asks us')

    .setFields(
        { name: 'Ass or titties?', value: 'I have a very set opinion on this and wrote a essay about it - Dm me for the full text.' },
        { name: 'What is "juice"?', value: 'Avoiding logs is done by simply not writing keywords. So when reffering to chetoos please write "juice" insted.' },
        { name: 'How exactly do i the run juice?', value: 'Theres channels dedicated to explaining exactly that - With some screenshots, just look for them and if theres still problems, contact a staff member.' },
        { name: 'Does anything here get me banned?', value: 'We will never deploy a juice without thuogh testing nor ignore game-updates, so the chance of ban is super low. HOWEVER When cheating theres always possiblities of getting banned. That could be overwatch / admin ban / or playing right after update.\n - Always use at own risk.' },
        { name: 'Game just updated, what now?', value: 'If the game just updated, ping the @DEVELOPER team, and tell what game. They will respond with the current status of detection.' },

        { name: 'Who made this?', value: 'Idk.' }
    )

    .setFooter('Hope this helps, otherwise contact staff.');




module.exports = (client) => {
    const channelId = '882920874880139294'

    const getEmoji = emojiname => 
    client.emojis.cache.find((emoji) => emoji.name === emojiname)

    const emojis = {
        '💯': 'VERIFIED'
    }

    const reactions = []

    let emojiText = faqEmbed

    for(const key in emojis){
        reactions.push(key)
    }

    firstMessage(client, channelId, emojiText, reactions)
}