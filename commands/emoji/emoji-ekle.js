const Discord = require('discord.js');

module.exports = {
 name: 'emoji-ekle',
 aliases: ['emojiekle', 'emoji-yükle', 'emojiyükle', 'e-yükle', 'eyükle', 'e-ekle', 'eekle'] ,
description: 'Sunucu için hızlı yoldan emoji eklersiniz.',
usage: ['emoji-ekle'],
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
const filter = response => {
    return response.author.id === message.author.id;
  };

  message.channel.send(new Discord.MessageEmbed().setColor("#c0c0c0").setDescription(`<:zaman:789219599844900865> \`1. Adım:\` Emojinin adını yazınız. 
15 saniye içinde cevap vermezseniz işlem iptal edilecektir.`));

  let first;
  let two;

  message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
  .then(collected => {
    first = collected.first().content
    message.channel.send(new Discord.MessageEmbed().setColor("#c0c0c0").setDescription(`<:zaman:789219599844900865> \`2. Adım:\` Emojiyi dosya olarak yükleyin, emojiyi gönderin ya da bağlantısını gönderin. 
15 saniye içinde cevap vermezseniz işlem iptal edilecektir.`));
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected => {
  
  if(collected.first().attachments.size > 0) {
    two = collected.first().attachments.first().url;
  } else {
    const s = collected.first().content.split(' ').filter(x => x.includes('<') && x.includes('>'))[0];
    if(s) {
      two = `https://cdn.discordapp.com/emojis/${s.split(':')[2].split('>')[0]}${s.split('<')[0].split('')[1] === 'a' ? '.gif' : '.png'}?v=1`
    } else {
      two = collected.first().content;
    };

    };
  try {
    
  message.guild.emojis.create(two, first, { reason: '[ '+message.author.tag +' Emoji Yükleme ]'}).then(emoji => {
  message.channel.send(new Discord.MessageEmbed().setTitle(`Görev Tamamlandı!`).setColor("#22BF41").setDescription(`<:moldup_evet:783582088346468384> ${message.guild.emojis.cache.get(emoji.id)} adlı emoji sunucunuza yüklenmiştir.`));

  }).catch(error => message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`**Emoji sunucunuza yüklenemedi.** 
- Sunucuda emoji yüklemek için yer olduğuna, 
- Koyduğunuz dosyanın bir fotoğraf/gif olduğuna, 
- 256kb boyutundan küçük olduğuna,
 emin olun ve tekrar deneyin.`)));
  } catch(error) {
    console.log(error);
    return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`**Emoji sunucunuza yüklenemedi.** 
- Sunucuda emoji yüklemek için yer olduğuna, 
- Koyduğunuz dosyanın bir fotoğraf/gif olduğuna, 
- 256kb boyutundan küçük olduğuna,
 emin olun ve tekrar deneyin.`));  
  };
})
.catch(collected => {
  console.log(collected);
  return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`**Emoji sunucunuza yüklenemedi.** 
- Sunucuda emoji yüklemek için yer olduğuna, 
- Koyduğunuz dosyanın bir fotoğraf/gif olduğuna, 
- 256kb boyutundan küçük olduğuna,
 emin olun ve tekrar deneyin.`));  
});
  })
  .catch(collected => {
    console.log(collected);
    return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`**Emoji sunucunuza yüklenemedi.** 
- Sunucuda emoji yüklemek için yer olduğuna, 
- Koyduğunuz dosyanın bir fotoğraf/gif olduğuna, 
- 256kb boyutundan küçük olduğuna,
 emin olun ve tekrar deneyin.`));  
  });
}
}
