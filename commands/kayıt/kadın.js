const Discord = require('discord.js');
const { kayit } = require('../../database/KayıtDataBase')
const { kız , çarpı , tik } = require("../../emojiler.json")

module.exports = {
 name: 'kadın',
 aliases: ["K", "k", "Kadın", "kız", "Kız", "Women", "women"] ,
 description: 'Bir üyeyi kadın olarak kaydedersiniz.',
    usage: ['kadın [@kullanıcı ] [ isim ]'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {

const kadınroleID = await kayit.fetch(`kadın.${message.guild.id}`);
const yetkiliroleID = await kayit.fetch(`yetkili.${message.guild.id}`);
const kayıtsızroleID = await kayit.fetch(`kayıtsız.${message.guild.id}`);

const nn = new Discord.MessageEmbed().setThumbnail();


let member = message.mentions.members.first();
let kadın = message.guild.roles.cache.get(kadınroleID);
let yetkili = message.guild.roles.cache.get(yetkiliroleID);
let kayıtsız = message.guild.roles.cache.get(kayıtsızroleID);
  
    if (!kadın) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`**${message.author.username}** Kayıt sistemi ayarlamaları yapılmamış veya tamamlanmamış!`))


  if(!message.member.roles.cache.has(yetkiliroleID) && !message.member.hasPermission('MANAGE_ROLES')) {
    
    if (yetkili) {
      return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Yetersiz Yetki!").setColor("RED").setDescription(`**${message.author.username}** ${yetkili} rolüne sahip olman gerekiyor.`));
    } else {
        return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Yetersiz Yetki!").setColor("RED").setDescription(`**${message.author.username}** Bu komutu kullanmak için \`Rolleri Yönet\` iznine sahip olman gerekli.`))
    }
  } 


let isim;
if(args[1]) {
isim = args.slice(1).join(' ');
} else {
isim = member.user.username;
}

if(!args[0] || !message.mentions.members.first()) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`**${message.author.username}** Bir kullanıcı etiketleyerek tekrar deneyiniz.`)).then(a => a.delete({timeout: 10000}));
const n = await kayit.fetch(`tag.${message.guild.id}`);

if (!member.roles.cache.has(kayıtsızroleID) || !kayıtsız) {
member.roles.add(kadın.id, `[ ${message.author.tag}: Kadın Kayıt Edildi ]`).catch(err => message.channel.send(`\`\`\`Bir hata oluştu: ${err}\`\`\``));
if(isim && n) member.setNickname(n+" "+isim, `[ ${message.author.tag}: Kadın Kayıt Edildi ]`); 
if(isim && !n) member.setNickname(isim, `[ ${message.author.tag}: Kadın Kayıt Edildi ]`);
if(!isim && n) member.setNickname(nn+member.user.username, `[ ${message.author.tag}: Kadın Kayıt Edildi ]`);

message.channel.send(nn.setColor("#22BF41").setThumbnail(member.user.avatarURL() ? member.user.avatarURL({dynamic: true}) : client.user.avatarURL()).setTitle(`Görev Tamamlandı!`)
.setDescription(`<:moldup_evet:783582088346468384> ${member} **başarıyla kayıt edildi.**

**Verilen rol: ${kadın}**
\`\`\`${isim} olarak kayıt ettim. \`\`\`
`));
   } else {
  member.roles.add(kadın.id, `[ ${message.author.tag}: Kadın Kayıt Edildi ]`).catch(err => message.channel.send(`\`\`\`Bir hata oluştu: ${err}\`\`\``));
member.roles.remove(kayıtsız.id, `[ ${message.author.tag}: Kadın Kayıt Edildi ]`);
if(isim && n) member.setNickname(n+" "+isim, `[ ${message.author.tag}: Kadın Kayıt Edildi ]`); 
if(isim && !n) member.setNickname(isim, `[ ${message.author.tag}: Kadın Kayıt Edildi ]`);
if(!isim && n) member.setNickname(nn+member.user.username, `[ ${message.author.tag}: Kadın Kayıt Edildi ]`);

message.channel.send(nn.setColor("#22BF41").setThumbnail(member.user.avatarURL() ? member.user.avatarURL({dynamic: true}) : client.user.avatarURL()).setTitle(`Görev Tamamlandı!`)
.setDescription(`<:moldup_evet:783582088346468384> ${member} **başarıyla kayıt edildi.**

**Verilen rol: ${kadın}**
**Alınan rol: ${kayıtsız}**
\`\`\`${isim} olarak kayıt ettim. \`\`\`
`));
}
}
}
