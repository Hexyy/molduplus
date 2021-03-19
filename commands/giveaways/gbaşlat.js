const Discord = require('discord.js');
const ms = require('ms')
module.exports = {
 name: 'gbaşlat',
 aliases: ['çekiliş-başlat', 'gstart', 'gcreate', 'çbaşlat'],
 description: 'Çekiliş başlatırsınız.',
    usage: ['gbaşlat { #kanal } [ süre ] [ kazanan sayısı ] [ ödül ]'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
const noperm = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('<:hata:813391295665930260> Yetersiz Yetki!')
    .setDescription(`**${message.author.username}** bu komutu kullanabilmek için \`Sunucuyu Yönet\` yetkisine veya \`Giveaways\` adında bir role sahip olmalısın!`)
    if(!message.guild.me.hasPermission(['SEND_MESSAGES','EMBED_LINKS'])) return
    let rol = message.guild.roles.cache.find(role => role.name == "Giveaways");
    if (!message.member.hasPermission('MANAGE_SERVER') && !message.member.roles.cache.has(rol.id)) return message.channel.send(noperm)
    let kanal = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
    if(!kanal) {
    let süre = args[0]
    if(!süre || isNaN(ms(süre))) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('Hata')
    .setDescription(`
 Lütfen çekilişin sona ereceği zamanı belirtiniz!
    
\`1d = 1 Gün | 1h = 1 Saat | 1m = 1 Dakika | 1s = 1 Saniye\`
    `)).then(a => a.delete({timeout: 5000}));
    let kazanan = args[1]
    if(isNaN(kazanan) || (parseInt(kazanan) <= 0)) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`Lütfen kazanan sayısını belirtiniz!`)).then(a => a.delete({timeout: 5000}));
    if (Number(kazanan) > 30) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`Maksimum 30 kazanan, lütfen.`)).then(a => a.delete({timeout: 5000}));
    let ödül = args.slice(2).join(' ')
    if(!ödül) message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`Lütfen ödülü belirtiniz!`)).then(a => a.delete({timeout: 5000}));
    
    message.delete()
    client.çekiliş.start(message.channel, {
                time: ms(süre),
                prize: ödül,
                winnerCount: kazanan,
                hostedBy: message.author,
    
                messages: {
                   giveaway: "**ÇEKİLİŞ VAR!**",
                    giveawayEnded: "**ÇEKİLİŞ BİTTİ**",
                    timeRemaining: "Kalan Süre: **{duration}**",
                    inviteToParticipate: "🎉 emojisine tıklayarak katılabilirsiniz",
                    embedFooter: "Moldup Çekiliş Sistemi",
                    winMessage: "Tebrikler {winners}, **{prize}** ödülünü kazandınız! <a:cekilis:822029668294721566>\n{messageURL}",
                    noWinner: "Herhangi Bir Kazanan Belirlenemedi <a:cekilis:822029668294721566>",
                    hostedBy: "{user} tarafından yapıldı\n**[Ekstra katılım için oy verebilirsiniz](https://bot.moldup.tk/oy.html)**",
                    winners: "Kazanan(lar)",
                    endedAt: "Bitiş Tarihi",
                    
                    units: {
                        seconds: "saniye",
                        minutes: "dakika",
                        hours: "saat",
                        days: "gün",
                        pluralS: false
                        
                    }
                }
            })
    } else {
    let süre = args[1]
    if(!süre || isNaN(ms(süre))) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`Lütfen çekilişin sona ereceği zamanı belirtiniz!`)).then(a => a.delete({timeout: 5000}));
    if (Date.now()+süre < Date.now()+"30s") return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`Minimum 30 saniyelik süre, lütfen.`)).then(a => a.delete({timeout: 5000}));
    let kazanan = args[2]
    if(isNaN(kazanan) || (parseInt(kazanan) <= 0)) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`Lütfen kazanan sayısını belirtiniz!`)).then(a => a.delete({timeout: 5000}));
    if (Number(kazanan) > 30) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`Maksimum 30 kazanan, lütfen.`)).then(a => a.delete({timeout: 5000}));
    let ödül = args.slice(3).join(' ')
    if(!ödül) message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`Lütfen ödülü belirtiniz!`)).then(a => a.delete({timeout: 5000}));
    
    
            client.çekiliş.start(kanal, {
                time: ms(süre),
                prize: ödül,
                winnerCount: kazanan,
                hostedBy: message.author,
    
                messages: {
                   giveaway: "**ÇEKİLİŞ VAR!**",
                    giveawayEnded: "**ÇEKİLİŞ BİTTİ**",
                    timeRemaining: "Kalan Süre: **{duration}**",
                    inviteToParticipate: "🎉 emojisine tıklayarak katılabilirsiniz",
                    embedFooter: "Bitiş Tarihi",
                    winMessage: "Tebrikler {winners}, **{prize}** ödülünü kazandınız! <a:cekilis:822029668294721566>",
                    noWinner: "Herhangi Bir Kazanan Belirlenemedi <a:cekilis:822029668294721566>",
                    hostedBy: "{user} tarafından yapıldı\n**[Ekstra katılım için oy verebilirsiniz](https://bot.moldup.tk/oy.html)**",
                    winners: "kazanan(lar)",
                    endedAt: "Bittiği Tarih",
                    units: {
                        seconds: "saniye",
                        minutes: "dakika",
                        hours: "saat",
                        days: "gün",
                        pluralS: false
                    }
                }
            })
      message.channel.send(new Discord.MessageEmbed().setTitle(`Görev Tamamlandı!`).setColor("#22BF41").setDescription(`<:moldup_evet:783582088346468384> ${kanal} kanalında çekiliş başlatıldı!`))
    }




}
}
