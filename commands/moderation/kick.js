const Discord = require('discord.js');
module.exports = {
    name: 'kick',
    description: 'kick',
    cooldown: 1,
    cd: "Put the boot down.",
    execute(message, args, d) {
        let rawTarget = message.mentions.members.first();
        let target = message.guild.member(rawTarget);
        let boolean = message.member.hasPermission("KICK_MEMBERS");
        let myBoolean = message.guild.me.hasPermission("KICK_MEMBERS");
        if (boolean && myBoolean) {
            if (target) {
                if (message.author.id === rawTarget.id) {
                    return message.channel.send('You cannot kick yourself.');
                }
                if (message.client.user.id === rawTarget.id) {
                    return message.channel.send('>:(')
                }
                try {
                    target.kick();
                    message.channel.send(":wave: " + target.displayName + " just got fucking KICKED ");
                } catch {
                    message.channel.send("Permission denied.")
                }
            }
        } else if (!target) {
            message.channel.send('Please mention who you are going to kick.');
        } else if (!boolean) {
            message.reply("Permission denied.");
        } else if (!myBoolean) {
            message.channel.send("I do not have permissions to **kick** members in this guild.")
        } else {
            message.channel.send("Cannot kick " + target.displayName + " maybe use a valid mention?");
        }

    }
};
