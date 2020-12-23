module.exports = {
	name: 'resume',
	description: 'Resume a paused song',
	cooldown: 2,
	cd: "No need to check, you can hear it already",
	execute(message, args, d) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return message.channel.send(`Resuming.`);
		}
		else if (serverQueue.playing) return message.channel.send("Something is already playing!")
		else { return message.channel.send('The queue is empty.'); }
	}
};
