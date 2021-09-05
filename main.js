const { Client, Intents, MessageEmbed, Role } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],});

const ruleClaim = require('./embeds/rule-claiming')
const faqClaim = require('./embeds/faq-claiming')
const featureEmbed = require('./embeds/features')
const statusEmbed = require('./embeds/status')
const loaderEmbed = require('./embeds/loader')
const exclusiveEmbed = require('./embeds/exclusive')

const welcomeMsg = require('./welcome-message')

const ticket = require('./commands/ticket')

const tokenKey = require('./token')

client.once('ready', () => {
    console.log("Bot-man is online");

    ruleClaim(client)
    faqClaim(client)
    welcomeMsg(client)

    featureEmbed(client)
    statusEmbed(client)
    loaderEmbed(client)
    exclusiveEmbed(client)

    ticket(client)

})

client.on('message', async msg =>{
    if(msg.content === "ping"){
        let messageEmbed = await msg.reply('pong');
        messageEmbed.react('👌');
    }
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