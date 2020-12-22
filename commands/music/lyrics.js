const { KSoftClient } = require('@ksoft/api');
const ksoft = new KSoftClient(process.env.KSOFT);
module.exports = {
    name: 'lyrics',
    description: 'Gets the lyrics of a song.',
    cooldown: 1,
    aliases: ['lyr'],
    cd: "how can you read an entire song in less than a second",
    async execute(message, args, d) {
        const q = message.client.queue.get(message.guild.id);
        if (!args.length && !q) { return message.channel.send('Please enter a song to get lyrics.') }
        let argument = args.join(' ')
        if (!argument) { argument = q.songs[0].title; }
        let { name, lyrics, url, artwork } = await ksoft.lyrics.get(argument);
        const lyricEmbed = new d.Discord.MessageEmbed()
            .setColor('#dd2ed0')
            .setTitle(name.charAt(0).toUpperCase() + name.slice(1))
            .setThumbnail(artwork)
            .setFooter('DJ Bape | Provided by KSoft.Si')
        if (name.length + lyrics.length > 6000) { lyricEmbed.addField('The lyrics are too long, here is the URL!', url); }
        else if (lyrics.length > 1024) {
            let arr = lyrics.split('\n\n');
            lyricEmbed.setDescription('**Lyrics**\n**-**\n\u200b')
            for (part in arr) {
                lyricEmbed.addField('\u200b', arr[part]);
            }
        }
        else {
            lyricEmbed.setDescription('**Lyrics**\n**-**')
            lyricEmbed.addField('\u200b', lyrics)
        }
        message.channel.send(lyricEmbed);
    }
};
