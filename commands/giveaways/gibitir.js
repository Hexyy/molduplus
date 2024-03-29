const { Client , Message , MessageEmbed } = require('discord.js');
const Discord = require('discord.js')
module.exports = {
 name: 'gbitir',
 aliases: ['çekiliş-bitir', 'gend', 'çbitir'] ,
 description: 'Çekilişi bitirirsiniz.',
 usage: ['gbitir [ çekiliş mesaj ID ]'],
/** 
* @param {Client} client
* @param {Message} message
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
    let ID = args[0]
    if(!args[0] || isNaN(args[0])) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`Lütfen geçerli bir çekiliş mesajı ID sini giriniz!`))
      let giveaway =  client.çekiliş.giveaways.find((g) => g.messageID === args[0]);
      if(!giveaway) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription('Belirttiğin çekilişi **bu sunucuda** bulamadım veya bu çekiliş zaten bitmiş.'));
        client.çekiliş.edit(giveaway.messageID, { setEndTimestamp: Date.now() }).then(() => {
            message.channel.send(new Discord.MessageEmbed().setTitle(`Görev Tamamlandı!`).setColor("#22BF41").setDescription('<:moldup_evet:783582088346468384> Çekiliş **'+(client.çekiliş.options.updateCountdownEvery/1000)+' saniye** sonra sonlandırılacak.')).then(a => a.delete({timeout: 5000}));;
        }).catch((e) => { if(e.startsWith(`\`${giveaway.messageID}\` IDli bir çekiliş zaten bitmiş.`)){ message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription('Belirttiğin çekilişi **bu sunucuda** bulamadım veya bu çekiliş zaten bitmiş.'));
            } else {
                message.channel.send("```Bir hata oluştu: " + e + "```");
            }
        });
    }
}
