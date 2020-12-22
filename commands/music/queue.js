const guild = require('discord.js');
module.exports = {
	name: 'queue',
	description: 'Show the queue',
	cooldown: 2,
	aliases: ['q'],
	cd: "I just showed you the queue!",
	execute(message, args, d) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send("There's nothing playing.");
		let loop;
		switch (serverQueue.repeatMode) {
			case 1:
				loop = "Looping the **song**"
				break;
			case 2:
				loop = "Looping the **queue**"
				break;
			default:
				loop = " "
		}
		const q = serverQueue.songs;
		const queue = new d.Discord.MessageEmbed()
			.setColor('#dd2de0')
			.setTitle('Song Queue')
			.setDescription(loop + '\n_')
			.setTimestamp()
			.setFooter('DJ Bape');
		for (var key in q) { queue.addFields({ name: '\u200b' + `${parseInt(key) + 1}` + '. ' + q[key].title, value: '_' }) }
		message.channel.send(queue);
	}
};
