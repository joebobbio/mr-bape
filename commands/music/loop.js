module.exports = {
    name: 'loop',
    description: 'Loop the current song or queue.',
    cooldown: 1,
    aliases: ['repeat'],
    cd: "The music may be forever, but you aren't.",
    execute(message, args, d) {
        const serverQueue = message.client.queue.get(message.guild.id);;
        if (!serverQueue) return message.channel.send(`No music is playing!`);
        if (serverQueue.repeatMode === 0) {
            serverQueue.repeatMode = 1;
            message.channel.send('Now looping the current song.')
        } else if (serverQueue.repeatMode === 1) {
            serverQueue.repeatMode = 2;
            message.channel.send('Now looping the current queue')
        } else if (serverQueue.repeatMode === 2) {
            serverQueue.repeatMode = 0;
            message.channel.send('Looping is turned off.')
        }
    }
};
