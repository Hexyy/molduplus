const Discord = require('discord.js');
const { karsilama } = require('../../database/GirişÇıkışResimDataBase')
module.exports = {
 name: 'girişçıkışresim',
 aliases: ['giriş-çıkış-resim', 'gçr', 'g-ç-r'] ,
 description: 'Resimli giriş çıkış resmini ayarlarsınız.',
 usage: ['girişçıkışresim [ giriş/çıkış ] [ resim ]'],
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
    if(!message.guild.me.hasPermission(['SEND_MESSAGES','MANAGE_ROLES','EMBED_LINKS', 'ATTACH_FILES'])) return
    if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(noperm.setTitle('<:hata:813391295665930260> Yetersiz Yetki!'))

let resim = args[1]
let resmi = message.attachments.first()
  
if (!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('<:hata:813391295665930260> Hata!')
.setDescription(`**${message.author.username}** Lütfen \`giriş\` veya \`çıkış\` yazınız!`))
if (!resim && !resmi) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('<:hata:813391295665930260> Resim Göndermeyi Unuttun!')
.setDescription(`**${message.author.username}** Lütfen bir resim linki gönderiniz veya dosya olarak ekleyiniz!

**Not**
Resminiz \`640x270\` boyutunda olmalıdır.`))
  
  
  if (args[0] === "sıfırla" || args[0] === "sil" || args[0] === "sifirla" || args[0] === "s") {
message.channel.send(new Discord.MessageEmbed().setTitle(`Görev Tamamlandı!`).setColor("GREEN").setDescription(`<:moldup_evet:783582088346468384> Giriş çıkış mesaj resmi başarıyla sıfırlandı!`))
await karsilama.delete(`gçresim.giris.${message.guild.id}`)
await karsilama.delete(`gçresim.cikis.${message.guild.id}`)
  } else if(resmi && !resim) {
   if (args[0] === "giriş" || args[0] === "g" || args[0] === "g" || args[0] === "giris") {
   await karsilama.set(`gçresim.giris.${message.guild.id}`, resmi.url)
  return message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setTitle("Görev Tamamlandı!").setDescription(`<:moldup_evet:783582088346468384> Giriş mesaj resmi başarıyla ayarlandı!`).setImage(resmi.url))
   } else if (args[0] === "çıkış" || args[0] === "ç" || args[0] === "c" || args[0] === "cikis") {
    await karsilama.set(`gçresim.cikis.${message.guild.id}`, resmi.url)
  return message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setTitle("Görev Tamamlandı!").setDescription(`<:moldup_evet:783582088346468384> Çıkış mesaj resmi başarıyla ayarlandı!`).setImage(resmi.url))
   }} else if(resim && !resmi) {
       if (args[0] === "giriş" || args[0] === "g" || args[0] === "g" || args[0] === "giris") {
   await karsilama.set(`gçresim.giris.${message.guild.id}`, resim)
  return message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setTitle("Görev Tamamlandı!").setDescription(`<:moldup_evet:783582088346468384> Giriş mesaj resmi başarıyla ayarlandı!`).setImage(resim))
   } else if (args[0] === "çıkış" || args[0] === "ç" || args[0] === "c" || args[0] === "cikis") {
    await karsilama.set(`gçresim.cikis.${message.guild.id}`, resim)
  return message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setTitle("Görev Tamamlandı!").setDescription(`<:moldup_evet:783582088346468384> Çıkış mesaj resmi başarıyla ayarlandı!`).setImage(resim))
}} else {
  return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('<:hata:813391295665930260> Eksik Argüman!')
.setDescription(`**${message.author.username}** Lütfen \`giriş\` veya \`çıkış\` yazınız**/**bir resim linki gönderiniz veya dosya olarak ekleyiniz!

**Not**
Resminiz \`640x270\` boyutunda olmalıdır.`))
}
}
}
