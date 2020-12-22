module.exports = {
	name: 'pause',
	description: 'Pause the currently playing song.',
	cooldown: 2,
	cd: "No need to double check if its paused",
	execute(message, args, d) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			const p = new d.Discord.MessageEmbed()
				.setColor('#dd2de0')
				.setTitle('Song')
				.addField(`Paused.`, '_')
				.setTimestamp()
				.setFooter('DJ Bape');
			return message.channel.send(p);
		}
		return message.channel.send("Nothing is currently playing.");
	}
};
