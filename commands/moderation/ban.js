const Discord = require('discord.js');
module.exports = {
    name: 'ban',
    description: 'Swing the banhammer',
    cooldown: 1,
    cd: "Don't bully",
    execute(message, args, d) {
        let rawTarget = message.mentions.members.first();
        let target = message.guild.member(rawTarget);
        let boolean = message.member.hasPermission("BAN_MEMBERS");
        let myBoolean = message.guild.me.hasPermission("BAN_MEMBERS");
        if (boolean && myBoolean) {
            if (target) {
                if (message.author.id === rawTarget.id) {
                    return message.channel.send('Why ban yourself?');
                }
                if (message.client.user.id === rawTarget.id) {
                    return message.channel.send('>:(')
                }
                try {
                    target.ban();
                    message.channel.send("\:hammer: " + target.displayName + " has been fucking BANNED");
                } catch {
                    message.channel.send("Permission denied.")
                }
            }
        } else if (!target) {
            message.channel.send('Mention who you wish to ban.');
        } else if (!boolean) {
            message.reply("Permission denied.");
        } else if (!myBoolean) {
            message.channel.send("I cannot **ban** members in this guild.")
        } else {
            message.channel.send("Cannot kick " + target.displayName + " maybe use a valid mention?");
        }

    }
};
