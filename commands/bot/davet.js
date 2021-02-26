const Discord = require('discord.js');

module.exports = {
 name: 'davet',
 aliases: ['invite', 'bot-davet'] ,
 description: 'Botun davet linkini alırsınız.',
 usage: ['davet'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
message.channel.send("Moldup'ı sunucuna davet etmek için şu linke tıkla: https://bot.moldup.tk/davet.html")
}
}
