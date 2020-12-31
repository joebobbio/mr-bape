module.exports = {
  name: "bal",
  aliases: ["balance", "wallet"],
  description: "Check your balance",
  cooldown: 1,
  cd: "You're checking your balace too quickly!",
  fan: true,
  async execute(message, args, d, client) {
    let target;

    if (args[0]) target = await message.mentions.users.first() || await client.users.fetch(args[0]);

    let person;
    let personName;

    if (!target) {
      person = message.author;
      personName = message.author.username;
    } else if (target) {
      person = target;
      personName = target.username;
      
      if (target.bot) {
        message.channel.send("The bots here have yet to become setient, so I doubt they have any money.");
        return;
      }
    } else {
      message.channel.send("Use a valid mention!");
      return;
    }

    let bal = await d.users.get(person.id);
    let displayBal;

    if (bal === null || !bal) 
      displayBal = 0; 
    else 
      displayBal = bal;

    const balEmbed = new d.Discord.MessageEmbed()
      .setColor("#e342f5")
      .setTitle(personName + `'s balance`)
      .addField("Balance", displayBal + " :star:s")
      .setThumbnail("https://cdn.discordapp.com/emojis/690075870995808326.png")
      .setTimestamp()
      .setFooter("Bape Bank Inc.");
    message.channel.send(balEmbed);
  },
};
