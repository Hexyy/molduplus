const Discord = require('discord.js');
const { öneri } = require('../../database/ÖneriDataBase')
module.exports = {
    name: 'öneri-kanal',
    aliases: ['önerikanal'],
    description: 'Sunucu için öneri kanalını ayarlarsınız.',
    usage: ['öneri-kanal [ #kanal ]'],
    /** 
    * @param {Discord.Client} client
    * @param {Discord.Message} message
    * @param {String[]} args
    */
    run: async (client, message, args) => {
const noperm = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(`**${message.author.username}** bu komutu kullanabilmek için \`Sunucuyu Yönet\` yetkisine sahip olmalısın!`)
if (!message.guild.me.hasPermission(['SEND_MESSAGES','EMBED_LINKS'])) return
if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(noperm.setTitle('<:hata:813391295665930260> Yetersiz Yetki!'))
let kanal = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
if(!kanal) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('<:hata:813391295665930260> Kanal Etiketlemeyi Unuttun!').setDescription(`**${message.author.username}** bir kanal etiketlemeyi unuttun!`))
if(!kanal.permissionsFor(client.user.id).has('SEND_MESSAGES')) return message.channel.send(new Discord.MessageEmbed().setDescription(`**${message.author.username}** etiketlediğin kanalda benim \`Mesaj Gönder\` yetkim bulunmuyor!`).setTitle('<:hata:813391295665930260> Yetersiz Yetki!').setColor('RED'))
if(await öneri.fetch(`önerikanal_${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setDescription(`**${message.author.username}** Bu sunucuda **öneri** sistemi zaten ayarlı! Tekrardan ayarlamazsın.`).setTitle('<:hata:813391295665930260> Uyarı!').setColor('RED'))


await öneri.set(`önerikanal_${message.guild.id}`,kanal.id)
message.channel.send(new Discord.MessageEmbed().setTitle(`Görev Tamamlandı!`).setColor("#22BF41").setDescription(`<:moldup_evet:783582088346468384> **Öneri** kanalı ${kanal} olarak ayarlandı!!`))
}
}
