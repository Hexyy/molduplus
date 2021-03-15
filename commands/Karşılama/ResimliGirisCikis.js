const Discord = require('discord.js');
const { karsilama } = require('../../database/KarşılamaDataBase')
module.exports = {
 name: 'resimligirişçıkış',
 aliases: ["giriş-çıkış", "resimli-giriş-çıkış"] ,
 description: 'Resimli giriş çıkış kanalını ayarlarsınız.',
 usage: ['resimligirişçıkış [ #kanal ]'],
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
let kanal = message.mentions.channels.first()
if(!kanal) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('<:hata:813391295665930260> Kanal Etiketlemeyi Unuttun!').setDescription(`**${message.author.username}** bir kanal etiketlemeyi unuttun!`))
if(!kanal.permissionsFor(client.user.id).has('SEND_MESSAGES')) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('<:hata:813391295665930260> Hata!').setDescription(`**${message.author.username}** etiketlediğin kanalda benim \`Mesaj Gönder\` yetkim bulunmuyor!`))
karsilama.set(`resimligiriscikiskanal_${message.guild.id}`, kanal.id)
message.channel.send(new Discord.MessageEmbed().setTitle(`Görev Tamamlandı!`).setColor("#22BF41").setDescription(`<:moldup_evet:783582088346468384> **Resimli Giriş Çıkış** kanalı ${kanal} olarak ayarlandı!!`))
  
}
}
