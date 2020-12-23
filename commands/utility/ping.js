module.exports = {
	name: 'ping',
	aliases: ['pinginfo'],
	description: 'Pong',
	cooldown: 2,
	cd: "My ping is fine, thanks",
	execute(message, args, d) {
	message.channel.send("Pinging...").then(m => {
  	let ping = m.createdTimestamp - message.createdTimestamp;
	const pingsoloEmbed = new d.Discord.MessageEmbed()
					.setColor('#dd2de0')
					.setTitle('Pong!')
					.addFields(
					{ name: 'Your ping is:', value: `${ping}`}
					)
			                .setThumbnail('https://cdn.discordapp.com/emojis/690075870995808326.png')
					.setTimestamp()
					.setFooter('Bape Databases');
				m.delete();
				m.channel.send(pingsoloEmbed);
		})
	}
}; 
