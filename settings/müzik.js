const { Player } = require('discord-player')
const { Client } = require('discord.js')
const player = new Player(new Client() , {
autoSelfDeaf: true,
})

module.exports.player = player