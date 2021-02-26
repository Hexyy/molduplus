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
for (const hm of args) {
const e = client.emojis.cache.find(k => k.name === hm)
if(!e) return message.channel.send(`**${emoji}** adında her hangi bir emoji bulamadım!`)
let mesaj = `<:${e.name}:${e.id}>`
if(e.animated === true) mesaj = `<a:${e.name}:${e.id}>`

message.channel.send(mesaj)
}}
}