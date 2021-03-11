const Discord = require('discord.js');

module.exports = {
 name: 'durumtakip',
 aliases: ['moldup-durum', 'durum-takip', 'Durum'] ,
 description: 'Botun durumunu takip edersiniz',
 usage: ['davet'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
message.channel.send(new Discord.MessageEmbed().setAuthor("Moldup ne durumda?", message.author.displayAvatarURL({ dynamic: true })).setDescription("[Hemen takip edin](https://bot.moldup.tk/durum.html)").setFooter(message.author.tag + " tarafından istendi").setTimestamp().setColor("BLUE"))
}
}
