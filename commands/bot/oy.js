const Discord = require('discord.js')
module.exports = {
 name: 'oy',
  aliases: ['vote'],
  description: 'Botun oy linklerini öğrenirsiniz.',
  usage: ['oy'],
  
  run: async (client , message ,args) => {
  message.channel.send(new Discord.MessageEmbed().setAuthor("Moldup'a Destek Vermek Mi İstiyorsun?", message.author.displayAvatarURL({ dynamic: true })).setDescription(`[Oy Verebilirsin](https://top.gg/bot/${client.user.id}/vote)\n[Yine Oy Verebilirsin](https://discord.boats/bot/${client.user.id}/vote)`).setFooter(message.author.tag + " tarafından istendi").setTimestamp().setColor("BLUE"))
  
  }
}
