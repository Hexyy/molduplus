const Discord = require('discord.js');

module.exports = {
 name: 'emoji-ekle',
 aliases: ['emojiekle'] ,
description: 'Sunucu için hızlı yoldan emoji eklersiniz.',
usage: ['emoji-ekle [ emoji ]'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
    const noperm = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription(`**${message.author.username}** bu komutu kullanabilmek için \`Emojileri Yönet\` yetkisine sahip olmalısın!`)
    if(!message.guild.me.hasPermission(['SEND_MESSAGES','MANAGE_EMOJIS','EMBED_LINKS'])) return
    if(!message.member.hasPermission('MANAGE_EMOJIS')) return message.channel.send(noperm.setTitle('<:hata:813391295665930260> Yetersiz Yetki!'))
let emoji = args[0]
if(!emoji) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('<:hata:813391295665930260> Emoji Girmeyi Unuttun!')
.setDescription(`

**${message.author.username}** bir emoji girmeyi unuttun!
`))

for (const emojii of args) {
    const parsedEmoji = Discord.Util.parseEmoji(emojii)

    if(parsedEmoji.id) {
        const gifpng = parsedEmoji.animated ? '.gif' : '.png'
        const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + gifpng}`
        message.guild.emojis.create(url,parsedEmoji.name)
        let mesaj = `Emoji Eklendi <:${parsedEmoji.name}:${parsedEmoji.id}>`
        if(parsedEmoji.animated === true) mesaj = `Emoji Eklendi <a:${parsedEmoji.name}:${parsedEmoji.id}>`

        message.channel.send(new Discord.MessageEmbed().setTitle(`Görev Tamamlandı!`).setColor("#22BF41").setDescription(`<:moldup_evet:783582088346468384> ${mesaj}`))
    }
}
}
}
