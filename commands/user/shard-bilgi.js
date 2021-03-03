const Discord = require('discord.js');
const moment = require('moment');
moment.locale('tr');

module.exports = {
name: 'shard',
aliases: ['shardbilgi', 'shard-bilgi', 'shardinfo', 'shard-info', 's'] ,
description: 'Sunucunuz içinde bulunduğu shardın bilgisini gönderir.',
usage: ['shard'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {

require('moment-duration-format');

return message.channel.send(new Discord.MessageEmbed()
.setColor('#eb5c0e')
.setAuthor('Shard Bilgileri', client.user.avatarURL())
.setDescription('Bu sunucu **' + client.shard.count + ' **adet shard arasından, **' + message.guild.shardID + '** numaralı shard üzerinde bulunuyor.')
.addField('Shard 0', `${client.guilds.cache.size} sunucu,
${moment.duration(client.uptime).format(`w [hafta] d [gün] h [saat] m [dakika] s [saniye]`)}
${client.ws.ping}ms!`)
.setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({ dynamic: true })).setTimestamp());

}
}
