module.exports = {
    name: 'volume',
    aliases: ['vol'],
    cd: "Enough volume cranking!",
    execute(message, args, d) {
        let title, number;
        let argument = args.join(' ');
        const { channel } = message.member.voice;
        if (!channel) return message.channel.send('You must first join a voice channel!')
        const queue = message.client.queue.get(message.guild.id);
        if (!queue) return message.channel.send('Nothing is playing!')
        if (!argument) { title = 'Current Volume'; number = queue.volume }
        else {
            let set = parseInt(argument)
			if (isNaN(set)) return message.channel.send("Numbers only");
			else if (set < 0) return message.channel.send("what does negative volume even sound like");
            queue.volume = set;
            queue.connection.dispatcher.setVolumeLogarithmic(set / 100);
            title = 'Volume set to'
            number = set
        }
        const volumeEmbed = new d.Discord.MessageEmbed()
            .setColor('#dd2de0')
            .setTitle(title)
            .setDescription(number)
        message.channel.send(volumeEmbed);
    }
};
