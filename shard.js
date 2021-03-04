const { ShardingManager, Client, WebhookClient } = require('discord.js');
const client = new Client();
const { ayarlar } = require('./settings/ayarlar')
const shard = new ShardingManager('./index.js' , {
    totalShards: 7,
    token: ayarlar.token
})

shard.spawn()


shard.on('shardCreate' , shard => {
  const hook = new WebhookClient("811179831051288596", "xZ-IVtqIuAB172gYZgPnax-3_LUGKsHh5oG0DC_z_VSEQ8ny-mDaD4-_GnCa83tVH27u")
  hook.send(`<:cevrimici:758661635619029043> \`${shard.id}\` numaralı shard aktif.`)
})
