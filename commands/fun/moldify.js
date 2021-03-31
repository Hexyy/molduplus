const Discord = require('discord.js');
const request = require('node-superfetch');
     const Canvas = require('canvas'),
     Image = Canvas.Image,
     Font = "Tahoma",
     path = require('path');
module.exports = {
    name: 'moldify',
    aliases: ['moldupla', 'm', 'mify'],
    description: 'Avatarınızı Moldup\'a benzetirsiniz!',
    usage: ['moldify { @kullanıcı }'],
    /** 
    * @param {Discord.Client} client
    * @param {Discord.Message} message
    * @param {String[]} args
    */
    run: async (client, message, args) => {

let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author

//message.channel.send("<a:blobportal:793204583341097072> Fotoğraf yükleniyor...").then(a => a.delete({timeout:1200}))
     const canvas = Canvas.createCanvas(1024, 1024);
     const ctx = canvas.getContext("2d");
   
     const background = await Canvas.loadImage(user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))

     ctx.save()
     ctx.rotate(-50)
     ctx.drawImage(background, 200, -275, canvas.width, canvas.height);
     ctx.restore()
   
     ctx.strokeStyle = "#000000";
     ctx.strokeRect(0, 0, canvas.width, canvas.height);

     let avatarURL = "https://i.imgur.com/FzSk4Fy.png"
     const { body } = await request.get(avatarURL);
     const avatar = await Canvas.loadImage(body);
     ctx.drawImage(avatar, -5, 0, 1024, 1024);
   
   
     const attachment = new Discord.MessageAttachment(
       canvas.toBuffer(),
       "moldify.png"
     );
     
     message.channel.send(attachment)
    }
}
