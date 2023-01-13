let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'url nya mana?'
let res = await fetch(`https://zenzapis.xyz/downloader/tiktok?apikey=f9fccfcff1&url=${args[0]}`)
 if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    await conn.sendFile(m.chat, json.result.download.music, m)
}

handler.help = ['ttaudio <url>']
handler.tags = ['downloader']
handler.command = /^ttaudio$/i


module.exports = handler
