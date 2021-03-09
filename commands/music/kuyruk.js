const Discord = require('discord.js');
const { player } = require('../../settings/müzik')
module.exports = {
 name: 'kuyruk',
 aliases: ['queue' , 'q'] ,
 description: 'Şarkı kuyruğunu gösterir.',
 usage: ['kuyruk'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
if(!message.guild.me.hasPermission('SPEAK') && !message.guild.me.hasPermission('CONNECT')) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('<:hata:813391295665930260> Hata').setDescription(`O sesli kanalda konuşamıyorum, izinlerimi kontrol edin!`)) 
if(!message.member.voice.channel) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('<:hata:813391295665930260> Hata').setDescription(`Bir sesli kanalda olmadan bu komutu kullanamazsın!`))  
if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('<:hata:813391295665930260> Hata').setDescription(`Aynı sesli kanalda değiliz, biraz empati kur!`))  
if(!client.player.isPlaying(message)) {
  return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('<:hata:813391295665930260> Hata').setDescription(`Bu sunucuda her hangi bir şarkı çalmıyor!`))
} else {
  let kuyruk = client.player.getQueue(message)
if(!kuyruk) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('<:hata:813391295665930260> Hata').setDescription(`Bu sunucuda şarkı kuyruğu bulunmuyor!`))
let k = kuyruk.tracks.map((tracks , i) => {
return `${i === 0 ? '<a:yayinda:802533225738141737>' : `${i+1}:`} **[${tracks.title}](${tracks.url})**`
}).join('\n')
message.channel.send(new Discord.MessageEmbed().setDescription(k).setColor('YELLOW'))
}
}
}
