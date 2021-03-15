const Discord = require('discord.js');
const AloneDogru = "#22BF41";
const AloneHata = "#f30707"
const { kayit } = require('../../database/KayıtDataBase')


module.exports = {
 name: 'kayıt-tag',
 aliases: ["kayıttag", "tag-ayarla", "tagınız", "tagayarla", "sunucu-tag", "tagımız", "sw-tag", "swtag", "sunucutag"] ,
 description: 'Sunucunuzun tagını ayarlarsınız.',
    usage: ['kayıt-tag [ tag ]'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {

let tag = kayit.fetch(`tag.${message.guild.id}`) || "Tag Ayarlı Değil"
  const nn = new Discord.MessageEmbed().setThumbnail();
  if (!message.member.hasPermission('ADMINISTRATOR') || !args[0] && tag) return message.channel.send("`"+ tag +"`")
  
  if (!tag && message.member.hasPermission('ADMINISTRATOR') && !args[0]) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`**${message.author.username}** Bir tag veya simge girmelisin!`))

kayit.set(`tag.${message.guild.id}`, args.slice(0).join(' '));
message.channel.send(nn.setTitle(`Görev Tamamlandı!`).setColor("#22BF41").setDescription(`<:moldup_evet:783582088346468384> Sunucunuzun tagını ${args.slice(0).join(' ')} rol olarak ayarladım.`).setColor(AloneDogru))

}
}
