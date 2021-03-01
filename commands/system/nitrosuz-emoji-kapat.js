const Discord = require('discord.js');
const { sistem } = require('../../database/SistemDataBase')
module.exports = {
 name: 'nitrosuz-emoji-kapat',
 aliases: ['nitrosuzemojikapat'] ,
 description: 'Sunucu için ayarlanan nitrosuz emoji sistemini kapatırsınız.',
 usage: ['nitrosuz-emoji-kapat'],
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
if(!await sistem.fetch(`nitrosuzemoji_${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(`**${message.author.username}** bu sunucuda **sa as** sistemi zaten ayarlı değil!`))


await sistem.delete(`nitrosuzemoji_${message.guild.id}` , true)
message.channel.send(new Discord.MessageEmbed().setTitle(`Görev Tamamlandı!`).setColor("#22BF41").setDescription(`<:moldup_evet:783582088346468384> **Nitrosuz Emoji** sistemi kapatıldı!`))
}
}
