const Discord = require('discord.js');
const { karsilama } = require('../../database/KarşılamaDataBase');

module.exports = {
 name: 'özel-mesaj',
 aliases: ['özelmesaj'] ,
 description: 'Özel Mesaj sistemini ayarlarsınız.',
 usage: ['özel-mesaj [ mesaj ]'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
    const noperm = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription(`**${message.author.username}** bu komutu kullanabilmek için \`Sunucuyu Yönet\` yetkisine sahip olmalısın!`)
    if(!message.guild.me.hasPermission(['SEND_MESSAGES','MANAGE_ROLES','EMBED_LINKS'])) return
    if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(noperm.setTitle('<:hata:813391295665930260> Yetersiz Yetki!'))
let mesaj = args.join(" ")
if(!mesaj) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('<:hata:813391295665930260> Mesaj Girmeyi Unuttun!')
.setDescription(`

**${message.author.username}** bir mesaj girmeyi unuttun!

**Bilinmesi gerekenler**

**[üye]**
\`Üyeyi Etiketler\`
**${message.author}**
------------------
**[üye-id]**
\`Üyenin ID'sini Söyler.\`
**${message.author.id}  **    
------------------
**[üye-ad]**
\`Üyenin Kullanıcı Adını Söyler.\`
**${message.author.username}**
------------------
**[üye-tag]**
\`Üyenin Kullanıcı Adını Ve Etiketini Söyler\`
**${message.author.tag}**
------------------
**[sunucu-üye]**
\`Sunucuda ki Üye Sayısını Söyler.\`
**${message.guild.memberCount}**   
------------------
**[sunucu-ad]**
\`Sunucu Adını Söyler.\`
**${message.guild.name}**       
------------------
**[sunucu-id]**
\`Sunucu ID'sini Söyler.\`
**${message.guild.id}**                  
`))

message.channel.send(new Discord.MessageEmbed().setTitle(`Görev Tamamlandı!`)
.setColor("#22BF41").setDescription(`
<:moldup_evet:783582088346468384> Sunucuya yeni gelenlere özelden gönderilecek mesaj

${mesaj}

olarak ayarlandı
`)
)
await karsilama.set(`özelmesaj_${message.guild.id}` , mesaj)
}
}
