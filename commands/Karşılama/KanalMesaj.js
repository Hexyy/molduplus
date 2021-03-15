const Discord = require('discord.js');
const { karsilama } = require('../../database/KarşılamaDataBase')
module.exports = {
 name: 'kanal-mesaj',
 aliases: ['kanalmesaj'] ,
 description: 'Kanal mesaj sistemini ayarlarsınız.',
 usage: ['kanal-mesaj [ #kanal ] [ yazı ]'],
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
**${message.author.id}  **    
------------------
**[üye-ad]**
\`Üyenin Kullanıcı Adını Söyler.\`
**${message.author.username}**
------------------
**[üye-tag]**
\`Üyenin Kullanıcı Adını Ve Etiketini Söyler\`
**${message.author.tag}**
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

message.channel.send(new Discord.MessageEmbed().setTitle(`Görev Tamamlandı!`).setColor("#22BF41").setDescription(`<:moldup_evet:783582088346468384> **Kanal Mesaj** kanalı ${kanal}, mesajı\n\n${mesaj}\n\nolarak ayarlandı`))
await karsilama.set(`kanalmesajkanal_${message.guild.id}` , kanal.id)
await karsilama.set(`kanalmesaj_${message.guild.id}` , mesaj)
}
}
