const Discord = require('discord.js');
const moment = require('moment')
require('moment-duration-format')
module.exports = {
 name: 'kullanıcı-bilgi',
 aliases: ['user-info'] ,
description: 'Kullanıcı hakkında bilgi alırsınız.',
usage: ['kullanıcı-bilgi { @kullanıcı }'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
let user = message.mentions.users.first() || message.author;
let kullanıcı = message.guild.members.cache.get(user.id)
let now = await Date.now()
let create = (await now) - user.createdTimestamp
let joined = (await now) - kullanıcı.joinedTimestamp
const userembed = new Discord.MessageEmbed()
.setColor(kullanıcı.displayHexColor)
.addField('• ID' , user.id)
.setAuthor(`${user.tag} kullanıcısının bilgileri ` , user.avatarURL({dynamic: true}))
.addField('• Tag' , '#'+user.discriminator)
.addField('• Sunucuya Katılım Tarihi' , moment.duration(joined).format('Y [yıl], D [gün], H [saat], m [dakika],s [saniye]')+'önce')
.addField('• Discorda Katılım Tarihi' , moment.duration(create).format('Y [yıl], D [gün], H [saat], m [dakika],s [saniye]')+'önce')
.addField('• En Yüksek Rolü' ,'<@&'+kullanıcı.roles.highest.id+'>')
.addField('• Avatar URL' , `[Tıkla](${user.displayAvatarURL({ format: 'png' , dynamic: true })})`)
message.channel.send(userembed)
 const rolembed = new Discord.MessageEmbed()
.setColor(kullanıcı.displayHexColor)
.setDescription(`• Bütün Rolleri\n${kullanıcı.roles.cache.map(s => `<@&${s.id}>`)}`)
message.channel.send()
}
}
