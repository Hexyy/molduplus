const { Client , Message , MessageEmbed } = require('discord.js');
const Discord = require('discord.js')
module.exports = {
 name: 'gbitir',
 aliases: ['çekiliş-bitir'] ,
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
    .setDescription(`**${message.author.username}** bu komutu kullanabilmek için \`Yönetici\` yetkisine veya \`Giveaways\` adında bir role sahip olmalısın!`)
    if(!message.guild.me.hasPermission(['SEND_MESSAGES','MANAGE_ROLES','EMBED_LINKS'])) return
    let rol = message.guild.roles.cache.find(role => role.name == "Giveaways");
    if (!message.member.hasPermission('ADMINISTRATOR') && !message.member.roles.cache.has(rol.id)) return message.channel.send(noperm)
    let ID = args[0]
    if(!args[0] || isNaN(args[0])) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`Lütfen geçerli bir çekiliş mesajı ID sini giriniz!`))
      let giveaway =  client.çekiliş.giveaways.find((g) => g.messageID === args[0]);
      if(!giveaway) return message.channel.send(' Şu çekilişi bulamadım: `'+ args.join(' ') + '`.');
        client.çekiliş.edit(giveaway.messageID, { setEndTimestamp: Date.now() }).then(() => {
            message.channel.send(' Çekiliş `'+(client.çekiliş.options.updateCountdownEvery/1000)+' saniye` sonra sonlandırılacak.').then(a => a.delete({timeout: 5000}));;
        }).catch((e) => { if(e.startsWith(`\`${giveaway.messageID}\` IDli bir çekiliş zaten bitmiş.`)){ message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`\`${ID}\` IDli bir çekiliş zaten bitmiş.`);
            } else {
                console.error(e);
            }
        });
    }
}
