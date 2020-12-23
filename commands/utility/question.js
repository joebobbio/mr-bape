module.exports = {
    name: 'question',
    description: 'what is the meaning of life',
    aliases: ['ask'],
    cooldown: 3,
    cd: "Just google it yourself",
    async execute(message, args, d) {
        let finalAnswer;
        if (!args[0]) { return message.channel.send('What do I look up?'); }
        let key = process.env.WOLFRAM;
        let wolfapi = `https://api.wolframalpha.com/v1/result?i=${encodeURIComponent(args.join(' '))}&appid=${key}`;
        let answer = await d.r2.get(wolfapi).text;
        if (answer === 'No short answer available') {
            let simpleWolf = `https://api.wolframalpha.com/v2/query?input=${encodeURIComponent(args.join(' '))}&format=plaintext&output=JSON&appid=${key}&podindex=2`
            let ans = await d.r2.get(simpleWolf).json;
            if (!ans.queryresult.pods[0].subpods[0].plaintext || ans.queryresult.pods[0].subpods[0].plaintext === '(data not available)') { ans = "Can't find that." }
            finalAnswer = ans.queryresult.pods[0].subpods[0].plaintext;
        }
        else { finalAnswer = answer }
        const answerEmbed = new d.Discord.MessageEmbed()
            .setColor('#dd2de0')
            .setTitle('Answer')
            .setDescription('Powered by Wolfram-Alpha')
            .addField(finalAnswer.charAt(0).toUpperCase() + finalAnswer.slice(1), '_')
            .setTimestamp()
            .setFooter('Bape Databases');
        message.channel.send(answerEmbed)
    }
};
