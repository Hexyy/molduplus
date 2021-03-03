
const { Client } = require('discord.js')
/**
 * @param {Client} client
 */
module.exports = (client) => {
const durumlar = ['bot.moldup.tk | ?yardım', 'youtube.com/AlpuTV | Yapımcımın kanalına abone olursan sevinirim 😊']
client.user.setActivity("bot.moldup.tk | ?yardım")
    
console.log(require('chalk').blue(`${client.user.tag} ismiyle giriş yaptım!`));
}
