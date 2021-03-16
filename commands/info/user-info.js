const Discord = require('discord.js');
const moment = require('moment')
require('moment-duration-format')
module.exports = {
 name: 'kullanıcı-bilgi',
 aliases: ['user-info' , 'userinfo','kullanıcıbilgi', 'ui', 'u'] ,
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
.addField('<:nokta:821307638473293834> ID' , user.id)
.addField('<:nokta:821307638473293834> İsim', user.username)
.setAuthor(`${user.tag} kullanıcısının bilgileri ` , user.avatarURL({dynamic: true}))
.addField('<:nokta:821307638473293834> Tag' , '#'+user.discriminator)
.addField('<:nokta:821307638473293834> Sunucuya Katılım Tarihi' , moment.duration(joined).format('Y [yıl], D [gün], H [saat], m [dakika], s [saniye]')+' önce')
.addField('<:nokta:821307638473293834> Discorda Katılım Tarihi' , moment.duration(create).format('Y [yıl], D [gün], H [saat], m [dakika], s [saniye]')+' önce')
.addField('<:nokta:821307638473293834> En Yüksek Rolü' ,'<@&'+kullanıcı.roles.highest.id+'>')
.addField('<:nokta:821307638473293834> Avatar URL' , `[Tıkla](${user.displayAvatarURL({ format: 'png' , dynamic: true })})`)
.setThumbnail(user.displayAvatarURL({ format: 'png' , dynamic: true }))
message.channel.send(userembed)
 const rolembed = new Discord.MessageEmbed()
.setColor(kullanıcı.displayHexColor)
.setDescription(`
<:nokta:821307638473293834> Bütün Rolleri
${message.guild.members.cache.get(user.id).roles.cache.filter(s => s.name !== '@everyone').sort((a, b) => a.position - b.position).map(s => `<@&${s.id}>`).join(", ")}`)
message.channel.send(rolembed)
}
}
