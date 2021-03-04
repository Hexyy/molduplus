const Discord = require('discord.js');
const moment = require('moment');
require('moment-duration-format');
module.exports = {
 name: 'kanal-bilgi',
 aliases: ['kanalbilgi', 'channel-info','channel-info'] ,
description: 'Kanal hakkında bilgi alırsınız',
usage: ['kanal-bilgi { #kanal }'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
    
let kanal = message.mentions.channels.first() || message.channel
let now = await Date.now()
let created = (await now) - kanal.createdTimestamp

const embed = new Discord.MessageEmbed()
.setColor('BLUE')
.addField('• Kanal Adı' , kanal.name)
.addField('• Kanal ID', kanal.id)
.addField('• Kanalı Görebilen Üye Sayısı' , kanal.members)
.addField('• Oluşturulma Tarihi' , moment.duration(created).format('Y [yıl], D [gün], H [saat], m [dakika],s [saniye]')+'önce')
message.channel.send(embed)
}
}
