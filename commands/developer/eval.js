module.exports = {
    name: 'eval',
    aliases: [] ,
   /** 
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   run: async (client , message ,args) => {
    const noperm = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription(`**${message.author.username}** bu komutu kullanabilmek için \`botun yapımcısı\` olmalısın!`)
    if(!message.guild.me.hasPermission(['SEND_MESSAGES','MANAGE_EMOJIS','EMBED_LINKS'])) return
    if (message.author.id !== "696373721992003604" && message.author.id !== "722186767704522812") return message.channel.send(noperm.setTitle('<:hata:813391295665930260> Yetersiz Yetki!'))
       
       try {
      const code = args.join(" ");

      if(!code) return message.channel.send("Lütfen denenecek bir kod yazınız.")
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(evaled);
    } catch (err) {
      message.channel.send(`\`Bir Hata Oluştu\` \`\`\`xl\n${err}\n\`\`\``);
    }
 
}
}
