const Discord = require('discord.js');
const { mod } = require('../../database/ModerasyonDataBase')

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
        name: "Muted",
        color: "#313136",
        permissions: [],
        reason: `[ ${message.author.tag}: Süper Mute ] Muteli Rolü Oluşturuldu`
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

  let reason = args.slice(message.mentions.members.size).join(" ")
                                             
  userlar.forEach(async u => await u.roles.add(muterol.id, `[ ${message.author.tag}: Süper Mute ] ${reason}`).catch(err => message.channel.send(`\`\`\`Bir hata oluştu: ${err}\`\`\``)))
  
let tagm = message.mentions.members.map(user => message.guild.members.cache.get(user.id)).join(", ")
   

await mod.add(`işlem_${message.guild.id}`, 1)
 
 let işlem = await mod.fetch(`işlem_${message.guild.id}`)
 
  return message.channel.send("<:tik:766402113185120336> `İşlem #" + işlem + "` " + tagm + " süper susturuldu.")
  
  }
  }
