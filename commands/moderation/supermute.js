const Discord = require('discord.js');

module.exports = {
 name: 'süper-mute',
 aliases: ["süpermute", "supermute", "super-mute", "sm"] ,
 description: 'Birden fazla kullanıcıyı aynı anda susturabilirsiniz.',
 usage: ['süper-mute [ @kullanıcılar ] { sebep }'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {

var mutelirolu = "Muted";

let mutekisi = message.mentions.members.first()

let userlar = message.mentions.members.map(user => message.guild.members.cache.get(user.id))
if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Yetersiz Yetki!").setColor("RED").setDescription(`Bu komutu kullanmak için \`Rolleri Yönet\` iznine sahip olman gerekli.`))

  
if (!mutekisi) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`**${message.author.username}** bir kullanıcı etiketlemen gerekiyor!`))
 
    let muterol = message.guild.roles.cache.find(role => role.name == mutelirolu);
  if (!muterol) {
    try {
      muterol = await message.guild.roles.create({
        name: mutelirolu,
        color: "#313136",
        permissions: [],
        reason: message.author.tag + ' - Süper Mute'
      });
      message.guild.channels.forEach(async (channel, id) => {
        await channel.createOverwrite(muterol, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    } catch (e) {
      console.log(e.stack);
    }
  }

  let reason = args.slice(message.mentions.members.size).map(r =>{
    if(r.startsWith("<@")) return;
    return r
  });
    
  let tagm = message.mentions.members.map(user => message.guild.members.cache.get(user.id).user.tag).join(", ")
                                          
  userlar.forEach(async u => await u.roles.add(muterol.id, `[ ${message.author.tag}: Süper Mute ] ${reason}`).catch(err => message.channel.send(`\`\`\`Bir hata oluştu: ${err}\`\`\``)))
  
  return message.channel.send("**" + tagm + "** başarıyla süper mutelendi.")
  
  }
  }
