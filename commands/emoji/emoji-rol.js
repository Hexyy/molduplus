const Discord = require('discord.js');

module.exports = {
 name: 'emoji-rol',
 aliases: ['emojirol', 'emoji-role', 'emojirole'] ,
description: 'Bir emojiyi belirli bir role özel yapabilirsiniz.',
usage: ['emoji-rol [ emoji ismi ] [ @rol ]'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
  
  if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`**${message.author.username}** bir emoji adı girmeyi unuttun!`))

const s = args.slice(0).join(' ').split(' ').filter(x => x.includes('<') && x.includes('>'))[0];
var emoji;

 if (s) {
if(!message.guild.emojis.cache.get(s.split(':')[2].split('>')[0])) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`Yazdığın emojiyi bulamadım veya bu sunucuda bulunmuyor!`));
emoji = message.guild.emojis.cache.get(s.split(':')[2].split('>')[0]);
  } else {
if(!message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'))) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`Yazdığın emojiyi bulamadım veya bu sunucuda bulunmuyor!`));
emoji = message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'));
};
 
    if(!args[1]) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`**${message.author.username}** bir rol etiketlemeyi veya \`kapat\` yazmayı unuttun!`))

if(args[1] === 'kaldır' || args[1] === 'everyone') {

  message.channel.send(new Discord.MessageEmbed().setTitle(`Görev Tamamlandı!`).setColor("#22BF41").setDescription(`<:moldup_evet:783582088346468384> \`${emoji.name}\` adlı emoji artık herkes tarafından kullanılabilir.`));
  return emoji.edit({ roles: [message.guild.roles.cache.find(a => a.name === '@everyone')], });

} else {

  let rol = message.mentions.roles.first() || message.guild.roles.cache.find(a => a.name === args[1])
  if(!rol) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`Belirttiğiniz rolü bulamadım. Yazım yanlışı olabilir, ki bu çok doğal.`)) 
  message.channel.send(new Discord.MessageEmbed().setTitle(`Görev Tamamlandı!`).setColor("#22BF41").setDescription(`<:moldup_evet:783582088346468384> \`${emoji.name}\` adlı emoji artık sadece ${rol} rolüne sahip olan kişiler tarafından kullanılabilecektir.`));
  return emoji.edit({ roles: [rol], });

};
}
}
