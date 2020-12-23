module.exports = {
	name: 'server',
	aliases: ['serverinfo'],
	description: 'Gets server info.',
	cooldown: 2,
	cd: 'server',
	execute(message, args, d) {
		const serversoloEmbed = new d.Discord.MessageEmbed()
			.setColor('#dd2de0')
			.setAuthor(message.guild.name, message.guild.iconURL())
			.addFields(
				{ name: 'Server ID', value: message.guild.id },
				{ name: 'Members', value: message.guild.memberCount },
				{ name: 'Created', value: message.guild.createdAt.toString().split(' ').slice(1, 4).join(' ') }
			)
			.setThumbnail('https://cdn.discordapp.com/emojis/690075870995808326.png')
			.setTimestamp()
			.setFooter('Bape Databases');

		message.channel.send(serversoloEmbed);
	}
};
