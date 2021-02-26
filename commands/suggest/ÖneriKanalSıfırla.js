const Discord = require('discord.js');
const { öneri } = require('../../database/ÖneriDataBase')
module.exports = {
 name: 'öneri-kanal-sıfırla',
 aliases: ['önerikanalsıfırla'] ,
 description: 'Sunucu için ayarlanan öneri kanalını sıfırlarsınız.',
 usage: ['öneri-kanal-sıfırla'],
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
if(!await öneri.fetch(`önerikanal_${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(`**${message.author.username}** bu sunucuda **öneri** sistemi zaten ayarlı değil!`))


message.channel.send(new Discord.MessageEmbed().setDescription(`**Öneri** sistemi bu sunucu için sıfırlandı!`))
await öneri.delete(`önerikanal_${message.guild.id}`)

}
}