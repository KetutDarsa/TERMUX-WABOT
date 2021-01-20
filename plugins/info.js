let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: VARGAS OFFICIAL
║
╠➥ Github: https://github.com/VARGAS1150
╠➥ YouTube: VARGAS OFFICIAL
║
╠═〘 Thanks To 〙 ═
╠➥ Nurotomo
╠➥ MfarelS
╠➥ ST4RZ
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ DANA : 0812-2756-0249
╠➥ OVO : 0812-2756-0249
╠➥ TELKOMSEL : 0812-2756-0249
║
║>Request? Wa.me/6281227560249
║
╠═〘 VARGAS_250 BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

