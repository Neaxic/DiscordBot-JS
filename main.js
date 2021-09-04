const { Client, Intents, MessageEmbed, Role } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],});

const ruleClaim = require('./rule-claiming')
const faqClaim = require('./faq-claiming')
const welcomeMsg = require('./welcome-message')

const tokenKey = require('./token')

client.once('ready', () => {
    console.log("Bot-man is online");

    ruleClaim(client)
    faqClaim(client)
    welcomeMsg(client)

})

client.on('guildMemberAdd', member => {
    console.log("New member joined");

    /*
    //Add pesant role on join
    member.roles.add(member.cache.get(member.id).roles.add('872538157801963610'))

    //msg when join
    let msg = channel.message.send('Yo welcome' + member.name)
    msg.react('💦')
    */
})

client.on('guildMemberRemove', member => {
    console.log("Member left");
})


/*

client.on('message', async msg =>{
    if(msg.content === "ping"){
        let messageEmbed = await msg.channel.send({ embeds: [rulesEmbed]});
        messageEmbed.react('👌');
        messageEmbed.react('👎');
    }
})

client.on('messageReactionAdd', async (reaction, user) => {
    if(user.bot) return;

    if(reaction.emoji.name === '👌'){
        await reaction.message.guild.members.cache.get(user.id).roles.add('871788325172830290');
    }
    console.log("Role add");
})

client.on('messageReactionRemove', async (reaction, user) => {
    if(user.bot) return;

    if(reaction.emoji.name === '👌'){
        await reaction.message.guild.members.cache.get(user.id).roles.remove('871788325172830290');
    }
})

*/

client.emit()
client.login(tokenKey.token);