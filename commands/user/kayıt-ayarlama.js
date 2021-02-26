const { Client , Message , MessageEmbed } = require('discord.js');
const { ayarlar } = require('../../settings/ayarlar')
module.exports = {
 name: 'kayıt-ayarlama',
 aliases: ["kayıtayarlama", "k-a", "ka"] ,
 description: 'Kayıt sistemi ayarlama ve silme komutlarını gösterir.',
 usage: ['kayıt-ayarlama'], 
/** 
* @param {Client} client
* @param {Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {

if (!message.guild) return
  let eklenti = new MessageEmbed()
.setColor("BLUE")
.setTitle(`<:kullanici:809143152858497095> Moldup Kayıt Ayarlama Menüsü`)
.setDescription(`
\`\`\`                                                                                                         \`\`\`
   <:degnek:809142151770275921> **Rol Ayarlamalarını Yapmak İçin:**
   <:tik:766593067133960222> \`${ayarlar.prefix}yetkili-rol\` (Zorunlu Değil)
   <:tik:766593067133960222> \`${ayarlar.prefix}kayıtsız-rol\` (Zorunlu Değil)
   <:tik:766593067133960222> \`${ayarlar.prefix}üye-rol\` (**${ayarlar.prefix}üye** Komutu İçin Zorunlu)
   <:tik:766593067133960222> \`${ayarlar.prefix}erkek-rol\` (**${ayarlar.prefix}erkek** Komutu İçin Zorunlu)
   <:tik:766593067133960222> \`${ayarlar.prefix}kadın-rol\` (**${ayarlar.prefix}kadın** Komutu İçin Zorunlu)
   
   
  <:degnek:809142151770275921> **Rol Ayarlarını Silmek İçin:**
  🗑️ \`${ayarlar.prefix}erkek-sil\`
  🗑️ \`${ayarlar.prefix}kadın-sil\`
  🗑️ \`${ayarlar.prefix}üye-sil\`
  🗑️ \`${ayarlar.prefix}yetkili-sil\`
  🗑️ \`${ayarlar.prefix}kayıtsız-sil\`
  
  
  <:degnek:809142151770275921> **Taglı Sistem Ayarlamak Veya Silmek İçin:**
  <:tik:766593067133960222> \`${ayarlar.prefix}kayıt-tag\`
  🗑️ \`${ayarlar.prefix}tag-sil\`

   \`\`\`                                                                                                         \`\`\`
   `)
  
  message.channel.send(eklenti)
  
  }
  }
