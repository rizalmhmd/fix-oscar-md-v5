let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
    if (!text) throw `Harap masukan judulnya\n\n\nContoh : .xnxxsearch segs brutal`
    let res = await fetch(`https://malesin.xyz/xnxxsearch?q=${text}`)
		let rest = await res.json()
		let cap = `Hasil Pencarian Dari ${text}\n`
	for (let v of rest.result) {
	 cap += `• *Title :* ${v.title}
• *Info :* ${v.info}
• *Link :* ${v.link}
`
cap +=  '\n' + '••••••••••••••••••••••••' + '\n'
    }
  m.reply(cap)
	} catch (e) {
		console.error(e);
		throw e;
	}
}
handler.help = ['xnxxsearch <query>']
handler.tags = ['asupan']
handler.command = /^(xnxxsearch)$/i

handler.limit = false
handler.premium = true

module.exports = handler
