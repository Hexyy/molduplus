const Discord = require('discord.js')
const { level } = require('../../database/SeviyeDataBase')
module.exports = {
  name: 'seviye-kapat',
  aliases: ['seviyekapat'] ,
  description: 'Sunucu için ayarlanan seviye sistemini kapatırsınız.',
  usage: ['seviye-kapat'],

   /** 
   * @param {Discord.Client} client
   * @param {Discord.Message} message
   * @param {String[]} args
   */
   run: async (client , message ,args) => {

    const noperm = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription(`**${message.author.username}** bu komutu kullanabilmek için \`Sunucuyu Yönet\` yetkisine sahip olmalısın!`)
    if(!message.guild.me.hasPermission(['SEND_MESSAGES','MANAGE_ROLES','EMBED_LINKS'])) return
    if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(noperm.setTitle('<:hata:813391295665930260> Yetersiz Yetki!'))

    const filter = response => {
        return response.author.id === message.author.id;
      };
    
let data = await level.fetch(`kapalı_${message.author.id}`)
if (data) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(`**${message.author.username}** bu sunucuda **seviye sistemi** sistemi zaten kapalı!`))

message.channel.send(new Discord.MessageEmbed().setColor("#c0c0c0").setTitle("Tehlikeli Bölge!").setDescription(`Seviye sistemini sunucunuz için kapatmak ve seviye rollerini silmek istediğinize emin misiniz? Sadece bir seviye rolünü silmek için rolü sunucu ayarlarından silmeniz yeterlidir. Onay vermek için \`evet\` yazın.`));

let first

message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
  .then(async collected => {
    first = collected.first().content
    
    if (first.toLowerCase() === "evet") {
        await level.delete(`levelrol_${message.guild.id}`)
        await level.set(`kapalı_${message.guild.id}`, true)
        return message.channel.send(new Discord.MessageEmbed().setTitle(`Görev Tamamlandı!`).setColor("#22BF41").setDescription(`<:moldup_evet:783582088346468384> **Seviye Sistemi** kapatıldı!`))
    } else {
        message.channel.send("<:carpi:766402190654439466> Doğru şekilde onaylamadığınız için işlem iptal edildi.")
    }
  })
   }
}