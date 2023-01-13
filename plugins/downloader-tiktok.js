let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'Uhm..url nya mana?'
let res = await fetch(`https://zenzapis.xyz/downloader/tiktok?apikey=f9fccfcff1&url=${args[0]}`)
    if (!res.ok) throw await res.text()
let json = await res.json()
    await conn.sendButtonVid(m.chat, json.result.download.nowm, 'Nih Om', wm, 'ᴀᴜᴅɪᴏ', `.ttaudio ${args}`, m)
}
handler.command = /^ttnowm$/i
handler.tags = ['downloader']
handler.help = ['ttnowm']
handler.limit = false
module.exports = handler
