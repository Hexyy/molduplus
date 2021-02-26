const Discord = require('discord.js');
const { Canvas } = require('canvacord')
module.exports = {
    name: 'youtube',
    aliases: ['yt' , 'yorum'],
    description: 'YouTube yorumu atarsınız.',
    usage: ['youtube [ yazı ]'],
    /** 
    * @param {Discord.Client} client
    * @param {Discord.Message} message
    * @param {String[]} args
    */
    run: async (client, message, args) => {
        if (!message.guild.me.hasPermission(['ATTACH_FILES', 'SEND_MESSAGES'])) return
const text = args.join(' ')
if(!text) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('<:hata:813391295665930260> Mesaj Girmeyi Unuttun!')
.setDescription(`

**${message.author.username}** bir mesaj girmeyi unuttun!
`))

const youtue = await Canvas.youtube({
    username: message.author.username,
    content: text,
    avatar: message.author.displayAvatarURL({format: 'png' , dynamic: false}),
    dark: false
})
message.channel.send(new Discord.MessageAttachment(youtue,'youtube.png'))
}
}