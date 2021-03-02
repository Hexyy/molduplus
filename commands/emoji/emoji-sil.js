const Discord = require('discord.js');

module.exports = {
 name: 'emoji-sil',
 aliases: ['emojisil'] ,
description: 'Sunucu için hızlı yoldan emoji silersiniz.',
usage: ['emoji-sil [ emoji ]'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
    const noperm = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription(`**${message.author.username}** bu komutu kullanabilmek için \`Emojileri Yönet\` yetkisine sahip olmalısın!`)
    if(!message.guild.me.hasPermission(['SEND_MESSAGES','MANAGE_EMOJIS','EMBED_LINKS'])) return
    if(!message.member.hasPermission('MANAGE_EMOJIS')) return message.channel.send(noperm.setTitle('<:hata:813391295665930260> Yetersiz Yetki!'))
  if(!args[0]) return message.channel.send(`**${message.author.username}** bir emoji adı girmeyi unuttun!`)
try {
const s = args.slice(0).join(' ').split(' ').filter(x => x.includes('<') && x.includes('>'))[0];
var emoji;
if(s) {
if(!message.guild.emojis.cache.get(s.split(':')[2].split('>')[0])) return message.channel.send(`Yazdığın emojiyi bulamadım!`);
emoji = message.guild.emojis.cache.get(s.split(':')[2].split('>')[0]);
} else {
if(!message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'))) return message.channel.send(`Yazdığın emojiyi bulamadım!`);
emoji = message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'));
};

emoji.delete();
return message.channel.send(`\`${emoji.name}\` isimli emoji silindi!`);

} catch(error) {
return message.channel.send(`Yazdığınız emojiyi bulamadım!`);
};
  
  
}}
