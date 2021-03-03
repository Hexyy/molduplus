
const { Client } = require('discord.js')
/**
 * @param {Client} client
 */
module.exports = (client) => {
const durumlar = ['bot.moldup.tk | ?yardım', 'youtube.com/AlpuTV | Yapımcımın kanalına abone olursan sevinirim 😊']
setInterval(function()  {
    const durum = Math.floor(Math.random() * durumlar.length)

    client.user.setPresence( { 
        activity: {
    name: "bot.moldup.tk | ?yardım",
    type: 'WATCHING'
        }, status: 'online'
    })    
}, 1000);
    
console.log(require('chalk').blue(`${client.user.tag} ismiyle giriş yaptım!`));
}
