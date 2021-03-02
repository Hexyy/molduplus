const Discord = require('discord.js');

module.exports = {
 name: 'site',
 aliases: ['Site', 'website'] ,
 description: 'Botun sitesinin linkini alırsınız.',
 usage: ['site'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
message.channel.send(new Discord.MessageEmbed().setAuthor("Sitemiz de var!", message.author.displayAvatarURL({ dynamic: true })).setDescription("[Siteye git](https://bot.moldup.tk)").setFooter(message.author.tag + " tarafından istendi").setTimestamp().setColor("BLUE"))
}
}
