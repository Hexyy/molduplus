const Discord = require('discord.js')
module.exports = {
 name: 'oy',
  aliases: ['vote'],
  description: 'Botun oy linklerini öğrenirsiniz.',
  usage: ['oy'],
  
  run: async (client , message ,args) => {
  message.channel.send(`top.gg: https://top.gg/bot/${client.user.id}/vote\ndiscord boats: https://discord.boats/bot/${client.user.id}/vote`)
  
  }
}
