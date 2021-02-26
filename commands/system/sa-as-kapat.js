const Discord = require('discord.js');
const { sistem } = require('../../database/SistemDataBase')
module.exports = {
 name: 'sa-as-kapat',
 aliases: ['saaskapat'] ,
 description: 'Sunucu için ayarlanan sa-as sistemini kapatırsınız.',
 usage: ['sa-as-kapat'],
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
if(!await sistem.fetch(`saas_${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(`**${message.author.username}** bu sunucuda **sa as** sistemi zaten ayarlı değil!`))


await sistem.delete(`saas_${message.guild.id}` , true)
message.channel.send(new Discord.MessageEmbed().setDescription(`**Sa As** sistemi kapatıldı!`))
}
}