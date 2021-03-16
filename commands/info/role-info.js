const canvacord = require("canvacord");
const Discord = require("discord.js");
const e = require("../../emojiler.json")
const moment = require("moment")
moment.locale('tr')
module.exports = {
 name: 'rol-bilgi',
 aliases: ['rb', 'rolbilgi', 'role', 'rol', 'role-info', 'roleinfo'] ,
description: 'Rol hakkında bilgi alırsınız',
usage: ['rol-bilgi [ @rol ]'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {

let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[0])  
var serverIcon = client.guilds.cache.get(message.guild.id).iconURL({size: 1024, dynamic: true});
if(!rol) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Bir Rol Etiketlemen Gerekiyor!").setColor("RED").setDescription(`**${message.author.username}** lütfen bir rol etiketleyiniz!`))
  //objectleri dönüştürelim yazıya 
  let renk = rol.hexColor;

  
  if (!rol.permissions.toArray().join(' ').includes("ADMINISTRATOR")) {
let yetkilier = rol.permissions.toArray().join(' - ')  
.replace("BAN_MEMBERS" , "Üyeleri Yasakla")
.replace("KICK_MEMBERS" , "Üyeleri At")
.replace("MANAGE_EMOJIS" , "Emojileri Yönet")
.replace("MANAGE_WEBHOOKS" , "Webhookları Yönet")
.replace("MANAGE_ROLES" , "Rolleri Yönet")
.replace("MANAGE_GUILD" , "Sunucuyu Yönet")
.replace("MANAGE_CHANNELS" , "Kanalları Yönet")
.replace("SEND_MESSAGES" , "Mesaj Gönder")
.replace("CREATE_INSTANT_INVITE" , "Davet Oluştur")
.replace("ADD_REACTIONS" , "Tepki Ekle")
.replace("VIEW_AUDIT_LOG" , "Denetim Kaydını Görüntüle")
.replace("MANAGE_MESSAGES" , "Mesajları Yönet")
.replace("EMBED_LINKS" , "Bağlantı Yerleştir")
.replace("MANAGE_NICKNAMES" , "Kullanıcı Adlarını Yönet")
.replace("MUTE_MEMBERS" , "Üyeleri Sustur")
.replace("USE_EXTERNAL_EMOJIS" , "Harici Emojiler Kullan")
.replace("SEND_TTS_MESSAGES" , "Metin Okuma Mesajı Gönder")
.replace("CHANGE_NICKNAME" , "Kullanıcı Adı Değiştir")
.replace("MENTION_EVERYONE" , "@everyone, @here Kullan ve Tüm Rollerden Bahset")
.replace("MOVE_MEMBERS" ,"Üyeleri Taşı")
.replace("VIEW_GUILD_INSIGHTS", "Sunucu Bilgilerini Görüntüle")
.replace("USE_VAD", "Ses Eylemini Kullan")
.replace("READ_MESSAGE_HISTORY" , "Mesaj Geçmişini Oku")
.replace("ATTACH_FILES" , "Dosya Ekle")
.replace("DEAFEN_MEMBERS" , "Üyeleri Sağırlaştır")
.replace("CONNECT" , "Bağlan")
.replace("SPEAKER", "Konuşmacı")
.replace("SPEAK", "Konuş")
.replace("STREAM", "Video")
.replace("PRIORITY_", "Öncelikli ")//hepsini yazmayalım karışıyo SPEAK ile
.replace("VIEW_CHANNEL", "Kanalları Gör")
// yaptım ben
// USE_VAD ne hiç bilmiyom ama bi bakam / buldum Ses Eylemini Kullan



// deneme yapalım
        let si = new Discord.MessageEmbed()
        .setColor(renk)
        .setDescription(`<@&${rol.id}>`)
        .addField("ID", rol.id,true)
  .addField("Rolde Bulunan Üye Sayısı", `${rol.members.size}` , true)
  .addField("Rol İsmi", `${rol.name}` , true)
        .addField("Bahsetme", `\`<@&${rol.id}>\`` , true)

        .addField("Etiketlenebilir mi?", `${rol.mentionable ? 'Evet' : 'Hayır'}` , true)
  
        .addField("Ayrı Gösteriliyor mu?" , `${rol.hoisted ? 'Hayır' : 'Evet'}`,true)
    .addField("Renk" , renk,true)

        .addField("Kuruluş Tarihi", moment(rol.createdAt).format('DD.MM.YYYY') , true)
  .addField("Pozisyon (En Üstten)", `${message.guild.roles.cache.size-rol.position}/${message.guild.roles.cache.size}` , true)
  .addField("Yetkileri", `${yetkilier}`,true)

    message.channel.send(si)
  } else {
    let si = new Discord.MessageEmbed()
        .setColor(renk)
    .setDescription(`<@&${rol.id}>`)

        .addField("ID", rol.id , true)
  .addField("Rolde Bulunan Üye Sayısı", `${rol.members.size}` , true)
  .addField("Rol İsmi", `${rol.name}`,true)
      .addField("Bahsetme", `\`<@&${rol.id}>\`` , true)

  .addField("Etiketlenebilir mi?", `${rol.mentionable ? 'Evet' : 'Hayır'}`,true)
      .addField("Ayrı Gösteriliyor mu?" , `${rol.hoisted ? 'Hayır' : 'Evet'}`,true)
   .addField("Renk" , renk,true)
    .addField("Kuruluş Tarihi", moment(rol.createdAt).format('DD.MM.YYYY'),true)
  .addField("Pozisyon (En Üstten)", `${message.guild.roles.cache.size-rol.position}/${message.guild.roles.cache.size}`,true)
        .addField("Yetkileri", `Yönetici (bütün yetkiler)`,false)

    message.channel.send(si)
}
}
}
