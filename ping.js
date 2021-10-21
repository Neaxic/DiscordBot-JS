module.exports = (client) => {
    client.on('message', async (msg) => {
        if (msg.content === ".ping") {
            msg.react('👌');
            let responseMsg = await msg.reply('... Calculating ...');
            setTimeout(() => {
                const ping = msg.createdTimestamp - responseMsg.createdTimestamp;
                responseMsg.edit('`bot\'s` ping: ' + ping + "`ms`")
            }, 2000)
        }
    })
}