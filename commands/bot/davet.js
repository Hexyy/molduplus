const Discord = require('discord.js');

module.exports = {
 name: 'davet',
 aliases: ['invite', 'bot-davet', 'Davet'] ,
 description: 'Botun davet linkini alırsınız.',
 usage: ['davet'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
message.channel.send(new Discord.MessageEmbed().setAuthor("Moldup'ı sevdiniz mi?", message.author.displayAvatarURL({ dynamic: true })).setDescription("[Sunucunuza davet edin](https://bot.moldup.tk/davet.html)").setFooter(message.author.tag + " tarafından istendi").setTimestamp().setColor("BLUE"))
}
}
