const { Player } = require('discord-player')
const Discord = require('discord.js')
const player = new Player(new Discord.Client() , {
autoSelfDeaf: true,
})
player.on('trackStart', (message, track) => message.channel.send(new Discord.MessageEmbed()
.setColor('GREEN').setTitle(track.title).setURL(track.url).setDescription(`<:moldup_evet:783582088346468384> **${track.title}** isimli şarkı oynatılıyor! \`[${message.author.tag}]\``)))

player.on('trackAdd', (message, queue, track) => message.channel.send(new Discord.MessageEmbed().setColor('BLUE').setTitle(track.title).setURL(track.url).setDescription(`<:moldup_evet:783582088346468384> **${track.title}** isimli şarkı kuyruğa eklendi! \`[${message.author.tag}]\``)))
player.on('queueEnd' , (message , queue) => message.channel.send(new Discord.MessageEmbed().setColor('BLUE').setDescription(`<:moldup_uyku:783582251836637214> Kuyruktaki bütün şarkılar oynatıldığı için sesli kanaldan ayrılıyorum!`)))
player.on('searchResults', (message, query, tracks) => {

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${query} şarkısını arattım ve bunları buldum`, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(tracks.map((t, i) => `**${i}: [${t.title}](${t.url})**`))
    .setFooter('Oynatmak istediğin şarkının numarasını yazman yeterli')
    message.channel.send(embed);

})

module.exports.player = player
