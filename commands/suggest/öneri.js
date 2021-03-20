const Discord = require('discord.js');
const { öneri } = require('../../database/ÖneriDataBase')
module.exports = {
 name: 'öneri',
 aliases: ['suggest' , 'öner'] ,
 description: 'Öneri yaparsınız.',
 usage: ['öneri [ öneriniz ]'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
if(!await öneri.fetch(`önerikanal_${message.guild.id}`)) return
const text = args.join(' ')
if(!text) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('<:hata:813391295665930260> Mesaj Girmeyi Unuttun!')
.setDescription(`

**${message.author.username}** bir mesaj girmeyi unuttun!
`))

message.delete()
const embed = new Discord.MessageEmbed()
.setColor('YELLOW')
.setAuthor(message.author.tag , message.author.displayAvatarURL({dynamic:true}))
.setDescription(`**Önerisi:** ${text}`)
.addField('Durum' , 'Beklemede')
.setTimestamp()
const kanall = message.guild.channels.cache.get(await öneri.fetch(`önerikanal_${message.guild.id}`))
kanall.send(embed).then(function(msg)  {
    msg.react('822885503333957693')
    msg.react('798871855058518076')
    }
    )
    
}
}
