module.exports = {
    name: 'shop',
    description: 'display the shop',
    cooldown: 2,
    cd: "You're buying out all of our stock.",
    fan: true,
    execute(message, args, d) {
        const shop = new d.Discord.MessageEmbed()
            .setColor('#dd2de0')
            .setTitle('The Shop')
            .setDescription('To buy an item, do ' + `${d.prefix}` + "buy <itemname>")
            .addFields({
                name: 'fan:',
                value: 'Reduces cooldowns of some commands\ncost: 100:star:s'
            }, {
                name: 'orangedetector',
                value: 'Increases the chance you find an orange in the orange job\ncost: 100:star:s'
            }, {
                name: 'mangodetector',
                value: 'Increases the chance you find a mango in the mango job\ncost: 50:star:s'
            }, {
                name: 'carrotdetector',
                value: 'Increases the chance you find a carrot in the carrot job\ncost: 50:star:s'
            }, {
                name: 'starmagnet',
                value: 'Increases the amount of :star:s gained per job\ncost: 100:star:s'
            }, {
                name: 'shovel',
                value: 'Gives you more stars for digging job\ncost: 100:star:s'
            }, {
                name: 'Mine Shop',
                value: `Do ${d.prefix}ore for more info`
            },)
            .setThumbnail('https://cdn.discordapp.com/emojis/690075870995808326.png')
            .setTimestamp()
            .setFooter('Bape Marketplaces');

        message.channel.send(shop);

    }
};
