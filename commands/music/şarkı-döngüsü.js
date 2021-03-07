const Discord = require('discord.js');
const { player } = require('../../settings/müzik')
module.exports = {
 name: 'şarkı-döngüsü',
 aliases: ['şarkıdöngüsü' , 'şd', 'ş-d', 'm-l', 'ml'] ,
 description: 'Çalan şarkının döngü modunu ayarlarsınız.',
 usage: ['şarkı-döngüsü [ aç/kapat ]'],
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
  return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`Bu sunucuda her hangi bir şarkı çalmıyor!`))
  
  if (!args[0]) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`Lütfen geçerli bir argüman girin!\n\n\`?şarkı-döngüsü aç\n?şarkı-döngüsü kapat\`  `))
} else {
if (args[0] === "aç" || args[0] === "aktif") {
  client.player.setRepeatMode(message, true)
  message.channel.send(new Discord.MessageEmbed().setTitle(`Görev Tamamlandı!`).setColor("#22BF41").setDescription(`<:moldup_evet:783582088346468384> \`Şarkı\` döngüsü aktif edildi!`).setTitle('Görev Tamamlandı'))
} else if (args[0] === "kapat" || args[0] === "deaktif") {
  client.player.setRepeatMode(message, false)
  message.channel.send(new Discord.MessageEmbed().setTitle(`Görev Tamamlandı!`).setColor("#22BF41").setDescription(`<:moldup_evet:783582088346468384> \`Şarkı\` döngüsü deaktif edildi!`).setTitle('Görev Tamamlandı'))

}
 }
}
}
