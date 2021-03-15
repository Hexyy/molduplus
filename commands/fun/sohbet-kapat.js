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
if(!await sistem.fetch(`sohbet_${message.author.id}_${message.channel.id}`)) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`Sohbet zaten kapalı!`))
        await sistem.delete(`sohbet_${message.author.id}_${message.channel.id}`)
    message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setTitle(`Görev Tamamlandı!`).setDescription(`<:moldup_evet:783582088346468384> Bot ile sohbetiniz burada sona erdi.`)).then(a => a.delete({timeout: 10000}));
      
    }
}
