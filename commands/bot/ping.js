const Discord = require('discord.js');

module.exports = {
 name: 'ping',
 aliases: ['gecikme'] ,
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
if(!message.guild.me.hasPermission('SEND_MESSAGES')) return
message.channel.send(`:ping_pong: Pong! (**${client.ws.ping}ms**)`)
}
}
