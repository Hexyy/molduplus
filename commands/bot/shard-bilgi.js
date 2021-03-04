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
.setColor('#FFEE00')
.setAuthor('Shard Bilgileri', client.user.avatarURL())
.setDescription('Bu sunucu **' + client.shard.count + ' **adet shard arasından, **' + message.guild.shardID + '** numaralı shardın içinde bulunuyor.')
.addField('Shard ' + message.guild.shardID, `**Sunucu sayısı:** ${client.guilds.cache.size}
**Uptime:** ${moment.duration(client.uptime).format(`w [hafta] d [gün] h [saat] m [dakika] s [saniye]`)}
**Gecikme süresi:** ${client.ws.ping} ms`)
.setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({ dynamic: true })).setTimestamp());

}
}
