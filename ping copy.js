module.exports = (client) => {
    client.on('ready', () => {
        const botChannelID = '883827218923528234'
        const botChannel = await client.channels.fetch(botChannelID)
        var timestamp = Date();
        botChannel.sendMessage(`Im alive and idk how ${timestamp}`)
    })
}