const { sistem } = require('../../database/SistemDataBase')
const Discord = require('discord.js');

module.exports = {
    name: 'chat',
    aliases: ['botlasohbet', 'sohbet-et', 'sohbetet', 'sohbet'],
    description: 'Bot ile sohbet etmeye başlarsınız.',
    usage: ['chat'],
    /** 
    * @param {Discord.Client} client
    * @param {Discord.Message} message
    * @param {String[]} args
    */
    run: async (client, message, args) => {
        if (!message.guild.me.hasPermission(['SEND_MESSAGES'])) return
await sistem.set(`sohbet_${message.author.id}_${message.channel.id}`, true)
    message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setTitle(`<:moldup_evet:783582088346468384> ${message.author.username}, sohbet aktif edildi.`).setDescription(`<:news:767708052668416010> Her mesaj family friendly (aile dostu) olmayabilir. Bot size saçma sapan sözler söyleyebilir.\n<:news:767708052668416010> Bot sizin söylediğiniz şeye beklediğiniz yanıtı vermeyebilir.`).setFooter(`Sohbeti bitirmek için ?sohbet-kapat yazmanız yeterlidir.`))

    }
}
