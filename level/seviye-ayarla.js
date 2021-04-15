const Discord = require('discord.js')
const { level } = require('../../database/SeviyeDataBase')
module.exports = {
    name: 'seviyeayarla',
    aliases: ['seviye-ayarla', 'setlevel', 'set-level', 'setLevel'] ,
    description: 'Sunucudaki bir üyenin seviyesini ayarlarsınız.',
    usage: ['seviye-ayarla [ @kullanıcı ] [ seviye ]'],

   /** 
   * @param {Discord.Client} client
   * @param {Discord.Message} message
   * @param {String[]} args
   */
   run: async (client , message ,args) => {

    if (await level.fetch(`kapalı_${message.guild.id}`)) return message.react("766402190654439466")
    
    const noperm = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(`**${message.author.username}** bu komutu kullanabilmek için \`Sunucuyu Yönet\` yetkisine sahip olmalısın!`)
if(!message.guild.me.hasPermission(['SEND_MESSAGES','MANAGE_ROLES','EMBED_LINKS'])) return
if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(noperm.setTitle('<:hata:813391295665930260> Yetersiz Yetki!'))

let üye = message.mentions.users.first() || client.users.cache.get(args[0])
if (!üye) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`Bir kullanıcı etiketlemeyi girmeyi unuttun!`))

let seviye = args[1]
if (!seviye || isNaN(seviye)) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`Bir seviye sayısı girmeyi unuttun!`))

if (seviye < 0) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`Seviye sayısı \`0\` dan küçük olamaz!`))

await level.set(`level_${üye.id}_${message.guild.id}`, Number(seviye))
await level.set(`xp_${üye.id}_${message.guild.id}`, 0)
message.channel.send(new Discord.MessageEmbed().setTitle(`Görev Tamamlandı!`).setColor("GREEN").setDescription(`<:moldup_evet:783582088346468384> ${üye} kullanıcısının seviyesi \`${seviye}\` olarak ayarlandı!`))
   }
}