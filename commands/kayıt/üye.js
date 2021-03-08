const Discord = require('discord.js');
const AloneDogru = "#22BF41";
const AloneHata = "#f30707"
const { kayit } = require('../../database/KayıtDataBase')
const { kız , çarpı , tik } = require("../../emojiler.json")

module.exports = {
 name: 'kaydet',
 aliases: ["register", "r", "R", "kayıt", "kayıt-et", "kayıtet", "ü", "Ü"] ,
 description: 'Bir üyeyi üye olarak kaydedersiniz.',
    usage: ['üye [ @kullanıcı ][ isim ]'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
  
 const üyeroleID = await kayit.fetch(`üye.${message.guild.id}`);
const yetkiliroleID = await kayit.fetch(`yetkili.${message.guild.id}`);
const kayıtsızroleID = await kayit.fetch(`kayıtsız.${message.guild.id}`);

const nn = new Discord.MessageEmbed().setThumbnail();


let member = message.mentions.members.first();
let üye = message.guild.roles.cache.get(üyeroleID);
let yetkili = message.guild.roles.cache.get(yetkiliroleID);
let kayıtsız = message.guild.roles.cache.get(kayıtsızroleID);
  
        if (!üye) return message.channel.send(nn.setColor('RED').setDescription(`<:moldup_hayir:783582180113907742> Kayıt sistemi ayarlamaları yapılmamış veya tamamlanmamış!`))


  if(!message.member.roles.cache.has(yetkiliroleID) && !message.member.hasPermission('MANAGE_ROLES')) {
    
    if (yetkili) {
      return message.channel.send(nn.setColor('RED').setDescription(`<:moldup_sinirli:783582342643056661> ${yetkili} rolüne sahip olman gerekiyor.`));
    } else {
        return message.channel.send(new Discord.MessageEmbed().setTitle('Hata').setColor("RED").setDescription(`<:moldup_sinirli:783582342643056661> Bu komutu kullanmak için \`Rolleri Yönet\` iznine sahip olman gerekli.`))
    }
  } 


  if(!args[0] || !message.mentions.members.first()) return message.channel.send(nn.setColor('RED').setDescription(`<:moldup_hayir:783582180113907742> Bir kullanıcı etiketleyerek tekrar deneyiniz.`)).then(a => a.delete({timeout: 10000}));

let isim;
if(args.slice(1)) {
isim = args.slice(1).join(' ');
} else {
isim = member.user.username;
}

const n = await kayit.fetch(`tag.${message.guild.id}`);

if (!member.roles.cache.has(kayıtsızroleID) || !kayıtsız) {
member.roles.add(üye.id, `${message.author.tag} - Üye Kayıt İşlemi Yapıldı.`).catch(err => message.channel.send(`\`\`\`Bir hata oluştu: ${err}\`\`\``));
if(isim && n) member.setNickname(n+" "+isim, `${message.author.tag} - Üye Kayıt İşlemi Yapıldı.`); 
if(isim && !n) member.setNickname(isim, `${message.author.tag} - Üye Kayıt İşlemi Yapıldı.`);
if(!isim && n) member.setNickname(nn+member.user.username, `${message.author.tag} - Üye Kayıt İşlemi Yapıldı.`);

message.channel.send(nn.setColor("#22BF41").setThumbnail(member.user.avatarURL() ? member.user.avatarURL({dynamic: true}) : client.user.avatarURL()).setTitle(`Görev Tamamlandı!`)
.setDescription(`<:moldup_evet:783582088346468384> ${member} **başarıyla kayıt edildi.**

**Verilen rol: ${üye}**
\`\`\`${isim} olarak kayıt ettim. \`\`\`
`));
   } else {
  member.roles.add(üye.id, `${message.author.tag} - Üye Kayıt İşlemi Yapıldı.`).catch(err => message.channel.send(`\`\`\`Bir hata oluştu: ${err}\`\`\``));
member.roles.remove(kayıtsız.id, `${message.author.tag} - Üye Kayıt İşlemi Yapıldı.`);
if(isim && n) member.setNickname(n+" "+isim, `${message.author.tag} - Üye Kayıt İşlemi Yapıldı.`); 
if(isim && !n) member.setNickname(isim, `${message.author.tag} - Üye Kayıt İşlemi Yapıldı.`);
if(!isim && n) member.setNickname(nn+member.user.username, `${message.author.tag} - Üye Kayıt İşlemi Yapıldı.`);

message.channel.send(nn.setColor("#22BF41").setThumbnail(member.user.avatarURL() ? member.user.avatarURL({dynamic: true}) : client.user.avatarURL()).setTitle(`Görev Tamamlandı!`)
.setDescription(`<:moldup_evet:783582088346468384> ${member} **başarıyla kayıt edildi.**

**Verilen rol: ${üye}**
**Alınan rol: ${kayıtsız}**
\`\`\`${isim} olarak kayıt ettim. \`\`\`
`));
}
}
}
  
