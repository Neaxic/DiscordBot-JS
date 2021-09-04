const addReactions = (message, reactions) => {
    if(reactions.length >= 1){
        message.react(reactions[0])
        reactions.shift()
        if(reactions.length > 0){
            setTimeout(() => addReactions(message, reactions), 750)
        }
    }
}

module.exports = async (client, id, text, reactions = []) => {
    const channel = await client.channels.fetch(id)

    channel.messages.fetch().then((messages) =>{
        if(messages.size === 0){
            //sendt new msg
            channel.send({ embeds: [text]}).then((message) => {
                addReactions(message, reactions)
            })
        } else {
            //edit the existing msg
            for(const message of messages){
                message[1].edit({ embeds: [text]})
                addReactions(message[1], reactions)
            }
        }
    })
}