const Discord = require('discord.js');
const { kayit } = require('../../database/KayıtDataBase')
const { kız , çarpı , tik } = require("../../emojiler.json")

module.exports = {
 name: 'oto-isim',
 aliases: ["otoisim"] ,
 description: 'Oto isim sistemini ayarlarsınız.',
    usage: ['otoisim [ isim ]'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {

  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Yetersiz Yetki!").setColor("RED").setDescription(`**${message.author.username}** Bu komutu kullanmak için \`Yönetici\` iznine sahip olman gerekli.`))
  if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`**${message.author.username}** Sunucuya giren kişilere verilecek otomatik ismi girmelisin!
  
  **Kullanabileceğiniz Değişkenler:**
  {kullanıcı}: Kullanıcı adını yazar
  {tag}: Ayarlanmış tagınızı atar`));



  kayit.set(`otoisim.${message.guild.id}`, args.slice(0).join(' '));
  message.channel.send(new Discord.MessageEmbed().setTitle('Görev Tamamlandı!').setColor("#22BF41").setDescription(`<:moldup_evet:783582088346468384> Sunucuya giren kullanıcıya \`${args.slice(0).join(' ')}\` ismi verilecek.
  
  **Oto İsim Şöyle Verilecek:**
  \`${(args.slice(0).join(' ')).replace("{kullanıcı}", `${message.author.username}`).replace("{tag}", `${data.fetch(`tag.${message.guild.id}`)}`)}\``));

}
}
