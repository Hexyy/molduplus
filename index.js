const Discord = require('discord.js');
const client = new Discord.Client()
const handler = require('cords-handler');
const logs = require('discord-logs')
logs(client)

const chclient = new handler.Client()
const cmd = new handler.CommandHandler(client,chclient)
const { ayarlar } = require('./settings/ayarlar')
const { karsilama } = require('./database/KarşılamaDataBase')
const { sistem } = require('./database/SistemDataBase')
const { log } = require('./database/LogDataBase')
cmd.setCommandFolder('./commands')
cmd.setPrefix(ayarlar.prefix)
cmd.setPrefix2(`<@!761571443196559371>`)
cmd.setPrefix3('m!')
cmd.loader()

const event = new handler.EventHandler(client,chclient)
event.setEventFolder('./events')
event.loader()
const giveaway = require('discord-giveaways')
// keşke değişmeseydin // renkleri fln değişcem diye biraz saçmaladı :/
const cekilis = new giveaway.GiveawaysManager(client, {
    storage: './çekiliş.json',
    updateCountdownEvery: 10000,
    hasGuildMembersIntent: false,
    default: {
        botsCanWin: false,
        exemptPermissions: [],
        embedColor: '#00FFC3',
        embedColorEnd: '#353940',
        reaction: '798253124342513735'
    }  
})
client.çekiliş = cekilis

/**
 * --------------------------- Karşılama -------------------
 */
client.on('guildMemberAdd' , async(member) => {
// Oto Rol
if(!member.guild.me.hasPermission('MANAGE_ROLES')) return
let rol = await karsilama.fetch(`otorol_${member.guild.id}`)
if(!rol) return
let role = member.guild.roles.cache.get(rol)
if(role.position >= member.guild.me.roles.highest.position) return
await member.roles.add(role)
// Oto Rol Bitiş

// Özel Mesaj 
let mesaj = await karsilama.fetch(`özelmesaj_${member.guild.id}`)
if(!mesaj) return
member.send(mesaj).catch(e => client.channels.cache.get('801860207256797194').send('Hata').then(m => m.delete()))
.replace('[üye]' , member)
.replace('[üye-id]',member.id)
.replace('[üye-ad]',member.user.username)
.replace('[sunucu-ad]' , member.guild.name)
.replace('[sunucu-id]' , member.guild.id)
.replace('[sunucu-üye]' , member.guild.memberCount)
// Özel Mesaj Bitiş

// Kanal Mesaj 
let kanal = await karsilama.fetch(`kanalmesajkanal_${member.guild.id}`)
let mesaj1 = await karsilama.fetch(`kanalmesaj_${member.guild.id}`)
if(!kanal) return
if(!mesaj1) return

let kanall = member.guild.channels.cache.get(kanal)
if(!kanall.permissionsFor(client.user.id).has('SEND_MESSAGES')) return
kanall.send(mesaj1)
.replace('[üye]' , member)
.replace('[üye-id]',member.id)
.replace('[üye-ad]',member.user.username)
.replace('[sunucu-ad]' , member.guild.name)
.replace('[sunucu-id]' , member.guild.id)
.replace('[sunucu-üye]' , member.guild.memberCount)

})
/**
 * --------------------------- Karşılama Bitiş -------------------
 */

 /**
 * --------------------------- Sistemler -------------------
 */
