const { sistem } = require('../../database/SistemDataBase')
const Discord = require('discord.js');

module.exports = {
    name: 'chatkapat',
    aliases: ['botlasohbetkapat', 'sohbet-kapat', 'sohbetkapat'],
    description: 'Bot ile sohbet etmeyi bırakırsınız.',
    usage: ['chatkapat'],
    /** 
    * @param {Discord.Client} client
    * @param {Discord.Message} message
    * @param {String[]} args
    */
    run: async (client, message, args) => {
if(!await sistem.fetch(`sohbet.${message.author.id}.${message.channel.id}`)) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('Hata').setDescription(`<:moldup_hayir:783582180113907742> Sohbet zaten kapalı!`))
        await sistem.delete(`sohbet.${message.author.id}.${message.channel.id}`)
    message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setTitle(`Görev Tamamlandı!`).setDescription(`<:moldup_evet:783582088346468384> Bot ile sohbetiniz burada sona erdi.`)).then(a => a.delete({timeout: 10000}));
      
    }
}
