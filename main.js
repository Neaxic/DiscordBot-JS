const { Client, Intents, MessageEmbed, Role } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
});

const rulesEmbed = new MessageEmbed()
    .setColor('#ff0000')
    .setTitle('X 𝐒𝐈𝐂𝐊𝐎𝐖𝐀𝐑𝐄 𝐑𝐔𝐋𝐄𝐒 X') 
    .setDescription('The very basic rules of a discord server.')

    .setFields(
        { name: '1. Appriciate the work here', value: 'I spend some freetime on this, and give it for free - appriciate it.' },
        { name: '2. This is a dictatorship', value: 'Pretty simple, i supply stuff you might want, so dont be a dick, ill just get rid of you.' },
        { name: '3. Dont send links without auth', value: 'It likely contains some ass-shitmalware inside - So dont send any of it (Unless Staff approved)' },
        { name: '4. Nothing Racist / Homofobic / NSFW', value: 'Spamming n-word isent funny, you mad retarded and 11 years old.' },
        { name: '5. When asking for help', value: 'Ill help you when i have time, and remember to include valid background on the issue for a faster valid response.' },
        { name: '6. No excessive spamming', value: 'Spamming will result in a ban' },
        { name: '7. Dont DMing Members from the discord', value: 'People have lives, and are usually not intrested in intrusive advertisements. Respect that.' },
        { name: '8. No advertising in here', value: 'Dont advertise for anything in here - get your users from somewhere else. We want this bloat free!'}
    )

    .setImage('https://media.discordapp.net/attachments/598521974192472075/873677829915701298/standard_1.gif')
    .setFooter('Fuck you, follow the rules. I really dont care.');

client.once('ready', () => {
    console.log("Bot-man is online");
})

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

client.emit()
client.login('ODgzMDU2Njk1ODkzNDI2MTc2.YTEYog.VGPlbLkL846TjY9VbkJbM5dQBmY');