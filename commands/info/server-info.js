const canvacord = require("canvacord");
const Discord = require("discord.js");
const moment = require('moment')
moment.locale('tr')
module.exports = {
 name: 'sunucu-bilgi',
 aliases: ['sb', 'sunucubilgi', 'server', 'sunucu', 'server-info', 'serverinfo'] ,
description: 'Sunucu hakkında bilgi alırsınız',
usage: ['sunucu-bilgi'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {

   let guild = message.guild

if (!guild) return;
  
  let bost = guild.premiumSubscriptionCount
  let lv = guild.premiumTier || "Yok"
  
  //----------------------------------  
  
  
  if(!guild.me.hasPermission("BAN_MEMBERS")) {
    
    if (!guild.me.hasPermission("MANAGE_EMOJIS")) {
    
      var serverIcon = client.guilds.cache.get(guild.id).iconURL({size: 1024, dynamic: true});

    
    let renk = guild.me.displayHexColor;
    
    if (!serverIcon) serverIcon = "https://images-ext-2.discordapp.net/external/GyQicPLz_zQO15bOMtiGTtC4Kud7JjQbs1Ecuz7RrtU/https/cdn.discordapp.com/embed/avatars/1.png"    
    
        let si = new Discord.MessageEmbed()
        .setColor(renk)
        .setAuthor(`${guild.name}`)
        .addField("Sunucu Sahibi", `<:sahip:766588325166579713> ${guild.owner}`, true)
        .addField("Üye Sayısı", `<:uye:766588086301753384> ${guild.memberCount}`, true)
        .addField("Boost Sayısı", `<:nitro_boost:767703364652761098> ` + bost + " (Seviye " + lv + ")", true)
        .addField("Rol Sayısı", `<:tik:766593067133960222> ${guild.roles.cache.size}`, true)
        .addField("Metin Kanalları", `<:metinkanali:766588826113015809> ${guild.channels.cache.filter((c) => c.type === "text").size}`, true)
        .addField("Ses Kanalları", `<:seskanali:766588875568316436> ${guild.channels.cache.filter((c) => c.type === "voice").size}`, true)
        .setThumbnail(serverIcon)
.setFooter(`Oluşturulma Tarihi: ${moment(guild.createdAt).format('DD.MM.YYYY')}`)

    return message.channel.send(si)
      
    } else if (guild.me.hasPermission("MANAGE_EMOJIS")){
      var serverIcon = client.guilds.cache.get(guild.id).iconURL({size: 1204, dynamic: true});

    
    let renk = guild.me.displayHexColor;
    
    if (!serverIcon) serverIcon = "https://images-ext-2.discordapp.net/external/GyQicPLz_zQO15bOMtiGTtC4Kud7JjQbs1Ecuz7RrtU/https/cdn.discordapp.com/embed/avatars/1.png"    
    
        let si = new Discord.MessageEmbed()
        .setColor(renk)
        .setAuthor(`${guild.name}`)
        .addField("Sunucu Sahibi", `<:sahip:766588325166579713> ${guild.owner}`, true)
        .addField("Üye Sayısı", `<:uye:766588086301753384> ${guild.memberCount}`, true)
        .addField("Boost Sayısı", `<:nitro_boost:767703364652761098> ` + bost + " (Seviye " + lv + ")", true)
        .addField("Emoji Sayısı", `<:emoji:766586536044527616> ${guild.emojis.cache.size}`, true)
        .addField("Rol Sayısı", `<:tik:766593067133960222> ${guild.roles.cache.size}`, true)
        .addField("Metin Kanalları", `<:metinkanali:766588826113015809> ${guild.channels.cache.filter((c) => c.type === "text").size}`, true)
        .addField("Ses Kanalları", `<:seskanali:766588875568316436> ${guild.channels.cache.filter((c) => c.type === "voice").size}`, true)
        .setThumbnail(serverIcon)
.setFooter(`Oluşturulma Tarihi: ${moment(guild.createdAt).format('DD.MM.YYYY')}`)

    return message.channel.send(si)
      
    }
    
  } else if(guild.me.hasPermission("BAN_MEMBERS")) {
    
    if (!guild.me.hasPermission("MANAGE_EMOJIS")) {
      
      guild.fetchBans()
  .then(banned => {
    let list = banned.map(user => user.tag).join('\n');
        
    
      var serverIcon = client.guilds.cache.get(guild.id).iconURL({size: 1024, dynamic: true});

    
    let renk = guild.me.displayHexColor;
    
    if (!serverIcon) serverIcon = "https://images-ext-2.discordapp.net/external/GyQicPLz_zQO15bOMtiGTtC4Kud7JjQbs1Ecuz7RrtU/https/cdn.discordapp.com/embed/avatars/1.png"    
    
        let si = new Discord.MessageEmbed()
        .setColor(renk)
        .setAuthor(`${guild.name}`)
        .addField("Sunucu Sahibi", `<:sahip:766588325166579713> ${guild.owner}`, true)
        .addField("Üye Sayısı", `<:uye:766588086301753384> ${guild.memberCount}`, true)
        .addField("Boost Sayısı", `<:nitro_boost:767703364652761098> ` + bost + " (Seviye " + lv + ")", true)
        .addField("Rol Sayısı", `<:tik:766593067133960222> ${guild.roles.cache.size}`, true)
        .addField("Metin Kanalları", `<:metinkanali:766588826113015809> ${guild.channels.cache.filter((c) => c.type === "text").size}`, true)
        .addField("Ses Kanalları", `<:seskanali:766588875568316436> ${guild.channels.cache.filter((c) => c.type === "voice").size}`, true)
        .addField("Yasaklama Sayısı", `<:ban:766588786473304084> ${banned.size}`, true)
        .setThumbnail(serverIcon)
.setFooter(`Oluşturulma Tarihi: ${moment(guild.createdAt).format('DD.MM.YYYY')}`)

    return message.channel.send(si)
      
      })
      
    } else if (guild.me.hasPermission("MANAGE_EMOJIS")){
      
          guild.fetchBans()
  .then(banned => {
    let list = banned.map(user => user.tag).join('\n');
      

        
      var serverIcon = client.guilds.cache.get(guild.id).iconURL({size: 1024, dynamic: true});

    
    let renk = guild.me.displayHexColor;
    
    if (!serverIcon) serverIcon = "https://images-ext-2.discordapp.net/external/GyQicPLz_zQO15bOMtiGTtC4Kud7JjQbs1Ecuz7RrtU/https/cdn.discordapp.com/embed/avatars/1.png"    
    
        let si = new Discord.MessageEmbed()
        .setColor(renk)
        .setAuthor(`${guild.name}`)
        .addField("Sunucu Sahibi", `<:sahip:766588325166579713> ${guild.owner}`, true)
        .addField("Üye Sayısı", `<:uye:766588086301753384> ${guild.memberCount}`, true)
        .addField("Boost Sayısı", `<:nitro_boost:767703364652761098> ` + bost + " (Seviye " + lv + ")", true)
        .addField("Emoji Sayısı", `<:emoji:766586536044527616> ${guild.emojis.cache.size}`, true)
        .addField("Rol Sayısı", `<:tik:766593067133960222> ${guild.roles.cache.size}`, true)
        .addField("Metin Kanalları", `<:metinkanali:766588826113015809> ${guild.channels.cache.filter((c) => c.type === "text").size}`, true)
        .addField("Ses Kanalları", `<:seskanali:766588875568316436> ${guild.channels.cache.filter((c) => c.type === "voice").size}`, true)
        .addField("Yasaklama Sayısı", `<:ban:766588786473304084> ${banned.size}`, true)
        .setThumbnail(serverIcon)
.setFooter(`Oluşturulma Tarihi: ${moment(guild.createdAt).format('DD.MM.YYYY')}`)
    return message.channel.send(si)
      
    })
    
    }    
  
  }
}
}
