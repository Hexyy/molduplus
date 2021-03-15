const Discord = require('discord.js');
const { kayit } = require('../../database/KayıtDataBase')
const { kız , çarpı , tik } = require("../../emojiler.json")

module.exports = {
 name: 'isim',
 aliases: ["nick", "name"] ,
 description: 'Bir üyenin ismini değiştirirsiniz veya düzenlersiniz.',
    usage: ['isim [ @kullanıcı ] [ isim/düzenle ]'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
  
if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Yetersiz Yetki!").setColor("RED").setDescription(`**${message.author.username}** Bu komutu kullanmak için \`Kullanıcı Adlarını Yönet\` iznine sahip olman gerekli.`))
if(!args[0] || !message.mentions.members.first()) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`**${message.author.username}** Bir kullanıcı etiketleyerek tekrar deneyiniz.`))
if(!args[1]) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`**${message.author.username}** Kullanıcının yeni ismini girerek tekrar deneyiniz.`))
if (message.guild.members.cache.get(message.author.id).roles.highest.position <= message.mentions.members.first().roles.highest.position) return  message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`**${message.author.username}** Senin gücün buna yetmez, ondan daha yüksek bir role sahip ol da öyle dene.`))
const datas = await kayit.fetch(`tag.${message.guild.id}`);
              let user = message.mentions.users.first();
 
 if (args[1] === "değiştir" || args[1] === "moderate" || args[1] === "düzelt") {
  
  function kod(length) {
   var result           = '';
   var characters       = 'ABCÇDEFGHIİJKLMNOÖPQRSŞTUÜVWXYZabcçdefghijklmnoöpqrsştuüvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
  
let cod = kod(9)
let isim;
if(datas) isim = `${datas} Değiştirilen isim ${cod}`; 
if(!datas) isim = `Değiştirilen isim ${cod}`; 
message.mentions.members.first().setNickname(isim, `[ ${message.author.tag} İsim Düzeltme ]`).catch(err => message.channel.send(`\`\`\`Bir hata oluştu: ${err}\`\`\``));
message.delete()
message.channel.send(`<a:onaylandi:790233906158370866> ${message.author}, kullanıcının ismi başarıyla **düzeltildi**!`).then(a => a.delete({timeout: 5000}));
  
 } else {
const mesajlar = ['yeni ismini sevdim.', 'bu ismin daha güzel oldu.', 'ismini daha güzel yapmaya çalıştım, nasıl?', 'bugün hava karlı, ismin havalı 😎', 'sen ismini sevmesen bile ben bayıldım.', 'isminin değişmesi çok iyi oldu.']
var random = Math.floor(Math.random()*(mesajlar.length-0+1)+0);
let isim;
if(datas) isim = `${datas} ${args.slice(1).join(' ')}`; 
if(!datas) isim = `${args.slice(1).join(' ')}`; 
message.mentions.members.first().setNickname(isim, `[ ${message.author.tag} İsim Değiştirme ]`).catch(err => message.channel.send(`\`\`\`Bir hata oluştu: ${err}\`\`\``));
message.channel.send(new Discord.MessageEmbed().setThumbnail(client.users.cache.get(user.id).displayAvatarURL({dynamic: true}) ? client.users.cache.get(user.id).displayAvatarURL({size: 2048, dynamic: true}) : client.user.avatarURL()).setColor(message.mentions.members.first().displayHexColor).setTitle(`Görev Tamamlandı!`)
.setDescription(`<:moldup_evet:783582088346468384> ${message.mentions.users.first()} **kullanıcısının ismi başarıyla değiştirildi.**

\`\`\`${isim} ${mesajlar[random]}\`\`\`
`));
}
}
}