client.on('message' , async (message) => {
if(message.author.bot || !message.guild) return
const kontrol = await sistem.fetch(`saas_${message.guild.id}`)
if(!kontrol) return
if(!message.guild.me.hasPermission('EMBED_LINKS')) return
if(kontrol) {
if(message.content.toLowerCase() === 'sa' || message.content.toLowerCase() === 'selam' || message.content.toLowerCase() === 'sea' ||message.content.toLowerCase() === 'selamun aleyküm' || message.content.toLowerCase() === 'slm') 
{
message.channel.send(new Discord.MessageEmbed().setAuthor(`${message.author.tag} aleyküm selam , hoş geldin` , message.author.avatarURL({dynamic:false})))
}}})
client.on('messageDelete' , async (mesaj) => {
if(mesaj.author.bot || !mesaj.guild ) return
const token = await log.fetch(`mesajtoken_${mesaj.guild.id}`)
const id = await log.fetch(`mesajid_${mesaj.guild.id}`)
if(!token) return
if(!id) return
const w = new Discord.WebhookClient(id,token)
if(mesaj.attachments.size === 0) {
    const embed = new Discord.MessageEmbed()
    .setColor('RED')
    .setAuthor(`Bir Mesaj Silindi` , mesaj.author.avatarURL({dynamic:true}))
    .setDescription(`
    **Mesajı Silen:** ${mesaj.author}
    **Kanal:** ${mesaj.channel}
    
    **Silinen Mesaj:** ${mesaj.content}
    `).setFooter(`Mesaj ID : ${mesaj.id}` , mesaj.author.avatarURL({dyamic:true}))
    w.send(embed)
} else {
    if(mesaj.attachments.size === 1) {
        const at = new Discord.MessageEmbed()
        .setColor('RED')
        .setAuthor(`Bir Mesaj Silindi` , mesaj.author.avatarURL({dynamic:true}))
        .setImage(mesaj.attachments)
        .setDescription(`
        **Mesajı Silen:** ${mesaj.author}
        **Kanal:** ${mesaj.channel}
        
        **Silinen Mesaj:** ${mesaj.content}
        `).setFooter(`Mesaj ID : ${mesaj.id}` , mesaj.author.avatarURL({dyamic:true}))
        w.send(at)
    }
}
})

client.on('messageUpdate' , async(old, newm) => {
    if(newm.author.bot || !newm.guild ) return
    const token = await log.fetch(`mesajtoken_${newm.guild.id}`)
    const id = await log.fetch(`mesajid_${newm.guild.id}`)
    if(!token) return
    if(!id) return
    const w = new Discord.WebhookClient(id,token)
    const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setAuthor(`Bir Mesaj Düzenlendi` , newm.author.avatarURL({dynamic:true}))
    .setDescription(`
**Mesajı Düzenleyen:** ${newm.author}
**Kanal:** ${newm.channel}

**Eski Mesaj:** ${old.content}
**Yeni Mesaj:** ${newm.content}

[\`Mesaja Git\`](${newm.url})
    `)
    .setFooter(`Mesaj ID : ${newm.id}` , newm.author.avatarURL({dynamic:true}))
    w.send(embed)
})

//çıkış

client.on("guildMemberRemove", async member => {
    
 let kanal = await karsilama.fetch(`resimligiriscikiskanal_${member.guild.id}`)
 if (!kanal) return;
 var canvaskanal = member.guild.channels.cache.get(kanal);
 if (!canvaskanal) return;

  const request = require('node-superfetch');
  const Canvas = require('canvas'),
    Image = Canvas.Image,
    Font = "Tahoma",
    path = require('path');
  
let re = await karsilama.fetch(`gçresim.${member.guild.id}`)

if (!re || re === null) re = "https://i.imgur.com/2gKDB9w.png"

  const canvas = Canvas.createCanvas(640, 270);
  const ctx = canvas.getContext("2d");

  const background = await Canvas.loadImage(re) || await Canvas.loadImage("https://i.imgur.com/2gKDB9w.png")
  
  
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#000000";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = `#010101`;
  ctx.font = "37px Tahoma"
  ctx.textAlign = "center";
  ctx.fillText(`${member.user.username}`, 300, 230);

  let avatarURL = member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });
  const { body } = await request.get(avatarURL);
  const avatar = await Canvas.loadImage(body);

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.arc(250 + 55, 55 + 55, 55, 0, 2  *Math.PI, true);
  ctx.clip();
  ctx.drawImage(avatar, 250, 55, 110, 110);


  const attachment = new Discord.MessageAttachment(
    canvas.toBuffer(),
    "moldup-gorusuz.png "
  );

    canvaskanal.send(attachment);
})


