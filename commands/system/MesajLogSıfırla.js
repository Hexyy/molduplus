const Discord = require('discord.js');
const { log } = require('../../database/LogDataBase')
module.exports = {
 name: 'mesaj-log-sıfırla',
 aliases: ['mesajlogsıfırla'] ,
 description: 'Sunucu için ayarlanan mesaj log sistemini kapatırsınız.',
 usage: ['mesaj-log-sıfırla'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
    const noperm = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription(`**${message.author.username}** bu komutu kullanabilmek için \`Sunucuyu Yönet\` yetkisine sahip olmalısın!`)
    if(!message.guild.me.hasPermission(['SEND_MESSAGES','MANAGE_WEBHOOKS','EMBED_LINKS'])) return
    if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(noperm.setTitle('<:hata:813391295665930260> Yetersiz Yetki!'))
let id = await log.fetch(`mesajid_${message.guild.id}`)
let token = await log.fetch(`mesajtoken_${message.guild.id}`)
if(!id || !token) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(`**${message.author.username}** bu sunucuda **mesaj log** sistemi zaten ayarlı değil!`))
    let webhook = (await client.fetchWebhook(id,token))
if(!webhook) return
await log.delete(`mesajid_${message.guild.id}`)
await log.delete(`mesajtoken_${message.guild.id}`)
await webhook.delete('Moldup')
message.channel.send(new Discord.MessageEmbed().setDescription(`**Mesaj Log** sistemi bu sunucu için sıfırlandı!`))
}
}
