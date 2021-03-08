module.exports = {
    name: 'durum',
    aliases: ['status', 'durumdegis', 'durumdeğiş', 'durum-değiş', 'durum-degis'] ,
   /** 
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   run: async (client , message ,args) => {
           if (message.author.id !== "696373721992003604" && message.author.id !== "722186767704522812") return
           
           let status = args[0]
           let durum = args.slice(1).join(" ")
           
           
           if (!status) return message.channel.send("Lütfen botun ayarlanacağı modu giriniz.")
           if (!durum) return message.channel.send("Lütfen botun ayarlanacağı durumu giriniz.")
           
           let statü = status.replace("oynuyor", "PLAYING").replace("izliyor", "WATCHING").replace("dinliyor", "LISTENING")
           client.user.setActivity(durum, { "type": statü }).catch(err => message.channel.send(`\`\`\`Bir hata oluştu: ${err}\`\`\``)))
           
           message.channel.send("👍")
       
}
           }
