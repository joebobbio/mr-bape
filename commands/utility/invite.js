module.exports = {
	name: 'invite',
	description: 'get invite link for the bot',
	cooldown: 2,
	cd: "I just gave you the link!",
	execute(message, args, d) {
		const invite = 'https://discord.com/oauth2/authorize?client_id=796765069907329055&permissions=1312156870&scope=bot';
		const inviteEmbed = new d.Discord.MessageEmbed()
			.setColor('#dd2de0')
			.setTitle('Invite')
			.setURL(invite)
		message.channel.send(inviteEmbed);
	}
};
