const Discord = require('discord.js');
const { log } = require('../../database/LogDataBase')
module.exports = {
 name: 'mesaj-log',
 aliases: ['mesajlog'] ,
 description: 'Sunucu için mesaj log sistemini açarsınız.',
 usage: ['mesaj-log [ #kanal ]'],
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

let kanal = message.mentions.channels.first()
if(!kanal) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('<:hata:813391295665930260> Kanal Etiketlemeyi Unuttun!').setDescription(`**${message.author.username}** bir kanal etiketlemeyi unuttun!`))

const w = await kanal.createWebhook('Moldup' , {
avatar: client.user.displayAvatarURL({format: 'png'}),
reason: 'Moldup - Mesaj Log'
})

await log.set(`mesajid_${message.guild.id}` , w.id)
await log.set(`mesajtoken_${message.guild.id}` , w.token)

message.channel.send(new Discord.MessageEmbed().setDescription(`**Mesaj Log** kanalını ${kanal} olarak ayarladım!`))
}
}
