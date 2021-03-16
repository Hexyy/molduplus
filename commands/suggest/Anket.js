const Discord = require('discord.js');

module.exports = {
    name: 'anket',
    aliases: ['poll', 'oylama'],
    description: 'Bir oylama mesajı oluşturursunuz.',
    usage: ['anket [ soru ]/[ seçenek ], [ seçenek ], { seçenek (en fazla 10) }'],
    /** 
    * @param {Discord.Client} client
    * @param {Discord.Message} message
    * @param {String[]} args
    */
    run: async (client, message, args) => {
    const noperm = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription(`**${message.author.username}** bu komutu kullanabilmek için \`Sunucuyu Yönet\` yetkisine veya \`Anketçi\` adında bir role sahip olmalısın!`)
    if(!message.guild.me.hasPermission(['SEND_MESSAGES','EMBED_LINKS'])) return
    let rol = message.guild.roles.cache.find(role => role.name == "Anketçi");
    if (!message.member.hasPermission('MANAGE_SERVER') && !message.member.roles.cache.has(rol.id)) return message.channel.send(noperm.setTitle('<:hata:813391295665930260> Yetersiz Yetki!'))

const alpuhata = (hata) => {
        message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('<:hata:813391295665930260> Hata').setDescription(`${hata}`));
    };

    try {
        const alpuargs = args.join(' ').split('/')
        const hmmm = alpuargs[0].trim();
        if (!hmmm) return alpuhata('Anketinizde en az bir şık bulunmalıdır!');
        const trimer = alpuargs[1].trim().split(',');
        const ikinci = trimer.length;
        if (ikinci > 10) return alpuhata('Maksimum 10 adet şık koyabilirsiniz.');
        if (trimer.includes(' ')) return alpuata('Boş bir şık koyamazsınız.')
        
        const pollEmbed = new Discord.MessageEmbed().setTitle('<a:yuklenme:783425041869307936> Anket hazırlanıyor, lütfen bekleyiniz.');
        const emojiler = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
        message.channel.send(pollEmbed).then(async pollMsg => {
            for (let ucuncu = 0; ucuncu < ikinci; ucuncu++) {
                pollMsg.react(emojiler[ucuncu]);
                pollEmbed.addField(`${emojiler[ucuncu]} ${trimer[ucuncu].trim()}`, `\u200B`, true);
                pollEmbed.setColor("BLUE")
                pollEmbed.setFooter(`Anketi yapan: ${message.author.tag}`)
                pollEmbed.setTimestamp()
            };
            
            await pollMsg.edit(pollEmbed.setTitle(hmmm));
        });
    } catch(err) {
        message.channel.send("```Bir hata oluştu: " + err + "```");
    }
    }
    }
