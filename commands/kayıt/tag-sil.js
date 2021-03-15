const Discord = require('discord.js');
const AloneDogru = "#22BF41";
const AloneHata = "#f30707"
const { kayit } = require('../../database/KayıtDataBase')
const { kız , çarpı , tik } = require("../../emojiler.json")

module.exports = {
 name: 'tag-sil',
 aliases: ["tagsil", 'kayıttagsil', "tagısil", "tagı-sil", "sunucu-tag-sil", "tagımızısil", "sw-tag-sil", "swtagsil", "sunucutagsil"] ,
 description: 'Sunucunuzun tagını silersiniz.',
    usage: ['tag-sil'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
  
  const nn = new Discord.MessageEmbed().setThumbnail();
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Yetersiz Yetki!").setColor("RED").setDescription(`**${message.author.username}** Bu komutu kullanmak için \`Yönetici\` iznine sahip olman gerekli.`))

kayit.delete(`tag.${message.guild.id}`);
message.channel.send(nn.setTitle(`Görev Tamamlandı!`).setColor("#22BF41").setDescription(`<:moldup_evet:783582088346468384> Sunucunuzun tagı başarıyla silindi.`))
  
}
}
