const { MessageEmbed } = require('discord.js');
const { Permissions } = require('discord.js');

const faqEmbed = new MessageEmbed()
    .setColor('#FF0000')
    .setTitle('𝐒𝐈𝐂𝐊𝐎𝐖𝐀𝐑𝐄 TICKET SYSTEM') 
    .setDescription('React with the 🎟️ emoji, and a room will be created for you and the staff team.')

module.exports = (client) => {
    const channelId = '884189059029819432'
    const ticketParrent = '883867456056201228'
    const reactions = ['🎟️']
    firstMessage(client, channelId, faqEmbed, reactions)

    client.on('messageReactionAdd', async (reaction, user) => {
        if(reaction.message.channel.id === channelId){
            if(user.bot) return;
    
            if(reaction.emoji.name === '🎟️'){
                msg.react('👌')

                const channel = await msg.guild.channels.create(`ticket: ${msg.author.tag}`);
                channel.setParent(ticketParrent)
                
                channel.permissionOverwrites.create(channel.guild.roles.everyone, { VIEW_CHANNEL: false });

                channel.permissionOverwrites.edit(msg.author, [{
                    VIEW_CHANNEL: true
                }, {
                    SEND_MESSAGES: true
                }])
                .then(channel => console.log(channel.permissionOverwrites.cache.get(msg.author.id)))
                .catch(console.error);

                const reactionMessage = await channel.send('Thank your for creating');
                
                try {
                    await reactionMessage.react('🔒')
                    await reactionMessage.react('🚫')
                } catch (err){
                    channel.send('Error sending reactions');
                }

                const collector = reactionMessage.createReactionCollector((reaction, user) =>
                message.guild.members.cache.find((member) => member.id === user.id).hasPermission('ADMINISTRATOR'),
                { dispose: true });

                collector.on('collect', (reaction, user) => {
                    switch(reaction.emoji.name){
                        case '🔒':
                            if(user.bot) return;
                            /*channel.permissionOverwrites.create(message.author, {
                                SEND_MESSAGE: false
                            })*/
                            break;
                        case '🚫':
                            if(user.bot) return;
                            channel.send('Deleting this channel in 5 secounds!')
                            setTimeout(() => channel.delete(), 5000);
                            break;
                    }
                });
            }
        }
    })

    /*client.on('guildMemberAdd', async newMember => {
        let welcomeRole = await newMember.guild.roles.cache.find(role => role.name === 'PESANT');
        newMember.roles.add(welcomeRole);

        let welcomeEmbed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle(`Welcome to 𝐒𝐈𝐂𝐊𝐎𝐖𝐀𝐑𝐄`) 

        .setThumbnail(newMember.user.displayAvatarURL())
        //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
        .setDescription(`Welcome <@${newMember.user.id}> to the public Sickoware server! \n Please make sure to read the #rules & #faq. \n Show them who runs the game.`)
        .setFooter('Any questions? Just ask');
    
        //newMember.guild.channels.cache.get(channelId).send(`Welcome <@${newMember.user.id}> to our SICKOWARE`)
        newMember.guild.channels.cache.get(channelId).send({ embeds: [welcomeEmbed]}) 
    })
    
    client.on('guildMemberRemove', member => {
        console.log("Member left");
    })*/

    
}