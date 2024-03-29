const Discord = require('discord.js');
const { karsilama } = require('../../database/KarşılamaDataBase')
module.exports = {
 name: 'oto-rol',
 aliases: ['otorol'] ,
 description: 'Oto Rol sistemini ayarlarsınız.',
 usage: ['oto-rol [ @rol ]'],
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
let rol = message.mentions.roles.first()
if(!rol) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('<:hata:813391295665930260> Rol Etiketlemeyi Unuttun!').setDescription(`**${message.author.username}** bir rol etiketlemeyi unuttun!`))
if(rol.position >= message.guild.me.roles.highest.position) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('<:hata:813391295665930260> Hata').setDescription('**'+message.author.username+'** Etiketlediğin rol benim rolümün üstünde veya aynı roldeyiz!'))

message.channel.send(new Discord.MessageEmbed().setTitle(`Görev Tamamlandı!`).setColor("#22BF41").setDescription(`<:moldup_evet:783582088346468384> Sunucuya yeni gelen üyelere verilecek rol **${rol}** olarak ayarlandı!`))
await karsilama.set(`otorol_${message.guild.id}` , rol.id)
}
}
