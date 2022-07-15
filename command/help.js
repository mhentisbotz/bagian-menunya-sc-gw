const fs = require("fs");
const petik = '```'
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")


function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
       x = x.replace(pattern, "$1,$2");
    return x;
}

exports.allMenu = (ucapanWaktu, pushname, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}

Hitung Mundur HUT RI Ke-77
${mundur}

*STATISTICS*
 • Upload : ${upload}
 • Downloads : ${download}

*BOT INFO*
 • Creator : ${ownerName}
 • Bot Name : ${botName}
 • Time : ${jam}
 • Date : ${tanggal(new Date())}
 • Runtime : ${runtime(process.uptime())}

*USER INFO*
 • Name : ${pushname !== undefined ? pushname : '-'}
 • Status : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
 • Limit : ${isCreator ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
 • Limit Game : ${isCreator ? '-' : cekGLimit(sender, gcount, glimit)}
 • Balance : ${toCommas(getBalance(sender, balance))}

╭─❑ *MENU MHENTIS BOTZ* ❑──
│✾ Version: 0.4.5
│✾ Library: Baileys-MD
│✾ Mode: publik
│✾ Runtime: 00:01:56
╰❑
╭────❑「 *All Sosmed* 」❑────
│•Youtube:
│https://bit.ly/3c0WJz9
│•My Group:
│https://bit.ly/3ax9GjJ
│•Mhentis Bot By Asyraf
╰❑
╭──❑「 *PETUNJUK* 」❑──
│ 🅛 : Fitur Memakai Limit
│ 🅟 : Fitur Khusus Premium
╰────
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
❏ *MENU UTAMA*
» .delete
» .menu
» .help
» .rules
» .sewabot
» .donasi
» .owner

❏ *MENU GAME*
» .angka <0-9>
» .asahotak
» .caklontong
» .casino <jumlah> 🅛
» .dadu2
» .family100
» .iqtest
» .kuis 🅛
» .math <mode>
» .siapakahaku
» .suit
» .suitpvp @tag
» .suit2 @tag
» .susunkata
» .tebakbendera
» .tebakgambar
» .tebakjenaka
» .tebakkabupaten
» .tebakkata
» .tebakkimia
» .tebaklagu 🅛
» .tebaklirik
» .tebaktebakan
» .tekateki
» .tictactoe [custom room name]
» .ttt [custom room name]
» .truth


❏ *MENU RPG*
» .tf <item> <user> <jmlh>
» .transfer <item> <@> <jmlh>
» .adventure
» .petualang
» .berpetualang
» .mulung
» .work
» .bansos
» .berburu
» .berkebon 🅛
» .build <pembangunan>
» .chop
» .chopig
» .collect
» .masak <masakan> <args>
» .cook <Cook> <args>
» .cd
» .cooldown
» .craft
» .claim
» .eat <item> <jumlah>
» .makan
» .feed <pet type>
» .hourly
» .hunt
» .inventory
» .inv
» .kotakikan
» .kolam
» .kolamikan
» .judi <jumlah>
» .kandang
» .kerja
» .work
» .koboy
» .mancing
» .fishing
» .merampok *@tag* 🅛
» .membunuh *@tag* 🅛
» .merampok *@tag* 🅛
» .mining
» .monthly
» .desa
» .desaku
» .ewe 🅛
» .kocok 🅛
» .openbo 🅛
» .nguli
» .ojek
» .open <crate> <count>
» .gacha <crate ><count>
» .pasar <jual> <args>
» .meracik [type] 🅛
» .shop 
» .toko 
» .menanam
» .taxy
» .use <item> <jumlah>
» .heal
» .weekly


❏ *MENU EXP*
» .buy<jumlah limit>
» .buy <jumlah limit>
» .buyall
» .ceksn
» .cheatlimit
» .leaderboard <jumlah user>
» .lb <jumlah user>
» .levelup
» .limit <@user>
» .dompet
» .dompet @user
» .nabung <jumlah>
» .narik <jumlah>
» .daftar <nama>.<umur>
» .reg <nama>.<umur>
» .register <nama>.<umur>
» .unreg <sn>
» .unregister <sn>


❏ *MENU KHUSUS*
» .virtex1  🅟
» .virtex2  🅟
» .virtex3  🅟
» .wm <teks>|<teks>  🅟
» .ytv720 <url>  🅟


❏ *MENU GROUP*
» .afk <alasan>
» .ban
» .demote @user
» .on <opsi>
» .off <opsi>
» .hidetag <pesan>
» .kick @user
» .linkgroup
» .promote @user
» .setpp
» .grup <buka/tutup>
» .setwelcome <teks>
» .tagadmin
» .tagall <pesan>
» .tagme
» .unban


❏ *MENU ABSEN*
» .absen
» .cekabsen
» .hapusabsen
» .mulaiabsen <teks>


❏ *MENU VOTE*
» .cekvote
» .hapusvote
» .mulaivote <alasan>
» .upvote
» .devote


❏ *MENU OWNER*
> evalcode
$ 
>> evalcode
» .addowner <@user>
» .addprem <@user>
» .ban
» .banuser
» .bc <teks>
» .bcgc
» .debounce
» .delowner <@user>
» .delprem <@user>
» .on <opsi>
» .off <opsi>
» .addsewa <hari>
» .getplugin <filename>
» .join <link> <time>
» .premlist
» .resetprefix
» .restart
» .self
» .public
» .setbotbio
» .setprefix <prefix>
» .setwelcome <teks>
» .sf <teks>
» .unban
» .update


❏ *MENU ISLAMI*
» .alquran *114 1*
» .asmaulhusna [nomor]
» .ayatkursi
» .doaharian
» .niatsholat
» .ayta *surah no*
» .bacaanshalat
» .daftarsurah
» .tahlil


❏ *MENU ALQURAN*
» .surah *surah no*
» .salat <daerah>


❏ *MENU FUN*
» .alay
» .ceksifat <nama>
» .cerpen 🅛
» .cersex
» .citacita
» .dadu
» .darkjokes 🅛
» .darkmeme
» .emojimix emot1|emot2>
» .jodohin
» .jodohku
» .jadian
» .masadepan
» .meme 🅛
» .olx <nomer> 🅛
» .simi <teks>
» .simsimi <teks>
» .simih <teks>
» .call <nomer> 🅛
» .zodiac *2002 02 25*


❏ *MENU MEME*
» .darkjokes 🅛
» .darkmeme
» .meme 🅛


❏ *MENU CONVERT*
» .attp <teks>
» .dadu
» .greyscale reply 🅛
» .joke (reply) 🅛
» .semoji
» .smeme<teks atas>|<teks bawah>
» .sticker
» .s
» .stiker
» .stikerly <teks> 🅛
» .toimg (reply)
» .tourl <reply image>
» .tovideo (reply)
» .ttp1 <teks>
» .ttp2 <teks>
» .ttp3 <teks>
» .ttp4 <teks>
» .wm <teks>|<teks>  🅟


❏ *MENU MAKER*
» .logosadboy <text|text>
» .doggymeme <text|text>
» .komunis (reply image) 🅛
» .logololi <text>
» .logoneko <text|text>
» .logorem <text>
» .lolice
» .quotemaker <teks>|<wm> 🅛
» .shaunthesheep 🅛
» .skullmakeup
» .filter caption|reply media 🅛
» .textpro <effect> <text>
» .underwater <text>


❏ *MENU SOUND*
» .anjay 🅛
» .ara-ara 🅛
» .ara-ara-cowok 🅛
» .ara-ara2 🅛
» .arigatou 🅛
» .assalamualaikum 🅛
» .asu 🅛
» .ayank 🅛
» .aku-ngakak 🅛
» .bacot 🅛
» .bahagia-aku 🅛
» .baka 🅛
» .bansos 🅛
» .beat-box 🅛
» .beat-box2 🅛
» .biasalah 🅛
» .bidadari 🅛
» .bot 🅛
» .buka-pintu 🅛
» .canda-anjing 🅛
» .cepetan 🅛
» .china 🅛
» .cuekin-terus 🅛
» .daisuki-dayo 🅛
» .daisuki 🅛
» .dengan-mu 🅛
» .gaboleh-gitu 🅛
» .gak-lucu 🅛
» .gamau 🅛
» .gay 🅛
» .gelay 🅛
» .gitar 🅛
» .gomenasai 🅛
» .hai-bot 🅛
» .hampa 🅛
» .haram 🅛
» .hayo 🅛
» .hp-iphone 🅛
» .i-like-you 🅛
» .ih-wibu 🅛
» .india 🅛
» .karna-lo-wibu 🅛
» .kiss 🅛
» .kontol 🅛
» .ku-coba 🅛
» .maju-wibu 🅛
» .makasih 🅛
» .mastah 🅛
» .menu 🅛
» .nande-nande 🅛
» .nani 🅛
» .ngadi-ngadi 🅛
» .nikah 🅛
» .nuina 🅛
» .onichan 🅛
» .owner-sange 🅛
» .ownerku 🅛
» .pak-sapardi 🅛
» .pale 🅛
» .pantek 🅛
» .pasi-pasi 🅛
» .punten 🅛
» .sayang 🅛
» .siapa-sih 🅛
» .sudah-biasa 🅛
» .summertime 🅛
» .tanya-bapak-lu 🅛
» .to-the-bone 🅛
» .wajib 🅛
» .waku 🅛
» .woi 🅛
» .yamete 🅛
» .yowaimo 🅛
» .yoyowaimo 🅛


❏ *MENU GITHUB*
» .gitclone <url> 🅛
» .githubdl 🅛


❏ *MENU INTERNET*
» .animal <hewan>
» .artikata <teks>
» .Brainly <teks>
» .ceritahorror 🅛
» .ceritahantu 🅛
» .cersex
» .covid <negara>
» .cuaca
» .darkjokes 🅛
» .darkmeme
» .fakta unik
» .fetch <url>
» .get <url>
» .film <keyword>
» .genshincharacter *link*
» .image <query>
» .gimage <query>
» .googleimage <query>
» .google <pencarian>
» .googlef <pencarian>
» .heroml <nama hero>
» .epep <id>
» .jadwalbola
» .jadwaltv <nama ch>
» .jadwaltvnow
» .kanji <kanji>
» .katabijak <opsi>
» .kodebahasa
» .coffee
» .kopi
» .kuncigitar <judul lagu>
» .resep <makanan>
» .masak <makanan>
» .meme 🅛
» .kompas
» .liputan6
» .tribun
» .jalantikus
» .pinterest <keyword>
» .jadwalsholat <daerah>
» .ssbiasa <url>
» .ss <url>
» .sshandphone <url>
» .sshp <url>
» .sspc <url>
» .subreddit <pencarian>
» .wallpaperanime 🅛
» .wallpaperq <query> 🅛
» .wiki2 <pencarian>
» .wikipedia2 pencarian
» .wiki <pencarian>
» .wikipedia <pencarian
» .ytcomment <comment>
» .ytv720 <url>  🅟
» .zodiac *2002 02 25*


❏ *MENU ASUPAN*
» .hijaber
» .ukhty
» .santuy
» .cecan
» .indonesia
» .malaysia
» .thailand
» .vietnam
» .china
» .korea
» .japan
» .ghea


❏ *MENU KERANG*
» .gaycek
» .pintarcek
» .cantikcek
» .gantengcek
» .gabutcek
» .gilacek
» .lesbicek
» .stresscek
» .bucincek
» .jonescek
» .sadboycek
» .dimanakah <pertanyaan>
» .howgay siapa?
» .howpintar siapa?
» .howcantik siapa?
» .howganteng siapa?
» .howgabut siapa?
» .howgila siapa?
» .howlesbi siapa?
» .howstress siapa?
» .howbucin siapa?
» .howjones siapa?
» .howsadboy siapa?
» apakah <teks>?
» .artimimpi [mimpi]
» .artinama [nama]
» benarkah <teks>?
» bisakah <teks>?
» .ceksifat <nama>
» kapan <text>?
» kapankah <text>?
» .nomorhoki <no hp> 🅛


❏ *MENU ANIME*
» .animelink
» .cosplay 🅛
» .cosplayloli
» .cosplaysagiri
» .dewabatch
» .elf
» .genshincharacter <link>
» .holo 🅛
» .husbu
» .loli 🅛
» .lolice
» .megumin 🅛
» .mememp4 🅛
» .neko
» .quoteanime
» .waifu2 🅛
» .shota 🅛
» .yotsuba 🅛
» .shinomiya 🅛
» .yumeko 🅛
» .tejina 🅛
» .chiho 🅛
» .boruto 🅛
» .kaori 🅛
» .shizuka


*•MENU 2•*


*MAIN MENU*${petik}
 • ${prefix}menu
 • ${prefix}infobot
 • ${prefix}donate
 • ${prefix}dashboard
 • ${prefix}owner
 • ${prefix}cekdrive
 • ${prefix}cekbandwidth
 • ${prefix}cekpremium
 • ${prefix}listpremium
 • ${prefix}listsewa
 • ${prefix}speed
 • ${prefix}runtime
 • ${prefix}listbahasa${petik}

*CONVERTER/TOOLS*${petik} 
 • ${prefix}sticker
 • ${prefix}stickerwm
 • ${prefix}smeme
 • ${prefix}toimg
 • ${prefix}tovideo
 • ${prefix}tomp3
 • ${prefix}ttp
 • ${prefix}attp
 • ${prefix}emojimix
 • ${prefix}nuliskiri
 • ${prefix}nuliskanan
 • ${prefix}foliokiri
 • ${prefix}foliokanan
 • ${prefix}say
 • ${prefix}translate${petik}

*ANONYMOUS CHATS*${petik}
 • ${prefix}anonymous
 • ${prefix}start
 • ${prefix}next
 • ${prefix}stop
 • ${prefix}sendprofile${petik}

*STORE MENU*${petik}
 • ${prefix}list
 • ${prefix}addlist
 • ${prefix}dellist
 • ${prefix}update
 • ${prefix}jeda
 • ${prefix}tambah
 • ${prefix}kurang
 • ${prefix}kali
 • ${prefix}bagi
 • proses < reply chat >
 • done < reply chat >${petik}

*DOWNLOADS MENU*${petik}
 • ${prefix}play
 • ${prefix}ytmp3
 • ${prefix}ytmp4
 • ${prefix}instagram
 • ${prefix}igstory
 • ${prefix}tiktok
 • ${prefix}tiktoknowm
 • ${prefix}tiktokaudio
 • ${prefix}mediafire
 • ${prefix}gitclone${petik}

*GROUP MENU*${petik}
 • ${prefix}afk
 • ${prefix}welcome
 • ${prefix}left
 • ${prefix}setwelcome
 • ${prefix}changewelcome
 • ${prefix}delsetwelcome
 • ${prefix}setleft
 • ${prefix}changeleft
 • ${prefix}delsetleft
 • ${prefix}linkgc
 • ${prefix}setppgc
 • ${prefix}setnamegc
 • ${prefix}setdesc
 • ${prefix}antilink
 • ${prefix}antiwame
 • ${prefix}open
 • ${prefix}close
 • ${prefix}add
 • ${prefix}kick
 • ${prefix}promote
 • ${prefix}demote
 • ${prefix}revoke
 • ${prefix}hidetag
 • ${prefix}checksewa${petik}

*GAME MENU*${petik}
 • ${prefix}tictactoe
 • ${prefix}delttt
 • ${prefix}casino
 • ${prefix}delcasino${petik}

*SEARCH MENU*${petik}
 • ${prefix}lirik
 • ${prefix}grupwa
 • ${prefix}pinterest
 • ${prefix}ytsearch
 • ${prefix}searchbyimage${petik}

*RANDOM MENU*${petik}
 • ${prefix}cecan
 • ${prefix}cogan
 • ${prefix}waifu${petik}


*BALANCE MENU*${petik}
 • ${prefix}topglobal
 • ${prefix}toplocal
 • ${prefix}buylimit
 • ${prefix}buyglimit
 • ${prefix}transfer
 • ${prefix}limit
 • ${prefix}balance${petik}

*BAILEYS*${petik}
 • ${prefix}fitnah
 • ${prefix}nowa
 • ${prefix}getquoted
 • ${prefix}fakehidetag
 • ${prefix}react
 • ${prefix}setcmd
 • ${prefix}delcmd${petik}

*OWNERS MENU*${petik}
 • ${prefix}join
 • ${prefix}left
 • ${prefix}self
 • ${prefix}public
 • ${prefix}setppbot
 • ${prefix}broadcast
 • ${prefix}bcsewa
 • ${prefix}addpremium
 • ${prefix}delpremium
 • ${prefix}addsewa
 • ${prefix}delsewa${petik}

*ASUPAN MENU*${petik}
 • ${prefix}chika
 • ${prefix}delvira
 • ${prefix}ayu
 • ${prefix}bunga
 • ${prefix}aura
 • ${prefix}nisa
 • ${prefix}ziva
 • ${prefix}yana
 • ${prefix}viona
 • ${prefix}syania
 • ${prefix}riri
 • ${prefix}syifa
 • ${prefix}mama_gina
 • ${prefix}alcakenya
 • ${prefix}mangayutri
 • ${prefix}rikagusriani
 • ${prefix}asupan
 • ${prefix}bocil
 • ${prefix}geayubi
 • ${prefix}santuy
 • ${prefix}ukhty
 • ${prefix}syifa${petik}

*NSFW MENU*${petik}
 • ${prefix}baka
 • ${prefix}smug
 • ${prefix}neko_sfw
 • ${prefix}hentai_gif
 • ${prefix}spank
 • ${prefix}blowjob
 • ${prefix}cumarts
 • ${prefix}eroyuri
 • ${prefix}eroneko
 • ${prefix}erokemonomimi
 • ${prefix}erokitsune
 • ${prefix}ero
 • ${prefix}feet
 • ${prefix}erofeet
 • ${prefix}feetgif
 • ${prefix}femdom
 • ${prefix}futanari
 • ${prefix}hentai
 • ${prefix}holoero
 • ${prefix}holo
 • ${prefix}keta
 • ${prefix}kitsune
 • ${prefix}kemonomimi
 • ${prefix}pussyart
 • ${prefix}pussywankgif
 • ${prefix}girl_solo
 • ${prefix}girl_solo_gif
 • ${prefix}tits
 • ${prefix}trap
 • ${prefix}yuri
 • ${prefix}avatar2
 • ${prefix}anal
 • ${prefix}bj
 • ${prefix}boobs
 • ${prefix}classic
 • ${prefix}cumsluts
 • ${prefix}kuni
 • ${prefix}lesbian
 • ${prefix}neko
 • ${prefix}neko_gif
 • ${prefix}ahegao
 • ${prefix}bdsm
 • ${prefix}cuckold
 • ${prefix}cum
 • ${prefix}foot
 • ${prefix}gangbang
 • ${prefix}glasses
 • ${prefix}jahy
 • ${prefix}masturbation
 • ${prefix}nsfw_neko
 • ${prefix}orgy
 • ${prefix}panties
 • ${prefix}tentacles
 • ${prefix}thighs
 • ${prefix}zettai${petik}


*TEXTPRO MENU*${petik}
 • ${prefix}halloween2
 • ${prefix}horror
 • ${prefix}game8bit
 • ${prefix}layered
 • ${prefix}glitch2
 • ${prefix}coolg
 • ${prefix}coolwg
 • ${prefix}realistic
 • ${prefix}space3d
 • ${prefix}gtiktok
 • ${prefix}stone
 • ${prefix}marvel
 • ${prefix}marvel2
 • ${prefix}pornhub
 • ${prefix}avengers
 • ${prefix}metalr
 • ${prefix}metalg
 • ${prefix}metalg2
 • ${prefix}halloween2
 • ${prefix}lion
 • ${prefix}wolf_bw
 • ${prefix}wolf_g
 • ${prefix}ninja
 • ${prefix}3dsteel
 • ${prefix}horror2
 • ${prefix}lava
 • ${prefix}bagel
 • ${prefix}blackpink
 • ${prefix}rainbow2
 • ${prefix}water_pipe
 • ${prefix}halloween
 • ${prefix}sketch
 • ${prefix}sircuit
 • ${prefix}discovery
 • ${prefix}metallic2
 • ${prefix}fiction
 • ${prefix}demon
 • ${prefix}transformer
 • ${prefix}berry
 • ${prefix}thunder
 • ${prefix}magma
 • ${prefix}3dstone
 • ${prefix}neon
 • ${prefix}glitch
 • ${prefix}harry_potter
 • ${prefix}embossed
 • ${prefix}broken
 • ${prefix}papercut
 • ${prefix}gradient
 • ${prefix}glossy
 • ${prefix}watercolor
 • ${prefix}multicolor
 • ${prefix}neon_devil
 • ${prefix}underwater
 • ${prefix}bear
 • ${prefix}wonderfulg
 • ${prefix}christmas
 • ${prefix}neon_light
 • ${prefix}snow
 • ${prefix}cloudsky
 • ${prefix}luxury2
 • ${prefix}gradient2
 • ${prefix}summer
 • ${prefix}writing
 • ${prefix}engraved
 • ${prefix}summery
 • ${prefix}3dglue
 • ${prefix}metaldark
 • ${prefix}neonlight
 • ${prefix}oscar
 • ${prefix}minion
 • ${prefix}holographic
 • ${prefix}purple
 • ${prefix}glossyb
 • ${prefix}deluxe2
 • ${prefix}glossyc
 • ${prefix}fabric
 • ${prefix}neonc
 • ${prefix}newyear
 • ${prefix}newyear2
 • ${prefix}metals
 • ${prefix}xmas
 • ${prefix}blood
 • ${prefix}darkg
 • ${prefix}joker
 • ${prefix}wicker
 • ${prefix}natural
 • ${prefix}firework
 • ${prefix}skeleton
 • ${prefix}balloon
 • ${prefix}balloon2
 • ${prefix}balloon3
 • ${prefix}balloon4
 • ${prefix}balloon5
 • ${prefix}balloon6
 • ${prefix}balloon7
 • ${prefix}steel
 • ${prefix}gloss
 • ${prefix}denim
 • ${prefix}decorate
 • ${prefix}decorate2
 • ${prefix}peridot
 • ${prefix}rock
 • ${prefix}glass
 • ${prefix}glass2
 • ${prefix}glass3
 • ${prefix}glass4
 • ${prefix}glass5
 • ${prefix}glass6
 • ${prefix}glass7
 • ${prefix}glass8
 • ${prefix}captain_as2
 • ${prefix}robot
 • ${prefix}equalizer
 • ${prefix}toxic
 • ${prefix}sparkling
 • ${prefix}sparkling2
 • ${prefix}sparkling3
 • ${prefix}sparkling4
 • ${prefix}sparkling5
 • ${prefix}sparkling6
 • ${prefix}sparkling7
 • ${prefix}decorative
 • ${prefix}chocolate
 • ${prefix}strawberry
 • ${prefix}koifish
 • ${prefix}bread
 • ${prefix}matrix
 • ${prefix}blood2
 • ${prefix}neonligth2
 • ${prefix}thunder2
 • ${prefix}3dbox
 • ${prefix}neon2
 • ${prefix}roadw
 • ${prefix}bokeh
 • ${prefix}gneon
 • ${prefix}advanced
 • ${prefix}dropwater
 • ${prefix}wall
 • ${prefix}chrismast
 • ${prefix}honey
 • ${prefix}drug
 • ${prefix}marble
 • ${prefix}marble2
 • ${prefix}ice
 • ${prefix}juice
 • ${prefix}rusty
 • ${prefix}abstra
 • ${prefix}biscuit
 • ${prefix}wood
 • ${prefix}scifi
 • ${prefix}metalr
 • ${prefix}purpleg
 • ${prefix}shiny 
 • ${prefix}jewelry
 • ${prefix}jewelry2
 • ${prefix}jewelry3
 • ${prefix}jewelry4
 • ${prefix}jewelry5
 • ${prefix}jewelry6
 • ${prefix}jewelry7
 • ${prefix}jewelry8
 • ${prefix}metalh
 • ${prefix}golden
 • ${prefix}glitter
 • ${prefix}glitter2
 • ${prefix}glitter3
 • ${prefix}glitter4
 • ${prefix}glitter5
 • ${prefix}glitter6
 • ${prefix}glitter7
 • ${prefix}metale
 • ${prefix}carbon
 • ${prefix}candy
 • ${prefix}metalb
 • ${prefix}gemb
 • ${prefix}3dchrome
 • ${prefix}metalb2
 • ${prefix}metalg
 • ${prefix}metalg${petik}
`
}

exports.donate = (pushname, ownerNumber) => {
    return`Contact  Owner:
wa.me/${ownerNumber} (Owner)`
}
