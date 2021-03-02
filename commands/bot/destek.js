const Discord = require('discord.js');

module.exports = {
 name: 'destek',
 aliases: ['dc', 'discord', 'support', 'Destek'] ,
 description: 'Botun destek sunucusunun linkini alırsınız.',
 usage: ['destek'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
message.channel.send(new Discord.MessageEmbed().setAuthor("Yardım mı lazım?", message.author.displayAvatarURL({ dynamic: true })).setDescription("[Destek sunucumuza katılın](https://bot.moldup.tk/destek.html)").setFooter(message.author.tag + " tarafından istendi").setTimestamp().setColor("BLUE"))
}
}
