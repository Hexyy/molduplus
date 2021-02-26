const Discord = require('discord.js');
const { kayit } = require('../../database/KayıtDataBase')
const { kız , çarpı , tik } = require("../../emojiler.json")


module.exports = {
 name: 'kayıt-bilgi',
 aliases: ["kayıtbilgi", "kbilgi", "k-bilgi"] ,
 description: 'Kayıt sisteminin ayarlanmış verilerini gösterir.',
    usage: ['kayıt-bilgi'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {


const erkekroleID = await kayit.fetch(`erkek.${message.guild.id}`);
const yetkiliroleID = await kayit.fetch(`yetkili.${message.guild.id}`);
const kayıtsızroleID = await kayit.fetch(`kayıtsız.${message.guild.id}`);
const kadınroleID = await kayit.fetch(`kadın.${message.guild.id}`);
let erkek = message.guild.roles.cache.get(erkekroleID);
let yetkili = message.guild.roles.cache.get(yetkiliroleID);
let kayıtsız = message.guild.roles.cache.get(kayıtsızroleID);
let kadın = message.guild.roles.cache.get(kadınroleID);
const üyeroleID = await kayit.fetch(`üye.${message.guild.id}`);
let üye = message.guild.roles.cache.get(üyeroleID);

        let si = new Discord.MessageEmbed()
   .setAuthor(`${message.guild.name} - Kayıt Bilgi`, client.guilds.cache.get(message.guild.id).iconURL({size: 2048, dynamic: true}))
   .setDescription(`\`・\` **Yetkili Rolü: ${yetkili ? yetkili : "*Ayarlanmamış*"}**
\`・\` **Üye Rolü: ${üye ? üye : "*Ayarlanmamış*"}**
\`・\` **Erkek Rolü: ${erkek ? erkek : "*Ayarlanmamış*"}**
\`・\` **Kadın Rolü: ${kadın ? kadın : "*Ayarlanmamış*"}**
\`・\` **Kayıtsız Rolü: ${kayıtsız ? kayıtsız : "*Ayarlanmamış*"}**`)
        .setFooter(`${message.author.username} tarafından istendi` , message.author.displayAvatarURL({dynamic: true})).setColor("#22BF41")


    message.channel.send(si);
  
}}