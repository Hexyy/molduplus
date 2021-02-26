const Discord = require('discord.js');
const { Canvas } = require('canvacord')
module.exports = {
    name: 'rip',
    aliases: [],
    description: 'Avatarınıza mezar taşı efekti eklersin.',
    usage: ['rip { @kullanıcı }'],
    /** 
    * @param {Discord.Client} client
    * @param {Discord.Message} message
    * @param {String[]} args
    */
    run: async (client, message, args) => {
        if (!message.guild.me.hasPermission(['ATTACH_FILES', 'SEND_MESSAGES'])) return
        const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
        const img = user.displayAvatarURL({ format: 'png', dynamic: false })

        const triggered = await Canvas.rip(img)

        message.channel.send(new Discord.MessageAttachment(triggered, 'rip.png'))
    }
}