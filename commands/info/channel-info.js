const Discord = require('discord.js');
const moment = require('moment');
require('moment-duration-format');
module.exports = {
 name: 'kanal-bilgi',
 aliases: ['kanalbilgi', 'channel-info','channel-info', 'kanal', 'channel', 'kb', 'ci'] ,
description: 'Kanal hakkında bilgi alırsınız',
usage: ['kanal-bilgi { #kanal }'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
    
let kanal = message.mentions.channels.first()
if(!kanal) kanal = message.channel;
let now = await Date.now()
let created = (await now) - kanal.createdTimestamp

const embed = new Discord.MessageEmbed()
.setColor('BLUE')
.addField('<:nokta:821307638473293834> Kanal Adı' , kanal.name)
.addField('<:nokta:821307638473293834> Kanal ID', kanal.id)
.addField('<:nokta:821307638473293834> Son Mesaj' , `[${kanal.lastMessage.content}](${kanal.lastMessage.url})`)
.addField('<:nokta:821307638473293834> Oluşturulma Tarihi' , moment.duration(created).format('Y [yıl], D [gün], H [saat], m [dakika], s [saniye]')+' önce')
message.channel.send(embed)
}
}
