const Discord = require('discord.js');
const AloneDogru = "#22BF41";
const AloneHata = "#f30707"
const { kayit } = require('../../database/KayıtDataBase')
const { kız , çarpı , tik } = require("../../emojiler.json")

module.exports = {
 name: 'e',
 aliases: ["E", "erkek", "Erkek", "man", "Man"] ,
 description: 'Bir üyeyi kadın olarak kaydedersiniz.',
    usage: ['erkek [ @kullanıcı ][ isim ]'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {

const erkekroleID = await kayit.fetch(`erkek.${message.guild.id}`);
const yetkiliroleID = await kayit.fetch(`yetkili.${message.guild.id}`);
const kayıtsızroleID = await kayit.fetch(`kayıtsız.${message.guild.id}`);

const nn = new Discord.MessageEmbed().setThumbnail();


let member = message.mentions.members.first();
let erkek = message.guild.roles.cache.get(erkekroleID);
let yetkili = message.guild.roles.cache.get(yetkiliroleID);
let kayıtsız = message.guild.roles.cache.get(kayıtsızroleID);
  
      if (!erkek) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`**${message.author.username}** Kayıt sistemi ayarlamaları yapılmamış veya tamamlanmamış!`))


  if(!message.member.roles.cache.has(yetkiliroleID) && !message.member.hasPermission('MANAGE_ROLES')) {
    
    if (yetkili) {
      return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`**${message.author.username}** ${yetkili} rolüne sahip olman gerekiyor.`));
    } else {
        return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`**${message.author.username}** Bu komutu kullanmak için \`Rolleri Yönet\` iznine sahip olman gerekli.`))
    }
  } 


let isim;
if(args[1]) {
isim = args.slice(1).join(' ');
} else {
isim = member.user.username;
}

if(!args[0] || !message.mentions.members.first()) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`**${message.author.username}** Bir kullanıcı etiketleyerek tekrar deneyiniz.`))
const n = await kayit.fetch(`tag.${message.guild.id}`);

  
   if (!member.roles.cache.has(kayıtsızroleID) || !kayıtsız) {
member.roles.add(erkek.id, `[ ${message.author.tag}: Erkek Kayıt Edildi ]`).catch(err => message.channel.send(`\`\`\`Bir hata oluştu: ${err}\`\`\``));
if(isim && n) member.setNickname(n+" "+isim, `[ ${message.author.tag}: Erkek Kayıt Edildi ]`); 
if(isim && !n) member.setNickname(isim, `[ ${message.author.tag}: Erkek Kayıt Edildi ]`);
if(!isim && n) member.setNickname(nn+member.user.username, `[ ${message.author.tag}: Erkek Kayıt Edildi ]`);

return message.channel.send(nn.setColor("#22BF41").setThumbnail(member.user.avatarURL() ? member.user.avatarURL({dynamic: true}) : client.user.avatarURL()).setTitle(`Görev Tamamlandı!`)
.setDescription(`<:moldup_evet:783582088346468384> ${member} **başarıyla kayıt edildi.**

**Verilen rol: ${erkek}**
\`\`\`${isim} olarak kayıt ettim. \`\`\`
`));
   } else {
  member.roles.add(erkek.id, `[ ${message.author.tag}: Erkek Kayıt Edildi ]`).catch(err => message.channel.send(`\`\`\`Bir hata oluştu: ${err}\`\`\``));
member.roles.remove(kayıtsız.id, `[ ${message.author.tag}: Erkek Kayıt Edildi ]`);
if(isim && n) member.setNickname(n+" "+isim, `[ ${message.author.tag}: Erkek Kayıt Edildi ]`); 
if(isim && !n) member.setNickname(isim, `[ ${message.author.tag}: Erkek Kayıt Edildi ]`);
if(!isim && n) member.setNickname(nn+member.user.username, `[ ${message.author.tag}: Erkek Kayıt Edildi ]`);

return message.channel.send(nn.setColor("#22BF41").setThumbnail(member.user.avatarURL() ? member.user.avatarURL({dynamic: true}) : client.user.avatarURL()).setTitle(`Görev Tamamlandı!`)
.setDescription(`<:moldup_evet:783582088346468384> ${member} **başarıyla kayıt edildi.**

**Verilen rol: ${erkek}**
**Alınan rol: ${kayıtsız}**
\`\`\`${isim} olarak kayıt ettim. \`\`\`
`));
}
}
}
