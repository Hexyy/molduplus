
const { Client } = require('discord.js')
/**
 * @param {Client} client
 */
module.exports = (client) => {
const durumlar = ['bot.moldup.tk | ?yardım', 'youtube.com/AlpuTV | Yapımcımın kanalına abone olursan sevinirim 😊']

setInterval(() => {
        const index = Math.floor(Math.random() * (durumlar.length - 1) + 1);
        client.user.setActivity(durumlar[index]);
    }, 10000);
    
console.log(require('chalk').blue(`${client.user.tag} ismiyle giriş yaptım!`));
}
