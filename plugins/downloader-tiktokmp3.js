let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'url nya mana?'
let res = await fetch(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=ee99d6df5f8c5eaf7667a90d&url=${args[0]}`)
 if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.status) throw json
await conn.sendFile(m.chat, json.result.audio, m)
}

handler.help = ['ttaudio <url>']
handler.tags = ['downloader']
handler.command = /^ttaudio$/i


module.exports = handler
