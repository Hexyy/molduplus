const Discord = require('discord.js');
const { level } = require('../../database/SeviyeDataBase');
module.exports = {
 name: 'seviye-mesaj',
 aliases: ['seviyemesaj'] ,
 description: 'Seviye atlanınca bir kanala mesaj sistemini ayarlarsınız.',
 usage: ['seviye-mesaj [ #kanal ] [ yazı ]'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
    if (await level.fetch(`kapalı_${message.guild.id}`)) return message.react("766402190654439466")
const noperm = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(`**${message.author.username}** bu komutu kullanabilmek için \`Sunucuyu Yönet\` yetkisine sahip olmalısın!`)
if(!message.guild.me.hasPermission(['SEND_MESSAGES','MANAGE_ROLES','EMBED_LINKS'])) return
if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(noperm.setTitle('<:hata:813391295665930260> Yetersiz Yetki!'))
let kanal = message.mentions.channels.first()
if(!kanal) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('<:hata:813391295665930260> Kanal Etiketlemeyi Unuttun!').setDescription(`**${message.author.username}** bir kanal etiketlemeyi unuttun!`))
if(!kanal.permissionsFor(client.user.id).has('SEND_MESSAGES')) return message.channel.send(new Discord.MessageEmbed().setDescription(`**${message.author.username}** etiketlediğin kanalda benim \`Mesaj Gönder\` yetkim bulunmuyor!`).setTitle('<:hata:813391295665930260> Yetersiz Yetki!').setColor('RED'))
let mesaj = args.slice(1).join(' ')
if(!mesaj) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('<:hata:813391295665930260> Mesaj Girmeyi Unuttun!')
.setDescription(`
**${message.author.username}** bir mesaj girmeyi unuttun!


**Bilinmesi gerekenler**

**[üye]**
\`Üyeyi Etiketler\`
**${message.author}**
------------------
**[üye-id]**
\`Üyenin ID'sini Söyler.\`
**${message.author.id}**    
------------------
**[üye-ad]**
\`Üyenin Kullanıcı Adını Söyler.\`
**${message.author.username}**
------------------
**[üye-tag]**
\`Üyenin Kullanıcı Adını Ve Etiketini Söyler.\`
**${message.author.tag}**
------------------
**[yeni-seviye]**
\`Üyenin Yeni Seviyesini Söyler\`
**${await level.get(`level_${message.author.id}`)}**
------------------
**[sunucu-üye]**
\`Sunucuda ki Üye Sayısını Söyler.\`
**${message.guild.memberCount}**   
------------------
**[sunucu-ad]**
\`Sunucu Adını Söyler.\`
**${message.guild.name}**       
------------------
**[sunucu-id]**
\`Sunucu ID'sini Söyler.\`
**${message.guild.id}**                  
`))

message.channel.send(new Discord.MessageEmbed().setTitle(`Görev Tamamlandı!`).setColor("#22BF41").setDescription(`<:moldup_evet:783582088346468384> **Seviye Mesaj** kanalı ${kanal}, mesajı\n\n${mesaj}\n\nolarak ayarlandı`))
await level.set(`seviyemesajkanal_${message.guild.id}` , kanal.id)
await level.set(`seviyemesaj_${message.guild.id}` , mesaj)
}
}