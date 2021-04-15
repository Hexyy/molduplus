const Discord = require('discord.js')
const { level } = require('../../database/SeviyeDataBase')
module.exports = {
  name: 'seviye-aç',
  aliases: ['seviyeaç'] ,
  description: 'Sunucu için seviye sistemini açarsınız.',
  usage: ['seviye-aç'],

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



await level.delete(`kapalı_${message.guild.id}`)
message.channel.send(new Discord.MessageEmbed().setTitle(`Görev Tamamlandı!`).setColor("#22BF41").setDescription(`<:moldup_evet:783582088346468384> **Seviye Sistemi** açıldı!`))

   }}