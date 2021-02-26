
const { Client } = require('discord.js')
/**
 * @param {Client} client
 */
module.exports = (client) => {
//const durumlar = ['online', 'dnd']
//setInterval(function()  {
    //const durum = Math.floor(Math.random() * durumlar.length)
//}, 1000);

    client.user.setPresence( { 
        activity: {
    name: 'bot.moldup.tk | ?yardım',
    type: 'LISTENING'
        }, status: 'online'
    })    
    
console.log(require('chalk').blue(`${client.user.tag} ismiyle giriş yaptım!`));
}
