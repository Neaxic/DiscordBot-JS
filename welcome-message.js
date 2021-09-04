module.exports = (client) => {
    const channelId = '883760175570358302'

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
}