const Discord = require('discord.js');
const { karsilama } = require('../../database/KarşılamaDataBase')
module.exports = {
 name: 'girişçıkışresim',
 aliases: ['giriş-çıkış-resim', 'gçr', 'g-ç-r'] ,
 description: 'Resimli giriş çıkış resmini ayarlarsınız.',
 usage: ['girişçıkışresim [ resim ]'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {

if(!message.guild) return
const noperm = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription(`**${message.author.username}** bu komutu kullanabilmek için \`Sunucuyu Yönet\` yetkisine sahip olmalısın!`)
    if(!message.guild.me.hasPermission(['SEND_MESSAGES','MANAGE_ROLES','EMBED_LINKS'])) return
    if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(noperm.setTitle('<:hata:813391295665930260> Yetersiz Yetki!'))

let resim = args[0]
let resmi = message.attachments.first()
  
if (!resim && !resmi) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('<:hata:813391295665930260> Resim Göndermeyi Unuttun!')
.setDescription(`**${message.author.username}** Lütfen bir resim linki gönderiniz veya dosya olarak ekleyiniz!

**Not**
Resminiz \`640x270\` boyutunda olmalıdır.`))
  
  
  if (args[0] === "sıfırla" || args[0] === "sil") {
message.channel.send(new Discord.MessageEmbed().setTitle(`Görev Tamamlandı!`).setColor("GREEN").setDescription(`<:moldup_evet:783582088346468384> Giriş çıkış mesaj resmi başarıyla sıfırlandı!`))
karsilama.delete(`gçresim.${message.guild.id}`)
  } else if(resmi && !resim) {
   karsilama.set(`gçresim.${message.guild.id}`, resmi.url)
  return message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setTitle("Görev Tamamlandı!").setDescription(`<:moldup_evet:783582088346468384> Giriş çıkış mesaj resmi başarıyla ayarlandı!`).setImage(resmi.url))
  } else if(resim && !resmi) {
    karsilama.set(`gçresim.${message.guild.id}`, resim)
  return message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setTitle("Görev Tamamlandı!").setDescription(`<:moldup_evet:783582088346468384> Giriş çıkış mesaj resmi başarıyla ayarlandı!`).setImage(resim))
} else {
  return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('<:hata:813391295665930260> Resim Göndermeyi Unuttun!')
.setDescription(`**${message.author.username}** Lütfen bir resim linki gönderiniz veya dosya olarak ekleyiniz!

**Not**
Resminiz \`640x270\` boyutunda olmalıdır.`))
}
}
}
