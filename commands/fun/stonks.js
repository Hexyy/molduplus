const { Client , Message , MessageEmbed } = require('discord.js');
const fetch = require('node-fetch')
module.exports = {
    name: "stonks",
    aliases: ['not-stonks'],
/** 
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
    if(!message.guild.me.hasPermission(['SEND_MESSAGES','EMBED_LINKS'])) return
    const adam = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
    const imp = [true,false]
    const impo = imp[Math.floor(Math.random() * imp.length)]
    
    
    const data = await fetch(`https://vacefron.nl/api/stonks?user=${adam.displayAvatarURL({dynamic:false , size: 256 , format : 'png'})}&notstonks=${impo}`).catch(err => message.channel.send(`\`\`\`Bir hata oluştu: ${err}\`\`\``));
    
      
      if (impo === true) {
    const finiş = new MessageEmbed()
    .setColor('RED')
    .setImage(data.url)
    message.channel.send(finiş)
    } else {
     const finiş = new MessageEmbed()
    .setColor('BLUE')
    .setImage(data.url)
    message.channel.send(finiş) 
    }
}
}
