const Discord = require('discord.js');
const { kayit } = require('../../database/KayıtDataBase')
const { kız , çarpı , tik } = require("../../emojiler.json")

module.exports = {
 name: 'isim',
 aliases: ["nick", "name"] ,
 description: 'Bir üyenin ismini değiştirirsiniz.',
    usage: ['isim [ @kullanıcı ] [ isim ]'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
  
if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setTitle('Hata').setDescription(`<:moldup_sinirli:783582342643056661> Bu komutu kullanmak için \`Kullanıcı Adlarını Yönet\` iznine sahip olman gerekli.`))
if(!args[0] || !message.mentions.members.first()) return message.channel.send(new Discord.MessageEmbed().setTitle('Hata').setColor("RED").setColor("RED").setDescription(`<:moldup_hayir:783582180113907742> Bir kullanıcı etiketleyerek tekrar deneyiniz.`)).then(a => a.delete({timeout: 10000}));
if(!args[1]) return message.channel.send(new Discord.MessageEmbed().setTitle('Hata').setColor("RED").setDescription(`<:moldup_hayir:783582180113907742> Kullanıcının yeni ismini girerek tekrar deneyiniz.`)).then(a => a.delete({timeout: 10000})) 
if (message.guild.members.cache.get(message.author.id).roles.highest.position <= message.mentions.members.first().roles.highest.position) return  message.channel.send(new Discord.MessageEmbed().setTitle('Hata').setColor("RED").setDescription(`<:moldup_hayir:783582180113907742> Senin gücün buna yetmez, ondan daha yüksek bir role sahip ol da öyle dene.`))
const datas = await kayit.fetch(`tag.${message.guild.id}`);
              let user = message.mentions.users.first();
let isim;
if(datas) isim = `${datas} ${args.slice(1).join(' ')}`; 
if(!datas) isim = `${args.slice(1).join(' ')}`; 
message.mentions.members.first().setNickname(isim).catch(err => message.channel.send(`\`\`\`Bir hata oluştu: ${err}\`\`\``));
message.channel.send(new Discord.MessageEmbed().setThumbnail(client.users.cache.get(user.id).displayAvatarURL({dynamic: true}) ? client.users.cache.get(user.id).displayAvatarURL({size: 2048, dynamic: true}) : client.user.avatarURL()).setTitle(`Görev Tamamlandı!`)
.setDescription(`<:moldup_evet:783582088346468384> ${message.mentions.users.first()} **kullanıcısının ismi başarıyla değiştirildi.**

\`\`\`${isim} yeni ismini sevdim. \`\`\`
`));
}
}