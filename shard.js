const { ShardingManager, Client, WebhookClient } = require('discord.js')
const client = new Client()
const { ayarlar } = require('./settings/ayarlar')
const shard = new ShardingManager('./index.js' , {
    totalShards: 7,
    token: ayarlar.token
})

shard.spawn()


shard.on('shardCreate' , (shard) => {
  console.log(`shardlar aktif`)
})
