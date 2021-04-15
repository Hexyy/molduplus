const { level } = require("../../database/SeviyeDataBase")
const Discord = require("discord.js")
module.exports = {
    name: 'rewards',
    aliases: ['reward', 'ödüller'] ,
    description: 'Seviye atlayınca kazanılan ödülleri gösterir.',
    usage: ['rewards'],

   /** 
   * @param {Discord.Client} client
   * @param {Discord.Message} message
   * @param {String[]} args
   */
   run: async (client , message ,args) => {


    let data = await level.fetch(`levelrol_${message.guild.id}`)
    if (!data) return message.channel.send("**:x: " + message.guild.name + " isimli sunucuda seviye rolleri ayarlanmamış!")

    message.channel.send(new Discord.MessageEmbed().setColor(message.guild.me.displayHexColor).setTitle(`${message.guild.name} - Seviye Ödülleri`).setDescription(`${data[0] && message.guild.roles.cache.get(data[0].rol).id ? `Seviye **${data[0].lvl}**: ${message.guild.roles.cache.get(data[0].rol)}` : ""}
${data[1] && message.guild.roles.cache.get(data[1].rol).id ? `Seviye **${data[1].lvl}**: ${message.guild.roles.cache.get(data[1].rol)}` : ""}
${data[2] && message.guild.roles.cache.get(data[2].rol).id ? `Seviye **${data[2].lvl}**: ${message.guild.roles.cache.get(data[2].rol)}` : ""}
${data[3] && message.guild.roles.cache.get(data[3].rol).id ? `Seviye **${data[3].lvl}**: ${message.guild.roles.cache.get(data[3].rol)}` : ""}
${data[4] && message.guild.roles.cache.get(data[4].rol).id ? `Seviye **${data[4].lvl}**: ${message.guild.roles.cache.get(data[4].rol)}` : ""}
${data[5] && message.guild.roles.cache.get(data[5].rol).id ? `Seviye **${data[5].lvl}**: ${message.guild.roles.cache.get(data[5].rol)}` : ""}
${data[6] && message.guild.roles.cache.get(data[6].rol).id ? `Seviye **${data[6].lvl}**: ${message.guild.roles.cache.get(data[6].rol)}` : ""}
${data[7] && message.guild.roles.cache.get(data[7].rol).id ? `Seviye **${data[7].lvl}**: ${message.guild.roles.cache.get(data[7].rol)}` : ""}`))

   }
}