const Discord = require('discord.js');
const { öneri } = require('../../database/ÖneriDataBase')
module.exports = {
 name: 'öneri-kabul',
 aliases: ['önerikabul'] ,
 description: 'Öneriyi kabul edersiniz.',
 usage: ['öneri-kabul [ öneri mesaj id ]'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
    const noperm = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription(`**${message.author.username}** bu komutu kullanabilmek için \`Mesajları Yönet\` yetkisine sahip olmalısın!`)
    if (!message.guild.me.hasPermission(['SEND_MESSAGES','EMBED_LINKS'])) return
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(noperm.setTitle('<:hata:813391295665930260> Yetersiz Yetki!'))
const mesajID = args[0]
if(isNaN(mesajID)) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('<:hata:813391295665930260> Mesaj ID Girmeyi Unuttun!')
.setDescription(`

**${message.author.username}** bir mesaj ID girmeyi unuttun!
`))

try {
const channel = message.guild.channels.cache.get(await öneri.fetch(`önerikanal_${message.guild.id}`))
if(!channel) return
const öneriembed = await channel.messages.fetch(mesajID)
if(!öneriembed) return message.channel.send(`**${mesajID}** ID'li mesaj bulamadım!`)
const data1 = öneriembed.embeds[0]
const deskırıpşın = data1.description.replace("Önerisi: ", "")
const embed = new Discord.MessageEmbed()
.setAuthor(data1.author, "https://cdn.discordapp.com/emojis/798871896636522517.png?v=1")
.setDescription(`**Önerisi:** ${deskırıpşın}`)
.setColor('GREEN')
.addField('Durum' , 'Kabul Edildi')
öneriembed.edit(embed)
} catch (error) {
 console.log(error)
}

message.channel.send(new Discord.MessageEmbed().setTitle(`Görev Tamamlandı!`).setColor("#22BF41").setDescription(`<:moldup_evet:783582088346468384> **${mesajID}** numaralı öneri kabul edildi!`))
}
}
