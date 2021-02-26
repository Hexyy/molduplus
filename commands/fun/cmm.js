const Discord = require('discord.js');
const { Canvas } = require('canvacord')
module.exports = {
    name: 'cmm',
    aliases: [],
    description: 'Change My Mind meemi atarsınız.',
    usage: ['cmm [ yazı ]'],
    /** 
    * @param {Discord.Client} client
    * @param {Discord.Message} message
    * @param {String[]} args
    */
    run: async (client, message, args) => {
        if (!message.guild.me.hasPermission(['ATTACH_FILES', 'SEND_MESSAGES'])) return
        let text = args.join(' ')
        if(!text) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('<:hata:813391295665930260> Mesaj Girmeyi Unuttun!')
.setDescription(`

**${message.author.username}** bir mesaj girmeyi unuttun!
`))
try {
const cmm = await Canvas.changemymind(text)
message.channel.send(new Discord.MessageAttachment(cmm,'cmm.png'))
} catch (error) {
    message.channel.send('Bir Hata Oluştu: ' + error)
} 
    }
}
