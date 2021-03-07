const { Player } = require('discord-player')
const Discord = require('discord.js')
const player = new Player(new Discord.Client() , {
autoSelfDeaf: true,
})
player.on('trackStart', (message, track) => message.channel.send(new Discord.MessageEmbed()
.setColor('GREEN').setTitle(track.title).setURL(track.url).setDescription(`<:moldup_evet:783582088346468384> **${track.title}** isimli şarkı oynatılıyor! \`[${message.author.tag}]\``)))
player.on('channelEmpty', (message, queue) => message.channel.send(new Discord.MessageEmbed().setColor('BLUE').setDescription('<:moldup_uyku:783582251836637214> Müzik çalınan kanalda kimse kalmadığı için şarkı durduruldu.')))
player.on('botDisconnect', (message) => message.channel.send(new Discord.MessageEmbed().setColor('BLUE').setDescription('<:moldup_uyku:783582251836637214> Müzik çalınan kanaldan beni çıkarttığınız için şarkı durduruldu.')))
player.on('trackAdd', (message, queue, track) => message.channel.send(new Discord.MessageEmbed().setColor('BLUE').setTitle(track.title).setURL(track.url).setDescription(`<:moldup_evet:783582088346468384> **${track.title}** isimli şarkı kuyruğa eklendi! \`[${message.author.tag}]\``)))
player.on('queueEnd' , (message , queue) => message.channel.send(new Discord.MessageEmbed().setColor('BLUE').setDescription(`<:moldup_uyku:783582251836637214> Kuyruktaki bütün şarkılar oynatıldığı için sesli kanaldan ayrılıyorum!`)))
player.on('searchResults', (message, query, tracks) => {

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${query} şarkısını arattım ve bunları buldum`, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(tracks.map((t, i) => `**${i}: [${t.title}](${t.url})**`))
    .setFooter('Oynatmak istediğin şarkının numarasını yazman yeterli')
    message.channel.send(embed);

})

player.on('searchInvalidResponse', (message, query, tracks, content, collector) => {

    if (content === 'cancel' || content === 'iptal' || content === 'hayır') {
        collector.stop()
        return message.channel.send('Tamam, aramayı iptal ettim.')
    }

    message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`1 ile ${tracks.length} arasında geçerli bir sayı yazmadınız, şarkı oynatmak için komutu tekrar yazmalısınız!`))

})
player.on('searchCancel', (message, query, tracks) => message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription('Şarkı numarasını zamanında belirtmediniz, şarkı oynatmak için komutu tekrar yazmalısınız!')))
player.on('noResults', (message, query) => message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`\`${query}\` adında bir şarkı bulamadım.`)))
player.on('error', (error, message) => {
    switch(error){
        case 'UnableToJoin':
            message.channel.send('```Bir hata oluştu: Bulunduğun sesli kanala katılmak için gerekli izinlerim bulunmuyor!```')
            break;
        case 'LiveVideo':
            message.channel.send('```Bir hata oluştu: YouTube canlı yayınları sesli kanalda oynatılamaz!```')
            break;
        case 'VideoUnavailable':
            message.channel.send('```Bir hata oluştu: Bu video mevcut değil veya gizli!```');
            break;
        default:
            message.channel.send(`\`\`\`Bir hata oluştu: ${error}\`\`\``)
    }
})
   
    

module.exports.player = player
