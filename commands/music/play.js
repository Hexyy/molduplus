const Discord = require('discord.js');
const { player } = require('../../settings/müzik')
module.exports = {
 name: 'play',
 aliases: ['oynat' , 'çal'] ,
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
player.play(message , args.join(' ') , { firstResult: false})
}
}