const { Client , Message , MessageEmbed } = require('discord.js');
const Discord = require('discord.js')
module.exports = {
 name: 'greroll',
 aliases: ['çekiliş-yeniden-çek'] ,
 description: 'Çekilişi yeniden çekersiniz.',
 usage: ['greroll [ çekiliş mesaj ID]'],
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
    if(!args[0] || isNaN(args[0])) return message.channel.send(new Discord.MessageEmbed().setTitle("Hata").setColor('RED').setDescription(`Lütfen geçerli bir çekiliş mesajı ID sini giriniz!`))
    client.çekiliş.reroll(ID, {
            messages: {
                congrat: 'Yeni kazanan(lar) {winners}, tebrikler! <:cekilis:798233545436561468>\n{messageURL}',
                error: 'Yeterli katılım yok! Çekiliş tekrardan çekilemedi.'
            }
        }).then(() => {
      message.channel.send(' Çekiliş kazananları yeniden belirlendi.').then(a => a.delete({timeout: 5000}));
    }).catch(e => message.channel.send(`\`${ID}\` IDli bir çekiliş bulamadım veya o çekiliş henüz bitmemiş.`))
}
}
