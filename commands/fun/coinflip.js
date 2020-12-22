module.exports = {
    name: 'coinflip',
    description: 'flip a coin',
    aliases: ['coin', 'cf'],
    cooldown: 5,
    cd: "flippy",
    execute(message, args, d) {
        const coin = new d.Discord.MessageEmbed()
            .setColor('#dd2de0')
            .setTitle(message.author.username + `'s coinflip`)
            .addField('It landed on', `${Math.round(Math.random()) ? 'Heads!' : 'Tails!'}`)
            .setTimestamp()
            .setFooter('Bape Coin Flipper Club');
        message.channel.send(coin);
    }
};
