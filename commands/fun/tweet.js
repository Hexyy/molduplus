const Discord = require('discord.js');
const {MessageEmbed , MessageAttachment}= require("discord.js")
const { createCanvas , loadImage} = require("canvas")
const canvas = createCanvas(1080,720)
const ctx = canvas.getContext("2d")
const request = require("node-superfetch")

module.exports = {
    name: 'tweet',
    aliases: ['twitter', 'twit', 'tweetle'],
    description: 'Tweet atarsınız kısacası',
    usage: ['tweet { @kullanıcı } [ mesaj ]'],
    /** 
    * @param {Discord.Client} client
    * @param {Discord.Message} message
    * @param {String[]} args
    */
    run: async (client, message, args) => {
      let msj
      if (message.mentions.members.first()) msj = args.slice(1).join(' ')
      if (!message.mentions.members.first()) msj = args.slice(0).join(' ')
        if(!msj) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('<:hata:813391295665930260> Hata').setDescription(`Lütfen bir yazı girin`))
            const Canvas= require('canvas')
         , Image = Canvas.Image
        , Font = Canvas.Font
        , path = require('path');
          let uye = message.mentions.members.first() || message.author
          let kisi = client.users.cache.get(uye.id)
          ctx.font = "italic 43px Arial"
          ctx.textalign = "center";
          ctx.fillStyle = "Black"
        const background = await Canvas.loadImage('https://i.hizliresim.com/P7AYvQ.png');
        const { body } = await request.get(kisi.avatarURL({format: 'png'}) || kisi.defaultAvatarURL)
        const foto = await loadImage(body)
        
        ctx.drawImage(background ,0,0,canvas.width,canvas.height)
        ctx.drawImage(foto , 20,30 , 80 , 80)
        ctx.fillText(`${msj}` , 20,180)
        ctx.fillStyle = "Black"
        ctx.font = "italic 50px Arial"
        ctx.fillText(`${message.guild.members.cache.get(kisi.id).displayName}` ,120,70)
        ctx.fillStyle = "Grey"
        ctx.font = "italic 20px Arial"
        ctx.fillText(`${kisi.username}` ,120,100)
          
        const moldup = new MessageAttachment(canvas.toBuffer() , "moldup-tweet.png")
        message.channel.send(moldup).catch(err => message.channel.send(`\`\`\`Bir hata oluştu: ${err}\`\`\``))

        }
    }
