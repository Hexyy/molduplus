const { ShardingManager, Client, WebhookClient } = require('discord.js');
const client = new Client();
const { ayarlar } = require('./settings/ayarlar')
const shard = new ShardingManager('./index.js' , {
    totalShards: 2,
    token: ayarlar.token
})

shard.spawn()


shard.on('shardCreate' , shard => {
  const hook = new WebhookClient("811179831051288596", "xZ-IVtqIuAB172gYZgPnax-3_LUGKsHh5oG0DC_z_VSEQ8ny-mDaD4-_GnCa83tVH27u")
  hook.send(`<:cevrimici:758661635619029043> \`${shard.id+1}\` numaralı shard aktif.`)
})

shard.on('shardDisconnect' , shard => {
  const hook = new WebhookClient("811179831051288596", "xZ-IVtqIuAB172gYZgPnax-3_LUGKsHh5oG0DC_z_VSEQ8ny-mDaD4-_GnCa83tVH27u")
  hook.send(`<:cevrimdisi:758661564055945226> \`${shard.id+1}\` numaralı shardın bağlantısı koptu.`)
})

shard.on('shardError' , shard => {
  const hook = new WebhookClient("811179831051288596", "xZ-IVtqIuAB172gYZgPnax-3_LUGKsHh5oG0DC_z_VSEQ8ny-mDaD4-_GnCa83tVH27u")
  hook.send(`<:rahatsizetmeyin:758661755634581524> \`${shard.id+1}\` numaralı shardda bir hata var.`)
})

shard.on('shardReady' , shard => {
  const hook = new WebhookClient("811179831051288596", "xZ-IVtqIuAB172gYZgPnax-3_LUGKsHh5oG0DC_z_VSEQ8ny-mDaD4-_GnCa83tVH27u")
  hook.send(`<:cevrimici:758661635619029043> \`${shard.id+1}\` numaralı shard hazır.`)
})

shard.on('shardReconnecting' , shard => {
  const hook = new WebhookClient("811179831051288596", "xZ-IVtqIuAB172gYZgPnax-3_LUGKsHh5oG0DC_z_VSEQ8ny-mDaD4-_GnCa83tVH27u")
  hook.send(`<:cevrimici:758661635619029043> \`${shard.id+1}\` numaralı shard tekrar bağlanıyor.`)
})

shard.on('shardResume' , shard => {
  const hook = new WebhookClient("811179831051288596", "xZ-IVtqIuAB172gYZgPnax-3_LUGKsHh5oG0DC_z_VSEQ8ny-mDaD4-_GnCa83tVH27u")
  hook.send(`<:cevrimici:758661635619029043> \`${shard.id+1}\` numaralı shard aktif olmaya devam ediyor.`)
})
