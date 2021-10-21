module.exports = (client) => {
    client.on('message', (msg) => {
        if (msg.content === ".ping") {
            msg.react('👌');
            msg.reply(`🏓Latency is ${Date.now() - msg.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
        }
    })
}