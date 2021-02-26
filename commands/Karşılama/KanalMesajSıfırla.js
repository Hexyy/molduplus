const Discord = require('discord.js');
const { karsilama } = require('../../database/KarşılamaDataBase')
module.exports = {
 name: 'kanal-mesaj-sıfırla',
 aliases: ['kanalmesajsıfırla'] ,
 description: 'Kanal mesaj sistemini sıfırlarsınız.',
 usage: ['kanal-mesaj-sıfırla'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
const noperm = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(`**${message.author.username}** bu komutu kullanabilmek için \`Sunucuyu Yönet\` yetkisine sahip olmalısın!`)
if(!message.guild.me.hasPermission(['SEND_MESSAGES','MANAGE_ROLES','EMBED_LINKS'])) return
if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(noperm.setTitle('<:hata:813391295665930260> Yetersiz Yetki!'))
if(!await karsilama.fetch(`kanalmesaj_${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(`**${message.author.username}** bu sunucuda **kanal mesaj** sistemi zaten ayarlı değil!`))
if(!await karsilama.fetch(`kanalmesajkanal_${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(`**${message.author.username}** bu sunucuda **kanal mesaj** sistemi zaten ayarlı değil!`))

message.channel.send(new Discord.MessageEmbed().setTitle(`Görev Tamamlandı!`).setColor("#22BF41").setDescription(`<:moldup_evet:783582088346468384> **Kanal Mesaj** sistemi bu sunucu için sıfırlandı!`))
await karsilama.delete(`kanalmesaj_${message.guild.id}`)
await karsilama.delete(`kanalmesajkanal_${message.guild.id}`)
}
}
