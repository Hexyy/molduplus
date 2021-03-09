module.exports = {
    name: 'eval',
    aliases: [] ,
   /** 
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   run: async (client , message ,args) => {
    if (message.author.id !== "696373721992003604" && message.author.id !== "722186767704522812") return
       
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
