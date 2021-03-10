const Discord = require('discord.js');

module.exports = {
 name: 'emoji-rastgele',
 aliases: ['emojirastgele', 'emoji-random', 'emojirandom', 'rastgele-emoji', 'rastgeleemoji', 'random-emoji', 'randomemoji', 'e-rastgele', 'erastgele', 'e-random', 'erandom'] ,
description: 'Belirttiğiniz sayı kadar rastgele emoji gönderilir.',
usage: ['emoji-rastgele [ emoji sayısı ] { hareketli/hareketsiz }'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {

if(client.emojis.cache.size <= 0) return;

var i = [`Sadece **hareketsiz** emojiler gönderebilirim! \`?rastgele ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25][Math.floor(Math.random() * 24)]} -h\``, `Sadece **hareketli** emojiler gönderebilirim! \`?rastgele ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25][Math.floor(Math.random() * 24)]} +h\``, `Tek seferde birden fazla emoji gönderebilirim! \`?rastgele ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25][Math.floor(Math.random() * 24)]}\``]
if(!args[0]) {
message.channel.send(new Discord.MessageEmbed().setTitle("<:bilgi:793924524856442911> Bilgi").setColor("BLUE").setDescription(`${i[Math.floor(Math.random() * i.length)]}`));
const emojis = [];
for(var i = 0; i < [1, 2, 3][Math.floor(Math.random() * 2)]; i++) {
  emojis.push(client.emojis.cache.random().id);
};
return message.channel.send(emojis.map(x => client.emojis.cache.get(x)).join(''));
} else {

if(args[0] > 25) return message.channel.send(new Discord.MessageEmbed().setTitle("<:hata:813391295665930260> Hata!").setColor("RED").setDescription(`Tek seferde en fazla 25 adet rastgele emoji gönderebilirim.`));

if(!args[1]) {
const emojis = [];
for(var i = 0; i < args[0]; i++) {
  emojis.push(client.emojis.cache.random().id);
};
return message.channel.send(emojis.map(x => client.emojis.cache.get(x)).join(''));
} else {
if(!['+h', '-h', 'hareketsiz', 'hareketli'].includes(args[1])) {
message.channel.send(new Discord.MessageEmbed().setTitle("<a:not_found:767708663141105664> Uyarı").setColor("BLUE").setDescription("Emojiyi harekeli mi yoksa hareketsiz mi istediğinizi belirtmediğiniz için her ikisinden de emojiler geliyor."))
const emojis = [];
for(var i = 0; i < args[0]; i++) {
  emojis.push(client.emojis.cache.random().id);
};
return message.channel.send(emojis.map(x => client.emojis.cache.get(x)).join(''));
};
if(args[1] === '+h' || args[1] === 'hareketli') {
const emojis = [];
for(var i = 0; i < args[0]; i++) {
  emojis.push(client.emojis.cache.filter(a => a.animated).random().id);
};
return message.channel.send(emojis.map(x => client.emojis.cache.get(x)).join(''));
};
if(args[1] === '-h' || args[1] === 'hareketsiz') {
const emojis = [];
for(var i = 0; i < args[0]; i++) {
  emojis.push(client.emojis.cache.filter(a => !a.animated).random().id);
};
return message.channel.send(emojis.map(x => client.emojis.cache.get(x)).join(''));
};
};
}
}
}
