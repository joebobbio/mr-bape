module.exports = {
	name: 'stop',
	cooldown: 2,
	aliases: ['leave', 'disconnect', 'dc'],
	cd: "Why do you stop me so much?",
	execute(message, args, d) {
		const { channel } = message.member.voice;
		const myChannel = message.guild.me.voice.channel;
		if (!channel) return message.channel.send("You must first join a voice channel!");
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue && !myChannel) return message.channel.send("Nothing is playing.");
		message.client.queue.delete(message.guild.id);
		myChannel.leave();
	}
};
