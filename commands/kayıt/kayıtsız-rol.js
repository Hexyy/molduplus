const Discord = require('discord.js');
const AloneDogru = "#22BF41";
const AloneHata = "#f30707"
const { kayit } = require('../../database/KayıtDataBase')
const { kız , çarpı , tik} = require("../../emojiler.json")


module.exports = {
 name: 'kayıtsızrol',
 aliases: ["kayıtsız-rol"] ,
 description: 'Kayıt sistemi kayıtsız rolünü ayarlarsınız.',
    usage: ['kayızsızrol [ @rol ]'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
  
const nn = new Discord.MessageEmbed().setThumbnail();
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setTitle('Hata').setColor("RED").setDescription(`<:moldup_sinirli:783582342643056661> Bu komutu kullanmak için \`Yönetici\` iznine sahip olman gerekli.`))
let role = message.mentions.roles.first();
if(!role) return message.channel.send(nn.setTitle('Hata').setColor(AloneHata).setDescription(`${çarpı} Bir rol etiketlemeyi unuttunuz.`)).then(a => a.delete({timeout: 10000}));
kayit.set(`kayıtsız.${message.guild.id}`, role.id);
message.channel.send(nn.setTitle(`Görev Tamamlandı!`).setColor("#22BF41").setDescription(`${tik} Kayıt sistemi kayıtsız rolünü ${role} rol olarak ayarladım.`).setColor(AloneDogru)).then(a => a.delete({timeout: 10000}));

}
}
