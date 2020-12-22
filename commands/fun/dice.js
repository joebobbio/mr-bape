module.exports = {
    name: 'dice',
    description: 'Roll a dice',
    cooldown: 5,
    cd: "Chill on the dice",
    execute(message, args, d) {
        let roll = Math.floor(Math.random() * 6) + 1;
        const dice = new d.Discord.MessageEmbed()
            .setColor('#dd2de0')
            .setTitle(message.author.username + `'s dice`)
            .addFields({
                name: 'Roll',
                value: roll
            })
            .setTimestamp()
            .setFooter('Bape Dice Club');
        message.channel.send(dice);
    }
};
