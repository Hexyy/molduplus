const Discord = require('discord.js');

module.exports = {
 name: 'dokümanlar',
 aliases: ['dökümanlar', 'docs', 'dokumanlar', 'Dokümanlar'] ,
 description: 'Botun dokümanlarının linkini alırsınız.',
 usage: ['dokümanlar'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
message.channel.send(new Discord.MessageEmbed().setAuthor("Komutlara mı bakacaksın?", message.author.displayAvatarURL({ dynamic: true })).setDescription("[Dokümanlara göz at](https://bot.moldup.tk/docs.html)").setFooter(message.author.tag + " tarafından istendi").setTimestamp().setColor("BLUE"))
}
}
