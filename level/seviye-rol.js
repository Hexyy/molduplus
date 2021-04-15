const Discord = require('discord.js')
const { level } = require('../../database/SeviyeDataBase')
module.exports = {
    name: 'seviyerol',
    aliases: ['seviye-rol'] ,
    description: 'Sunucu için seviye atlayanlara ödül rolleri verirsiniz.',
    usage: ['seviye-rol [ seviye ] [ @rol ]'],

   /** 
   * @param {Discord.Client} client
   * @param {Discord.Message} message
   * @param {String[]} args
   */
   run: async (client , message ,args) => {

    if (await level.fetch(`kapalı_${message.guild.id}`)) return message.react("766402190654439466")
    
let seviye = args[0]
let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) 

if (!seviye || isNaN(seviye)) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`Bir seviye sayısı girmeyi unuttun!`))
if (!rol) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`Bir rol etiketlemeyi unuttun!`))

let dot = await level.fetch(`levelrol_${message.guild.id}`)

let data = {
lvl : seviye,
rol : rol.id
}

if (dot && dot[7]) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`En fazla 8 adet seviye rolü ekleyebilirsiniz. Daha fazla eklenmesi için bunu **[destek sunucumuzda](https://bot.moldup.tk/destek.html)** önerebilirsiniz.`))

await level.push(`levelrol_${message.guild.id}` , data)
message.channel.send(new Discord.MessageEmbed().setTitle(`Görev Tamamlandı!`).setColor("GREEN").setDescription(`<:moldup_evet:783582088346468384> Seviye rolü eklendi, artık **${seviye}.** seviyeye ulaşan kişilere ${rol} rolünü vereceğim.`))

    }
}