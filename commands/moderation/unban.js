const Discord = require('discord.js');
module.exports = {
    name: 'unban',
    cooldown: 1,
    cd: "Chill on the unbans",
    execute(message, args, d) {
        let unbanUser = args[0];
        let boolean = message.member.hasPermission("BAN_MEMBERS");
        let myBoolean = message.guild.me.hasPermission("BAN_MEMBERS");
        if (message.mentions.members.first()) { return message.channel.send('You must provide an ID!'); }
        if (boolean && myBoolean) {
            if (unbanUser) {
                if (message.author.id === unbanUser) {
                    return message.channel.send(`You aren't banned`);
                }
                if (message.client.user.id === unbanUser) {
                    return message.channel.send(`I too am not banned`)
                }
                try {
                    message.guild.members.unban(unbanUser)
                    message.channel.send("User unbanned!");
                } catch {
                    message.channel.send("I cannot **unban members** in this guild. To complete this task, I need the `BAN_MEMBERS` permission.")
                }
            }
        } else if (!unbanUser) {
            message.channel.send('You must provide an ID to unban!');
        } else if (!boolean) {
            message.reply("Permission denied.");
        } else if (!myBoolean) {
            message.channel.send("I cannot **unban members** in this guild. To complete this task, I need the `BAN_MEMBERS` permission.")
        } else {
            message.channel.send("Cannot unban that user");
        }

    }
};
