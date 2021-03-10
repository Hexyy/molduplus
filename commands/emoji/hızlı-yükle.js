const Discord = require('discord.js');

module.exports = {
 name: 'hızlı-ekle',
 aliases: ['hızlıekle', 'hızlı-yükle', 'hızlıyükle', 'emoji-hızlı', 'emojihızlı', 'e-hızlı', 'ehızlı'] ,
description: 'Sunucu için hızlıca emoji eklersiniz.',
usage: ['emoji-hızlı [ emoji ]'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {

if(message.attachments.first()) {
  try {

    return message.guild.emojis.create(message.attachments.first().url, message.attachments.first().name.split('.')[0], { reason: '[ '+message.author.tag +' Hızlı Emoji Yükleme ]' }).then(emoji => message.channel.send(new Discord.MessageEmbed().setTitle(`Görev Tamamlandı!`).setColor("#22BF41").setDescription(`<:moldup_evet:783582088346468384> ${message.guild.emojis.cache.get(emoji.id)} adlı emoji sunucunuza yüklenmiştir.`)))

  } catch(error) {
    console.log(error);
    return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`**Emoji sunucunuza yüklenemedi.** 
- Sunucuda emoji yüklemek için yer olduğuna, 
- Koyduğunuz dosyanın bir fotoğraf/gif olduğuna, 
- 256kb boyutundan küçük olduğuna,
 emin olun ve tekrar deneyin.`));  
  }
} else {
  if(args.slice(0).join(' ').startsWith('https://') && args.slice(0).join(' ').includes('discord')) {
    try {

 return message.guild.emojis.create(args.slice(0).join(' '), args.slice(0).join(' ').split('/')[4].split('.')[0], { reason: '[ '+message.author.tag +' Hızlı Emoji Yükleme ]' }).then(emoji => message.channel.send(new Discord.MessageEmbed().setTitle(`Görev Tamamlandı!`).setColor("#22BF41").setDescription(`<:moldup_evet:783582088346468384> ${message.guild.emojis.cache.get(emoji.id)} adlı emoji sunucunuza yüklenmiştir.`))).catch(error => message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`**Emoji sunucunuza yüklenemedi.** 
- Sunucuda emoji yüklemek için yer olduğuna, 
- Koyduğunuz dosyanın bir fotoğraf/gif olduğuna, 
- 256kb boyutundan küçük olduğuna,
 emin olun ve tekrar deneyin.`)))
    
    } catch(error) {
      console.log(error);
      return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`**Emoji sunucunuza yüklenemedi.** 
- Sunucuda emoji yüklemek için yer olduğuna, 
- Koyduğunuz dosyanın bir fotoğraf/gif olduğuna, 
- 256kb boyutundan küçük olduğuna,
 emin olun ve tekrar deneyin.`));
    };
  } else {
const s = args.slice(0).join(' ').split(' ').filter(x => x.includes('<') && x.includes('>'))[0];
  try {
    
    let animated = false;
    if(s.startsWith('<a:')) animated = true;
    var url = '';
    var isim = '';

    if(animated === false) {
     url = 'https://cdn.discordapp.com/emojis/'+s.split(':')[2].split('>')[0]+'.png?v=1';
     isim = s.split('<:')[1].split(':')[0];
    } else {
     url = 'https://cdn.discordapp.com/emojis/'+s.split(':')[2].split('>')[0]+'.gif?v=1';
     isim = s.split('<a:')[1].split(':')[0];
    };

    return message.guild.emojis.create(url, isim, { reason: '[ '+message.author.tag +' Hızlı Emoji Yükleme ]' }).then(emoji => message.channel.send(new Discord.MessageEmbed().setTitle(`Görev Tamamlandı!`).setColor("#22BF41").setDescription(`<:moldup_evet:783582088346468384> ${message.guild.emojis.cache.get(emoji.id)} adlı emoji sunucunuza yüklenmiştir.`)))

  } catch(error) {
    console.log(error);
    return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`**Emoji sunucunuza yüklenemedi.** 
- Sunucuda emoji yüklemek için yer olduğuna, 
- Koyduğunuz dosyanın bir fotoğraf/gif olduğuna, 
- 256kb boyutundan küçük olduğuna,
 emin olun ve tekrar deneyin.`)); 
  
}
  }
}
}
}
