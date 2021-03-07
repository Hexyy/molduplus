const { Player } = require('discord-player')
const { Client } = require('discord.js')
const player = new Player(new Client() , {
autoSelfDeaf: true,
})
player.on('trackStart', (message, track) => message.channel.send(new Discord.MessageEmbed()
.setColor('GREEN').setTitle(track.title).setURL(track.url).setDescription(`<:moldup_evet:783582088346468384> **${track.title}** isimli şarkı oynatılıyor! [${message.author}]`)))

player.on('trackAdd', (message, queue, track) => message.channel.send(new Discord.MessageEmbed().setColor('BLUE').setTitle(track.title).setURL(track.url).setDescription(`<:moldup_evet:783582088346468384> **${track.title}** isimli şarkı kuyruğa eklendi! [${message.author}]`)))
player.on('queueEnd' , (message , queue) => message.channel.send(new Discord.MessageEmbed().setColor('BLUE').setDescription(`<:moldup_evet:783582088346468384> Kuyruktaki bütün şarkılar oynatıldığı için sesli kanaldan ayrılıyorum!`)))


module.exports.player = player
