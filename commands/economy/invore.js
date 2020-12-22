module.exports = {
    name: 'invore',
    description: 'Check your ore inventory',
    aliases: ['io'],
    cooldown: 3,
    cd: "hufdsufhus4eoilefhlldsfcdsiluhl",
    fan: true,
    async execute(message, args, d) {
        let target = message.mentions.members.first();
        let person;
        let personName;
        if (!target) {
            person = message.author;
            personName = message.author.username;
        } else if (target) {
            person = target;
            personName = target.displayName;
            if (target.user.bot) { return message.channel.send('How can a bot mine? It doesn\'t have any arms.'); }
        } else { return message.channel.send('Use a valid mention!'); }
        let inv = await d.items.get(person.id);
        const invEmbed = new d.Discord.MessageEmbed()
            .setColor('#dd2de0')
            .setDescription('Ore Inventory')
            .setTitle(personName + "'s inventory")
            .setTimestamp()
            .setFooter('Bape Storages Org.');
        if (!inv.ore || Object.keys(inv.ore).length === 0) { invEmbed.addField('You have no ores.', '_'); }
        else {
            for (const key in inv.ore) {
                if (inv.ore[key] === 0) {
                    delete inv.ore[key];
                    await d.items.set(message.author.id, inv);
                    continue;
                }
                let orePic = d.emoji[d.ores.tier1.concat(d.ores.tier2, d.ores.tier3).filter(v => key.includes(v)).pop()];
                invEmbed.addField(orePic + " - " + key.charAt(0).toUpperCase() + key.slice(1) + "(s) ", inv.ore[key]);
            }
        }
        message.channel.send(invEmbed);
    }
};
