const Discord = require('discord.js');

module.exports = {
 name: 'tepki',
 aliases: ['tepkiekle', 'react', 'addreaction', 'add-reaction'] ,
description: 'Kanaldaki son atılan mesaja tepki eklersiniz.',
usage: ['tepki [ emoji ]'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
    const noperm = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription(`**${message.author.username}** bu komutu kullanabilmek için \`Tepki Ekle\` yetkisine sahip olmalısın!`)
    if(!message.guild.me.hasPermission(['SEND_MESSAGES','MANAGE_EMOJIS','EMBED_LINKS','ADD_REACTIONS'])) return
    if(!message.member.hasPermission('ADD_REACTIONS')) return message.channel.send(noperm.setTitle('<:hata:813391295665930260> Yetersiz Yetki!'))

if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('<:hata:813391295665930260> Emoji Adı Girmeyi Unuttun!')
    .setDescription(`
**${message.author.username}** bir emoji adı unuttun!
    `))


const emoji = message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'));
if(!emoji) return;
message.delete();
const a = await message.channel.messages.fetch({ limit: 2});
return a.map(x => x)[0].react(emoji.id);
  
}
}
