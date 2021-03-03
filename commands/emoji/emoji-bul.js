const Discord = require('discord.js');

module.exports = {
 name: 'emoji-bul',
 aliases: ['emojibul'] ,
description: 'Botun sunuculardan emoji ararsınız.',
usage: ['emoji-bul [ emoji isim ]'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
    let emoji = args[0]
    if(!emoji) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('<:hata:813391295665930260> Emoji Adı Girmeyi Unuttun!')
    .setDescription(`
    
**${message.author.username}** bir emoji adı unuttun!
    `))

if(!client.emojis.cache.find(x => x.name === args[0]) && client.emojis.cache.find(x => x.name.endsWith(args[0])) && !client.emojis.cache.find(x => x.name.startsWith(args[0]))) return message.channel.sendnew Discord.MessageEmbed().setTitle("<a:not_found:767708663141105664> Uyarı").setColor("BLUE").setDescription('Aradığınız isme tam olarak uyan veya benzeyen bir emoji bulamadım.'));
if(client.emojis.cache.find(x => x.name.startsWith(args[0])) && !client.emojis.cache.find(x => x.name === args[0])) {
   message.channel.send(new Discord.MessageEmbed().setTitle("<a:not_found:767708663141105664> Uyarı").setColor("BLUE").setDescription(`Aradığınız isme sahip bir emoji bulamadım, onun yerine benzer sonuçlar buldum.`));
   return message.channel.send(client.emojis.cache.filter(x => x.name.startsWith(args[0])).map(a => client.emojis.cache.get(a.id)).slice(0, 30).join(' '));
} else if(!client.emojis.cache.find(x => x.name === args[0]) && client.emojis.cache.find(x => x.name.endsWith(args[0])) && !client.emojis.cache.find(x => x.name.startsWith(args[0]))) {
message.channel.send(new Discord.MessageEmbed().setTitle("<a:not_found:767708663141105664> Uyarı").setColor("BLUE").setDescription(`Aradığınız isme sahip bir emoji bulamadım, onun yerine benzer sonuçlar buldum.`));
return message.channel.send(client.emojis.cache.filter(x => x.name.endsWith(args[0])).map(a => client.emojis.cache.get(a.id)).slice(0, 30).join(' '));
} else if(client.emojis.cache.find(x => x.name === args[0])) {
   return message.channel.send(client.emojis.cache.filter(x => x.name === args[0]).map(a => client.emojis.cache.get(a.id)).slice(0, 30).join(' '))
}}
}
