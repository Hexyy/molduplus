const Discord = require('discord.js');
const { sistem } = require('../../database/SistemDataBase')
module.exports = {
 name: 'sa-as-aç',
 aliases: ['saasaç'] ,
 description: 'Sunucu için sa-as sistemini açarsınız.',
 usage: ['sa-as-aç'],
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



await sistem.set(`saas_${message.guild.id}` , true)
message.channel.send(new Discord.MessageEmbed().setDescription(`**Sa As** sistemi açıldı!`))
}
}