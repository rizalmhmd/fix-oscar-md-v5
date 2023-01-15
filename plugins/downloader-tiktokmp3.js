let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'url nya mana?'
let res = await fetch(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=ee99d6df5f8c5eaf7667a90d&url=${args[0]}`)
  let res2 = await res.json()
  let x = res2.result
await conn.sendFile(m.chat, x.audio, 'tiktok.mp3', m)
}

handler.help = ['ttaudio <url>']
handler.tags = ['downloader']
handler.command = /^ttaudio$/i


module.exports = handler
