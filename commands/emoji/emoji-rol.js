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

  if(!client.emojis.cache.find(x => (x.animated ? `<a:${x.id}:${x.name}:` : `<:${x.name}:${x.id}>`) === args[0]) || !client.emojis.cache.find(x => x.name.toLowerCase(args[0]))) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`Belirttiğiniz emojiyi bulamadım. Yazım yanlışı olabilir, ki bu çok doğal.`))
    
    if(!args[1]) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`**${message.author.username}** bir rol etiketlemeyi veya \`kapat\` yazmayı unuttun!`))

if(args[1] === 'kaldır' || args[1] === 'everyone') {

  let emoji = client.emojis.cache.find(x => (x.animated ? `<a:${x.id}:${x.name}:` : `<:${x.name}:${x.id}>`) === args[0]) || client.emojis.cache.find(x => x.name.toLowerCase(args[0]));
  message.channel.send(new Discord.MessageEmbed().setTitle(`Görev Tamamlandı!`).setColor("#22BF41").setDescription(`<:moldup_evet:783582088346468384> ${emoji} adlı emoji artık herkes tarafından kullanılabilir.`));
  return emoji.edit({ roles: [message.guild.roles.cache.find(a => a.name === '@everyone')], });

} else {

  if(!message.guild.roles.cache.find(a => a.name === args[1])) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`Belirttiğiniz rolü bulamadım. Yazım yanlışı olabilir, ki bu çok doğal.`))
  let emoji = client.emojis.cache.find(x => (x.animated ? `<a:${x.id}:${x.name}:` : `<:${x.name}:${x.id}>`) === args[0]) || client.emojis.cache.find(x => x.name.toLowerCase(args[0]));
  message.channel.send(new Discord.MessageEmbed().setTitle(`Görev Tamamlandı!`).setColor("#22BF41").setDescription(`<:moldup_evet:783582088346468384> ${emoji} adlı emoji artık sadece ${message.guild.roles.cache.find(a => a.name === args[1])} rolüne sahip olanlar tarafından kullanılabilecektir.`));
  return emoji.edit({ roles: [message.guild.roles.cache.find(a => a.name === args[1])], });

};
}
}
