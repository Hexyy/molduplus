
const { Client } = require('discord.js')
/**
 * @param {Client} client
 */
module.exports = (client) => {
//const durumlar = ['bot.moldup.tk | ?yardım']

//setInterval(function() {

         //var random = Math.floor(Math.random()*(durumlar.length-0+1)+0);
         client.user.setActivity('bot.moldup.tk | ?yardım', {"type": "WATCHING"});

        //}, 2 * 5000);
    
console.log(require('chalk').blue(`${client.user.tag} ismiyle giriş yaptım!`));
}
