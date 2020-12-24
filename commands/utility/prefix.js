module.exports = {
    name: 'prefix',
    description: 'set prefix',
    cooldown: 2,
    cd: "Don't set prefix too often",
    async execute(message, args, d) {
        if (!message.member.hasPermission("MANAGE_GUILD")) { return message.channel.send('Permission denied.'); }
        let guilds = await d.guilds.get(message.guild.id);
        if (!guilds) { guilds = {}; }
        if (!args[0]) { return message.channel.send(`Can't set the prefix if you don't tell me what to set it to.`) }
        guilds.prefix = args[0];
        await d.guilds.set(message.guild.id, guilds);
        const prefixSetEmbed = new d.Discord.MessageEmbed()
            .setColor('#dd2de0')
            .setTitle('Guild Settings')
            .addFields(
                { name: 'Prefix', value: `${args[0]}` }
            )
            .setTimestamp()
            .setFooter('Bape Databases');
        message.channel.send(prefixSetEmbed)
    }
}; 
