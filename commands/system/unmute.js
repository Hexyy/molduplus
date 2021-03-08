const Discord = require('discord.js');

module.exports = {
 name: 'unmute',
 aliases: ["süperunmute", "superunmute", "super-unmute", "süper-unmute", "un-mute"] ,
 description: 'Kanal mesaj sistemini ayarlarsınız.',
 usage: ['unmute [ @kullanıcı ] { sebep }'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
  
var mutelirolu = "Muted";

let mutekisi = message.mentions.members.first()

let userlar = message.mentions.members.map(user => message.guild.members.cache.get(user.id))


if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Yetersiz Yetki!").setColor("RED").setDescription(`Bu komutu kullanmak için \`Rolleri Yönet\` iznine sahip olman gerekli.`))

  
if (!mutekisi) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`**${message.author.username}** Bir kullanıcı etiketlemen gerekiyor!`))
  

  
  
    let muterol = message.guild.roles.cache.find(role => role.name == mutelirolu);
  userlar.forEach(async u => await u.roles.remove(muterol.id, `[ ${message.author.tag}: Un-Mute ] Şu kişilerden alındı: ${args.slice(0).join(" ")}`).catch(err => message.channel.send(`\`\`\`Bir hata oluştu: ${err}\`\`\``)))
    let tagm = message.mentions.members.map(user => message.guild.members.cache.get(user.id).user.tag).join(", ")
  userlar.forEach(async u => await db.delete(`supermute.${message.guild.id}.${u.id}`))
  
  return message.channel.send("**" + tagm + "** kullanıcılarının muteleri başarıyla kaldırıldı.")

}
}
