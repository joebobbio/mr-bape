module.exports = {
    name: 'buy',
    aliases: ['purchase'],
    description: 'Buy things!',
    cooldown: 2,
    cd: "Slow down, moneybags.",
    fan: true,
    async execute(message, args, d) {
        const notitem = new d.Discord.MessageEmbed()
            .setColor('#dd2de0')
            .setTitle(message.author.username + "'s purchase")
            .addFields({
                name: 'Purchase Failed',
                value: 'Invalid item provided.'
            })
            .setThumbnail('https://cdn.discordapp.com/emojis/690075870995808326.png')
            .setTimestamp()
            .setFooter('Bape Marketplaces');
        const broke = new d.Discord.MessageEmbed()
            .setColor('#dd2de0')
            .setTitle(message.author.username + "'s purchase")
            .addFields({
                name: 'Purchase Failed',
                value: `You don't have enough money.`
            })
            .setThumbnail('https://cdn.discordapp.com/emojis/690075870995808326.png')
            .setTimestamp()
            .setFooter('Bape Marketplaces');
        let have = await d.items.get(message.author.id);
        let argument = args.join('').toLowerCase().replace(/,/g,'');
        const regex = /\d+/g;
        let numberOfItems = parseInt(argument.match(regex));
        let item = argument.replace(numberOfItems, '');
        if (Object.keys(d.itemAliases).includes(item)) { item = d.itemAliases[item]; }
        if (!Object.keys(d.buyableItems).includes(item)) return message.channel.send(notitem);
        if (!have) { have = {}; }
        if (isNaN(numberOfItems) || numberOfItems < 0) { numberOfItems = 1; }
        if (numberOfItems === 0) { return message.channel.send('ok karen'); }
        let total = d.buyableItems[item] * numberOfItems;
        if (total > await d.users.get(message.author.id)) { return message.channel.send(broke); }
        d.addMoni(message.author.id, -total)
        if (!have[item]) { have[item] = numberOfItems; }
        else { have[item] += numberOfItems }
        d.items.set(message.author.id, have);
        let receipt;
        if (item === 'starmill') {
            if (!have.time) { have.time = {}; }
            if (!have.time.starmill) { have.time.starmill = Date.now() }
        }
        if (numberOfItems === 1) {
            receipt = "You successfully purchased a " + item + "!";
        } else {
            receipt = "You successfully purchased " + numberOfItems + " " + item + "s!";
        }
        const buy = new d.Discord.MessageEmbed()
            .setColor('#dd2de0')
            .setTitle(message.author.username + "'s purchase")
            .addField('Receipt', receipt)
            .setTimestamp()
            .setFooter('Bape Marketplaces');
        message.channel.send(buy);
    }
};
