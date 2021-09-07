const { MessageEmbed } = require('discord.js');
const { Permissions } = require('discord.js');
const firstMessage = require('../first-message')

const setupTicketEmbed = new MessageEmbed()
    .setColor('#FF0000')
    .setTitle('𝐒𝐈𝐂𝐊𝐎𝐖𝐀𝐑𝐄 TICKET SYSTEM') 
    .setDescription('React with the 🎟️ emoji, and a room will be created for you and the staff team.')

module.exports = (client) => {
    const channelId = '883873847663796305'
    const ticketParrent = '883867456056201228'
    const reactions = ['🎟️']

    const ticketReact = '🔒'
    const ticketReact2 = '🚪'

    var ticketroom;

    var timestamp;


    firstMessage(client, channelId, setupTicketEmbed, reactions)

    client.on('messageReactionAdd', async (reaction, user) => {
        if(reaction.message.channel.id === channelId){
            if(user.bot) return;
    
            if(reaction.emoji.name === '🎟️'){
                reaction.users.remove(user)    
                
                ticketroom = await reaction.message.guild.channels.create(`ticket: ${user.tag}`);
                ticketroom.setParent(ticketParrent)

                timestamp = Date();
                
                ticketroom.permissionOverwrites.create(ticketroom.guild.roles.everyone, { VIEW_CHANNEL: false });

                ticketroom.permissionOverwrites.edit(user.tag, [{
                    VIEW_CHANNEL: true
                }, {
                    SEND_MESSAGES: true
                }])
                .then(ticketroom => console.log(ticketroom.permissionOverwrites.cache.get(user.id)))
                .catch(console.error);

                var ticketMessage = new MessageEmbed()
                .setColor('#FF0000')
                .setTitle(`𝐒𝐈𝐂𝐊𝐎𝐖𝐀𝐑𝐄 TICKET ID: ${ticketroom.id}`)
                .setDescription(`TICKET CREATED ON: ${timestamp}`)

                const reactionMessage = await ticketroom.send({embeds: [ticketMessage]});
                
                try {
                    await reactionMessage.react(ticketReact)
                    await reactionMessage.react(ticketReact2)
                } catch (err){
                    channel.send('Error sending reactions');
                }

                const collector = reactionMessage.createReactionCollector((reaction, user) =>
                message.guild.members.cache.find((member) => member.id === user.id).hasPermission('MODERATOR'),
                { dispose: true });

                collector.on('collect', (reaction, user) => {
                    switch(reaction.emoji.name){
                        case ticketReact:
                            if(user.bot) return;
                            /*channel.permissionOverwrites.create(message.author, {
                                SEND_MESSAGE: false
                            })*/
                            break;
                        case ticketReact2:
                            if(user.bot) return;
                            reaction.users.remove(user)  

                            ticketroom.send('Are you sure you want to delete this ticket?').then(msg => {
                                msg.react('🟩')
                                msg.react('🟥')
                            })
                            break;
                    }
                });
            }
        }
        if(reaction.emoji.name === '🟩'){
            if(!reaction.message.channel.id === ticketroom.id) return;
            if(user.bot) return;
            ticketroom.send('Deleting this channel in 5 secounds!')
            setTimeout(() => ticketroom.delete(), 5000);
        }
        if(reaction.emoji.name === '🟥'){
            if(!reaction.message.channel.id === ticketroom.id) return;
            if(user.bot) return;
            reaction.message.remove()
            reaction.message.reactions.cache.get('🟥').remove()
            reaction.message.reactions.cache.get('🟩').remove()
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