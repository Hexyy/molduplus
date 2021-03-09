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
           
           
           if (!status) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription("Lütfen botun ayarlanacağı modu giriniz.\n\n**Argümanlar:**\n`oynuyor`, `izliyor`, `dinliyor`, `yarışıyor`)"))
           if (!durum) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription("Lütfen botun ayarlanacağı durumu giriniz.\n\n**Örnek:**\n`bugün hava çok güzel değil mi?`"))
           
           let statü = status.replace("oynuyor", "PLAYING").replace("izliyor", "WATCHING").replace("dinliyor", "LISTENING").replace("yarışıyor", "COMPETING")
           client.user.setActivity(durum, { "type": statü })
           
           message.channel.send("👌")
       
}
           }
