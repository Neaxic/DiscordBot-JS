module.exports = (client) => {
    client.on('message', async (msg) => {
        if (msg.content === ".ping") {
            msg.react('👌');
            let responseMsg = await msg.reply('... Calculating ...');
            setTimeout(() => {
                var ping = msg.createdTimestamp - responseMsg.createdTimestamp;
                responseMsg.edit(`Currently: ${ping}`)
            }, 2000)
        }
    })
}