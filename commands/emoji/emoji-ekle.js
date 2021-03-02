const Discord = require('discord.js');

module.exports = {
 name: 'emoji-ekle',
 aliases: ['emojiekle', 'emoji-yükle', 'emojiyükle'] ,
description: 'Sunucu için hızlı yoldan emoji eklersiniz.',
usage: ['emoji-ekle [ emoji ]'],
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

  message.channel.send(`Sunucuya yüklenecek emojiye koyulacak adı yazın. 
İşlem otomatik olarak 30 saniye içinde iptal olacaktır.`);

  let first;
  let two;

  message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
  .then(collected => {
    first = collected.first().content
    message.channel.send(`Emojiyi dosya olarak yükleyin, emojiyi gönderin ya da emojinin bağlantısını gönderin. 
İşlem otomatik olarak 30 saniye içinde iptal olacaktır.`);
message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
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
    
  message.guild.emojis.create(two, first, { reason: 'Sorumlu moderatör: '+message.author.tag}).then(emoji => {
  message.channel.send(new Discord.MessageEmbed().setTitle(`Görev Tamamlandı!`).setColor("#22BF41").setDescription(`<:moldup_evet:783582088346468384> ${message.guild.emojis.cache.get(emoji.id)} adlı emoji sunucunuza yüklenmiştir.`));

  }).catch(error => message.channel.send(`Bir hata oluştu. Lütfen; 
- Sunucuda emoji yüklemek için yer olduğuna, 
- Koyduğunuz dosyanın bir fotoğraf/gif olduğuna, 
- 256kb boyutundan küçük olduğuna,
emin olun ve tekrar deneyin.`))
  } catch(error) {
    console.log(error);
    return message.channel.send(`Bir hata oluştu. Lütfen; 
    - Sunucuda emoji yüklemek için yer olduğuna, 
    - Koyduğunuz dosyanın bir fotoğraf/gif olduğuna, 
    - 256kb boyutundan küçük olduğuna,
    emin olun ve tekrar deneyin.`); 
  };
})
.catch(collected => {
  console.log(collected);
  return message.channel.send(`Bir hata oluştu. Lütfen; 
- Sunucuda emoji yüklemek için yer olduğuna, 
- Koyduğunuz dosyanın bir fotoğraf/gif olduğuna, 
- 256kb boyutundan küçük olduğuna,
emin olun ve tekrar deneyin.`);  
});
  })
  .catch(collected => {
    console.log(collected);
    return message.channel.send(`Bir hata oluştu. Lütfen; 
- Sunucuda emoji yüklemek için yer olduğuna, 
- Koyduğunuz dosyanın bir fotoğraf/gif olduğuna, 
- 256kb boyutundan küçük olduğuna,
 emin olun ve tekrar deneyin.`);  
  });
}
}
