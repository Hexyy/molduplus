const Discord = require('discord.js');
const { player } = require('../../settings/müzik')
module.exports = {
 name: 'play',
 aliases: ['oynat' , 'çal', 'p'] ,
 description: 'Belirttiğiniz şarkıyı sesli kanalda oynatır.',
 usage: ['play [ şarkı ]'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
 if(!message.guild.me.hasPermission('SPEAK') && !message.guild.me.hasPermission('CONNECT')) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('<:hata:813391295665930260> Hata').setDescription(`O sesli kanalda konuşamıyorum, izinlerimi kontrol edin!`)) 
if(!message.member.voice.channel) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('<:hata:813391295665930260> Hata').setDescription(`Bir sesli kanalda olmadan bu komutu kullanamazsın!`))  
if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('<:hata:813391295665930260> Hata').setDescription(`Aynı sesli kanalda değiliz, biraz empati kur!`))  
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('<:hata:813391295665930260> Hata').setDescription(`Lütfen bir şarkı adı yazınız!`))
player.play(message, args.join(' '), { firstResult: false})
}
}
