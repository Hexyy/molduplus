const Discord = require('discord.js');
const moment = require('moment')
require('moment-duration-format')
const os = require('os')
module.exports = {
 name: 'istatistik',
 aliases: ['stats','i' , 'botbilgi' , 'bot-bilgi'] ,
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {

message.channel.send(new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(`Moldup İstatistikleri`)
.addField('Uptime' , moment.duration(client.uptime).format('D [gün], H [saat], m [dakika], s [saniye]') , true)
.addField('Ram Kullanımı', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} mb` , true)
.setThumbnail(client.user.displayAvatarURL({format: 'png' , size: 1024 }))
.addField('Genel İstatistikler' ,`• ${client.guilds.cache.size} sunucu\n• ${client.users.cache.size} kullanıcı\n• ${client.channels.cache.size} kanal`)
.addField('Bot Sahibi Ve Geliştiricileri' , `<@696373721992003604> \`[ Alpu TV#6598 ]\` \n<@722186767704522812> \`[ Hexy#1490 ]\` `)
)
}
}
