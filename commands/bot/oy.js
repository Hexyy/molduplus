const Discord = require('discord.js')
module.exports = {
 name: 'oy',
  aliases: ['vote'],
  description: 'Botun oy linklerini öğrenirsiniz.',
  usage: ['oy'],
  
  run: async (client , message ,args) => {
  message.channel.send(`<:upvote:795593731200778251> Top.gg: https://top.gg/bot/${client.user.id}/vote\n<:dboatsLogotext:615599474722734109> Discord Boats: https://discord.boats/bot/${client.user.id}/vote`)
  
  }
}
