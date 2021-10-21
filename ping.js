module.exports = (client) => {
    client.on('message', async (msg) => {
        if (msg.content === ".ping") {
            msg.react('👌');
            var responseMsg = await msg.reply('... Calculating ...');
            responseMsg.edit(`🏓Latency is ${Date.now() - msg.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
        }
    })
}