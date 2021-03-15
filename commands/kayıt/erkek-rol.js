const Discord = require('discord.js');
const AloneDogru = "#22BF41";
const AloneHata = "#f30707"
const { kayit } = require('../../database/KayıtDataBase')
const { kız , çarpı , tik} = require("../../emojiler.json")

module.exports = {
 name: 'erkekrol',
 aliases: ["erkek-rol"] ,
 description: 'Kayıt sistemi erkek rolünü ayarlarsınız.',
    usage: ['erkekrol [ @rol ]'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {

exports.run = async (client, message, args) => {
  const nn = new Discord.MessageEmbed().setThumbnail();
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`**${message.author.username}** Bu komutu kullanmak için \`Yönetici\` iznine sahip olman gerekli.`))
let role = message.mentions.roles.first();
if(!role) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`Bir rol etiketlemeyi unuttunuz.`))
await kayit.set(`erkek.${message.guild.id}`, role.id);
message.channel.send(nn.setTitle(`Görev Tamamlandı!`).setColor("#22BF41").setDescription(`Kayıt sistemi erkek rolünü ${role} rol olarak ayarladım.`).setColor(AloneDogru))
}}}
