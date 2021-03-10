const Discord = require('discord.js');
const moment = require('moment');
moment.locale('tr');

module.exports = {
 name: 'emoji-bilgi',
 aliases: ['emojibilgi', 'emoji-info', 'emojiinfo', 'e-bilgi', 'ebilgi', 'e-info', 'einfo'] ,
description: 'Sunucu için hızlı yoldan emoji eklersiniz.',
usage: ['emoji-bilgi [ emoji ismi ]'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
      if(!message.guild.me.hasPermission(['SEND_MESSAGES','MANAGE_EMOJIS','EMBED_LINKS'])) return
  if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`**${message.author.username}** bir emoji adı girmeyi unuttun!`))
const s = args.slice(0).join(' ').split(' ').filter(x => x.includes('<') && x.includes('>'))[0]
  var emoji
  if(s) {
  if(!message.guild.emojis.cache.get(s.split(':')[2].split('>')[0])) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`Yazdığın emojiyi bulamadım veya bu sunucuda bulunmuyor!`));
  emoji = message.guild.emojis.cache.get(s.split(':')[2].split('>')[0]);
  } else {
  if(!message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'))) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`Yazdığın emojiyi bulamadım veya bu sunucuda bulunmuyor!`));
  emoji = message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'));
  };

  const author = await emoji.fetchAuthor();
  return message.channel.send(new Discord.MessageEmbed()
  .setColor('BLUE')
  .setAuthor('Emoji Bilgi')
  .addField("IDsi", emoji.id, true)
  .addField('Hareketli mi?', emoji.animated ? 'Evet' : 'Hayır', true)
  .addField('Eklenme Tarihi', moment(emoji.createdAt).format('DD')+' '+moment(emoji.createdAt).format('MM').toString()
  .replace('01', 'Ocak')
  .replace('02', 'Şubat')
  .replace('03', 'Mart')
  .replace('04', 'Nisan')
  .replace('05', 'Mayıs')
  .replace('06', 'Haziran')
  .replace('07', 'Temmuz')
  .replace('08', 'Ağustos')
  .replace('09', 'Eylül')
  .replace('10', 'Ekim')
  .replace('11', 'Kasım')
  .replace('12', 'Aralık')+' '+moment(emoji.createdAt).format('YYYY'), true)
  .addField('Kullanım', `\`<${emoji.animated ? 'a' : ''}:${emoji.name}:${emoji.id}>\``, true)
  .addField('Ekleyen Kişi', '<@!'+author.id+'>', true)
  .addField('Emoji Linki', '[Tıkla]('+emoji.url+')', true)
  .setThumbnail(emoji.url)
  .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({ dynamic: true }))
  .setTimestamp());
  
}
}
