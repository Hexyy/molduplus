const Discord = require('discord.js');

module.exports = {
 name: 'komut',
 aliases: ['command'] ,
 description: 'Her hangi bir komut hakkında gerekli bilgi alırsınız.',
 usage: ['komut [komut]'],
/** 
* @param {Discord.Client} client
* @param {Discord.Message} message
* @param {String[]} args
*/
run: async (client , message ,args) => {
let cmd = client.commands.get(args[0]) || client.commands.get(client.aliases.get(args[0]))
if(!args[0]) return message.channel.send(`Bir komut adı girmeyi unuttun!`)
if(!cmd) return message.channel.send(`Komutlarımda **${args[0]}** adında komut bulamadım!`) 

message.channel.send(`
\`\`\`fix\n< ?${cmd.usage} >\`\`\`\`\`\`diff\n- Açıklama\n${cmd.description}\n\n- Diğer Kullanımlar\n${cmd.aliases.join(' , ')}\`\`\`\`\`\`md\n> [] = Gerekli argüman\n> {} = İsteğe bağlı argüman\`\`\``)
}
}
