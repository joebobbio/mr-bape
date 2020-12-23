module.exports = {
	name: 'skip',
	aliases: ['s'],
	cooldown: 2,
	cd: "Stop skipping",
	async execute(message, args, d) {
		const channel = message.member.voice;
		const queue = message.client.queue.get(message.guild.id)
		if (!channel) return message.channel.send('You must join a voice channel first!');
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send("Nothing is playing");
		if (queue.repeatMode === 1) { queue.repeatMode = 0; }
		serverQueue.connection.dispatcher.end('Skipped.');
	}
};
