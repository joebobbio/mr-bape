module.exports = {
    name: 'purge',
    description: 'purge messages from a channel',
    cooldown: 1,
    cd: "Chill, those messages won't incriminate you (i think)",
    execute(message, args, d) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Permission denied.')
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I cannot **manage messages** in this guild!")
        if (!args[0]) return message.channel.send('You must provide a number of messages to purge!');
        let number = parseInt(args[0]);
        let iteration = ~~(number / 100);
        let leftover = number - (iteration * 100);
        for (let i = 0; i < iteration; i++) { message.channel.bulkDelete(100); }
        if (leftover > 0) { message.channel.bulkDelete(leftover); }
    }
};
