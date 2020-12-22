module.exports = {
    name: 'give',
    aliases: ['donate'],
    description: 'Give stars to people',
    cooldown: 5,
    cd: "Love the generosity, but maybe chill a bit?",
    fan: true,
    async execute(message, args, d, client) {
        const regex = /<@!?\d+>/g;        
        let argument = args.join(' ').replace(/,/g, '');
        let donation = parseInt(args[1]);
        let target
        if(args[0]) target = message.mentions.members.first() || await message.guild.members.fetch(await client.users.fetch(args[0]));
        let check = await d.users.get(message.author.id)
        if (!target) {
            message.channel.send(`Who are you giving money to?`);
        } else if (!donation || donation > check || isNaN(donation) || donation < 0) {
            message.channel.send(`Invalid amount of money.`)
        } else if (donation === 0) {
            message.channel.send(`What's the point of giving if you aren't giving anything?`);
        } else if (target.id === message.author.id) {
            message.channel.send(`You already have money.`)
        } else if (target.user.bot) {
            message.channel.send(`The last time I checked, bots don't need money.`)
        } else {
            d.addMoni(message.author.id, -donation);
            d.addMoni(target.id, donation);
            const give = new d.Discord.MessageEmbed()
                .setColor('#dd2de0')
                .setTitle(message.author.username + "'s donation to " + target.displayName)
                .addField('Donation', 'you gave ' + `${target.displayName} ` + donation + ' :star:s')
                .setThumbnail('https://cdn.discordapp.com/emojis/690075870995808326.png')
                .setTimestamp()
                .setFooter('Bape Charity Org.');

            message.channel.send(give);
        }
    }
};

