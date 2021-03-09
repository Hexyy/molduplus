const Discord = require('discord.js');

module.exports = {
 name: 'büyüt',
 aliases: ['buyut', 'jumbo', 'enlarge', 'large'] ,
description: 'Belirttiğiniz emojinin büyük versiyonunu gönderir.',
usage: ['büyüt [ emoji isim ]'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {

  if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`**${message.author.username}** bir emoji adı girmeyi unuttun!`))

try {
const s = args.slice(0).join(' ').split(' ').filter(x => x.includes('<') && x.includes('>'))[0];
var emoji;
if(s) {
if(!message.guild.emojis.cache.get(s.split(':')[2].split('>')[0])) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription('Emojiyi büyütürken bir hata ile karşılaştım. Emojiler birbirine karışmış olmasın?'));
emoji = message.guild.emojis.cache.get(s.split(':')[2].split('>')[0]);
} else {
if(!message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'))) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription('Emojiyi büyütürken bir hata ile karşılaştım. Emojiler birbirine karışmış olmasın?'));
emoji = message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'));
};

return message.channel.send(new Discord.MessageEmbed()
.setColor('BLUE')
.setTitle(`\`${emoji.name}\` emojisinin büyütülmüş hali`)
.setImage(emoji.url)
.setFooter(message.author.tag + ` tarafından istendi`, message.author.avatarURL({ dynamic: true })))
} catch(error) {
return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription('Emojiyi büyütürken bir hata ile karşılaştım. Emojiler birbirine karışmış olmasın?'));
}

}
}
