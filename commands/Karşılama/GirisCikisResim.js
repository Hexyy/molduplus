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
if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setTitle('Hata').setColor("RED").setDescription(`<:moldup_sinirli:783582342643056661> Bu komutu kullanmak için \`Yönetici\` iznine sahip olman gerekli.`))
let resim = args[0]
  
if (!resim) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED").setTitle("Hata").setDescription(`<:moldup_hayir:783582180113907742> Lütfen bir resim linki gönderiniz!

**Not**
Resminiz \`640x270\` boyutunda olmalıdır.`))
  
  
  if (args[0] === "sıfırla" || args[0] === "sil") {
message.channel.send(new Discord.MessageEmbed().setTitle(`Görev Tamamlandı!`).setColor("GREEN").setDescription(`<:moldup_evet:783582088346468384> Giriş çıkış mesaj resmi başarıyla sıfırlandı!`))
karsilama.delete(`gçresim.${message.guild.id}`)
  } else if(resim) {
    karsilama.set(`gçresim.${message.guild.id}`, resim)
  return message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setTitle("Görev Tamamlandı!").setDescription(`<:moldup_evet:783582088346468384> Giriş çıkış mesaj resmi başarıyla ayarlandı!`).setImage(resim))
}else {
  return message.channel.send(new Discord.MessageEmbed()
.setColor("RED").setTitle("Hata").setDescription(`<:moldup_hayir:783582180113907742> Lütfen bir resim linki gönderiniz!

**Not**
Resminiz \`640x270\` boyutunda olmalıdır.`))
}
}
}
