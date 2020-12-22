module.exports = {
    name: 'daily',
    description: `Free money?`,
    cooldown: 86400,
    cd: "This command can only be used once a day! :rage:",
    async execute(message, args, d) {
        let random = Math.floor(Math.random() * 25) + 25;
        const dailystarEmbed = new d.Discord.MessageEmbed()
            .setColor('#dd2de0')
            .setTitle(message.author.username + `'s daily reward`)
            .addField('Daily Reward','here is ' + ` ${random} ` + ' :star:s')
            .setThumbnail('https://cdn.discordapp.com/emojis/690075870995808326.png')
            .setTimestamp()
            .setFooter('Bape Bank Inc.');
        message.channel.send(dailystarEmbed);
        d.addMoni(message.author.id, random);
    }

};
