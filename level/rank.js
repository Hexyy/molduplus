const { MessageAttachment } = require("discord.js");
const canvacord = require("canvacord");
const { level } = require("../../database/SeviyeDataBase")
const DBL = require('top.gg')
module.exports = {
    name: 'rank',
    aliases: ['seviye'] ,
    description: 'Seviyenizi gösteren bir resim gönderilir.',
    usage: ['rank { @kullanıcı }'],

   /** 
   * @param {Discord.Client} client
   * @param {Discord.Message} message
   * @param {String[]} args
   */
   run: async (client , message ,args) => {

    const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc2MTU3MTQ0MzE5NjU1OTM3MSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA5NzYyNjA5fQ.j9G-syCZqsoE78RmPet95SogKqLqroVe77OU1oX7JDU', client);

  if (await level.fetch(`kapalı_${message.guild.id}`)) return message.react("766402190654439466")

  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

  let level2 = await level.fetch(`level_${user.id}_${message.guild.id}`) || 0;
  let exp = await level.fetch(`xp_${user.id}_${message.guild.id}`) || 0;
  let neededXP

  if (level2 === 0) {
    neededXP = 100
  } else {
     neededXP = Math.floor(Math.pow(level2 / 0.2, 2));
  }

  let everyone = await level.all()
  let every = everyone.sort((a, b) => b.data - a.data);
  let rank = every.map(x => x.ID).indexOf(`xp_${user.id}_${message.guild.id}`) + 1;

// v4 rank card
//   let img = await canvacord.rank({
//     username: user.username,
//     discrim: user.discriminator,
//     currentXP: exp.toString(),
//     neededXP: neededXP.toString(),
//     rank: rank.toString(),
//     level: level.toString(),
//     avatarURL: user.displayAvatarURL({ format: "png" }),
//     background: "https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-1.2.1&w=1000&q=80"
//   });
  
  // v5 rank card

  dbl.hasVoted(user.id).then(async oy => {

   if (!oy) {
  const card = new canvacord.Rank()
  .setUsername(user.username)
  .setDiscriminator(user.discriminator)
  .setRank(rank, "Rütbe")
  .setLevel(level2, "Seviye")
  .setCurrentXP(exp)
  .setRequiredXP(neededXP)
  .setStatus(user.presence.status)
  .renderEmojis(true)
  .setBackground("IMAGE", "https://i.imgur.com/3AoaAw8.png")
  .setAvatar(user.displayAvatarURL({ format: "png", size: 1024 }));

  const img = await card.build();
  
  return message.channel.send(`**${user.username}** oy vererek **%20** daha fazla xp kazanabilir. https://bot.moldup.tk/oy.html`,new MessageAttachment(img, "rank.png"));
  } else {
    const card = new canvacord.Rank()
    .setUsername(user.username)
    .setDiscriminator(user.discriminator)
    .setRank(rank, "Rütbe")
    .setLevel(level2, "Seviye")
    .setCurrentXP(exp)
    .setRequiredXP(neededXP)
    .setStatus(user.presence.status)
    .renderEmojis(true)
    .setBackground("IMAGE", "https://i.imgur.com/3AoaAw8.png")
    .setAvatar(user.displayAvatarURL({ format: "png", size: 1024 }));

  const img = await card.build();
  
  return message.channel.send(`**${user.username}** oy verdiği için **%20** daha fazla xp kazanıyor!`,new MessageAttachment(img, "rank.png"));
  }
})
}
}