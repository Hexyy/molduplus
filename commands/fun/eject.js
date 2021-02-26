const fetch = require('node-fetch')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'eject',
    aliases: [],
    description: 'Dene gör açıklama bulamadım :c',
    usage: ['eject { @kullanıcı }'],
    /** 
    * @param {Discord.Client} client
    * @param {Discord.Message} message
    * @param {String[]} args
    */
    run: async (client, message, args) => {
const adam = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
const imp = [true,false]
const impo = imp[Math.floor(Math.random() * imp.length)]
const renkler = ["black", "blue", "brown" , "cyan","darkgreen","lime","orange", "pink" ,"purple" ,"red" , "white" , "yellow"]
const masum = renkler[Math.floor(Math.random() * renkler.length)]

const hexy = await fetch(`https://vacefron.nl/api//ejected?name=${adam.username}&impostor=${impo}&crewmate=${masum}`)
const finiş = new MessageEmbed()
.setColor('RANDOM')
.setImage(hexy.url)
.setTitle(`${adam.username} asıldı!`)
message.channel.send(finiş)
    }}