//giriş
client.on("guildMemberAdd", async member => {
  let kanal = await karsilama.fetch(`resimligiriscikiskanal_${member.guild.id}`)
 if (!kanal) return;
 var canvaskanal = member.guild.channels.cache.get(kanal);
 if (!canvaskanal) return;

  const request = require('node-superfetch');
  const Canvas = require('canvas'),
    Image = Canvas.Image,
    Font = "Tahoma",
    path = require('path');
  
let re = await karsilama.fetch(`gçresim.${member.guild.id}`)

if (!re || re === null) re = "https://i.imgur.com/uMOveOe.png"
    

  const canvas = Canvas.createCanvas(640, 270);
  const ctx = canvas.getContext("2d");

  const background = await Canvas.loadImage(re) || await Canvas.loadImage("https://i.imgur.com/uMOveOe.png")
  
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#000000";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = `#010101`;
  ctx.font = "37px Tahoma"
  ctx.textAlign = "center"
  ctx.fillText(`${member.user.username}`, 300, 230);

  let avatarURL = member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }) ;
  const { body } = await request.get(avatarURL);
  const avatar = await Canvas.loadImage(body);

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.arc(250 + 55, 55 + 55, 55, 0, 2  *Math.PI, false);
  ctx.clip();
  ctx.drawImage(avatar, 250, 55, 110, 110);

  const attachment = new Discord.MessageAttachment(
    canvas.toBuffer(),
    "moldup-hosgeldin.png"
  );

  canvaskanal.send(attachment);
})
 /**
 * --------------------------- Sistemler Bitiş -------------------
 */
client.on('message', async message => {
    if(!await sistem.fetch(`nitrosuzemoji_${message.guild.id}`)) return
    if(message.author.bot || message.channel.type !== 'text') return;
    if(message.content.split(' ').filter(x => x.startsWith(':') && x.endsWith(':')).length > 1) {
    let emojiler = [];
    message.content.split(' ').filter(x => x.startsWith(':') && x.endsWith(':')).forEach(x => {
    emojiler.push(client.emojis.cache.find(s => s.name.includes(x.replace(/:/g, ''))));
    });
    let newMessage;
    var d = -1;
    if(emojiler.length >= 1) {
    emojiler.forEach(s => {
    d++
    if(!newMessage) newMessage = message.content.replace(message.content.split(' ').filter(x => x.startsWith(':') && x.endsWith(':'))[d], s);
    if(newMessage) newMessage = newMessage.replace(message.content.split(' ').filter(x => x.startsWith(':') && x.endsWith(':'))[d], s);
    });
    };
    const ww = await message.channel.createWebhook(message.member.displayName , {
        avatar: message.author.displayAvatarURL({format:'png'})
    })
     message.delete() && await ww.send(newMessage)
    setTimeout(() => {
        return ww.delete()
    }, 3000);
    } else {
    let lokma = message.content.split(' ').find(x => x.startsWith(':') && x.endsWith(':').toString().replace(/:/g, ''));
    if (!lokma) return;
    let emoji = message.content.split(' ').find(x => x.startsWith(':') && x.endsWith(':')).toString().replace(/:/g, '');
    //if (!emoji) return;
    let emojii = client.emojis.cache.find(x => x.name.includes(emoji));
    if(!emojii) return;
    const w = await message.channel.createWebhook(message.member.displayName , {
        avatar: message.author.displayAvatarURL({format:'png'})
    })
    
    message.content = message.content.replace(message.content.split(' ').find(x => x.startsWith(':') && x.endsWith(':')), emojii);
     message.delete() && await w.send(message.content)
    setTimeout(() => {
        w.delete()
    }, 3000);

    }
})


client.login(ayarlar.token)


