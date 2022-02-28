var os = require('os')
var util = require('util')
var path = require('path')
var cp = require('child_process')
var axios = require('axios')
var translate = require('translate-google-api')
var google = require('google-it')
var gis = require('g-i-s')
var barcode = require('barcode')
var qrcode = require('qrcode')
var toBase64 = require('image-to-base64')
var formatSize = require('filesize')
var FormData = require('form-data')
var tesseract = require('node-tesseract-ocr')
var fetch = require('node-fetch')
var request = require('request')
var cheerio = require('cheerio')
var tiktok = require('tiktok-scraper')
var shopee = require('shopee')
var yts = require('yt-search')
var fs = require('fs')
var msu = require('minecraft-server-util')
var { fromString, convert, compile } = require('html-to-text')
var { removeBackgroundFromImageFile } = require('remove.bg')
var { createHash, randomBytes } = require('crypto')
var { performance } = require('perf_hooks')
var { obfuscate } = require('js-confuser')
var { JSDOM } = require('jsdom')
var { fromBuffer } = require('file-type')
var { saveToMedia, math, modes, encryptHtml, encryptScript, escapeFull, getZodiac, yta, ytv, servers, joox, stylizeText, tts, tahta, searchGempa, getBuffer, textWrap, getRandom, arrayRegex, pickRandom, formatDate, muptime, pad, clockString, post, stringify } = require('./lib/js/functions.js')


async function handler(m, { appPackageName, messengerPackageName, isOwner, isPremium, isGroup, senderMessage, messageType, groupName, senderName, usedPrefix, command, text }) {

handler.toString = () => 'async function handler() { [native code] }'
m.reply.toString = () => 'function reply() { [native code] }'
var package = require('./package.json')
var config = require('./config.json')
var { apikey } = config
var botName = m.query.name ? m.query.name : config.botName
var owner = m.query.phone ? m.query.phone.replace(/[-+<>@]/g, '').replace(/ +/g, '') : config.owner
var gc_link = m.query.linkgc ? m.query.linkgc : 'https://chat.whatsapp.com/HDOZX7OoFYK1bTwftkY5Si'
var donate_link = m.query.donate ? m.query.donate : 'https://saweria.co/donate/RC047'
var jadwal = m.query.jadwal ? m.query.jadwal : '07:00 - 21:00'

var date = new Date()
var prefix = new RegExp('^[' + (m.query.prefix ? m.query.prefix : 'zxZX¡!/#$%+£¢€¥^°=¶∆×÷π√✓©®:;?¿&.\\-') + ']', 'gi')
var readMore = String.fromCharCode(8206).repeat(4001)
var isApikey = new RegExp(apikey.kuhong + '|' + apikey.xteam + '|' + apikey.zeks + '|' + apikey.zekais + '|' + apikey.imgbb + '|' + apikey.removebg, 'gi')
var isGroupLink = /(http(s)?:\/\/)?chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/gi
var isToxic = /(a(s[uw]|nj(([ie])?ng|([ie])r)?)|me?me?k|ko?nto?l|ba?bi|fu?ce?k|ta(e|i)k?|ba?ngsa?(t|d)|(ba?)?ji?nga?n|g([iueo])?bl([iueo])?(k|g)|col(i|ay)|an?jg|nge?nto?d|tod|tolol|(ng)?ewe(an)?|jemb(u|o)(d|t))/gi
var isVirtex = //gi
var isURL = (url) => /^(http(s)?:\/\/)?(\w+:?\w*@)?(\S+)(:\d+)?((?<=\.)\w+)+(\/([\w#!:.?+=&%@!\-/])*)?/gi.test(url)
var capital = (str) => str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase()
var replaceAll = (str, find, replace) => str.replace(new RegExp(find, 'g'), replace)
var hours = date.getHours() + 7
var salam = 'Pagi'
if (hours == 4 || hours == 5 || hours == 6 || hours == 7 || hours == 8 || hours == 9) salam = 'Pagi'
else if (hours == 10 || hours == 11 || hours == 12 || hours == 13 || hours == 14) salam = 'Siang'
else if (hours == 15 || hours == 16 || hours == 17) salam = 'Sore'
else if (hours == 18 || hours == 19 || hours == 20 || hours == 21 || hours == 22 || hours == 23 || hours == 0 || hours == 1 || hours == 2 || hours == 3) salam = 'Malam'

var opts = {
	antidelete: false,
	antilink: false,
	antitoxic: true,
	antiflood: false,
	antivirtex: false
}
try { var afk = JSON.parse(await fs.readFileSync('./tmp/' + senderName + '_afk.json')) } catch (e) { afk = { name: null, reason: null } }
try { var antidelete = await fs.readFileSync('./tmp/antidelete.txt').toString() == 'true' ? true : false } catch (e) { antidelete = opts.antidelete }
try { var antilink = await fs.readFileSync('./tmp/antilink.txt').toString() == 'true' ? true : false } catch (e) { antilink = opts.antilink }
try { var antitoxic = await fs.readFileSync('./tmp/antitoxic.txt').toString() == 'true' ? true : false } catch (e) { antitoxic = opts.antitoxic }
try { var antiflood = await fs.readFileSync('./tmp/antiflood.txt').toString() == 'true' ? true : false } catch (e) { antiflood = opts.antiflood }
try { var antivirtex = await fs.readFileSync('./tmp/antivirtex.txt').toString() == 'true' ? true : false } catch (e) { antivirtex = opts.antivirtex }

var loghandler = {
    notCommand: `*「 NOT FOUND 」*\n\nMaaf *${senderName}*,,\nPerintah *${usedPrefix + command}* tidak terdaftar di *${usedPrefix}menu*`,
    wait: 'Mohon tunggu sebentar...',
    ownerOnly: '*「 OWNER ONLY 」*\n\nPerintah ini hanya dapat digunakan oleh _Owner Bot_!',
    premiumOnly: '*「 PREMIUM ONLY 」*\n\nPerintah ini hanya dapat digunakan oleh member _Premium_!',
    privateOnly: '*「 PRIVATE ONLY 」*\n\nPerintah ini hanya dapat digunakan di _Private Chat_!',
    groupOnly: '*「 GROUP ONLY 」*\n\nPerintah ini hanya dapat digunakan di _Grup Chat_!',
    notReason: 'Silahkan masukan alasan',
    notDate: 'Silahkan masukan tanggal',
    notName: 'Silahkan masukan nama',
    numberOnly: 'Teks harus berupa angka!',
    notNumber: 'Silahkan masukan angka',
    notLength: 'Silahkan masukan jumlah',
    notUrl: 'Silahkan masukan url',
    invalidLink: 'Link yang anda masukan tidak valid',
    notText: 'Silahkan masukan text',
    notType: 'Silahkan masukan type',
    notServer: 'Silahkan masukan server',
    notQuery: 'Silahkan masukan query',
    notLang: 'Silahkan masukan kodebahasa',
    notPass: 'Silahkan masukan password',
    notMethod: 'Silahkan masukan method',
    notCaption: 'Silahkan masukan caption',
    notID: 'Silahkan masukan id',
    notOption: 'Silahkan masukan opsi',
    overText: 'Teks terlalu panjang!',
    overLength: 'Jumlah terlalu banyak!',
    imageOnly: 'Hanya dapat digunakan untuk Gambar!'
}

var listMenu = {
    main: [
'help',
'menu',
'start',
'?'
	 ],
    downloaders: [
'ytmp4 <url>',
'ytmp3 <url>',
'tiktok <url>',
'tiktoknowm <url>',
'instagram <url>',
'facebook <url>',
'fb <url>'
     ],
    makers: [
'intro <text> *(Premium)*',
'attp <text>',
'ttp <text>',
'textpro <effect|text|[text2]>',
'photooxy <effect|text|[text2]>',
'barcode <text>',
'qrcode <text>',
'tahta <text>',
'customtahta <text>',
'cstahta <text>',
'nulis <text>',
'nulis2 <text>',
'quotemaker <quote|author>'
     ],
    groups: [
'afk <alasan>',
'enable <option>',
'disable <option>',
'hidetag [text]',
'hidetext [text]'
     ],
    games: [
'kerang <pertanyaan>',
'simsimi <chat>',
's <chat>',
'say <text>',
'math <mode>',
'caklontong',
'family100',
'siapakahaku',
'tebakgambar',
'iq',
'dadu',
'slots',
'truth',
'dare',
'suit <pilihan>',
'suitjawa <pilihan>',
'mining',
'mine',
'howgay [nama]',
'howbucin [nama]',
'howtolol [nama]',
'howganteng [nama]',
'howcantik [nama]',
'howsad [nama]',
'howpintar [nama]',
'howbodoh [nama]',
'howbaper [nama]',
'howgila [nama]',
'howgabut [nama]',
'howlesbi [nama]',
'howstres [nama]',
'howjones [nama]',
'howsange [nama]'
     ],
    searchs: [
'tiktokstalk <username>',
'igstalk <username>',
'gdstalk <username>',
'lirik <query>',
'chord <query>',
'gimage <query>',
'pinterest <query>',
'google <query>',
'ytsearch <query>',
'shopee <query>',
'kisahnabi <query>',
'wiki <query>',
'kbbi <query>',
'subreddit <query>',
'sr <query>',
'gdsearch <query>',
'carigrup <query>',
'film <query>',
'happymod <query>',
'jadwaltv <query>',
'sholat <query>',
'cuaca <query>',
'play <query>',
'joox <query>',
'spotify <query>',
'github <query>',
'brainly <query>',
'belajar <query>',
'quran <no|ayat>',
'cersex <query>',
'heroml <query>',
'epep <user id>',
'resep <query>',
'masakan <query>',
'minecraft <type|ip>'
     ],
    primbons: [
'artinama <nama>',
'artimimpi <mimpi>',
'cekjodoh <nama|pasangan>',
'nomorhoki <nomor hp>',
'tggljadian <tggl>',
'zodiak <nama|tgl-bln-thn>'
     ],
    animes: [
'anime <query>',
'character <query>',
'manga <query>',
'loli',
'waifu',
'neko',
'megumin',
'hentai *(Premium)*'
     ],
    randoms: [
'cerpen',
'meme',
'asupan',
'hiburan',
'darkjokes',
'quotes',
'katabijak',
'faktaunik',
'fml',
'pantun',
'puisi',
'bucin',
'gombal',
'sindiran',
'katailham',
'bacot',
'bokep *(Premium)*',
'porno *(Premium)*'
     ],
    news: [
'infocovid <negara>',
'infobmkg',
'detik',
'kompas',
'liputan6',
'tribun',
'jalantikus'
     ],
    encrypts: [
'obfuscate <script>',
'randombyte <jumlah>',
'binary <text>',
'base64 <text>',
'unbase64 <text>',
'hex <text>',
'unhex <text>',
'escape <text>',
'unescape <text>',
'md4 <text>',
'md5 <text>',
'sha1 <text>',
'sha256 <text>',
'sha512 <text>'
     ],
    tools: [
'get <url>',
'post <url|[body]>',
'alay <text>',
'purba <text>',
'ninja <nama>',
'halah <text>',
'hilih <text>',
'huluh <text>',
'heleh <text>',
'holoh <text>',
'repeat <text|jumlah>',
'reverse <text>',
'readmore <text|text2>',
'spoiler <text|text2>',
'spamchat <jumlah|pesan> *(Premium)*',
'spamcall <nomor hp>',
'spamsms <nomor hp>',
'tts <lang|text>',
'translate <text|lang>',
'calculator <angka>',
'minify <script>',
'tinyurl <url>',
'shorturl <url>',
'bitly <url>',
'font <text>',
'style <text>',
'bold <text>',
'italic <text>',
'strikethrough <text>',
'monoscope <text>',
'imgbb <image url>',
'ocr <image url>',
'tesseract <image url>',
'nobg <image url>',
'removebg <image url>'
     ],
    owners: [
'exec <bash>',
'eval <functions>'
     ],
    others: [
'join <link group>',
'jadibot',
'akungratis',
'modapk',
'kodebahasa',
'kodenuklir',
'status',
'donasi',
'premium',
'report <laporan>',
'owner'
     ]
}

try {
  if (m.welcome) {
      if (!senderMessage) return m.ignoreMessage()
      var welcome = `Selamat ${salam}${senderName.startsWith('+') ? '\n' : ' '}*${senderName}*!\n\nSilahkan ketik *${prefix.test(senderMessage) ? usedPrefix : m.query.prefix ? m.query.prefix.slice(0, 1) : '!'}${pickRandom(listMenu.main)}* untuk memulai Bot ini.`
        return m.reply(welcome)
  } else if (m.simi) {
      if (!senderMessage) return m.ignoreMessage()
      var tmp = await (await fetch(`https://raw.githubusercontent.com/herokuapp-com/kuhong-api/main/api/simsimi.json`)).json()
      var { result } = pickRandom(tmp) || 'Simi nggak paham apa maksudmu'
      var res = await fetch(`https://simsumi.herokuapp.com/api?text=${encodeURIComponent(senderMessage)}&lang=id`)
      if (!/json/i.test(res.headers.get('content-type'))) {
	  res = await fetch(`https://api.simsimi.net/v2/?text=${encodeURIComponent(senderMessage)}&lc=id`)
	  if (!/json/i.test(res.headers.get('content-type'))) return m.reply(result)
      }
      var json = await res.json()
      if (json.success == '' || json.success == undefined || /Limit/i.test(json.success)) return m.reply(result)
        return m.reply(json.success)
  } else if (isGroup && afk.name !== null) {
      await fs.writeFileSync('./tmp/' + afk.name + '_afk.json', stringify({ name: null, reason: null }))
      return m.reply(`*「 BERHENTI AFK 」*\n\nSelamat datang kembali *${afk.name}!*\nudah beres ${afk.reason}nya kan?`)
  } else if (isGroup && afk.name !== null && senderMessage.includes(afk.name == null ? Math.floor(Math.random() * 10000) : afk.name)) {
      return m.reply(`*「 SEDANG AFK 」*\n\nSshhh!!! Jangan ganggu dia!\nDianya lagi ${afk.reason} dulu katanya`)
  } else if (isGroup && antilink && isGroupLink.test(senderMessage)) {
      var matched = senderMessage.match(isGroupLink).join('\n')
      return m.reply(`*「 ANTI LINK 」*\n\nDari: ${senderName}\nMember: ${groupName}\nLink:\n${matched}\nPesan:\n${senderMessage}\n\n\n_Sebelum share link mohon izin keadmin dulu ya!_`)
  } else if (isGroup && antitoxic && isToxic.test(senderMessage)) {
      var matched = senderMessage.match(isToxic).join(', ')
      if (/masuk|lanjutkan|banjir|(per)?panjang|asupan/i.test(senderMessage)) return m.ignoreMessage()
      if (prefix.test(senderMessage)) return m.ignoreMessage()
      return m.reply(`*「 ANTI TOXIC 」*\n\nDari: ${senderName}\nMember: ${groupName}\nKata Kasar: ${matched}\nPesan:\n${senderMessage}\n\n\n_Biasakan Jangan Toxic ya!_`)
  } else if (isGroup && antidelete && senderMessage == 'Pesan ini telah dihapus') {
      return m.reply(`*「 ANTI DELETE 」*\n\nDari: ${senderName}\nMember: ${groupName}\n\n_Seseorang telah terdeteksi menghapus pesan!_`)
  } else if (isGroup && antivirtex && isVirtex.test(senderMessage) && senderMessage.length > 1000) {
      return m.reply(`*「 ANTI VIRTEX 」*\n\nDari: ${senderName}\nMember: ${groupName}\n\n_Seseorang telah terdeteksi mengirim virtex!_`)
  } else if (isGroup && antiflood && senderMessage.length > 1000) {
      return m.reply(`*「 ANTI FLOOD  」*\n\nDari: ${senderName}\nMember: ${groupName}\n\n_Seseorang telah terdeteksi mengirim pesan terlalu panjang!_`)
  } else if (/^kuhong$/i.test(senderMessage)) {
      return m.reply('Yaa Aku Disini??\n\nIngin Memulai Bot? Ketik !help atau !menu yaa ;)')
  } else if (/^p$/i.test(senderMessage)) {
      return m.reply('Dilarang P! Biasakan salam')
  } else if (/ass?alamm?ualaikum/gi.test(senderMessage)) {
      return m.reply('Wa\'alaikumussalam')
  } else if (!(prefix.test(senderMessage) && command)) return m.ignoreMessage()

  if (/^menu|help|start|\?$/i.test(command)) {
      var d = new Date(new Date + 3600000)
      var weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
      var islamic = Intl.DateTimeFormat('id-TN-u-ca-islamic', { day: 'numeric', month: 'long', year: 'numeric' }).format(d)
      var menu = `
╭─ *「 ${botName} 」*
│
│ _Selamat *${salam}*!_
│• Name: ${senderName}${isGroup ? '\n│• Group: ' + groupName : ''}
│• Location: ${isGroup ? 'Group' : 'Private'} Chat
│• Prefix: [ ${usedPrefix} ]
│• Jadwal: ${jadwal}
│• Time: ${m.time}
│• Uptime: ${muptime(process.uptime())}
│• Weton: ${weton}
│• Islamic: ${islamic}
│• Date: ${m.date}
│• Total Features: ${listMenu.downloaders.length + listMenu.makers.length + listMenu.groups.length + listMenu.games.length + listMenu.searchs.length + listMenu.primbons.length + listMenu.animes.length + listMenu.randoms.length + listMenu.news.length + listMenu.encrypts.length + listMenu.tools.length + listMenu.owners.length + listMenu.others.length}
│• Total Replies: ${m.replyCount.all}
╰────

╭─ *「 Information 」*
│• < > = Wajib Diisi
│• [ ] = Tidak Wajib Diisi
│• (Premium) = Khusus Premium
╰────

╭─ *「 Join Group 」*
│${gc_link}
╰────
${readMore}
╭─ *「 Main Menu 」*
${listMenu.main.map(v => `│• ${usedPrefix + v}`).join('\n')}
╰────

╭─ *「 Downloaders Menu 」*
${listMenu.downloaders.map(v => `│• ${usedPrefix + v}`).join('\n')}
╰────

╭─ *「 Makers Menu 」*
${listMenu.makers.map(v => `│• ${usedPrefix + v}`).join('\n')}
╰────

╭─ *「 Groups Menu 」*
${listMenu.groups.map(v => `│• ${usedPrefix + v}`).join('\n')}
╰────

╭─ *「 Games Menu 」*
${listMenu.games.map(v => `│• ${usedPrefix + v}`).join('\n')}
╰────

╭─ *「 Searchs Menu 」*
${listMenu.searchs.map(v => `│• ${usedPrefix + v}`).join('\n')}
╰────

╭─ *「 Primbons Menu 」*
${listMenu.primbons.map(v => `│• ${usedPrefix + v}`).join('\n')}
╰────

╭─ *「 Animes Menu 」*
${listMenu.animes.map(v => `│• ${usedPrefix + v}`).join('\n')}
╰────

╭─ *「 Randoms Menu 」*
${listMenu.randoms.map(v => `│• ${usedPrefix + v}`).join('\n')}
╰────

╭─ *「 News Menu 」*
${listMenu.news.map(v => `│• ${usedPrefix + v}`).join('\n')}
╰────

╭─ *「 Encrypts Menu 」*
${listMenu.encrypts.map(v => `│• ${usedPrefix + v}`).join('\n')}
╰────

╭─ *「 Tools Menu 」*
${listMenu.tools.map(v => `│• ${usedPrefix + v}`).join('\n')}
╰────

╭─ *「 Owners Menu 」*
${listMenu.owners.map(v => `│• ${usedPrefix + v}`).join('\n')}
╰────

╭─ *「 Others Menu 」*
${listMenu.others.map(v => `│• ${usedPrefix + v}`).join('\n')}
╰────


User ID:
_${await createHash('md5').update(senderName).digest('hex')}_
*${m.query.name ? m.query.name.toLowerCase().replace(/ +/g, '-') : package.name}@^${m.appVersion}*
${'```' + package.description + '```'}
`.trim()
      return m.reply(loghandler.wait, menu)

  } else if (/^owner$/i.test(command)) {
  	var str = 'Halo bang jago!'
        return m.reply(loghandler.wait, `Owner Bot:\nhttps://wa.me/${owner}?text=${encodeURIComponent(str)}`)

  } else if (/^s(tatus|peed)|ping$/i.test(command)) {
  	var old = performance.now()
      var p = process.memoryUsage()
      var cpus = os.cpus().map(cpu => {
         cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
         return cpu
      })
      var cpu = cpus.reduce((last, cpu, _, { length }) => {
         last.total += cpu.total
         last.speed += cpu.speed / length
         last.times.user += cpu.times.user
         last.times.nice += cpu.times.nice
         last.times.sys += cpu.times.sys
         last.times.idle += cpu.times.idle
         last.times.irq += cpu.times.irq
         return last
      }, { speed: 0, total: 0, times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 }})
      var neww = performance.now()
      var result = `
╭─ *「 STATUS BOT 」*
│
│• Name: ${botName}
│• Device: ${m.get('User-Agent').split('(')[1] ? m.get('User-Agent').replace(/[;]/g, '').split('(')[1].split(')')[0] : m.get('User-Agent').replace(/[;]/g, '')}
│• Server: ${m.get('Host')}
│• Library: AutoResponder
│• Application: ${messengerPackageName}
│• Type: Text Only (Non Media)
│• Platform: ${os.type()}
│• Arch: ${process.arch}
│• Battery: ${m.battery}%
│• Ram: ${formatSize(p.heapUsed)} / ${formatSize(p.rss + p.heapTotal + p.heapUsed + p.external + p.arrayBuffers)}
│• Rom: ${formatSize(os.totalmem() - os.freemem())} / ${formatSize(os.totalmem())}
│• Cpu: ${cpus[0].model} (${cpu.speed} MHZ)
│• Packages: NodeJS, FFmpeg, Tesseract, ImagesMagick, GraphicsMagick
│• Port: ${process.env.PORT || 3000}
│• IP: ${m.ip}
│• Received Message: ${m.receivedCount}
│• Daily Replies: ${m.replyCount.day}
│• Contacts Replies: ${m.replyCount.contact}
│• Groups Replies: ${m.replyCount.group}
│• Total Replies: ${m.replyCount.all}
│• Total Features: ${listMenu.downloaders.length + listMenu.makers.length + listMenu.groups.length + listMenu.games.length + listMenu.searchs.length + listMenu.primbons.length + listMenu.animes.length + listMenu.randoms.length + listMenu.news.length + listMenu.encrypts.length + listMenu.tools.length + listMenu.owners.length + listMenu.others.length}
│• Total Modules: ${fs.readdirSync('./node_modules').length}
│• Uptime: ${muptime(process.uptime())}
│• Ping: ${neww - old}ms
│• App Version: ${m.appVersion}
│• Node Version: ${process.versions.node}
│• Package Version: ${package.version}
╰────
`.trim()
      return m.reply(loghandler.wait, result)

  } else if (/^afk$/i.test(command)) {
      if (!isGroup) return m.reply(loghandler.wait, loghandler.groupOnly)
      if (!text) return m.reply(loghandler.wait, loghandler.notReason)
      var result = `*「 IZIN AFK 」*\n\nNama: ${senderName}\nAlasan: ${text}`
      await fs.writeFileSync('./tmp/' + senderName + '_afk.json', stringify({ name: senderName, reason: text.trim() }))
    	return m.reply(result)

  } else if (/^e(xec(ute)?|val)$/i.test(command)) {
  	if (!isOwner) return m.reply(loghandler.wait, loghandler.ownerOnly)
      if (!text) return m.reply(loghandler.wait, loghandler.notText)
      var exec = util.promisify(cp.exec).bind(cp)
      if (/^exec(ute)?$/i.test(command)) {
      	var res
          try { res = await exec(text) } catch (e) { res = e }
          finally {
          var { stdout, stderr, err } = res
	      if (err) return m.reply(loghandler.wait, util.format(err.message ? err.message : err))
          else if (stdout) return m.reply(loghandler.wait, util.format(stdout))
          else if (stderr) return m.reply(loghandler.wait, util.format(stderr))
          }
       } else return eval(text)

  } else if (/^ytmp(3|4)$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notUrl)
      if (!isURL(text)) return m.reply(loghandler.wait, loghandler.invalidLink)
      var server = (text || 'id4').toLowerCase()
      var { dl_link, thumb, title, filesize, filesizeF } = /3$/i.test(command) ? await yta(text, servers.includes(server) ? server : 'id4') : await ytv(text, servers.includes(server) ? server : 'id4')
      var result = `Title: ${title}\nSize: ${filesizeF}\nThumb: ${thumb}\nDownload:\n${dl_link}`
    	return m.reply(loghandler.wait, result)

  } else if (/^(yt)?play$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notQuery)
      var res = await yts(text)
      var json = res.all.find(video => video.seconds < 3600)
      if (!json) return m.reply(loghandler.wait, 'Lagu tidak ditemukan!')
      var { dl_link, thumb, title, filesize, filesizeF } = await yta(json.url, 'id4')
        var result = `Title: ${json.title}\nDuration: ${json.timestamp}\nUploaded: ${json.ago}\nViews: ${json.views}\nSize: ${filesizeF}\nThumb: ${thumb}\nSource: ${json.url}\nDownload:\n${dl_link}`
          return m.reply(loghandler.wait, result)

  } else if (/^tiktok(nowm)?$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notUrl)
      if (!isURL(text)) return m.reply(loghandler.wait, loghandler.invalidLink)
      await tiktok.getVideoMeta(text, { noWaterMark: /nowm$/i.test(command) }).then(res => {
      var result = `Title: ${res.collector[0].text}\nID: ${res.collector[0].id}\nUploader: ${res.collector[0].authorMeta.nickName}\nThumb: ${res.collector[0].imageUrl}\nDownload:\n${res.collector[0].videoUrl}`
        return m.reply(loghandler.wait, result)
      }).catch(() => m.reply(loghandler.wait, 'Video tidak dapat ditemukan!'))

  } else if (/^tiktokstalk$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notName)
      await tiktok.getUserProfileInfo(text).then(res => {
      var result = `Nickname: ${res.user.nickname}\nUser ID: ${res.user.id}\nAvatar: ${res.user.avatarLarger}\nFollowers: ${res.stats.followerCount}\nFollowing: ${res.stats.followingCount}\nVideos: ${res.stats.videoCount}\nVerified: ${res.user.verified}\nSignature: ${res.user.signature}`
        return m.reply(loghandler.wait, result)
      }).catch(() => m.reply(loghandler.wait, 'User tidak dapat ditemukan!'))

  } else if (/^i(nsta)?g(ram)?$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notUrl)
      if (!isURL(text)) return m.reply(loghandler.wait, loghandler.invalidLink)
      var json = await (await fetch(`https://api.xteam.xyz/dl/igv2?url=${text}&apikey=${apikey.xteam}`)).json()
      if (!json.result) return m.reply(loghandler.wait, 'Media tidak dapat ditemukan!')
      var bytes = await (await fetch(json.result.url[0].url)).buffer()
      var size = await formatSize(bytes.length)
      var result = `Title: ${json.result.meta.title}\nType: ${json.result.url[0].type.toUpperCase()}\nSize: ${size.toUpperCase()}\nThumb: ${await saveToMedia(json.result.thumb)}\nDownload:\n${json.result.url[0].url}`
        return m.reply(loghandler.wait, result)

  } else if (/^i(nsta)?g(ram)?stalk$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notName)
      var json = await (await fetch(`https://api.xteam.xyz/dl/igstalk?nama=${text}&apikey=${apikey.xteam}`)).json() 
      if (!json.result.user) return m.reply(loghandler.wait, 'User tidak dapat ditemukan!')
      if (json.result.error) return m.reply(loghandler.wait, json.result.message)
      var { full_name, username, is_verified, media_count, follower_count, following_count, biography, external_url, profile_pic_url, hd_profile_pic_url_info, is_private } = json.result.user
      var result = `Full Name: ${full_name}\nUsername: @${username}\nVerified: ${is_verified}\nPosts: ${is_private ? 'Hidden' : media_count}\nFollowing: ${following_count}\nFollowers: ${follower_count}\nBio:\n${biography}\nImage Profile:\n${hd_profile_pic_url_info.url || profile_pic_url || 'None'}\nUrl:\nhttps://instagram.com/${username}${external_url ? '\nExternal Url: ' + external_url : ''}`
        return m.reply(loghandler.wait, result)

  } else if (/^f(ace)?b(ook)?$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notUrl)
      if (!isURL(text)) return m.reply(loghandler.wait, loghandler.invalidLink)
      var json = await (await fetch(`https://api.xteam.xyz/dl/fb?url=${text}&apikey=${apikey.xteam}`)).json() 
      if (!json.result) return m.reply(loghandler.wait, 'Media tidak dapat ditemukan!')
      var { name, author, description, uploadDate, duration, url, isFamilyFriendly, genre, keywords, contentSize, videoQuality, commentCount } = json.result
      var { name: authorname, url: authorlink } = author || {}
      var dateConfig = {
         hour: 'numeric',
         minute: 'numeric',
         second: 'numeric',
         day: 'numeric',
         month: 'long',
         year: 'numeric'
      }
      var result = `Family Freindly: ${isFamilyFriendly}\nKeyword: ${keywords || 'None'}\nUploader: ${name}\n(${authorname || 'Unknown'}) (${authorlink || 'Unknown'})\nPublished: ${new Date(uploadDate).toLocaleDateString('id', dateConfig)}\nSize: ${contentSize || 'Unknown'}\nDuration: ${clockString(+ new Date(duration))}\nGenre: ${genre || 'None'}\nQuality: ${videoQuality ? videoQuality : 'Unknown'}\nComment: ${commentCount}\nDescription:\n${description}\nDownload:\n${url}`
        return m.reply(loghandler.wait, result)

  } else if (/^say$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notText)
    	return m.reply(loghandler.wait, text.trim())

  } else if (/^alay$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notText)
      var result = text.replace(/[a-z]/gi, v => Math.random() > .5 ? v[['toLowerCase', 'toUpperCase'][Math.floor(Math.random() * 2)]]() : v).replace(/[abegiors]/gi, v => {
             if (Math.random() > .5) return v
             switch (v.toLowerCase()) {
                  case 'a': return '4'
                  case 'b': return Math.random() > .5 ? '8' : '13'
                  case 'e': return '3'
                  case 'g': return Math.random() > .5 ? '6' : '9'
                  case 'i': return '1'
                  case 'o': return '0'
                  case 'r': return '12'
                  case 's': return '5'
            }
     })
    	return m.reply(loghandler.wait, result)

  } else if (/^purba$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notText)
      var result = text.replace(/[aiueoAIUEO]/gi, v => {
             switch (v) {
                  case 'a': return 'ava'
                  case 'i': return 'ivi'
                  case 'u': return 'uvu'
                  case 'e': return 'eve'
                  case 'o': return 'ovo'
                  case 'A': return 'Ava'
                  case 'I': return 'Ivi'
                  case 'U': return 'Uvu'
                  case 'E': return 'Eve'
                  case 'O': return 'Ovo'
            }
     })
    	return m.reply(loghandler.wait, result)

  } else if (/^repeat$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notText)
      var [text, jumlah] = text.split('|')
      if (!jumlah) return m.reply(loghandler.wait, loghandler.notLength)
      if (isNaN(jumlah)) return m.reply(loghandler.wait, loghandler.numberOnly)
      if (jumlah * 1 > 1000) return m.reply(loghandler.wait, loghandler.overLength)
    	return m.reply(loghandler.wait, text.repeat(jumlah * 1))

  } else if (/^reverse$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notText)
      var result = ''
      for (var index = text.length - 1; index >= 0; index--) result += text[index]
        return m.reply(loghandler.wait, result)

  } else if (/^readmore|spoiler$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notText)
      var [l, r] = text.split('|')
      if (!l) l = ''
      if (!r) r = ''
    	return m.reply(loghandler.wait, l + readMore + r)

  } else if (/^hide(tag|text)$/i.test(command)) {
      if (!isGroup) return m.reply(loghandler.wait, loghandler.groupOnly)
        return m.reply(loghandler.wait, '' + text ? text : readMore + '')

  } else if (/^(ge|pos)t$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notUrl)
      if (!isURL(text)) return m.reply(loghandler.wait, loghandler.invalidLink)
      var [url, body] = text.split('|')
      var res = await fetch(url, { method: command.toUpperCase(), body: body ? body : null })
      if (res.status !== 200) return m.reply(loghandler.wait, `Gagal ${/^get$/i.test(command) ? 'mendapatkan' : 'memposting'}\n(${url})\n\n${res.statusText} (${res.status})`)
      var result = ''
      if (!/text|json/i.test(res.headers.get('content-type'))) result = 'Hasil:\n\n' + await saveToMedia(await res.buffer())
      else result = await res.text()
        return m.reply(loghandler.wait, result)

  } else if (/^b(rainly|elajar)$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notQuery)
      var json = await (await fetch(`https://recoders-area.caliph.repl.co/api/brainly?q=${text}`)).json()
      var result
      if (!json.data) {
          json = await (await fetch(`https://api.xteam.xyz/brainly?soal=${text}&apikey=${apikey.xteam}`)).json()
          result = json.jawaban.replace(/&(gt|lt)/g, '')
      if (!json.jawaban) return m.reply(loghandler.wait, 'Soal tidak dapat ditemukan!')
      } else result = json.data.map((v, i) => `Pertanyaan:\n${v.pertanyaan}\n${v.jawaban.map((v, i) => `Jawaban:\n${v.text}`).join('\n')}`).join('\n\n========================\n\n')
        return m.reply(loghandler.wait, result)

  } else if (/^(s|sim(sim)?i)$/i.test(command)) {
    if (!text) return m.reply(loghandler.wait, loghandler.notText)
    var tmp = await (await fetch(`https://raw.githubusercontent.com/herokuapp-com/kuhong-api/main/api/simsimi.json`)).json()
    var { result } = pickRandom(tmp)
    var res = await fetch(`https://simsumi.herokuapp.com/api?text=${encodeURIComponent(text)}&lang=id`)
    if (!/json/i.test(res.headers.get('content-type'))) {
	res = await fetch(`https://api.simsimi.net/v2/?text=${encodeURIComponent(text)}&lc=id`)
	if (!/json/i.test(res.headers.get('content-type'))) return m.reply(result)
    }
    var json = await res.json()
    if (json.success == '' || json.success == undefined || /Limit/i.test(json.success)) return m.reply(result)
      return m.reply(json.success)

  } else if (/^asupan$/i.test(command)) {
      var data = JSON.parse(await fs.readFileSync('./lib/json/asupan.json'))
      var json = pickRandom(data)
        return m.reply(loghandler.wait, 'Hasil:\n\n' + json.result)

  } else if (/^meme(indo)?$/i.test(command)) {
      var data = JSON.parse(await fs.readFileSync('./lib/json/memeindo.json'))
      var json = pickRandom(data)
        return m.reply(loghandler.wait, 'Hasil:\n\n' + json.result)

    } else if (/^d(ar|ra)kjokes?$/i.test(command)) {
      var data = JSON.parse(await fs.readFileSync('./lib/json/darkjokes.json'))
      var json = pickRandom(data)
        return m.reply(loghandler.wait, 'Hasil:\n\n' + json.result)

  } else if (/^randombytes?$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notLength)
      if (isNaN(text)) return m.reply(loghandler.wait, loghandler.numberOnly)
      var result = await randomBytes(text * 1)
    	return m.reply(loghandler.wait, result)

  } else if (/^binary$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notText)
      var result = ''
      for (var i = 0; i < text.length; i++) result += text[i].charCodeAt(0).toString(2)
    	return m.reply(loghandler.wait, result)

  } else if (/^base64$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notText)
    	return m.reply(loghandler.wait, Buffer.from(text, 'UTF-8').toString('base64'))

  } else if (/^unbase64$/i.test(command)) {
    if (!text) return m.reply(loghandler.wait, loghandler.notText)
    	return m.reply(loghandler.wait, Buffer.from(text, 'base64').toString())

  } else if (/^hex$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notText)
        return m.reply(loghandler.wait, Buffer.from(text, 'UTF-8').toString('hex'))

  } else if (/^unhex$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notText)
        return m.reply(loghandler.wait, Buffer.from(text, 'hex').toString())

  } else if (/^escape$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notText)
    	return m.reply(loghandler.wait, await escapeFull(text))

  } else if (/^unescape$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notText)
    	return m.reply(loghandler.wait, await unescape(text))

  } else if (/^iq$/i.test(command)) {
       var iq = Math.floor(Math.random() * 1000)
    	return m.reply(loghandler.wait, `IQ Anda sebesar ${iq}!`)

  } else if (/^dadu$/i.test(command)) {
      var dadu = Math.floor(Math.random() * 12)
    	return m.reply(loghandler.wait, `Kamu mendapatkan angka ${dadu}!`)

  } else if (/^(al)?quran$/i.test(command)) {
  	if (!text) return m.reply(loghandler.wait, 'Silahkan masukan nomor surah')
      var [surah, ayat] = text.split('|')
      if (!ayat) return m.reply(loghandler.wait, 'Silahkan masukan nomor ayat')
      var json = await (await fetch(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${surah}&ayat=${ayat}`)).json()
      var result = `${json.result.data.text.arab}\n\n${json.result.data.translation.id}\n( Q.S ${json.result.data.surah.name.transliteration.id} : ${json.result.data.number.inSurah} )\n\nAudio:\n${json.result.data.audio.primary}`
        return m.reply(loghandler.wait, result)

  } else if (/^(server)?m(ine)?c(raft)?$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notType)
      var [type, server] = text.split('|')
      if (!server) return m.reply(loghandler.wait, loghandler.notServer)
      if (/^bedroc?k$/i.test(type)) {
      await msu.statusBedrock(server).then(res => {
      return m.reply(loghandler.wait, `IP/Host: ${res.host}\nPort: ${res.port}\nVersion: ${res.version}\nProtocol Version: ${res.protocolVersion}\nGame Mode: ${res.gameMode}\nOnline Player: ${res.onlinePlayers}\nMax Player: ${res.maxPlayers}\nMotd: ${res.motdLine1.descriptionText}`)
      })
      } else if (/^java$/i.test(type)) {
      await msu.status(server).then(res => {
      return m.reply(loghandler.wait, `IP/Host: ${res.host}\nPort: ${res.port}\nVersion: ${res.version}\nProtocol Version: ${res.protocolVersion}\nOnline Player: ${res.onlinePlayers}\nMax Player: ${res.maxPlayers}\nMotd: ${res.description.descriptionText}`)
      })
      } else return m.reply(loghandler.wait, `Tipe yang tersedia adalah bedrock dan java\n\nContoh:\n${usedPrefix}minecraft bedrock|play.nethergames.org`)

  } else if (/^tts$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notLang)
      var [lang, text] = text.split('|')
      if (!text) return m.reply(loghandler.wait, loghandler.notText)
      if (text.length > 1000) return m.reply(loghandler.wait, loghandler.overText)
      var result = await saveToMedia(await tts(text, lang))
        return m.reply(loghandler.wait, 'Hasil:\n\n' + result)

  } else if (/^calc(ulat(e|or))?$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notNumber)
      var val = text.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '').replace(/×/g, '*').replace(/÷/g, '/').replace(/π|pi/gi, 'Math.PI').replace(/e/gi, 'Math.E').replace(/\/+/g, '/').replace(/\++/g, '+').replace(/-+/g, '-')
      var format = val.replace(/Math\.PI/g, 'π').replace(/Math\.E/g, 'e').replace(/\//g, '÷').replace(/\*×/g, '×')
      try {
      var result = (new Function('return ' + val))()
      var isMath
      if (!result) result = result
      try { isMath = JSON.parse(await fs.readFileSync('./tmp/math.json')) } catch (e) { isMath = false }
        return m.reply(loghandler.wait, `${isMath ? 'Hmmm...ngecheat?\n\n' : ''}${text} = ${result}`)
      } catch (e) {
        return m.reply(loghandler.wait, 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
      }

  } else if (/^kerang$/i.test(command)) {
        if (!text) return m.reply(loghandler.wait, loghandler.notText)
        var answer = 'Yaa nggak tau kok tanya saya?'
        if (/^apa(kah)?/i.test(text)) answer = pickRandom(['Ya', 'Mungkin iya', 'Mungkin', 'Mungkin tidak', 'Tidak', 'Tidak mungkin'])
        else if (/^kapan(kah)?/i.test(text)) answer = Math.floor(Math.random() * 100) + pickRandom([' detik', ' menit', ' jam', ' hari', ' pekan', ' minggu', ' bulan', ' tahun', ' dekade', ' lustrum', ' windu', ' dasawarsa', ' abad', ' milenium']) + ' lagi ...'
        else if (/^siapa(kah)?/i.test(text)) answer = pickRandom(['Aliando', 'Saya', 'Bukan Saya', 'Bukan Bot', 'Alok', 'Cwek', 'Cwok', 'Cowok', 'Cewek', 'Doimu', 'Doi', 'Febian', 'Putri', 'Fadil', 'Helin', 'Annisa', 'Cantika', 'Rizki', 'Zidan', 'Budi', 'Udin', 'Ibnu', 'Samarrr', 'Ular', 'Patrick', 'Patung', 'Hayabusa', 'Gatotkaca', 'ejenali', 'qaqaa', 'xd', 'Arnold', 'Master', 'Chef', 'Orang', 'Mikey', 'Agil', 'Awoakakak', 'Helmi', 'Dika', 'Suster', 'Anak', 'Ridwan', 'Razz', 'P cari doi', 'Hmm', 'Si Manis', 'Kacung', 'sygg', '86', 'Pajar', 'Ardian', 'Septian', 'Jungkook', 'Ryan', 'alboOwkdiw', 'Y', 'Reza', 'Kang copas', 'Tukang Seblak', 'Pikri', 'Manusia', 'Wibu-Lovers', 'FF Burik', 'Ardjoena', 'Selfia', 'Kenzo', 'Rafli', 'Dean', 'Felita', 'Wili', 'Putra', 'F', 'Gamers', 'Ipin', 'Botak', 'Hehe', 'Gunawan', 'Jin', 'Masha', 'Sadboy', 'Sofian', 'Mega', 'Zaky', 'Orang Ganteng', 'Wildan', 'Dhani', 'Pak Eko', 'Dzikri', 'Bapak', 'Pak Guru', 'PP Mikey', 'Om Deddy', 'Mas Botak', 'Tirta', 'Gak Ada Nama', 'Fio', 'Cakra', 'Rull', 'Kemal', 'Rama', 'Nenek', 'Siska', 'Abi', 'Ini Saya', 'RRQ Lemon', 'EVOS ajlh', 'EVOS', '@', 'User', 'Pengguna Google', 'Pengguna HP', 'Pengguna EpEp', 'Bot EpEp', 'Tehyung', ':v', 'Pacar', 'Pacarku', 'Mantan', 'Mantanku', 'Gak tau', 'Yo ndak tau kok tanya saya?', 'Saya', 'Aku', 'Bukan siapa-siapa', 'Artis', 'Youtuber', 'Liker', 'Tiktoker', 'Artis Tiktok', 'Preman', 'Orang'])
        else if (/^kenapa(kah)?/i.test(text)) answer = 'Karena kamu' + pickRandom([' ', ' tidak ']) + pickRandom(['wibu', 'ganteng', 'jomblo', 'badut', 'cantik', 'gay', 'tolol', 'stres', 'aneh', 'jelek', 'bau', 'suka selingkuh', 'beruntung', 'goblok', 'bego', 'suka pacaran', 'suka merokok', 'mandang fisik', 'mempunyai sifat buruk', 'gila', 'seperti bocil', 'suka egois', 'suka sombong', 'suka begadang', 'cengeng', 'banci', 'suka baperan', 'suka pelit', 'keras kepala', 'suka ngegosib', 'licik', 'pintar'])
        else if (/^bisa(kah)?/i.test(text)) answer = pickRandom(['Iya', 'Bisa', 'Tentu saja bisa', 'Tentu bisa', 'Sudah pasti', 'Sudah pasti bisa', 'Tidak', 'Tidak bisa', 'Tentu tidak', 'tentu tidak bisa', 'Sudah pasti tidak'])
        else if (/^berapa(kah)?/i.test(text)) answer = Math.floor(Math.random() * 10000)
        else return m.reply(loghandler.wait, '*Kata tanya yang tersedia:* apa, kapan, siapa, kenapa, bisa dan berapa')
          return m.reply(loghandler.wait, `Pertanyaan: ${text.replace(/@/g, '')}\nJawaban: ${answer}`)

  } else if (/^((custom|cs)?(harta)?tahta)$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notText)
      var img = /custom|cs/i.test(command) ? await tahta('', text.toUpperCase(), '') : await tahta('HARTA', 'TAHTA', text.toUpperCase())
      var result = await saveToMedia(img)
        return m.reply(loghandler.wait, 'Hasil:\n\n' + result)

  } else if (/^nulis$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notText)
      var fontPath = './src/fonts/Zahraaa.ttf'
      var inputPath = './src/images/nulis.jpg'
      var outputPath = './tmp/nulis.jpg'
      await cp.spawn('convert', [
                inputPath,
                '-font',
                fontPath,
                '-size',
                '700x960',
                '-pointsize',
                '30',
                '-interline-spacing',
                '-7',
                '-annotate',
                '+170+222',
                await textWrap(text, 47),
                outputPath
         ])
         .on('error', (e) => m.reply(loghandler.wait, `*「 ERROR 」*\n\n${util.format(e.message ? e.message : e)}`))
         .on('exit', async() => {
         var result = await saveToMedia(fs.readFileSync(outputPath))
         return m.reply(loghandler.wait, 'Hasil:\n\n' + result)
         })

  } else if (/^nulis2$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notText)
      var tgl = date.toLocaleDateString('id-Id')
      var hari = date.toLocaleDateString('id-Id', { weekday: 'long' })
      var fontPath = './src/fonts/Zahraaa.ttf'
      var inputPath = './src/images/nulis2.jpg'
      var outputPath = './tmp/nulis2.jpg'
      await cp.spawn('convert', [
                inputPath,
                '-font',
                fontPath,
                '-size',
                '1024x784',
                '-pointsize',
                '20',
                '-interline-spacing',
                '1',
                '-annotate',
                '+806+78',
                hari,
                '-font',
                fontPath,
                '-size',
                '1024x784',
                '-pointsize',
                '18',
                '-interline-spacing',
                '1',
                '-annotate',
                '+806+102',
                tgl,
                '-font',
                fontPath,
                '-size',
                '1024x784',
                '-pointsize',
                '20',
                '-interline-spacing',
                '-7.5',
                '-annotate',
                '+344+142',
                await textWrap(text, 55),
                outputPath
         ])
         .on('error', (e) => m.reply(loghandler.wait, `*「 ERROR 」*\n\n${util.format(e.message ? e.message : e)}`))
         .on('exit', async() => {
         var result = await saveToMedia(fs.readFileSync(outputPath))
           return m.reply(loghandler.wait, 'Hasil:\n\n' + result)
         })

  } else if (/^yts(earch)?$/i.test(command)) {
        if (!text) return m.reply(loghandler.wait, loghandler.notQuery)
        var res = await yts(text)
        var result = res.all.map(v => {
        switch (v.type) {
             case 'video': return `Title: ${v.title}\nUrl: ${v.url}\nDuration: ${v.timestamp}\nUploaded: ${v.ago}\nViews: ${v.views}`
             case 'channel': return `Channel: ${v.name}\nUrl: ${v.url}\nSubscribers: ${v.subCountLabel ? v.subCountLabel + ' (' + v.subCount + ')' : 'Hidden'}\nVideos: ${v.videoCount}`
        }}).filter(v => v).join('\n\n========================\n\n')
          return m.reply(loghandler.wait, result)

  } else if (/^google(search)?$/i.test(command)) {
        if (!text) return m.reply(loghandler.wait, loghandler.notQuery)
        var res = await google({ query: text })
        var result = res.map(v => `*${v.title}*\n\n${v.link}\n${v.snippet}`).join('\n\n========================\n\n')
          return m.reply(loghandler.wait, result)

  } else if (/^manga(search)?$/i.test(command)) {
        if (!text) return m.reply(loghandler.wait, loghandler.notQuery)
	    var json = await (await fetch(`https://api.jikan.moe/v3/search/manga?q=${text}`)).json()
	    var { title, synopsis, chapters, url, volumes, score, image_url } = json.results[0]
        var result = `Title: ${title}\nChapters: ${chapters}\nVolumes: ${volumes}\nScore: ${score}\nSynopsis: ${synopsis}\nThumb: ${image_url}\nLink: ${url}`
          return m.reply(loghandler.wait, result)

  } else if (/^g(ithub|h)(search)?$/i.test(command)) {
        if (!text) return m.reply(loghandler.wait, loghandler.notQuery)
        var json = await (await fetch(`https://api.github.com/search/repositories?q=${text}`)).json()
        var result = json.items.map((v, i) => `${1 + i}. *${v.full_name}*${v.fork ? ' (Fork)' : ''}\n\nUrl: ${v.html_url}\nDibuat: ${formatDate(v.created_at)}\nLast Update: ${formatDate(v.updated_at)}\nWatchs: ${v.watchers}\nForks: ${v.forks}\nStargazers: ${v.stargazers_count}\nIssues: ${v.open_issues}\nClone: ${'```git clone ' + v.clone_url + '```'}\nDescription: ${v.description ? '\n' + v.description : 'Tidak Ada Deskripsi'}`).join('\n\n========================\n\n')
          return m.reply(loghandler.wait, result)

  } else if (/^cer(ita)?pen(dek)?$/i.test(command)) {
        var cerita = ['cerpen-horor-hantu', 'cerpen-bahasa-inggris', 'cerpen-cinta', 'cerpen-cinta-dalam-hati-terpendam', 'cerpen-cinta-islami']
        var category = cerita[Math.floor(Math.random() * cerita.length)]
        var page = Math.floor(Math.random() * 30)
        var url = `https://cerpenmu.com/category/${category}/page/${page}`

        await request.get({
               headers: {
                   'User-Agent': m.get('User-Agent')
               },
               url: url,
        }, function (error, response, body) {
            var $ = cheerio.load(body)
            var cerpen = []
            $('article[class="post"] > h2 > a').each(function (i, e) {
            cerpen[i] = $(this).attr('href')
            })
            var url = cerpen[Math.floor(Math.random() * 10)]
            request.get({
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                        },
                    url: url,
             }, function (error, response, body) {
                     var $ = cheerio.load(body)
                     var h = $.html().replace(/<[^>]*>?/gm, '')
                     var result = fromString($.html(), { noLinkBrackets: true, ignoreHref: true, ignoreImage: true })

               return m.reply(loghandler.wait, result.split('Share ke Facebook Twitter Google+')[0].split('Kontak Kami')[1])
           })
       })

  } else if (/^font|style$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notText)
      var result = Object.entries(await stylizeText(text)).map(([name, value]) => `*${name}*\n${value}`).join('\n\n')
        return m.reply(loghandler.wait, result)

  } else if (/^(bold|italic|strikethrough|monoscope)$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notText)
      var modifier = /^bold$/i.test(command) ? '*' : /^italic$/i.test(command) ? '_' : /^strikethrough$/i.test(command) ? '~' : /^monoscope$/i.test(command) ? '```' : ''
        return m.reply(loghandler.wait, modifier + text + modifier)

  } else if (/^(tiny|short)url$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notUrl)
      if (!isURL(text)) return m.reply(loghandler.wait, loghandler.invalidLink)
      var result = await (await fetch(`https://tinyurl.com/api-create.php?url=${text}`)).text()
        return m.reply(loghandler.wait, 'Hasil:\n\n' + result)

  } else if (/^lirik$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notQuery)
      var json = await (await fetch(`https://some-random-api.ml/lyrics?title=${text}`)).json()
      if (!json.lyrics) return m.reply(loghandler.wait, 'Lirik tidak ditemukan!')
        return m.reply(loghandler.wait, json.lyrics)

  } else if (/^chord$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notQuery)
      var json = await (await fetch(`https://st4rz.herokuapp.com/api/chord?q=${text}`)).json()
      if (!json.result) return m.reply(loghandler.wait, 'Chord tidak ditemukan!')
        return m.reply(loghandler.wait, json.result)

  } else if (/^tr(anslate)?$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notLang)
      var [lang, text] = text.split('|')
      if (!text) return m.reply(loghandler.wait, loghandler.notText)
      var result = await translate(text, { tld: 'cn', to: lang })
        return m.reply(loghandler.wait, 'Hasil:\n\n' + result[0])

  } else if (/^info(bmkg|gempa)$/i.test(command)) {
      await searchGempa().then(json => {
      var result = `Waktu: ${json.waktu}\nLintang: ${json.lintang}\nBujur: ${json.bujur}\nMagnitudo: ${json.magnitudo}\nKedalaman: ${json.kedalaman}\nWilayah: ${json.wilayah}\nMap: ${json.map}`
        return m.reply(loghandler.wait, result)
      })

  } else if (/^infocovid$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notQuery)
      var list = await (await fetch('https://covid19.mathdro.id/api/countries')).json()
      var json = await (await fetch(`https://covid19.mathdro.id/api/countries/${text}`)).json()
      if (!json.confirmed) return m.reply(loghandler.wait, `List Negara:\n\n${list.countries.map(v => '- ' + v.name).join('\n')}`)
      var result = `Negara: ${text.trim()}\nPositif: ${json.confirmed.value}\nSembuh: ${json.recovered.value}\nMeninggal: ${json.deaths.value}\nUpdate Terakhir: ${json.lastUpdate}`
        return m.reply(loghandler.wait, result)

  } else if (/^spam(call|sms)$/i.test(command)) {
  	if (!text) return m.reply(loghandler.wait, loghandler.notNumber)
      var nomor = text.replace(/^(62|0)/g, '').replace(/[-]/g, '').replace(/ +/g, '')
      var json = {}
      if (/call/i.test(command)) json = await (await fetch(`http://zekais-api.herokuapp.com/spamcall?no=${nomor}&apikey=${apikey.zekais}`)).json()
      if (/sms/i.test(command)) json = await (await fetch(`http://zekais-api.herokuapp.com/spamcall?no=${nomor}&apikey=${apikey.zekais}`)).json()
      if (!json.result) return m.reply(loghandler.wait, util.format(json))
        return m.reply(loghandler.wait, json.result)

  } else if (/^sha(1|256|512)|md(4|5)$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notText)
      var result = await createHash(command).update(text).digest('hex')
        return m.reply(loghandler.wait, result)

  } else if (/^h([aiueo])l\1h$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notText)
      var txt = command.slice(1, 2)
      var result = text.replace(/[aiueo]/g, txt).replace(/[AIUEO]/g, txt.toUpperCase())
        return m.reply(loghandler.wait, result)

  } else if (/^fml$/i.test(command)) {
      var fml = await (await fetch('https://www.fmylife.com/random')).text()
      var $ = cheerio.load(fml)
      var en = $.root().find('div.w-full.lg\\:w-2\\/3.p-2').eq(0).find('a.block.text-blue-500.my-4').eq(0).text()
      var result = await translate(en, { tld: 'cn', to: 'id' })
        return m.reply(loghandler.wait, result[0])

  } else if (/^quotes?$/i.test(command)) {
      var data = JSON.parse(await fs.readFileSync('./lib/json/quotes.json'))
      var json = pickRandom(data)
        return m.reply(loghandler.wait, json.quotes)

  } else if (/^sindiran$/i.test(command)) {
      var data = JSON.parse(await fs.readFileSync('./lib/json/sindiran.json'))
      var json = pickRandom(data)
        return m.reply(loghandler.wait, json.result.sindiran)

  } else if (/^pantun$/i.test(command)) {
      var data = JSON.parse(await fs.readFileSync('./lib/json/pantun.json'))
      var json = pickRandom(data)
        return m.reply(loghandler.wait, json.result)

  } else if (/^puisi$/i.test(command)) {
  	var puisi = [
         'Sontak\n\nSetiap hendak menulis sajak sketsa wajahmu itu selalu saja merebak udara menjadi sesak penaku henti mendadak serangkaian kosakata di benakku pun luluh-lantak setiap itu pula aku tak tahu harus apa selain menunda dan menyaksikan tiap imaji yang tersisa malihrupa jadi jelaga.',
         'Menyerah\n\nMaaf, aku harus menyerah telah lama kucoba untuk bertahan namun aku semakin terluka maaf, aku harus menyerah kuat inginku untuk bertahan namun hati tak bisa lagi menerima maaf, aku harus menyerah luka ini sudah terlalu dalam hingga membuat hatiku pecah bergelimang darah maaf, aku harus menyerah menghentikan langkah menutup semua lembar kisah mimpi indah sepasang anak manusia yang bercerita tentang cinta maaf, aku menyerah…. Doaku Untukmu Selalu tersebut namamu, Diantara 7 titik kerendahan diri, Diatas lembar permadani, Berangkat semoga sampai langit untuk kembali turun kebumi sebagai karunia.',
         'Sepi\n\nTersebab, Tak mungkin bisa bersama, Maka aku selalu menuliskan syair hati, Dimana kehidupan dunia bisa diatur sesuai mauku, Lantas kau dan aku menjadi kita… Hanya bisa memanggil ingatan untuk mengusir kesunyian, Tapi ia datang tak pernah sendirian, Selalu beserta kerinduan. Terbayang suatu hari tangan kita terkait, Terlelap bersama dibawah saku langit. Sepi ini slalu menghantarkanku padamu',
         'Ini Tentangmu\n\nKatamu kau tak pandai berkata-kata, namun kata-katamu mampu membuatku terbata-bata… Bagimu kau tak terlalu suka mengungkap rasa, namun yang kau isyaratkan membuatku tak mungkin lupa… Menurutmu apa yang kau perbuat bukanlah apa-apa, namun tanpa kau sadari, bagiku kau begitu istimewa… Demikian tentangmu, dan sungguh! aku bukan sedang memujimu…',
         'Jejak Dalam Udara\n\nDan lihatlah, Sekumpulan burung-burung melintas dikotaku Dilangit senja yang perlahan pekat ditelan malam Beriringan mereka terbang pergi dan berlalu Sedang aku, Menyesap rindu dijejak-jejak yang semakin hilang Kuingin kau mencintai aku seperti udara, Meski kasat tapi kau hirup selamanya…',
         'Rasa\n\nLantas, biarlah sementara begini Tepatnya kan kubiarkan seperti ini Mungkin hati ini perlu waktu tuk menghapusnya Karena sesungguhnya aku telah terbiasa oleh keberadaanmu Dan sesungguhnya ada rindu yang mulai tertata Karenamupun, kini aku benar-benar tak sanggup mengelabui rasa',
         'Isyarat Yang Entah\n\nPada undakan anak tangga kelima Seorang perindu duduk menatap awan senja Ia tabah menunggu isyarat yang entah Tapi kau salah puan… Jika menganggapku setabah itu Justru karena tak sanggup menahan rindu Aku senantiasa mencurahkannya pada aksaraku Dan sementara di keningnya Waktu terus melukis kerut perlahan…',
         'Aku dan Hujan\n\nJalan itu menghitam,basah oleh hujan.Namun aku, muram, Kering oleh kerinduan.Gerimis ini menghapus jejak apapun,Namun kasihmu tak hilang dalam hitungan tahun.Lebih dari hancur Seperti pisau tajam yang menusuk hatitak pernah bisa dilepas lagimenusuk sampai nurani tempat aku bingkai indah namamu Aku hanyalah serpihan puing yang rapuh ingin aku ceritakan kehancuran ini tapi, kau seolah tak peduli, tak mampu kusatukan lagi kepingan hati',
         'Sudut Pandang\n\nKita lahir dari rahim yang sama Membuka mata di saat berbeda Aku menolongnya kau mencacinya Tapi kau yang jeli dan aku tertipu belaka Ini hanya masalah sudut pandang Menganggap kaya berlebihan atau miskin keterlaluan Mata rahim melihat itu semua seimbang Kita semua lahir dari rahim yang sama, rahim keadilan.',
         'Sebutir Debu\n\nAku hanya sebutir debu yang memburamkan kilau tak pantas berada diatas suci tak bisa menghindar saat angin hembuskan aku untukmu, lalu terbang Aq hanya kecewa bagai hampa mengharap udara, atau debu ditengah gersang mengharap hujan hentikan angin membawaku terbang.',
         'Kesabaran\n\nGubung bambu istana baginya, Perut yang selalu bernyanyi dalam hidupnya, Walau pahit telan untuk manis, Bersyukur kunci agar tak menangis, Melangkah kaki ini hingga membentuk garis pecahan, Duri-duri selalu menghadang raga, Wajah menahan kesakitan, Menyebut namaNya dalam jiwa.',
      ]
      var result = pickRandom(puisi)
        return m.reply(loghandler.wait, result)

  } else if (/^katailham$/i.test(command)) {
      var katailham = [
          'Nggak ada yang peduli denganmu di sosmed kecuali kamu cakep.',
          'Sesimpel ini deh sibuk itu palsu, semua tergantung prioritas.',
          'Dia hanya menghargaimu bukan mencintaimu.',
          'Keadilan sosial hanya berlaku bagi warna negara yang good looking.',
          'Jangan jadi pelangi untuk orang yang buta warna.',
          'Dia yang tertidur nyenyak setelah mematahkan hatimu tidak pantas untuk kamu ingat.',
          'Dia cuman bercanda, harusnya kamu ketawa, bukan malah jatuh cinta.',
          'Mencintaimu adalah seni menyakiti diri.',
          'Dia gak jahat, bapermu aja yang salah tempat.',
          'Jika tidak bisa mewarnai hidup seseorang, maka jangan pudarkan warna aslinya.',
          'Cukup tahu namaku, jangan rupaku.',
          'Sesuatu akan terasa berharga jika sudah kehilangan- kata ilham.',
          'Jangan pernah mengeluh ketika kopimu dingin, ia pernah hangat, namun kau diamkan.'
     ]
     var result = pickRandom(katailham)
       return m.reply(loghandler.wait, result)

  } else if (/^bucin$/i.test(command)) {
     var bucin = [
            'Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.',
            'Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.',
            'Jomblo. Mungkin itu cara Tuhan untuk mengatakan',
            'Istirahatlah dari cinta yang salah',
            'Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.',
            'Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.',
            'Pacar orang adalah jodoh kita yang tertunda.',
            'Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.',
            'Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.',
            'Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.',
            'Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.',
            'Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.',
            'Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.',
            'Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.',
            'Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.',
            'Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.',
            'Aku ingin menjadi satu-satunya, bukan salah satunya.',
            'Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.',
            'Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.',
            'Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.',
            'Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.',
            'Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.',
            'Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.',
            'Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.',
            'Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.',
            'Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.',
            'Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.',
            'Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.',
            'Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.',
            'Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.',
            'Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.',
            'Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.',
            'Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.',
            'Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.',
            'Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.',
            'Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.',
            'Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.',
            'Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.',
            'Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.',
            'PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.',
            'Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.',
            'Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.',
            'Makan apapun aku suka asal sama kamu, termasuk makan ati.',
            'Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.',
            'Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.',
            'Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya...',
            'Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.',
            'Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu...',
            'Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.',
            'Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.',
            'Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.',
            'Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.',
            'Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.',
            'Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal..',
            'Denganmu, jatuh cinta adalah patah hati paling sengaja.',
            'Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.',
            'Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.',
            'Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.',
            'Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain...',
            'Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.',
            'Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku...',
            'Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.',
            'Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.',
            'Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.',
            'Kamu adalah patah hati terbaik yang gak pernah aku sesali.',
            'Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.',
            'Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.',
            'Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.',
            'Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.',
            'Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.',
            'Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan...',
            'Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?\n\nKalau aku tidak kecewa, tapi aku menunggu ucapannya.',
            'Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.',
            'Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.',
            'Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.',
            'Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.',
            'Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.',
            'Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.',
            'Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.',
            'Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.',
            'Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan...',
            'Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?',
            'Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.',
            'Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo',
            'Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.',
            'Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.',
            'Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.',
            'Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.',
            'Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.',
            'keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.',
            'Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.',
            'Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.',
            'Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.',
            'Aku ki wong Jowo seng ora ngerti artine',
            'I Love U. Tapi aku ngertine mek',
            'Aku tresno awakmu',
            'Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.',
            'Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.',
            'Saben dino kegowo ngimpi tapi ora biso nduweni.',
            'Ora ketemu koe 30 dino rasane koyo sewulan.',
            'Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.',
            'Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.',
            'Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.',
            'Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.',
            'Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.',
            'Kanyaah akang moal luntur najan make Bayclean.',
            'Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.',
            'Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.',
            'Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).',
            'Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.',
            'Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.',
            'Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.',
            'Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.',
            'Cukup jaringan aja yang hilang, kamu jangan.',
            'Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.',
            'Musuhku adalah mereka yang ingin memilikimu juga.',
            'Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?',
            'Jam tidurku hancur dirusak rindu.',
            'Cukup China aja yang jauh, cinta kita jangan.',
            'Yang penting itu kebahagiaan kamu, aku sih gak penting..',
            'Cuma satu keinginanku, dicintai olehmu..',
            'Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.',
            'Cukup antartika aja yang jauh. Antarkita jangan.'
      ]
      var result = pickRandom(bucin)
        return m.reply(loghandler.wait, result)

  } else if (/^gombal$/i.test(command)) {
      var gombal = [
     "Kamu tau gak? Kenapa kalau aku menghafal lihatnya ke atas? soalnya kalau merem langsung kebayang wajahmu.",
     "Orang kurus itu setia, makan aja tidak pernah nambah apalagi pasangan.",
     "Kamu tu kayak warteg, sederhana namun berkualitas.",
     "Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
     "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
     "Kamu tau gak apa persamaannya kamu sama AC? Sama-sama bikin aku sejuk.",
     "Aku hanya ingin hidup cukup. Cukup lihat senyummu setiap hari.",
     "Aku rela ikut lomba lari keliling dunia, asalkan engkau yang menjadi garis finisnya.",
     "Kalau orang kebutuhan primernya ada tiga yaitu sandang pangan dan papan, tapi kalau aku : kamu, kamu, kamu.",
     "Cita-citaku dulu pengen jadi dokter, tapi setelah mengenalmu, berubah jadi ingin membahagiakanmu.",
     "Enak ya jadi kamu, kalau mau liat bidadari, tinggal liat di kaca.",
     "Jika kamu tanya berapa kali kamu datang ke pikiranku, jujur saja, cuma sekali. Habisnya, gak pergi-pergi sih!",
     "Jangan GR deh. Aku kangen kamu sedikit aja kok. Sedikit berlebihan maksudnya.",
     "Tanggal merah sekalipun aku tidak libur untuk memikirkan kamu.",
     "Cintaku padamu bagai diare. Tak bisa kutahan, terus keluar begitu saja.",
     "Aku ga lulus ulangan umum sayang, gara-gara di bagian essay-nya aku tulis surat cinta buat kamu.",
     "Tahu gak kenapa kita cuma bisa lihat pelangi setengah lingkaran? Sebab setengahnya lagi ada di mata kamu.",
     "Kalo kamu lagi di AS, Patung Liberty ga akan bawa obor tapi bakal bawa BUNGA!",
     "Aku rela jadi abang nasi goreng asalkan setiap malam aku bisa lewat depan rumah kamu.",
     "Aku rela dipenjara seumur hidup asalkan pelanggarannya karena mencintaimu.",
     "Kamu tau gak? Lukisan itukan makin lama makin antik, kalo kamu makin lama makin cantik",
     ]
     var result = pickRandom(gombal)
        return m.reply(loghandler.wait, result)

  } else if (/^katabija(k|x)$/i.test(command)) {
      var body = await (await fetch('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/random/katabijax.txt')).text()
      var json = body.split('\n')
      var result = json[Math.floor(Math.random() * json.length)]
        return m.reply(loghandler.wait, result)

  } else if (/^fakta(uni(k|x))?$/i.test(command)) {
      var body = await (await fetch('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/random/faktaunix.txt')).text()
      var json = body.split('\n')
      var result = json[Math.floor(Math.random() * json.length)]
        return m.reply(loghandler.wait, result)

  } else if (/^truth$/i.test(command)) {
      var truth = [
        'Acara tv apa yang paling kamu benci? Berikan alasannya!',
        'Apa baju yang (menurutmu) paling jelek yang pernah kamu pakai, dan kapan kamu memakainya?',
        'Apa hal paling buruk (gosip) yang pernah kamu bilang tentang temenmu?',
        'Apa hal paling memalukan dari dirimu?',
        'Apa hal paling memalukan dari temanmu?',
        'Apa hal pertama yang kamu lihat saat kamu melihat orang lain (lawan jenis)?',
        'Apa hal pertama yang terlintas di pikiranmu saat kamu melihat cermin?',
        'Apa hal terbodoh yang pernah kamu lakukan?',
        'Apa hal terbodoh yang pernah kamu lakukan?',
        'Apa ketakutan terbesar kamu?',
        'Apa mimpi terburuk yang pernah kamu alami?',
        'Apa mimpi terkonyol yang sampai sekarang kamu kamu ingat?',
        'Apa pekerjaan paling konyol yang pernah kamu bayangin kamu akan jadi?',
        'Apa sifat terburukmu menurut kamu?',
        'Apa sifat yang ingin kamu rubah dari dirimu?',
        'Apa sifat yang ingin kamu rubah dari temanmu?',
        'Apa yang akan kamu lakuin bila pacarmu bilang hidung atau jarimu jelek?',
        'Apa yang kamu fikirkan sebelum kamu tidur ? ex: menghayal tentang jodoh,dll.',
        'Apakah hal yang menurutmu paling menonjol dari dirimu?',
        'Bagian tubuh temanmu mana yang paling kamu sukai dan ingin kamu punya?',
        'Bagian tubuhmu mana yang paling kamu benci?',
        'Dari semua kelas yang ada di sekolah, kelas mana yang paling ingin kamu masuki dan kelas mana yang paling ingin kamu hindari?',
        'Deksripsikan teman terdekat mu!',
        'Deskripsikan dirimu dalam satu kata!',
        'Film dan lagu apa yang pernah membuat kamu menangis?',
        'Hal apa yang kamu rahasiakan sampe sekarang dan gak ada satu orangpun yang tau?',
        'Hal paling romantis apa yang seseorang (lawan jenis) pernah lakuin atau kasih ke kamu?',
        'Hal-hal menjijikan apa yang pernah kamu alami ?',
        'Jika kamu lahir kembali dan harus jadi salah satu dari temanmu, siapa yang akan kamu pilih untuk jadi dia?',
        'Jika punya kekuatan super/ super power ingin melakukan apa',
        'Jika sebentar lagi kiamat, apa yang kamu lakukan ?',
        'Kalo kamu disuruh operasi plastik dengan contoh wajah dari teman sekelasmu, wajah siapa yang akan kamu tiru?',
        'Kamu pernah mencuri sesuatu gak?',
        'Apakah kamu takut mati? kenapa?',
        'Kapan terakhir kali kamu menangis dan mengapa?',
        'Apa kemampuan spesial kamu apa?',
        'Kok bisa suka sama orang yang kamu sukai?',
        'Menurutmu, apa sifat baik teman terdekatmu yang nggak dia sadari?',
        'Orang seperti apa yang ingin kamu nikahi suatu saat nanti?',
        'Pekerjaan paling ngenes apa yang menurutmu cocok untuk teman yang sedang duduk di sebelahmu? Dan kenapa?',
        'Pengen tukeran hidup sehari dengan siapa? (teman terdekat yang kalian sama-sama tahu) dan mengapa',
        'Pernahkah kamu diam-diam berharap hubungan seseorang dengan pacarnya putus? Siapa?',
        'Pilih PACAR atau TEMAN ? why?',
        'Quote apa yang paling kamu ingat dan kamu suka?',
        'Rahasia apa yang belum pernah kamu katakan sampai sekarang kepada teman mu ?',
        'Siapa panutan yang benar-benar menjadi panutanmu?',
        'Siapa di antara temanmu yang kamu pikir matre?',
        'Siapa di antara teman-temanmu yang menurutmu potongan rambutnya paling nggak banget?',
        'Siapa diantara temen-temenmu yang paling NGGAK fotogenik dan kalo difoto lagi ketawa mukanya jelek banget?',
        'Siapa mantan terindah mu? dan mengapa kalian putus ?!',
        'Siapa nama artis yang pernah kamu bucinin diam-diam?',
        'Siapa nama guru cowok yang pernah kamu sukai dulu?',
        'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?',
        'Siapa nama orang (lawan jenis) yang menurutmu akan asyik bila dijadikan pacar?',
        'Siapa nama orang yang kamu benci, tapi kamu rasa orang itu suka sama kamu (nggak harus lawan jenis)?',
        'Siapa nama orang yang pernah kamu kepoin diam-diam?',
        'Siapa orang (lawan jenis) yang paling sering terlintas di pikiranmu?',
        'Siapa orang yang paling menjengkelkan di antara teman teman mu ? alasannya!',
        'Siapa sebenernya di antara teman-temanmu yang kamu pikir harus di make-over?',
        'Siapa yang paling mendekati tipe pasangan idealmu di sini',
        'Apa hal pertama yang akan Anda lakukan jika Anda bangun sebagai lawan jenis?',
        'Pernahkah Anda membiarkan orang lain mendapat masalah karena sesuatu yang Anda lakukan?',
        'Kapan terakhir kali Anda mengompol?',
        'Apa yang paling kamu impikan dari tidur?',
        'Jika Anda akan menghasilkan uang secara ilegal, bagaimana Anda membuatnya?',
        'Apa yang kekanak-kanakan yang masih Anda lakukan?',
        'Jika Anda buta, siapa yang akan menjadi anjing pemandu Anda?',
        'Apa yang paling mengesankan Anda?',
        'Jika Anda diizinkan untuk menggunakan hanya 3 kata untuk sisa malam mulai sekarang - yang mana itu?',
        'Jika Anda seorang diktator, hukum mana yang akan Anda undang terlebih dahulu?',
        'Jika Anda hidup selama era Nazi, siapa Anda?',
        'Apa pengalaman paling memalukan di waktu sekolah / waktu belajar / pendidikan / tahun lalu?',
        'Hewan apa yang paling cocok untukmu dan mengapa?',
        'Apa kencan terburukmu?',
        'Siapa yang ingin kamu cium sekarang?',
        'Apa rahasia kamu, fantasi gelap?',
        'Apakah Anda lebih suka tato pantat Anda atau menusuk lidah Anda?',
        'Apakah kamu selalu setia?',
        'Apakah Anda memiliki naksir remaja?',
        'Di orang mana kamu jatuh cinta?',
        'Selebritas mana yang ingin kamu kencani?',
        'Apa waasa saat paling memalukan dalam hidup Anda?'
      ]
      var result = pickRandom(truth)
        return m.reply(loghandler.wait, result)

  } else if (/^dare$/i.test(command)) {
      var dare = [
    "Ajak orang yg tidak kamu kenal itu selfie berdua dengan mu lalu upload ke snapgram", 
    "Ambil beberapa nomor dari kontakmu secara acak dan kirim sms 'Aku hamil' sama mereka.",
    "Ambil minuman apa saja yg ada didekat mu lalu campurkan dengan cabai dan minum!",
    "Ambil nomor secara acak dari kontakmu, telepon dia, dan bilang 'Aku mencintaimu'",
    "Beli makanan paling murah di kantin (atau beli sebotol aqua) dan bilang sambil tersedu-sedu pada teman sekelasmu 'Ini.. adalah makanan yang paling mahal yang pernah kubeli.. Hiks'",
    "Beli satu botol coca cola dan siram bunga dengan coca cola itu di depan orang banyak.",
    "Berdiri deket kulkas, tutup mata, pilih makanan secara acak didalemnya, pas makanpun mata harus tetep ditutup.",
    "Berdiri di tengah lapangan basket dan berteriak, 'AKU MENCINTAIMU PANGERANKU/PUTRIKU'",
    "Beri hormat pada seseorang di kelas, lalu bilang 'Hamba siap melayani Anda, Yang Mulia.'",
    "Berjalan sambil bertepuk tangan dan menyanyi lagu 'Selamat Ulang Tahun' dari kelas ke koridor.",
    "Berlutut satu kaki dan bilang 'Marry me?' sama orang pertama yang masuk ke ruangan.",
    "Bikin hiasan kepala absurd dari tisu, apapun itu, terus suruh pose didepan kamera, terus upload",
    "Bilang 'KAMU CANTIK BANGET NGGAK BOHONG' sama cewek yang menurutmu paling cantik di kelas ini",
    "Bilang pada seorang guru, 'Bu/Pak, baju saya terasa sempit' dengan ekspresi memelas.",
    "Bilang pada seseorang di kelas, 'Aku baru saja diberi tahu aku adalah kembaranmu dulu, kita dipisahkan, lalu aku menjalani operasi plastik. Dan ini adalah hal paling serius yang pernah aku katakan.'",
    "Buang buku catatan seseorang ke tempat sampah, di depan matanya, sambil bilang 'Buku ini isinya tidak ada yang bisa memahami'",
    "Cabut bulu kaki mu sendiri sebanyak 3x",
    "Chat kedua orangtuamu, katakan bahwa kamu kangen dengan mereka lengkap dengan emoticon sedih.",
    "Coba searcing google mengenai hal-hal yang mengerikan atau menggelikan seperti trypophobia, dll.",
    "Duduk relaks di tengah lapangan basket sambil berpura-pura itu adalah pantai untuk berjemur.",
    "isi mulut penuh dengan air dan harus tahan hingga dua putaran. Jika tertawa dan tumpah atau terminum, maka harus ngisi ulang dan ditambah satu putaran lagi.",
    "Jabat tangan orang pertama yang masuk ke ruangan ini dan bilang 'Selamat datang di Who Wants To Be a Millionaire!'",
    "Kirim sms pada orangtuamu 'Hai, bro! Aku baru beli majalah Playboy edisi terbaru!'",
    "Kirim sms pada orangtuamu, 'Ma, Pa, aku sudah tahu bahwa aku adalah anak adopsi dari Panti Asuhan. Jangan menyembunyikan hal ini lagi.'",
    "Kirim sms pada tiga nomor acak di kontakmu dan tulis 'Aku baru saja menjadi model majalah Playboy.'",
    "Makan 1 Sendok makan kecap manis dan kecap asin!",
    "Makan sesuatu tapi gak pake tangan.",
    "Marah-marah ketemen kamu yang gak dateng padahal udah janjian mau main 'truth or dare' bareng-bareng",
    "Mecahin telur pake kepala.",
    "Memakan makanan yang sudah dicampur-campur dan rasanya pasti aneh, namun pastikan bahwa makanan itu tidak berbahaya untuk kesehatan jangka panjang maupun jangka pendek.",
    "Menari ala Girls' Generation untuk cowok di depan kelas, atau menari ala Super Junior untuk cewek.",
    "Mengerek tiang bendera tanpa ada benderanya.",
    "Menggombali orang yang ditaksir, sahabat terdekat, lawan jenis yang tidak dikenal sama sekali dan  sejenisnya.",
    "Meniru style rambut semua temen kamu.",
    "Menyanyikan lagu HAI TAYO di depan banyak orang sambil menari",
    "Menyanyikan lagu Iwak Peyek dengan keras di ruang kelas.",
    "Minjem sesuatu ke tetangga",
    "Minta tandatangan pada seorang guru yang paling kamu benci sambil bilang 'Anda benar-benar orang yang paling saya kagumi di dunia.'",
    "Minta uang pada seseorang (random/acak) di jalan sambil bilang 'Saya tidak punya uang untuk naik angkot.'",
    "Minum sesuatu yang udah dibuat/disepakatin, tapi pastiin gak berbahaya, bisa kayak minum sirup yang digaremin terus ditambah kecap.",
    "Minum tiga teguk teh atau coke (coca-cola atau sprite) yang dicampur sambal.",
    "Ngomong ke gebetannya emoticon-Takut, ngobrol ngalurngidul apapun lah boleh ,via manapun juga bisa.",
    "Nyanyi-nyanyi lagu favorit difilm disney diluar rumah sambil teriak-teriak.",
    "Nyebutin 1 biru sampai 10 biru dengan cepat dan tidak boleh melakukan kesalahan. Jika salah maka harus diulang dari awal.",
    "Pakai mahkota tiruan dari kertas buku dan bilang sama setiap orang di ruangan 'BERI PENGHORMATAN PADA YANG MULIA RAJA' sambil menunjuk setiap orang dengan penggaris.",
    "Pake celana kebalik sampe besok paginya.",
    "Pegang bola basket, berdiri di depan kelas, dan berteriak, 'ADA YANG TAHU MENGAPA BOLA GOLF INI SANGAT BESAR? APA PABRIKNYA SALAH CETAK?'",
    "Peluk orang yang NGGAK kamu sukai di kelas dan bilang, 'Terimakasih banyak kamu sudah bersedia menjadi orang paling baik untukku.'",
    "Pergi ke lapangan yg luas, lalu berlari sekencang kencangnya sambil mengatakan 'aku gila aku gila'",
    "Petik 1 bunga lalu tancapkan bunga itu ke orang yg tidak kamu kenal (harus lawan jenis ya)",
    "Pilih orang secara acak di jalan, lalu bilang 'You don't know you're beautiful' (ala One Direction)",
    "Pura pura kerasukan ex: kerasukan macan dll",
    "Suruh bersiul pas mulutnya lagi penuh dijejelin makanan.",
    "Suruh jadi pelayan buat ngelayanin kamu sama temen-temen kamu buat makan siang.",
    "Suruh pake kaos kaki buat dijadiin sarung tangan.",
    "Suruh pake topi paling aneh/helm paling absurd selama 3 putaraann kedepan.",
    "Telpon mama kamu dan bilang 'ma, aku mau nikah secepatnya'",
    "Telpon mantan kamu dan bialng 'aku rindu kamu'",
    "Teriak 'WOI GW JACK, DENGER NIH RAUNGAN GW, ROAAAAR!' ditempat rame",
    "Tuker baju sama orang terdekat sampe ronde berikutnya.",
    "Update status di BBM, Line, WA, atau apapun itu dengan kata kata yang semuanya berawalan 'T'",
    "Upload video dia nyanyi ke youtube yang lagi nyanyiin lagu-lagu populer",
    "Warnain kuku kaki dan tangan tapi dengan warna berbeda-beda buat seminggu"
     ]
     var result = pickRandom(dare)
        return m.reply(loghandler.wait, result)

  } else if (/^bacot$/i.test(command)) {
      var bacot = [
        'Kamu suka kopi nggak? Aku sih suka. Tau kenapa alesannya? Kopi itu ibarat kamu, pahit sih tapi bikin candu jadi pingin terus.',
        'Gajian itu kayak mantan ya? Bisanya cuman lewat sebentar saja.',
        'Kata pak haji, cowok yang nggak mau pergi Sholat Jumat disuruh pakai rok aja.',
        'Kamu tahu mantan nggak? Mantan itu ibarat gajian, biasa numpang lewat dong di kehidupan kita.',
        'Aku suka kamu, kamu suka dia, tapi dia sayangnya nggak ke kamu. Wkwkw lucu ya? Cinta serumit ini.',
        'Google itu hebat ya? Tapi sayang sehebat-hebatnya Google nggak bisa menemukan jodoh kita.',
        'Terlalu sering memegang pensil alis dapat membuat mata menjadi buta, jika dicolok-colokkan ke mata.',
        'Saya bekerja keras karena sadar kalau uang nggak punya kaki buat jalan sendiri ke kantong saya.',
        'Jika kamu tak mampu meyakinkan dan memukau orang dengan kepintaranmu, bingungkan dia dengan kebodohanmu.',
        'Selelah-lelahnya bekerja, lebih lelah lagi kalau nganggur.',
        'Kita hidup di masa kalau salah kena marah, pas bener dibilang tumben.',
        'Nggak ada bahu pacar? Tenang aja, masih ada bahu jalan buat nyandar.',
        'Mencintai dirimu itu wajar, yang gak wajar mencintai bapakmu.',
        'Katanya enggak bisa bohong. Iyalah, mata kan cuma bisa melihat.',
        'Madu di tangan kananmu, racun di tangan kirimu, jodoh tetap di tangan tuhan.',
        'Selingkuh terjadi bukan karena ada niat, selingkuh terjadi karna pacar kamu masih laku.',
        'Netizen kalau senam jempol di ponsel nggak pakai pendinginan, pantes komennya bikin panas terus.',
        'Jodoh memang enggak kemana, tapi saingannya ada dimana-mana.',
        'Perasaan aku salah terus di matamu. Kalu gitu, besok aku pindah ke hidungmu.',
        'Jomblo tidak perlu malu, jomblo bukan berarti tidak laku, tapi memang tidak ada yang mau.',
        'Jika doamu belum terkabul maka bersabar, ingatlah bahwa yang berdoa bukan cuma kamu!',
        'Masih berharap dan terus berharap lama-lama aku jadi juara harapan.',
        'Manusia boleh berencana, tapi akhirnya saldo juga yang menentukan.',
        'Statusnya rohani, kelakuannya rohalus.',
        'Kegagalan bukan suatu keberhasilan.',
        'Tadi mau makan bakso, cuma kok panas banget, keliatannya baksonya lagi demam.',
        'Aku juga pernah kaya, waktu gajian.',
        'Aku diputusin sama pacar karena kita beda keyakinan. Aku yakin kalau aku ganteng, tapi dia enggak.',
        'Masa depanmu tergantung pada mimpimu, maka perbanyaklah tidur.',
        'Seberat apapun pekerjaanmu, akan semakin ringan jika tidak dibawa.',
        'Jangan terlalu berharap! nanti jatuhnya sakit!',
        'Ingat! Anda itu jomblo',
        'Gak tau mau ngetik apa',
      ]
      var result = pickRandom(bacot)
        return m.reply(loghandler.wait, result)

  } else if (/^artinama$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notName)
      await axios.get(`https://www.primbon.com/arti_nama.php?nama1=${text}&proses=+Submit%21+`)
      .then(res => {
          var $ = cheerio.load(res.data)
          var result = $('body').text().split('Nama:')[0].replace(/\n/gi, '').replace('ARTI NAMA', '').replace('                                ', '').split('PRIMBON, RAMALAN   HANTU, GAIB   UNIK, MISTERI   KONSULTASI   HUBUNGI KAMI')[1]
            return m.reply(loghandler.wait, result)
      })

  } else if (/^(arti|tafsir)mimpi$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, 'Silahkan masukan nama mimpi')
      await axios.get(`https://www.primbon.com/tafsir_mimpi.php?mimpi=${text}&submit=+Submit+`)
      .then(res => {
          var $ = cheerio.load(res.data)
          var p = $('#body > font > i').text()
          var isFind = /Tidak ditemukan/g.test(p) ? false : true
          if (isFind) {
              var body = $('#body').text().split(`Hasil pencarian untuk kata kunci: ${text}`)[1].replace(/\n\n\n\n\n\n\n\n\n/gi, '\n')
              var str = body.replace(/\n/gi, '').replace('       ', '').replace('\'        ', '').replace(/Solusi.*$/g, '')
              var result = replaceAll(str, '.Mimpi', '.\nMimpi')
                return m.reply(loghandler.wait, result)
          } else return m.reply(loghandler.wait, `Mimpi ${text} tidak dapat ditemukan!`)
      })

  } else if (/^cekjodoh$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notName)
      var [nama, pasangan] = text.split('|')
      if (!pasangan) return m.reply(loghandler.wait, 'Silahkan masukan nama pasangan')
      await axios.get(`https://www.primbon.com/kecocokan_nama_pasangan.php?nama1=${nama}&nama2=${pasangan}&proses=+Submit%21+`)
      .then(res => {
          var $ = cheerio.load(res.data)
          var level = 'https://www.primbon.com/' + $('#body > img').attr('src')
          var body = $('#body').text().split(pasangan)[1].replace('< Hitung Kembali', '').split('\n')[0]
          var positif = body.split('Sisi Negatif Anda: ')[0].replace('Sisi Positif Anda: ', '')
          var negatif = body.split('Sisi Negatif Anda: ')[1]
          var result = `Kecocokan Berdasarkan Nama:\n*${nama} & ${pasangan}*\n\nLevel Kecocokan:\n${level}\nSisi Positif: ${positif}\nSisi Negatif: ${negatif}`
            return m.reply(loghandler.wait, result)
       })

  } else if (/^nomorhoki$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notNumber)
      var nomor = text.replace(/^(62)/g, '').replace(/[-]/g, '').replace(/ +/g, '').replace('+', '')
      await axios({
           url: 'https://www.primbon.com/no_hoki_bagua_shuzi.php',
           method: 'POST',
           headers: {
                'content-type': 'application/x-www-form-urlencoded'
           },
           data: new URLSearchParams(Object.entries({ 'nomer': text, 'submit': ' Submit! ' }))
      }).then(res => {
          var $ = cheerio.load(res.data)
          var body = $('#body').text().trim()
          try {
          var shuzi = body.split('Angka Bagua Shuzi : ')[1].split('\n')[0]
          var note = body.split('* ')[1].split('Masukkan Nomor HP Anda')[0]
          var positif = {
          	      kekayaan: body.split('Kekayaan = ')[1].split('\n')[0],
                    kesehatan: body.split('Kesehatan = ')[1].split('\n')[0],
                    cinta: body.split('Cinta/Relasi = ')[1].split('\n')[0],
                    kestabilan: body.split('Kestabilan = ')[1].split('\n')[0],
                    persentase: body.split('%ENERGI NEGATIF')[0].split('% = ')[1] + '%'
          }
          var negatif = {
                    perselisihan: body.split('Perselisihan = ')[1].split('\n')[0],
                    kehilangan: body.split('Kehilangan = ')[1].split('\n')[0],
                    malapetaka: body.split('Malapetaka = ')[1].split('\n')[0],
                    kehancuran: body.split('Kehancuran = ')[1].split('\n')[0],
                    persentase: body.split('Kehancuran = ')[1].split('= ')[1].split('\n')[0]
          }
          var result = `Nomor HP: ${nomor}\nAngka Shuzi: ${shuzi}\n\n\n*Energi Positif:* ${positif.persentase}\nKekayaan = ${positif.kekayaan}\nKesehatan = ${positif.kesehatan}\nCinta/Relasi = ${positif.cinta}\nKestabilan = ${positif.kestabilan}\n\n*Energi Negatif:* ${negatif.persentase}\nPerselisihan = ${negatif.perselisihan}\nKehilangan = ${negatif.kehilangan}\nMalapetaka = ${negatif.malapetaka}\nKehancuran = ${negatif.kehancuran}\n\n${note}`
            return m.reply(loghandler.wait, result)
          } catch (e) {
        	return m.reply(loghandler.wait, 'Nomor HP Anda tidak valid!')
          }
      })

  } else if (/^tggljadian|jadian$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notDate)
      if (!text.includes('-')) return m.reply(loghandler.wait, 'Gunakan "-" disetiap tanggalnya\n\nContoh: 27-10-04')
      var tggl = text.split('-')[0] * 1
      var bln = text.split('-')[1] * 1
      var thn = text.split('-')[2] * 1
      if (isNaN(tggl)) return m.reply(loghandler.wait, loghandler.numberOnly)
      else if (isNaN(bln)) return m.reply(loghandler.wait, loghandler.numberOnly)
      else if (isNaN(thn)) return m.reply(loghandler.wait, loghandler.numberOnly)
      await axios.get(`https://www.primbon.com/tanggal_jadian_pernikahan.php?tgl=${tggl}&bln=${bln}&thn=${thn}&proses=+Submit%21+`)
      .then(res => {
          var $ = cheerio.load(res.data)
          var result = $('#body').text().replace('Karakteristik:', '\nKarakteristik:').replace('Hubungan', '\nHubungan').replace(/^\s*\n/gm, '').replace(/< Hitung Kembali.*$/s, '')
            return m.reply(loghandler.wait, result)
      })

  } else if (/^zodia(c|k)$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notName)
      var [nama, dates] = text.split('|')
      if (!dates) return m.reply(loghandler.wait, loghandler.notDate)
      if (isNaN(dates.slice(0, 1))) return m.reply(loghandler.wait, loghandler.numberOnly)
      if (!dates.includes('-')) return m.reply(loghandler.wait, 'Gunakan "-" disetiap tanggalnya\n\nContoh: 27-10-04')
      var tggl = dates.split('-')[0] * 1
      var bln = dates.split('-')[1] * 1
      var thn = dates.split('-')[2] * 1
      if (isNaN(tggl)) return m.reply(loghandler.wait, loghandler.numberOnly)
      else if (isNaN(bln)) return m.reply(loghandler.wait, loghandler.numberOnly)
      else if (isNaN(thn)) return m.reply(loghandler.wait, loghandler.numberOnly)
      var date = new Date(tggl, bln, thn)
      if (date == 'Invalid Date') return m.reply(loghandler.wait, 'Tanggal tidak valid')
      var d = new Date()
      var [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
      var birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
      var zodiac = await getZodiac(birth[1], birth[2])
      var ageD = new Date(d - date)
      var age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()
      var birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
      var umur = bulan === birth[1] && tanggal === birth[2] ? `Selamat ulang tahun yang ke ${age}!` : age
      var result = `Nama: ${nama}\nLahir: ${birth.join('-')}\nUltah: ${birthday.join('-')}\nUsia: ${umur}\nZodiak: ${zodiac}`
        return m.reply(loghandler.wait, result)

  } else if (/^suit(jawa)?$/i.test(command)) {
  	if (/^suit$/i.test(command)) {
  	    if (!text) return m.reply(loghandler.wait, 'Silahkan Pilih: Batu, Gunting, Kertas')
  	    var you = text.trim()
          var bot = Math.random()
          var hasil = ''
          if (bot < 0.34) bot = 'batu'
          else if (bot > 0.34 && bot < 0.67) bot = 'gunting'
          else bot = 'kertas'
          if (you.toLowerCase() == bot) hasil = `Seri!\nKamu : ${you.toLowerCase()}\nBot : ${bot}`
          else if (you.toLowerCase() == 'batu') {
              if (bot == 'gunting') hasil = `Kamu Menang!\n\nKamu: ${you.toLowerCase()}\nBot: ${bot}`
              else hasil = `Kamu Kalah!\n\nKamu : ${you.toLowerCase()}\nBot : ${bot}`
          } else if (you.toLowerCase() == 'gunting') {
              if (bot == 'kertas') hasil = `Kamu Menang!\n\nKamu : ${you.toLowerCase()}\nBot : ${bot}`
              else hasil = `Kamu Kalah!\n\nKamu : ${you.toLowerCase()}\nBot : ${bot}`
          } else if (you.toLowerCase() == 'kertas') {
              if (bot == 'batu') hasil = `Kamu Menang!\n\nKamu: ${you.toLowerCase()}\nBot: ${bot}`
              else hasil = `Kamu Kalah!\n\nKamu: ${you.toLowerCase()}\nBot: ${bot}`
          } else hasil = 'Pilihan yang tersedia: Batu, Gunting, Kertas'
            return m.reply(loghandler.wait, hasil)

      } else {
      	if (!text) return m.reply(loghandler.wait, 'Silahkan Pilih: Semut, Orang, Gajah')
  	    var you = text.trim()
          var bot = Math.random()
          var hasil = ''
          if (bot < 0.34) bot = 'orang'
          else if (bot > 0.34 && bot < 0.67) bot = 'semut'
          else bot = 'gajah'
          if (you.toLowerCase() == bot) hasil = `Seri!\nKamu : ${you.toLowerCase()}\nBot : ${bot}`
          else if (you.toLowerCase() == 'orang') {
              if (bot == 'semut') hasil = `Kamu Menang!\n\nKamu: ${you.toLowerCase()}\nBot: ${bot}`
              else hasil = `Kamu Kalah!\n\nKamu : ${you.toLowerCase()}\nBot : ${bot}`
          } else if (you.toLowerCase() == 'semut') {
              if (bot == 'gajah') hasil = `Kamu Menang!\n\nKamu : ${you.toLowerCase()}\nBot : ${bot}`
              else hasil = `Kamu Kalah!\n\nKamu : ${you.toLowerCase()}\nBot : ${bot}`
          } else if (you.toLowerCase() == 'gajah') {
              if (bot == 'orang') hasil = `Kamu Menang!\n\nKamu: ${you.toLowerCase()}\nBot: ${bot}`
              else hasil = `Kamu Kalah!\n\nKamu: ${you.toLowerCase()}\nBot: ${bot}`
          } else hasil = 'Pilihan yang tersedia: Semut, Orang, Gajah'
            return m.reply(loghandler.wait, hasil)
      }

  } else if (/^modapk|apkdownload$/i.test(command)) {
      var result = `
╭─ *「 MOD APK 」*
│
│• Minecraft (Original)
│https://www.mediafire.com/file/z9vqj628w494sso/Minecraft_1.17_By_RC047.apk/file
│• Geometry Dash (MOD)
│http://www.mediafire.com/file/thnoi1wpa5ex2wn/Geometry_Dash_%2528MOD%2529.apk/file
│• KineMaster (PRO)
│https://www.mediafire.com/download/eshb8rra8eg5xa3
│• KineMaster Diamond (MOD)
│https://www.mediafire.com/download/9p8wsnwupnq0lun
│• KineMaster Ruby (MOD)
│https://www.mediafire.com/download/6b2wa08cmtsr8x8
│• Adobe Photoshop (Original)
│https://www.mediafire.com/download/whfh12tj4zjpedp
│• Alight Motion (PRO)
│http://www.mediafire.com/file/tpxj2grwf8imp6i/Alight_Motion_V.3.1.4_%2528Mod%2529_By_bilqis_neha.apk/file
│• Avee Player (PRO)
│https://www.mediafire.com/download/5vkde8d1gcyk33y
│• Pixellab (PRO)
│https://www.mediafire.com/download/kxj0xyvrkc8w6h0
│• Inshot (PRO)
│https://www.mediafire.com/download/7qcmrfdy2o1ynxf
│• WavePad (PRO)
│https://www.mediafire.com/download/oif50qb8ltdoe2x
│• Vimage (PRO)
│https://www.mediafire.com/download/egjumopr2wl89tl
│• Zeotropic (PRO)
│https://www.mediafire.com/download/tw9zwj2km2tjsnh
│• 90s (PRO)
│https://www.mediafire.com/download/0y2bba69f6wakuh
╰────

╭─ *「 TEMPLATE 」*
│
│• Template MineImator
│http://www.mediafire.com/file/cxa8io0j0i3a0x4/Mine-Imator_%2528Template_Pika_Gamer%2529_Edited.zip/file
│• 50 Template Avee Player 1
│https://realsht.mobi/teCTj
│• 50 Template Avee Player 2
│https://realsht.mobi/hhSMc
│• Template Quotes Rainbow
│https://realsht.mobi/LbmVw
│• Template Quotes 1
│https://realsht.mobi/GZuvl
│• Template Quotes 2
│https://realsht.mobi/lFLqm
│• Template Quotes 3
│https://realsht.mobi/prMyC
│• Template Quotes 4
│https://realsht.mobi/FyGha
│• Template Quotes 5
│https://realsht.mobi/LdpNd
│• Template Quotes 6
│https://realsht.mobi/BdlQe
│• Template Quotes 7
│https://realsht.mobi/fdZCs
│• Template Quotes 8
│https://realsht.mobi/YkqIk
│• Template Quotes 9
│https://realsht.mobi/BcKdr
│• Template Quotes 10
│https://realsht.mobi/MaZno
│• Template Mega Colab
│https://realsht.mobi/JinWs
│• Template Colab 1
│https://realsht.mobi/bocSM
│• Template Colab 2
│https://realsht.mobi/eJwLd
│• Template Colab 3
│https://realsht.mobi/tGMxp
│• Template Colab 4
│https://realsht.mobi/oQtWo
│• Template Colab 5
│https://realsht.mobi/rbvWQ
│• Template Wajah Orang
│https://realsht.mobi/tGMxp
│• Template Kacamata
│https://realsht.mobi/MpoKs
│• Template Unix 1
│https://realsht.mobi/dfToI
│• Template Unix 2
│https://realsht.mobi/hRMsq
│• Template Partikel
│https://realsht.mobi/wOMlc
│• Template Pistol
│https://realsht.mobi/exXCy
│• Template Solo
│https://realsht.mobi/MvYbm
╰────

╭─ *「 FONT 」*
│
│• Kumpulan Font Untuk Quotes
│https://realsht.mobi/JkmXx
│• 800 Font Picsay/Pixelab
│https://realsht.mobi/brKhI
│• 400 Font Picsay/Pixelab
│https://realsht.mobi/gBhyt
│• 200 Font Picsay/Pixelab
│https://realsht.mobi/iJQbj
│• 100 Font Picsay/Pixelab
│https://realsht.mobi/hrTdE
╰────
`.trim()
    return m.reply(loghandler.wait, result)

  } else if (/^dona(te|si)$/i.test(command)) {
    var str = `
╭─ *「 ${command.toUpperCase()} 」*
│
│• Pulsa: +${owner}
│• ${capital(new URL(donate_link).host).split('.')[0]}:
│${donate_link}
╰────
`.trim()
    return m.reply(loghandler.wait, str)

  } else if (/^(kode)?nuklir$/i.test(command)) {
      var result = `
Code Nuklear [Doujin Hentai Genre NTR] (Netorare)

Easy Mode :
• https://nhentai.net/g/316755/
• https://nhentai.net/g/316596/
• https://nhentai.net/g/311850/
• https://nhentai.net/g/315578/
• https://nhentai.net/g/315488/
• https://nhentai.net/g/315406/
• https://nhentai.net/g/315344/
• https://nhentai.net/g/315323/
• https://nhentai.net/g/315136/
• https://nhentai.net/g/315099/

Medium Mode :
• https://nhentai.net/g/316867/
• https://nhentai.net/g/316869/
• https://nhentai.net/g/316785/
• https://nhentai.net/g/316763/51/
• https://nhentai.net/g/316445/
• https://nhentai.net/g/316250/
• https://nhentai.net/g/311283/
• https://nhentai.net/g/265671/
• https://nhentai.net/g/312127/
• https://nhentai.net/g/311560/

Hard Mode :
• https://nhentai.net/g/316820/
• https://nhentai.net/g/316481/
• https://nhentai.net/g/316430/
• https://nhentai.net/g/276347/
• https://nhentai.net/g/196329/
• https://nhentai.net/g/304543/
• https://nhentai.net/g/295295/
• https://nhentai.net/g/311262/
• https://nhentai.net/g/311882/
• https://nhentai.net/g/312180/

Kodeu nuklir ti MILF Oneesan dugi ka bro *** loli

https://nhentai.net/g/271890/
https://nhentai.net/g/272057/
https://nhentai.net/g/272173/
https://nhentai.net/g/272182/
https://nhentai.net/g/272196/
ht
https://nhentai.net/g/272512/
https://nhentai.net/g/271245/
https://nhentai.net/g/271056/
https://nhentai.net/g/270809/
https://nhentai.net/g/269653/
https://nhentai.net/g/266088/
https://nhentai.net/g/264980/
https://nhentai.net/g/262215/
https://nhentai.net/g/260433/

-

https://nhentai.net/g/260146/
https://nhentai.net/g/256738/
https://nhentai.net/g/272425/
https://nhentai.net/g/272352/
https://nhentai.net/g/272045/
https://nhentai.net/g/272015/
https://nhentai.net/g/271993/
https://nhentai.net/g/271924/
https://nhentai.net/g/271905/
https://nhentai.net/g/271797/

-

https://nhentai.net/g/271760/
https://nhentai.net/g/271717/
https://nhentai.net/g/271726/
https://nhentai.net/g/271667/
https://nhentai.net/g/267352/
https://nhentai.net/g/152968/
https://nhentai.net/g/238876/
https://nhentai.net/g/116395/
https://nhentai.net/g/84809/
https://nhentai.net/g/211656/

-

https://nhentai.net/g/272117/
https://nhentai.net/g/188721/
https://nhentai.net/g/266402/
https://nhentai.net/g/238876/
[8/6 10.48] +62 812-8025-1698: Happy Mother's Day 165310,177978,211759,212643,229540, 250029,211519,256097,163478, 91505, 79280, 260629,128051,121972,261633,172044,119055,208323,149942,161236, 177150,233766,97949,230107 ,175822, 213545,232837,179166,138603,130183, 173543,234642,268015,228293,268893, 239536, yg suka mamah

Random
 257892 226942 236297 216039 221711 245304 166174 175220 244327 191049 220882 244859 227446 259328 259532 259634 259610 259348 258669 256097 118282 260028 260058 259557 259497 122220 260111 260088 259880 258977 260097 259765 259359 260138 259617 107965 197255 260276 260209 260210 260203 191360 191390 248933 257567 227913 211648 210240 260626 259622 257991 213966 260623 149112 257168 198203 114783 220958 244387 243734 223315 118069 136188 260686 241777  260912 142154 119798 261174 258301 256808 169134 220354 260271 261725 261378 252174 261928 114427 187003 147577 249458 157767 224316 175294 258450 233864 236128 261162 174036 187205 210873 193318 110232 199310 193816 220376 193814 193815 219068 220386 177642 188269 181837 220377 119293 257528 258926 262384 105951 259904 208174 249229 245644 262538 234818 216845 149212 134442 135927 262447 261811 261650 261225 261226 260761 250327 192327 167801 150309 123554

 https://www2.zippyshare.com/d/z9dcY6Nr/791216/%5bNekoPoi%5d_Akina_to_Onsen_de_H_Shiyo%5b360P%5d%5bnekopoi.care%5d.mp4
 https://www4.zippyshare.com/d/j7PFLGUY/946757/%5bNekoPoi%5d_Tsuma_ga_Kirei_ni_Natta_Wake_-_02_%5b360P%5d_%5bnekopoi.care%5d.mp4
 https://www111.zippyshare.com/d/EK5uqIMh/566060/%5bNekoPoi%5d_Megane_no_Megami_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4
 https://www109.zippyshare.com/d/2ebALhhS/463654/%5bNekoPoi%5d_Watashi_ga_Toriko_-_02%5b360P%5d%5bnekopoi.care%5d.mp4
 https://www115.zippyshare.com/d/LmzOkRAI/313299/%5bNekoPoi%5d_Chichi-iro_Toiki_-_01_%5b360P%5d%5bnekopoi.care%5d.mp4
 https://www89.zippyshare.com/d/SgEHvrJs/42812/%5bNekoPoi%5d_Chichi-iro_Toiki_-_02_%5b360P%5d%5bnekopoi.care%5d.mp4
 https://www66.zippyshare.com/d/j0ivbciL/520411/%5bNekoPoi%5d_Onna_Maou_Melissa_no_H_na_Boukenki_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4
 https://www71.zippyshare.com/d/M225YIrR/535656/%5bNekoPoi%5d_Buta_no_Gotoki_Sanzoku_ni_Torawarete_Shojo_wo_Ubawareru_Kyonyuu_Himekishi_Onna_Senshi_-_01%5b360P%5d%5bnekopoi.care%5d.mp4
 https://www49.zippyshare.com/d/bdwYjaXS/605790/%5bNekoPoi%5d_Akebi_no_Hana___Maho_-_01_%5b360P%5d_%5bnekopoi.pro%5d.mp4
 
● CODE NUKLIR ●
229144 253687 238577 236509
227675 229085 233245 266177
254351 265855 239842 219847
239749 230566 253104 230185
251974 253091 251489 238030
260614 245023 232887 233547
262158 262870 239312 255129
244530 246963 256050 215459
243725 233770 250704 261819
261830 215658 256404 260028
261789 241254 268580 262407
262252 201814 250193 236036
262889 243933 245697 239750
128983 95364 223815 225080
110332 225767 97247 231139
266116 217037 160657 182439
205089 176495 199121 199425
184068 186615 224644 129479
251524 153374 146499 258212
163532 255244 269825 235914
247103 138365 124624 219718
168941 265918 205995 191390
225496 259137 231681 161688
199613 259260 260433 235532 
88323 272117 170213 256613
258382 224942

/g/181556/ - Fudeoro Sisters
/g/152456/ - Mou Teitoku No Soba 
/g/167936/ - Inma Mo Mikata
/g/139048/ - shojo soushitsu
/g/185592/ - Gensoukyou Rakuenka Keikaku 11
/g/191427/ - Kousei Iinkai
/g/175015/ - Sister Breeder
/g/142825/ - A Certain Village
/g/182290/ - A hero taken prisoner
/g/192845/ - Toaru Natsu
/g/192849/ - Toaru Fuyu
/g/183099/ - Adolescent calculation
/g/192143/ - Blonde no koigokoro
/g/142825/ - Toaru mura no Fudeoroshi Jijou
/g/153856/ - Tenryuu Onee-chan fo naisho no Yasen Enshuu!!
/g/158404/ - Kusogaki
/g/136026/ - Megaflower x flower
/g/188918/ Kodomo no Ecchi
/g/193876/ - Razoku no Yoru
/g/193984/ - Houkago Rendezvous
/g/76119/ - Broadcast Girlfriend
/g/192874/ - Koyomi Fechi
/g/107180/ - Harem Bukai no Boku
/g/110900/ - Kiniro
/g/135193/ - It's my win!
/g/161488/ - Shota Teitoku to Nyuukyo Time
/g/65433/ - Jirettai no Yo!
/g/182327/ - Sakeno Seiton
/g/78651/ -  Harem Time
/g/190230/ - Boku no Bimama
/g/191880/ - Sanae Hamaru
/g/180600/ - Sakaki-san Satisfaction
/g/105465/ - Sakaki-san Franchise
/g/173023/ - Tiny Evil
/g/191049/ - Kono Suba 1
/g/191851/ - Kono Suba 2
/g/167112/ - i'll be your cat
/g/177754/ - Sloppy Sister
/g/187016/ - Nanyou no Vacances Sakusen
/g/165961/ - Love-ridden
/g/165962/ - Pandemonium
/g/97879/  - Natsuyasumi
/g/74500/ - Nee-chan no yobanaide
/g/133435/ - Spirited Girl
/g/152075/ - Trick And Treat
/g/174888/ - Razoku No Yoru
/g/93354/ - Melty Play
/g/74076/ - BAD COMMUNICATION
/g/122948/ - PLAY BACK
/g/104346/ - Funky Glamourous
/g/91773/ - Good Times!!
/g/78226/ - Practice Game
/g/76482/ - JOINT
/g/68508/ -  Kimi ga iru nara
/g/61224/ - Way back to the future
/g/60473/ - Hoshi ni negai o
/g/58469/ - Splash
/g/56295/ - Heat Island
/g/53905/ - I Beg You
/g/42383/ - Rumors
/g/187611/ - My Dear Maid
/g/190846/ - Tsukimi Dango
/g/158050/ - Muchimuchi
/g/83269/ - Only a taste for Onee-Chan
/g/146042/ - Bismarck wa Shounen Teitoku kara Seifuku
/g/178941/ - Kodomo-Sensei
/g/100401/ - Sister paradise
/g/35240/ - Eiken Lovers
/g/77415/ - Koinaka
/g/190900/ - Grazero Fantasy
/g/161819/ - Night Of Incest
/g/151132/ - Pet Na Ane No Shitsukekata
/g/147585/ - Anetsun Summer!
/g/136908/ - Man x Koi
/g/112907/ - Imouto x Swimming!
/g/125392/ - Joubutsu!
/g/174463/ - Hotizuma Miyuki-San
/g/159290/ - Mister Mistake
/g/137953/ - Hotondo Byouki
 /g/114053/ - Unknown Title 
 /g/78818/ - Furofuro!
 /g/15055/ - Demodori Mama
 /g/39876/ - Cherry Break
 /g/191427/ - Doutei Danshi Kousei Iinkai
 /g/192695/ - Costte Asobo.
 /g/192330/ - Level 1
 /g/191320/ - Kimi Ni Nara Dekiru
 /g/164434/ - MIDNIGHT PRINCESS
 /g/76813/ - Superior Cake
 /g/148669/ - Ohime-sama Gokko
 /g/144806/ - Youkai Watching
 /g/163698/ - Escalation
 /g/158559/ - Jiyuu de Kimama na Ore no Imouto
 /g/182210/ - Hatsujou Days
 /g/131428/ - Having Fun With The One That I Love
 /g/112853/ - Boku to Oneesan no Naisho
 /g/178594/ - Imouto no Oppai ga Marudashi Datta Hanashi 1
 /g/195665/ - Imouto no Oppai ga Marudashi Datta Hanashi 2
 /g/195092/ - Imouto no Oppai ga Marudashi Datta Hanashi 3
 /g/195093/ - Imouto no Oppai ga Marudashi Datta Hanashi 4
 
 229144 253687 238577 236509
 227675 229085 233245 266177
 254351 265855 239842 219847
 239749 230566 253104 230185
 251974 253091 251489 238030
 260614 245023 232887 233547
 262158 262870 239312 255129
 244530 246963 256050 215459
 243725 233770 250704 261819
 261830 215658 256404 260028
 261789 241254 268580 262407
 262252 201814 250193 236036
 262889 243933 245697 239750
 128983 95364 223815 225080
 110332 225767 97247 231139
 266116 217037 160657 182439
 205089 176495 199121 199425
 184068 186615 224644 129479
 251524 153374 146499 258212
 163532 255244 269825 235914
 247103 138365 124624 219718
 168941 265918 205995 191390
 225496 259137 231681 161688
 199613 259260 260433 235532
 88323 272117 170213 256613
 258382 224942 281261

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ● Milf ●
165310,177978,211759,212643,229540, 250029,211519,256097,163478, 91505, 79280, 260629,128051,121972,261633,172044,119055,208323,149942,161236, 177150,233766,97949,230107 ,175822, 213545,232837,179166,138603,130183, 173543,234642,268015,228293,268893, 239536, yg suka mamah

/g/181556/ - Fudeoro Sisters
/g/152456/ - Mou Teitoku No Soba
/g/167936/ - Inma Mo Mikata
/g/139048/ - shojo soushitsu
/g/185592/ - Gensoukyou Rakuenka Keikaku 11
/g/191427/ - Kousei Iinkai
/g/175015/ - Sister Breeder
/g/142825/ - A Certain Village
/g/182290/ - A hero taken prisoner
/g/192845/ - Toaru Natsu
/g/192849/ - Toaru Fuyu
/g/183099/ - Adolescent calculation
/g/192143/ - Blonde no koigokoro
/g/142825/ - Toaru mura no Fudeoroshi Jijou
/g/153856/ - Tenryuu Onee-chan fo naisho no Yasen Enshuu!!
/g/158404/ - Kusogaki
/g/136026/ - Megaflower x flower
/g/188918/ Kodomo no Ecchi
/g/193876/ - Razoku no Yoru
/g/193984/ - Houkago Rendezvous
/g/76119/ - Broadcast Girlfriend
/g/192874/ - Koyomi Fechi
/g/107180/ - Harem Bukai no Boku
/g/110900/ - Kiniro
/g/135193/ - It's my win!
/g/161488/ - Shota Teitoku to Nyuukyo Time
/g/65433/ - Jirettai no Yo!
/g/182327/ - Sakeno Seiton
/g/78651/ - Harem Time
/g/190230/ - Boku no Bimama
/g/191880/ - Sanae Hamaru
/g/180600/ - Sakaki-san Satisfaction
/g/105465/ - Sakaki-san Franchise
/g/173023/ - Tiny Evil
/g/191049/ - Kono Suba 1
/g/191851/ - Kono Suba 2
/g/167112/ - i'll be your cat
/g/177754/ - Sloppy Sister
/g/187016/ - Nanyou no Vacances Sakusen
/g/165961/ - Love-ridden
/g/165962/ - Pandemonium
/g/97879/ - Natsuyasumi
/g/74500/ - Nee-chan no yobanaide
/g/133435/ - Spirited Girl
/g/152075/ - Trick And Treat
/g/174888/ - Razoku No Yoru
/g/93354/ - Melty Play
/g/74076/ - BAD COMMUNICATION
/g/122948/ - PLAY BACK
/g/104346/ - Funky Glamourous
/g/91773/ - Good Times!!
/g/78226/ - Practice Game
/g/76482/ - JOINT
/g/68508/ - Kimi ga iru nara
/g/61224/ - Way back to the future
/g/60473/ - Hoshi ni negai o
/g/58469/ - Splash
/g/56295/ - Heat Island
/g/53905/ - I Beg You
/g/42383/ - Rumors
/g/187611/ - My Dear Maid
/g/190846/ - Tsukimi Dango
/g/158050/ - Muchimuchi
/g/83269/ - Only a taste for Onee-Chan
/g/146042/ - Bismarck wa Shounen Teitoku kara Seifuku
/g/178941/ - Kodomo-Sensei
/g/100401/ - Sister paradise
/g/35240/ - Eiken Lovers
/g/77415/ - Koinaka
/g/190900/ - Grazero Fantasy
/g/161819/ - Night Of Incest
/g/151132/ - Pet Na Ane No Shitsukekata
/g/147585/ - Anetsun Summer!
/g/136908/ - Man x Koi
/g/112907/ - Imouto x Swimming!
/g/125392/ - Joubutsu!
/g/174463/ - Hotizuma Miyuki-San
/g/159290/ - Mister Mistake
/g/137953/ - Hotondo Byouki
/g/114053/ - Unknown Title 
/g/78818/ - Furofuro!
/g/15055/ - Demodori Mama
/g/39876/ - Cherry Break
/g/191427/ - Doutei Danshi Kousei Iinkai
/g/192695/ - Costte Asobo.
/g/192330/ - Level 1
/g/191320/ - Kimi Ni Nara Dekiru
/g/164434/ - MIDNIGHT PRINCESS
/g/76813/ - Superior Cake
/g/148669/ - Ohime-sama Gokko
/g/144806/ - Youkai Watching
/g/163698/ - Escalation
/g/158559/ - Jiyuu de Kimama na Ore no Imouto
/g/182210/ - Hatsujou Days
/g/131428/ - Having Fun With The One That I Love
/g/112853/ - Boku to Oneesan no Naisho
/g/178594/ - Imouto no Oppai ga Marudashi Datta Hanashi 1
/g/195665/ - Imouto no Oppai ga Marudashi Datta Hanashi 2
/g/195092/ - Imouto no Oppai ga Marudashi Datta Hanashi 3
/g/195093/ - Imouto no Oppai ga Marudashi Datta Hanashi 4
/g/183714/ - Mating With Oni 1
/g/181008/ - Mating With Oni 2
/g/176948/ - Gal Shota Cinderella 1
/g/178511/ - Gal Shota Cinderella 2
/g/185653/ - Gal Shota Cinderella 3
/g/137236/ - Mika-ppoi no! 1
/g/144128/ - Mika-ppoi no! 2
/g/3508/ - Shounen Teikoku 1
/g/3509/ -Shounen Teikoku 2
/g/3510/ - Shounen Teikoku 3
/g/3511/ - Shounen Teikoku 5''
/g/3512/ -Shounen Teikoku 5
/g/3262/ Shounen Teikoku 6
/g/3466/ - Shounen Teikoku 7
/g/2598/ - Shounen Teikoku 8
/g/8196/ - Shounen Teikoku 9
/g/185406/ - Ane Zukushi 1-11
/g/188848/ - Perfect Half (long)
[13/8 17.26] Ordinary Guy: 198964 Countryside 
104436 Mismatched Thoughts
213681 Cultivating Bigger Pleasure
242460 Bokujou: Happy End
255869 Today, Surely
116018 Kahanshin No Otsukiai
165310 Suki Suki! Okaa-san
187047 Shirasaka Koume To No Kankei
116272 Akiko-san To Issho
274000 Hame Kama
93335 Henkano 
165961 Love-Ridden 
250500 Koishi-chan No Bitch Na Hon
264061 Idol Refle Sex
110896 Uchi No Imouto Ga Sukoshi Kawaii
187095 Nuki & Koki
32591 Kosu Tora
151436 FuckBuddy Collection
231188 Minatsu's Fault
275485 Nurunuru Deriheru
275306 Sweet Whispers
205199 Most Distant Neighbor
274796 The Drunk Mouth Of My Neighbor
274412 Kyousei Zecchou Batsu Game
71646 Otonashi Kotorisan
273719 Oshiri Ai
273849 Strength and III
120744 PuniKano
172759 Dogful Days
273337 I Will Serve You Tonight
273132 Watanabe's Day Off
273222 Koukando Analyze!
272129 Dog & Cat Roleplay
271958 Enemy Girl
271892 Poolside Reward
217727 Uruka-chan To Ichaicha Shitai!
271431 Toshoshitsu O Shimete Kara
271282 Hidden Quest
270752 Natsu Ni   Ecc

  ● Random ●
257892 226942 236297 216039 221711 245304 166174 175220 244327 191049 220882 244859 227446 259328 259532 259634 259610 259348 258669 256097 118282 260028 260058 259557 259497 122220 260111 260088 259880 258977 260097 259765 259359 260138 259617 107965 197255 260276 260209 260210 260203 191360 191390 248933 257567 227913 211648 210240 260626 259622 257991 213966 260623 149112 257168 198203 114783 220958 244387 243734 223315 118069 136188 260686 241777  260912 142154 119798 261174 258301 256808 169134 220354 260271 261725 261378 252174 261928 114427 187003 147577 249458 157767 224316 175294 258450 233864 236128 261162 174036 187205 210873 193318 110232 199310 193816 220376 193814 193815 219068 220386 177642 188269 181837 220377 119293 257528 258926 262384 105951 259904 208174 249229 245644 262538 234818 216845 149212 134442 135927 262447 261811 261650 261225 261226 260761 250327 192327 167801 150309 123554
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     ● yg suka onee san ●
189833 12386 232747 186250 200330 63009 202662 66435 145071 6290 185596 121963 67356 157649 230109 243886 172138 126145 253850 144121 166315 197350 2611 19157 247791 239595 50074 1235 135474 258965 262816 195747 242247 252913 149760 139983 114692 151132 152089 144481 201031 169585 198203 240330 236896 88670 254499 169585 196783 194443 59284 249265 62287
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━281917
KUMPULAN KODE NUKLIR
270576
213340
237210/3
184644/
184212/
237987/
238657/
183994/5/
Nhentai.net/g/244044/5/
Nhentai.net/g/183603/
nhentai.net/g/189103/
Nhentai.net/g/183773/8/
Nhentai.net/g/271709/
Nhentai.net/g/271074 Kemonomimi Milf
Nhentai.net/g/270424 Atago Azurlane
Nhentai.net/g/236554 Kemonomimi Half Horse
Nhentai.net/g/238151 kemonomimi final fantasy
Nhentai.net/g/269354 kemono friends
Nhentai.net/g/239567 Cowgirl 
Nhentai.net/g/227556 Bird Girl
Nhentai.net/g/226184 Neko
Nhentai.net/g/225422 Racoon
Nhentai.net/g/268918 Lolikitsune
Nhentai.net/g/235660 Fox
229144 253687 238577 236509
227675 229085 233245 266177
254351 265855 239842 219847
239749 230566 253104 230185
251974 253091 251489 238030
260614 245023 232887 233547
262158 262870 239312 255129
244530 246963 256050 215459
243725 233770 250704 261819
261830 215658 256404 260028
261789 241254 268580 262407
262252 201814 250193 236036
262889 243933 245697 239750
128983 95364 223815 225080
110332 225767 97247 231139
266116 217037 160657 182439
205089 176495 199121 199425
184068 186615 224644 129479
251524 153374 146499 258212
163532 255244 269825 235914
247103 138365 124624 219718
168941 265918 205995 191390
225496 259137 231681 161688
199613 259260 260433 235532
88323 272117 170213 256613
258382 224942
https://nhentai.net/g/192237/ Watashi to
https://nhentai.net/g/134318/ Watashi no Onii-chan 1
https://nhentai.net/g/165279/ Watashi no Onii-chan 2
https://nhentai.net/g/164114/ Watashi no Onii-chan 3
https://nhentai.net/g/192347/ Watashi no Onii-chan 4
https://nhentai.net/g/209026/ Cocologic
https://nhentai.net/g/207432/ Watashi no Onii-chan 4,5
https://nhentai.net/g/247574/ Watashi no Onii-chan Extra

Tamat..
`.trim()
      return m.reply(loghandler.wait, result)

  } else if (/^resep|masak(an)?$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notQuery)
      var res = await (await fetch(`https://masak-apa.tomorisakura.vercel.app/api/search/?q=${text}`)).json()
      var random = Math.floor(Math.random() * 10)
      var json = await (await fetch(`https://masak-apa.tomorisakura.vercel.app/api/recipe/${res.results[random].key}`)).json()
      var hasil = `Title: ${json.results.title}\nAuthor: ${json.results.author.user}\nThumb: ${json.results.thumb}\nDipublikasikan: ${json.results.author.datePublished}\nTingkat: ${json.results.dificulty}\nWaktu: ${json.results.times}\nPorsi: ${json.results.servings}\n\nBahan-bahan:\n${json.results.ingredient[0].replace(/,/g, '\n')}\n\nLangkah2:\n${json.results.step[0].replace(/,/g, '\n').replace(/.,/g, '\n')}`
        return m.reply(loghandler.wait, hasil)

  } else if (/^slots?$/i.test(command)) {
      var emojis = ['🍎', '🍌', '🍇', '♦️', '🥇', '💵']
      var a = Math.floor(Math.random() * emojis.length)
      var b = Math.floor(Math.random() * emojis.length)
      var c = Math.floor(Math.random() * emojis.length)
      var x = []
      var y = []
      var z = []
      for (var i = 0; i < 3; i++) {
          x[i] = emojis[a]
          a++
          if (a == emojis.length) a = 0
      }
      for (var i = 0; i < 3; i++) {
          y[i] = emojis[b]
          b++
          if (b == emojis.length) b = 0
      }
      for (var i = 0; i < 3; i++) {
          z[i] = emojis[c]
          c++
          if (c == emojis.length) c = 0
      }
      var end = '...'
      var poin = 0
      if (a == b && b == c) poin = 10000, end = `JACKPOT!!!\n+${poin} poin`
      else if (a == b || a == c || b == c) end = 'Dikit Lagi!'
      else end = 'Kamu Kalah!, Yang Sabar yaa. Anggap aja ini Ujian :)'
        return m.reply(loghandler.wait, `${x[0]} | ${y[0]} | ${z[0]}\n${x[1]} | ${y[1]} | ${z[1]} <===\n${x[2]} | ${y[2]} | ${z[2]}\n\n${end}`)

  } else if (/^((how|cek)(gay|pintar|bodoh?|cantik|ganteng|baper|gabut|gila|lesbi|stress?|bucin|jones?|sad(boy|girl)?|tolol|sange))$/i.test(command)) {
      var result = `*${text ? text : 'Kamu'}* itu ${Math.floor(Math.random() * 100)}% ${command.slice(3)}!`
        return m.reply(loghandler.wait, result.replace(/@/g, ''))

  } else if (/^(waifu|neko|megumin|loli)$/i.test(command)) {
      var json = await (await fetch(`https://api.waifu.pics/sfw/${command}`)).json()
      if (/^loli$/i.test(command)) json.url = pickRandom(await (await fetch('https://raw.githubusercontent.com/Caliph91/txt/main/loli.json')).json())
      if (!json.url) return m.reply(loghandler.wait, '404 Not Found')
        return m.reply(loghandler.wait, 'Hasil:\n\n' + json.url)

  } else if (/^hentai$/i.test(command)) {
      if (!isPremium) return m.reply(loghandler.wait, loghandler.premiumOnly)
      var json = await (await fetch(`https://api.waifu.pics/nsfw/${pickRandom(['neko', 'waifu'])}`)).json()
        return m.reply(loghandler.wait, 'Hasil:\n\n' + json.url)

  } else if (/^(g(oogle)?)?images?|pinterest$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notQuery)
      var image = util.promisify(gis)
      var result = await image(text)
      var { url } = pickRandom(result)
      if (!url) return m.reply(loghandler.wait, 'Gambar tidak dapat ditemukan!')
        return m.reply(loghandler.wait, `Hasil Pencarian: *${text}*\n\nUrl:\n${url}`)

  } else if (/^(info)?anime$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notQuery)
      var json = await (await fetch(`https://api.jikan.moe/v3/search/anime?q=${text}`)).json()
      var { title, members, synopsis, episodes, url, rated, score, image_url, type, start_date, end_date } = json.results[0]
      var result = `Title: ${title}\nEpisodes: ${episodes}\nStart Date: ${start_date}\nEnd Date: ${end_date}\nType: ${type}\nRating: ${rated}\nScore: ${score}\nMembers: ${members}\nSynopsis: ${synopsis}\nLink:\n${url}`
        return m.reply(loghandler.wait, result)

  } else if (/^(info)?chara(cter)?$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notQuery)
      var json = await (await fetch(`https://api.jikan.moe/v3/search/character?q=${text}`)).json()
      var { name, alternative_names, url, image_url, anime } = json.results[0]
      var result = `Name: ${name}${alternative_names ? '\nAlternative Name: ' + alternative_names : ''}\nType: ${anime[0].type}\nThumb: ${image_url}\nLink: ${url}`
        return m.reply(loghandler.wait, result)

  } else if (/^tesseract|ocr$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notUrl)
      if (!isURL(text)) return m.reply(loghandler.wait, loghandler.invalidLink)
      var img = await getBuffer(text).catch(() => m.reply(loghandler.imageOnly))
      await fs.writeFileSync('./tmp/ocr.png', img)
      await tesseract.recognize('./tmp/ocr.png', {
	    lang: 'eng+ind',
	    oem: 1,
	    psm: 3
      }).then(result => m.reply(loghandler.wait, 'Hasil:\n\n' + result.trim())).catch(() => m.reply(loghandler.imageOnly))

  } else if (/^(no|remove)bg$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notUrl)
      if (!isURL(text)) return m.reply(loghandler.wait, loghandler.invalidLink)
      var img = await getBuffer(text).catch(() => m.reply(loghandler.imageOnly))
      await fs.writeFileSync('./tmp/image.png', img)
      var outputPath = './tmp/nobg.png'
      await removeBackgroundFromImageFile({
            path: './tmp/image.png',
            apiKey: apikey.removebg,
            size: 'auto',
            type: 'auto',
            outputPath
       }).then(async (res) => {
       var buffer = Buffer.from(res.base64img, 'base64')
       var result = await saveToMedia(buffer)
         return m.reply(loghandler.wait, 'Hasil:\n\n' + result)
      }).catch(() => m.reply(loghandler.imageOnly))

  } else if (/^kodebahasa$/i.test(command)) {
      var result = `
╭─ *「 KODE BAHASA 」*
│
│• af : Afrikaans
│• sq : Albanian
│• ar : Arab
│• hy : Armenian
│• ca : Catalan
│• zh : Chinese
│• zh-cn : Chinese (Mandarin/China)
│• zh-tw : Chinese (Mandarin/Taiwan)
│• zh-yue : Chinese (Cantonese)
│• hr : Croatian
│• cs : Czech
│• da : Danish
│• nl : Dutch
│• en : English
│• en-au : English (Australia)
│• en-uk : English (United Kingdom)
│• en-us : English (United States)
│• eo : Esperanto
│• fi : Finnish
│• fr : French
│• de : German
│• el : Greek
│• ht : Haitian Creole
│• hi : Hindi
│• hu : Hungarian
│• is : Icelandic
│• id : Indonesian
│• it : Italian
│• ja : Japanese
│• ko : Korean
│• la : Latin
│• lv : Latvian
│• mk : Macedonian
│• no : Norwegian
│• pl : Polish
│• pt : Portuguese
│• pt-br : Portuguese (Brazil)
│• ro : Romanian
│• ru : Russian
│• sr : Serbian
│• sk : Slovak
│• es : Spanish
│• es-es : Spanish (Spain)
│• es-us : Spanish (United States)
│• sw : Swahili
│• sv : Swedish
│• ta : Tamil
│• th : Thai
│• tr : Turkish
│• vi : Vietnamese
│• cy : Welsh
╰────
`.trim()
         return m.reply(loghandler.wait, result)

  } else if (/^minify$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notText)
      await obfuscate(text.trim(), { target: 'node', minify: true })
      .then(result => m.reply(loghandler.wait, result)).catch(() => m.reply(loghandler.wait, 'Hanya dapat digunakan untuk kode/script javascript!'))

  } else if (/^obfuscate$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notText)
      await obfuscate(text.trim(), { target: 'node', preset: 'low', stringEncoding: false })
      .then(result => m.reply(loghandler.wait, result)).catch(() => m.reply(loghandler.wait, 'Hanya dapat digunakan untuk kode/script javascript!'))

  } else if (/^min(e|ing)$/i.test(command)) {
      var result = `
Anda telah mining selama ${new Array(Math.floor(Math.random() * 24), Math.floor(Math.random() * 60), Math.floor(Math.random() * 60)).join(':')}

Hasil yang didapatkan:
${Math.floor(Math.random() * 10000)} Batu
${Math.floor(Math.random() * 1000)} Batu Bara
${Math.floor(Math.random() * 500)} Besi
${Math.floor(Math.random() * 250)} Emas
${Math.floor(Math.random() * 100)} Berlian
${Math.floor(Math.random() * 50)} Ruby
${Math.floor(Math.random() * 50)} Zamrud
`.trim()
  return m.reply(loghandler.wait, result)

  } else if (/^math$/i.test(command)) {
      var notMode = `Mode:\n${Object.keys(modes).map(v => `- ${v}`).join('\n')}\n\nContoh penggunaan: ${usedPrefix}math medium`
      if (!text) return m.reply(loghandler.wait, notMode)
      if (!(text in modes)) return m.reply(loghandler.wait, notMode)
      var isMath
      try { isMath = JSON.parse(await fs.readFileSync('./tmp/math.json')) } catch (e) { isMath = false }
      if (isMath) return m.reply(loghandler.wait, `*Masih ada soal belum terjawab!*\n\nBerapa hasil dari *${isMath.str}*?\nBonus: ${isMath.bonus} poin\n\nJawab menggunakan perintah *${usedPrefix}jawab*\nKetik *${usedPrefix}hint* untuk bantuan\nKetik *${usedPrefix}nyerah* untuk menyerah`)
      var res = await math(text)
      var soal = `Berapa hasil dari *${res.str}*?\nBonus: ${res.bonus} poin\n\nJawab menggunakan perintah *${usedPrefix}jawab*\nKetik *${usedPrefix}hint* untuk bantuan\nKetik *${usedPrefix}nyerah* untuk menyerah`
      await fs.writeFileSync('./tmp/math.json', stringify(res))
        return m.reply(loghandler.wait, soal)

  } else if (/^tebakgambar|caklontong|family100|siapa(kah)?aku$/i.test(command)) {
  	var type = command.replace(/(kah)/g, '')
 	 try {
      var res = pickRandom(JSON.parse(await fs.readFileSync(`./lib/json/${type}.json`))).result
      } catch (e) {
      var data = await fetch(`https://zekais-api.herokuapp.com/${type}?apikey=${apikey.zekais}`)
      if (!data.ok) return m.reply(loghandler.wait, 'Soal tidak dapat ditemukan!')
      res = await data.json()
      }
      if (!res.soal) return m.reply(loghandler.wait, 'Soal tidak dapat ditemukan!')
      if (/^tebakgambar$/i.test(command)) {
      	var isTebak
          try { isTebak = JSON.parse(await fs.readFileSync('./tmp/tebakgambar.json')) } catch (e) { isTebak = false }
          if (isTebak) return m.reply(loghandler.wait, `*Masih ada soal belum terjawab!*\n\n${isTebak.soal}\nBonus: ${isTebak.bonus} poin\n\nJawab menggunakan perintah *${usedPrefix}jawab*\nKetik *${usedPrefix}hint* untuk bantuan\nKetik *${usedPrefix}nyerah* untuk menyerah`)
      	res.bonus = 10000
      	await fs.writeFileSync('./tmp/tebakgambar.json', stringify(res))
          return m.reply(loghandler.wait, `Soal:\n${res.soal}\nBonus: ${res.bonus} poin\n\nJawab menggunakan perintah *${usedPrefix}jawab*\nKetik *${usedPrefix}hint* untuk bantuan\nKetik *${usedPrefix}nyerah* untuk menyerah`)
      } else if (/^caklontong$/i.test(command)) {
      	var isCak
          try { isCak = JSON.parse(await fs.readFileSync('./tmp/caklontong.json')) } catch (e) { isCak = false }
          if (isCak) return m.reply(loghandler.wait, `*Masih ada soal belum terjawab!*\n\n${isCak.soal}\nBonus: ${isCak.bonus} poin\n\nJawab menggunakan perintah *${usedPrefix}jawab*\nKetik *${usedPrefix}hint* untuk bantuan\nKetik *${usedPrefix}nyerah* untuk menyerah`)
      	res.bonus = 5000
      	await fs.writeFileSync('./tmp/caklontong.json', stringify(res))
          return m.reply(loghandler.wait, `${res.soal}\nBonus: ${res.bonus} poin\n\nJawab menggunakan perintah *${usedPrefix}jawab*\nKetik *${usedPrefix}hint* untuk bantuan\nKetik *${usedPrefix}nyerah* untuk menyerah`)
      } else if (/^family100$/i.test(command)) {
      	var isFamily100
          try { isFamily100 = JSON.parse(await fs.readFileSync('./tmp/family100.json')) } catch (e) { isFamily100 = false }
          if (isFamily100) return m.reply(loghandler.wait, `*Masih ada soal belum terjawab!*\n\n${isFamily100.soal}\nBonus: ${isFamily100.bonus} poin\n\nJawab menggunakan perintah *${usedPrefix}jawab*\nKetik *${usedPrefix}hint* untuk bantuan\nKetik *${usedPrefix}nyerah* untuk menyerah`)
      	res.bonus = 5000
      	await fs.writeFileSync('./tmp/family100.json', stringify(res))
          return m.reply(loghandler.wait, `${res.soal}\nBonus: ${res.bonus} poin\n\nJawab menggunakan perintah *${usedPrefix}jawab*\nKetik *${usedPrefix}hint* untuk bantuan\nKetik *${usedPrefix}nyerah* untuk menyerah`)
      } else if (/^siapa(kah)?aku$/i.test(command)) {
      	var isSiapa
          try { isSiapa = JSON.parse(await fs.readFileSync('./tmp/siapakahaku.json')) } catch (e) { isSiapa = false }
          if (isSiapa) return m.reply(loghandler.wait, `*Masih ada soal belum terjawab!*\n\n${isSiapa.question}\nBonus: ${isSiapa.bonus} poin\n\nJawab menggunakan perintah *${usedPrefix}jawab*\nKetik *${usedPrefix}hint* untuk bantuan\nKetik *${usedPrefix}nyerah* untuk menyerah`)
      	res.bonus = 5000
      	await fs.writeFileSync('./tmp/siapakahaku.json', stringify(res))
          return m.reply(loghandler.wait, `${res.question}\nBonus: ${res.bonus} poin\n\nJawab menggunakan perintah *${usedPrefix}jawab*\nKetik *${usedPrefix}hint* untuk bantuan\nKetik *${usedPrefix}nyerah* untuk menyerah`)
      }

  } else if (/^jawab$/i.test(command)) {
  	var isMath
      var isTebak
      var isCak
      var isFamily100
      var isSiapa
      try { isMath = JSON.parse(await fs.readFileSync('./tmp/math.json')) } catch (e) { isMath = false }
      try { isTebak = JSON.parse(await fs.readFileSync('./tmp/tebakgambar.json')) } catch (e) { isTebak = false }
      try { isCak = JSON.parse(await fs.readFileSync('./tmp/caklontong.json')) } catch (e) { isCak = false }
      try { isFamily100 = JSON.parse(await fs.readFileSync('./tmp/family100.json')) } catch (e) { isFamily100 = false }
      try { isSiapa = JSON.parse(await fs.readFileSync('./tmp/siapakahaku.json')) } catch (e) { isSiapa = false }
      if (isMath) {
      	var jawaban = text
          if (!jawaban) return m.reply(loghandler.wait, 'Silahkan masukan jawaban')
      	var res
      	try { res = JSON.parse(await fs.readFileSync('./tmp/math.json')) } catch (e) { res = false }
          if (!res) return m.ignoreMessage()
          if (!/^-?[0-9]+(\.[0-9]+)?$/i.test(text)) return m.reply(loghandler.numberOnly)
          if (jawaban == res.result.toString()) {
	          await fs.rmSync('./tmp/math.json')
	          return m.reply(`*Jawaban Benar!*\n+${res.bonus} poin`)
           } else return m.reply('*Jawaban Salah!*')
      } else if (isTebak) {
          var jawaban = text
          if (!jawaban) return m.reply(loghandler.wait, 'Silahkan masukan jawaban')
          var res
          try { res = JSON.parse(await fs.readFileSync('./tmp/tebakgambar.json')) } catch (e) { res = false }
          if (!res) return m.ignoreMessage()
          if (jawaban.toLowerCase() == res.jawaban.toLowerCase()) {
	          await fs.rmSync('./tmp/tebakgambar.json')
	          return m.reply(`*Jawaban Benar!*\n+${res.bonus} poin`)
          } else return m.reply('*Jawaban Salah!*')
  	} else if (isCak) {
          var jawaban = text
          if (!jawaban) return m.reply(loghandler.wait, 'Silahkan masukan jawaban')
          var res
          try { res = JSON.parse(await fs.readFileSync('./tmp/caklontong.json')) } catch (e) { res = false }
          if (!res) return m.ignoreMessage()
          if (jawaban.toLowerCase() == res.jawaban.toLowerCase()) {
	          await fs.rmSync('./tmp/caklontong.json')
	          return m.reply(`*Jawaban Benar!*\nDetail: ${res.desc.split('(')[1].split(')')[0]}\n\n+${res.bonus} poin`)
          } else return m.reply('*Jawaban Salah!*')
      } else if (isFamily100) {
      	var jawaban = text
          if (!jawaban) return m.reply(loghandler.wait, 'Silahkan masukan jawaban')
          var res
          try { res = JSON.parse(await fs.readFileSync('./tmp/family100.json')) } catch (e) { res = false }
          if (!res) return m.ignoreMessage()
          if (new RegExp(`^(${res.jawaban.split('\n').join('|')})$`, 'i').test(jawaban)) {
	          await fs.rmSync('./tmp/family100.json')
	          return m.reply(`*Jawaban Benar!*\nSemua Jawaban: ${res.jawaban.split('\n').join(', ')}\n\n+${res.bonus} poin`)
          } else return m.reply('*Jawaban Salah!*')
      } else if (isSiapa) {
          var jawaban = text
          if (!jawaban) return m.reply(loghandler.wait, 'Silahkan masukan jawaban')
          var res
          try { res = JSON.parse(await fs.readFileSync('./tmp/siapakahaku.json')) } catch (e) { res = false }
          if (!res) return m.ignoreMessage()
          if (jawaban.toLowerCase() == res.answer.toLowerCase()) {
	          await fs.rmSync('./tmp/siapakahaku.json')
	          return m.reply(`*Jawaban Benar!*\n+${res.bonus} poin`)
          } else return m.reply('*Jawaban Salah!*')
      }

  } else if (/^hint$/i.test(command)) {
     if (!isPremium) return m.reply(loghandler.wait, loghandler.premiumOnly)
     var isMath
     var isTebak
     var isCak
     var isFamily100
     var isSiapa
     var hint = ''
     var hintRegex = /[15790aiueo]/g
     try { isMath = JSON.parse(await fs.readFileSync('./tmp/math.json')) } catch (e) { isMath = false }
     try { isTebak = JSON.parse(await fs.readFileSync('./tmp/tebakgambar.json')) } catch (e) { isTebak = false }
     try { isCak = JSON.parse(await fs.readFileSync('./tmp/caklontong.json')) } catch (e) { isCak = false }
     try { isFamily100 = JSON.parse(await fs.readFileSync('./tmp/family100.json')) } catch (e) { isFamily100 = false }
     try { isSiapa = JSON.parse(await fs.readFileSync('./tmp/siapakahaku.json')) } catch (e) { isSiapa = false }
     if (isMath) {
         if (!isMath) return m.ignoreMessage()
         else {
         hint = isMath.result.toString().replace(hintRegex, '_')
         return m.reply(loghandler.wait, hint)
         }
     } else if (isTebak) {
         if (!isTebak) return m.ignoreMessage()
         else {
         hint = isTebak.jawaban.replace(hintRegex, '_')
         return m.reply(loghandler.wait, hint)
         }
     } else if (isCak) {
         if (!isCak) return m.ignoreMessage()
         else {
         hint = isCak.jawaban.replace(hintRegex, '_')
         return m.reply(loghandler.wait, hint)
         }
     } else if (isFamily100) {
         if (!isFamily100) return m.ignoreMessage()
         else {
         hint = isFamily100.jawaban.replace(hintRegex, '_')
         return m.reply(loghandler.wait, hint)
         }
     } else if (isSiapa) {
         if (!isSiapa) return m.ignoreMessage()
         else {
         hint = isSiapa.answer.replace(hintRegex, '_')
         return m.reply(loghandler.wait, hint)
         }
     } else return m.ignoreMessage()

  } else if (/^nyerah$/i.test(command)) {
     var isMath
     var isTebak
     var isCak
     var isFamily100
     var isSiapa
     try { isMath = JSON.parse(await fs.readFileSync('./tmp/math.json')) } catch (e) { isMath = false }
     try { isTebak = JSON.parse(await fs.readFileSync('./tmp/tebakgambar.json')) } catch (e) { isTebak = false }
     try { isCak = JSON.parse(await fs.readFileSync('./tmp/caklontong.json')) } catch (e) { isCak = false }
     try { isFamily100 = JSON.parse(await fs.readFileSync('./tmp/family100.json')) } catch (e) { isFamily100 = false }
     try { isSiapa = JSON.parse(await fs.readFileSync('./tmp/siapakahaku.json')) } catch (e) { isSiapa = false }
     if (isMath) {
         if (!isMath) return m.ignoreMessage()
         else {
         await fs.rmSync('./tmp/math.json')
         return m.reply(loghandler.wait, `*Menyerah!*\n\nGame: Math\nSoal: Berapa hasil dari *${isMath.str}*?\nBonus: ${isMath.bonus} poin\nJawaban: ${isMath.result}`)
         }
     } else if (isTebak) {
         if (!isTebak) return m.ignoreMessage()
         else {
         await fs.rmSync('./tmp/tebakgambar.json')
         return m.reply(loghandler.wait, `*Menyerah!*\n\nGame: Tebak Gambar\nSoal: ${isTebak.soal}\nBonus: ${isTebak.bonus} poin\nJawaban: ${isTebak.jawaban}`)
         }
     } else if (isCak) {
         if (!isCak) return m.ignoreMessage()
         else {
         await fs.rmSync('./tmp/caklontong.json')
         return m.reply(loghandler.wait, `*Menyerah!*\n\nGame: Cak Lontong\nSoal: ${isCak.soal}\nBonus: ${isCak.bonus} poin\nJawaban: ${isCak.jawaban}\nDetail: ${isCak.desc.split('(')[1].split(')')[0]}`)
         }
     } else if (isFamily100) {
         if (!isFamily100) return m.ignoreMessage()
         else {
         await fs.rmSync('./tmp/family100.json')
         return m.reply(loghandler.wait, `*Menyerah!*\n\nGame: Family 100\nSoal: ${isFamily100.soal}\nBonus: ${isFamily100.bonus} poin\nJawaban: ${isFamily100.jawaban.split('\n').join(', ')}`)
         }
     } else if (isSiapa) {
         if (!isSiapa) return m.ignoreMessage()
         else {
         await fs.rmSync('./tmp/siapakahaku.json')
         return m.reply(loghandler.wait, `*Menyerah!*\n\nGame: Siapakah Aku\nSoal: ${isSiapa.question}\nBonus: ${isSiapa.bonus} poin\nJawaban: ${isSiapa.answer}`)
         }
     } else return m.ignoreMessage()

  } else if (/^ss(web)?f?$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notUrl)
      var url = /^https?:\/\//i.test(text) ? text : 'https://' + text
      var full = /f$/i.test(command)
      var img = await (await fetch(`https://nurutomo.herokuapp.com/api/ssweb?delay=1000&url=${encodeURIComponent(url)}&full=${full}`)).buffer()
      var result = await saveToMedia(img)
        return m.reply(loghandler.wait, 'Hasil:\n\n' + result)

  } else if (/^textpro$/i.test(command)) {
      var { effects } = await (await fetch('https://api.xteam.xyz/textpro')).json()
      if (!text) return m.reply(loghandler.wait, '*List Effect*\n\n' + effects.map(v => `- ${v}`).join('\n'))
      var [effect, txt, txt2] = text.split('|')
      if (!txt) return m.reply(loghandler.wait, loghandler.notText)
      if (!txt2) txt2 = 'text2'
      var list = new RegExp(`^(${effects.join('|')})$`, 'gi')
      if (!list.test(effect)) return m.reply(loghandler.wait, `Efek *${effect}* tidak ditemukan!\n\nSilahkan ketik ${usedPrefix}textpro untuk melihat list effect yang tersedia.`)
      var img = await (await fetch(`https://api.xteam.xyz/textpro/${effect.toLowerCase()}?text=${txt}&text2=${txt2}&apikey=${apikey.xteam}`)).buffer()
      var result = await saveToMedia(img)
        return m.reply(loghandler.wait, 'Hasil:\n\n' + result)

  } else if (/^photooxy$/i.test(command)) {
  	var effects = [
         'smoke',
         'wolfmetal',
         'underwaterocean',
         'typography',
         'neonlight',
         'google',
         'rainbowshine',
         'camuflage',
         '3dglowing',
         'vintage',
         'candy',
         'gradientavatar',
         'glowrainbow',
         'stars',
         'fur',
         'flaming',
         'crispchrome',
         'kueultah',
         'rainbowbg',
         'metalicglow',
         'striking3d',
         'watermelon',
         'underwebmatrix',
         'multi material',
         'harry potter',
         '8bit',
         'kopi2',
         'luxuryroyal',
         'gerbang',
         'woodblock',
         'smoketypography',
         'sweetcandy',
         'silk',
         'bevel',
         'partyneon',
         'greenleaves',
         'modernmetal',
         'lolcover',
         'warface',
         'pentakill',
         'aov',
         'battlefield',
         'avatarlol',
         'pokemon',
         'lolavatarglitch',
         'shinebannerlol',
         'mastery7lol',
         'dota2avatar',
         'lol',
         'crossfire',
         'glowpentakill',
         'warfacecover',
         'coveroverwatch',
         'lolcover2',
         'csgo',
         'lolpentakill',
         'pabjigaqi'
      ]
      if (!text) return m.reply(loghandler.wait, '*List Effect*\n\n' + effects.map(v => `- ${v}`).join('\n'))
      var [effect, txt, txt2] = text.split('|')
      if (!txt) return m.reply(loghandler.wait, loghandler.notText)
      if (!txt2) txt2 = 'text2'
      var list = new RegExp(`^(${effects.join('|')})$`, 'gi')
      if (!list.test(effect)) return m.reply(loghandler.wait, `Efek *${effect}* tidak ditemukan!\n\nSilahkan ketik ${usedPrefix}photooxh untuk melihat list effect yang tersedia.`)
      var img = await (await fetch(`https://api.xteam.xyz/photooxy/${effect.toLowerCase()}?text=${txt}&text2=${txt2}&apikey=${apikey.xteam}`)).buffer()
      var result = await saveToMedia(img)
        return m.reply(loghandler.wait, 'Hasil:\n\n' + result)

  } else if (/^film$/i.test(command)) {
      if (!text) return m.reply(loghandler.wait, loghandler.notQuery)
      var res = await axios.get(`http://149.56.24.226/?s=${text}`, {
                headers: { 
                  'cache-control': 'no-transform',
                  'content-type': 'text/html; charset=UTF-8',
                  'User-Agent': m.get('User-Agent'),
                }
       })
       var hasil = []
       var $ = cheerio.load(res.data)
       $('div.row > div.col-xs-3.col-sm-2.search-poster').each(function (a, b) {
       var url = $(b).find('a').attr('href')
       var img = $(b).find('img').attr('src').replace('//', '')
       var title = $(b).find('a').attr('title')
       var results = { film_title: title, film_link: url, film_thumb: img }
       hasil.push(results)
       })
       var result = hasil.map(v => `Judul: ${v.film_title}\nThumb: ${v.film_thumb}\nLink: ${v.film_link}`).join('\n\n========================\n\n')
         return m.reply(loghandler.wait, result)

  } else if (/^jadwaltv$/i.test(command)) {
       if (!text) return m.reply(loghandler.wait, loghandler.notQuery)
       var json = await (await fetch(`https://api.zeks.me/api/jadwaltv?apikey=${apikey.zeks}&channel=${text}`)).json()
       if (!json.result) return m.reply(loghandler.wait, `Channel ${text} tidak ditemukan!`)
         return m.reply(loghandler.wait, json.result)

  } else if (/^ttp$/i.test(command)) {
       if (!text) return m.reply(loghandler.wait, loghandler.notText)
       var img = await (await fetch(`https://api.xteam.xyz/ttp?file=&text=${text}`)).buffer()
       var result = await saveToMedia(img)
         return m.reply(loghandler.wait, 'Hasil:\n\n' + result)

  } else if (/^attp$/i.test(command)) {
       if (!text) return m.reply(loghandler.wait, loghandler.notText)
       var img = await (await fetch(`https://api.xteam.xyz/attp?file=&text=${text}`)).buffer()
       var result = await saveToMedia(img)
         return m.reply(loghandler.wait, 'Hasil:\n\n' + result)

  } else if (/^cuaca$/i.test(command)) {
       if (!text) return m.reply(loghandler.wait, loghandler.notText)
       var json = await (await fetch(`http://zekais-api.herokuapp.com/cuaca?daerah=${text}&apikey=${apikey.zekais}`)).json()
       var result = `Daerah: ${json.Nama}\nSuhu: ${json.Suhu}\nAngin: ${json.Angin}\nKelembapan: ${json.Kelembaban}\nCuaca: ${json.Cuaca}\nKeterangan: ${json.Keterangan}\nUdara: ${json.Udara}\nLetak: ${json.longitude}, ${json.latitude}`
         return m.reply(loghandler.wait, result)

  } else if (/^wiki(pedia)?$/i.test(command)) {
       if (!text) return m.reply(loghandler.wait, loghandler.notQuery)
       var json = await (await fetch(`http://zekais-api.herokuapp.com/wikipedia?query=${text}&apikey=${apikey.zekais}`)).json()
       var result = `Query: ${json.title}\nThumb: ${json.thumb}\nResult: ${json.result}`
         return m.reply(loghandler.wait, result)

  } else if (/^kbbi$/i.test(command)) {
       if (!text) return m.reply(loghandler.wait, loghandler.notQuery)
       var json = await (await fetch(`http://zekais-api.herokuapp.com/kbbi?query=${text}&apikey=${apikey.zekais}`)).json()
         return m.reply(loghandler.wait, json.arti)

  } else if (/^cersex$/i.test(command)) {
       if (!text) return m.reply(loghandler.wait, loghandler.notQuery)
       var json = await (await fetch(`http://zekais-api.herokuapp.com/cersex?query=${text}&apikey=${apikey.zekais}`)).json()
       var result = `Judul: ${json.title}\nPost: ${json.post}\nKategori: ${json.category}\nThumb: ${json.thumb}\n\n${json.result}`
         return m.reply(loghandler.wait, result)

  } else if (/^(jadwal)?sh?(a|o)lat$/i.test(command)) {
       if (!text) return m.reply(loghandler.wait, loghandler.notQuery)
       var json = await (await fetch(`https://api.zeks.me/api/jadwalsholat?daerah=${text}&apikey=${apikey.zeks}`)).json()
       if (!json.data) return m.reply(loghandler.wait, `List Daerah:\n\n${json.listdaerah.join('\n')}`)
         return m.reply(loghandler.wait, json.data.string)

  } else if (/^(hero)?ml$/i.test(command)) {
       if (!text) return m.reply(loghandler.wait, loghandler.notQuery)
       var json = await (await fetch(`https://api.xteam.xyz/search/heroml?q=${text}&apikey=${apikey.xteam}`)).json()
       if (!json.result) return m.reply(loghandler.wait, json.msg)
       var result = `Hero Name: ${json.result.hero_name}\nThumb: ${json.result.image}\nRole: ${json.result.role}\nSpeciality: ${json.result.speciality}\nEntrance Quotes: ${json.result.entrance_quotes}\nHero Features: ${json.result.hero_feature}\nDurability: ${json.result.skill.durability}\nOffense: ${json.result.skill.offense}\nSkill Effect: ${json.result.skill.skill_effects}\nDifficulty: ${json.result.skill.difficulty}\nRelease: ${json.result.release_date}\nItems:\n${json.result.items.map(v => '- ' + v).join('\n')}\nLane: ${json.result.laning_recommendation}\nPrice:\n- ${json.result.price.battle_point} Battle Point\n- ${json.result.price.diamond} Diamond\n- ${json.result.price.hero_fragment} Hero Fragment\n\nBackground Story: ${json.result.background_story}`
         return m.reply(loghandler.wait, result.replace(/[;]/g, ''))

  } else if (/^epep|ff$/i.test(command)) {
       if (!text) return m.reply(loghandler.wait, loghandler.notID)
       if (isNaN(text)) return m.reply(loghandler.wait, loghandler.numberOnly)
       var json = await (await fetch(`https://api.xteam.xyz/search/freefire?id=${text}&apikey=${apikey.xteam}`)).json()
       if (!json.result.name) return m.reply(loghandler.wait, 'User ID tidak ditemukan!')
       var result = `Name: ${json.result.name}\nID: ${json.result.id ? json.result.id : text}`
         return m.reply(loghandler.wait, result)

  } else if (/^report|lapor(an)?$/i.test(command)) {
       if (!text) return m.reply(loghandler.wait, loghandler.notText)
       var message = `*「 REPORT 」*\n\nDari: ${senderName}\nPesan: ${text.trim()}`
       await (await fetch(`https://kuhong-api-v2.herokuapp.com/?target=${owner}&type=text&message=${encodeURIComponent(message)}`)).text()
         return m.reply(loghandler.wait, '[!] Masalah telah dilaporkan!\n\n*Laporan palsu/main2 tidak akan ditanggapi')

  } else if (/^ninja$/i.test(command)) {
       if (!text) return m.reply(loghandler.wait, loghandler.notName)
       var result = text.replace(/[a-z]/gi, v => {
         return {
            'a': 'ka',
            'b': 'tu',
            'c': 'mi',
            'd': 'te',
            'e': 'ku',
            'f': 'lu',
            'g': 'ji',
            'h': 'ri',
            'i': 'ki',
            'j': 'zu',
            'k': 'me',
            'l': 'ta',
            'm': 'rin',
            'n': 'to',
            'o': 'mo',
            'p': 'no',
            'q': 'ke',
            'r': 'shi',
            's': 'ari',
            't': 'ci',
            'u': 'do',
            'v': 'ru',
            'w': 'mei',
            'x': 'na',
            'y': 'fu',
            'z': 'zi'
        }[v.toLowerCase()] || v })
         return m.reply(loghandler.wait, result.slice(0, 1).toUpperCase() + result.slice(1))

  } else if (/^joox|spotify$/i.test(command)) {
       if (!text) return m.reply(loghandler.wait, loghandler.notQuery)
       var json = await (await fetch(`https://api.zeks.me/api/${command}?q=${text}&apikey=${apikey.zeks}`)).json()
       var result = json.data.map(v => `Title: ${v.title}\nArtis: ${v.artists}\nAlbum: ${v.album}\nThumb: ${v.thumb}\nSource: ${v.url}\nLink:\n${v.preview_mp3}`).join('\n\n========================\n\n')
       if (/^joox$/i.test(command)) result = json.data.map(v => `Title: ${v.judul}\nArtis: ${v.artist}\nAlbum: ${v.album}\nSize: ${v.size}\nThumb: ${v.thumb}\nLink:\n${v.audio}`).join('\n\n========================\n\n')
         return m.reply(loghandler.wait, result)

  } else if (/^qr(code)?$/i.test(command)) {
       if (!text) return m.reply(loghandler.wait, loghandler.notText)
       var qr = await qrcode.toDataURL(text.slice(0, 2048), { scale: 8 })
       var img = Buffer.from(qr.split(',')[1], 'base64')
       var result = await saveToMedia(img)
         return m.reply(loghandler.wait, 'Hasil:\n\n' + result)

  } else if (/^quotemaker$/i.test(command)) {
       if (!text) return m.reply(loghandler.wait, loghandler.notText)
       var [quote, author] = text.split('|')
       if (!author) return m.reply(loghandler.wait, 'Silahkan masukan nama author')
       var img = await (await fetch(`https://api.xteam.xyz/quotemaker?text=${quote}&wm=${author}&apikey=${apikey.xteam}`)).buffer()
       var result = await saveToMedia(img)
         return m.reply(loghandler.wait, 'Hasil:\n\n' + result)

  } else if (/^imgbb$/i.test(command)) {
       if (!text) return m.reply(loghandler.wait, loghandler.notUrl)
       if (!isURL(text)) return m.reply(loghandler.wait, loghandler.invalidLink)
       var json = await (await fetch(`https://api.imgbb.com/1/upload?key=${apikey.imgbb}&image=${text}&name=${Math.floor(Math.random() * 10000)}`)).json()
         return m.reply(loghandler.wait, 'Hasil:\n\n' + json.data.url)

  } else if (/^telegraph$/i.test(command)) {
       if (!text) return m.reply(loghandler.wait, loghandler.notUrl)
       if (!isURL(text)) return m.reply(loghandler.wait, loghandler.invalidLink)
       var img = await getBuffer(text)
       if (!Buffer.isBuffer(img)) return m.reply(loghandler.wait, loghandler.imageOnly)
       var { ext } = await fromBuffer(img)
       var form = new FormData()
       form.append('file', img, 'tmp.' + ext)
       var res = await fetch('https://telegra.ph/upload', {
          method: 'POST',
          body: form
       })
       var json = await res.json()
       if (json.error) return m.reply(loghandler.wait, json.error)
         return m.reply(loghandler.wait, 'Hasil:\n\nhttps://telegra.ph' + json[0].src)

  } else if (/^carigrup$/i.test(command)) {
       if (!text) return m.reply(loghandler.wait, loghandler.notQuery)
       await axios.get(`https://ngarang.com/link-grup-wa/daftar-link-grup-wa.php?search=${text}&searchby=name`)
       .then(res => {
       var json = []
       var $ = cheerio.load(res.data)
       $('div.wa-chat-body').each(function (c, d) {
           var link = $(d).find('a').attr('href')
           var subject = $(d).find('div.wa-chat-title-text').text().trim()
           var hasil = { subject: subject.split('. ')[1].split('*')[0], link: link }
           json.push(hasil)
       })
       if (!json[0].subject) return m.reply(loghandler.wait, `Pencarian Grup *${text}* tidak ditemukan!`)
       var result = json.map(v => `Judul: ${v.subject}\nLink:\n${v.link}`).join('\n\n========================\n\n')
         return m.reply(loghandler.wait, result)
      })

  } else if (/^detik|kompas|liputan6|tribun|jalantikus$/i.test(command)) {
       var json = await (await fetch(`https://api.xteam.xyz/news/${command}?apikey=${apikey.xteam}`)).json()
       if (!json.judul) return m.reply(loghandler.wait, 'Berita tidak dapat ditemukan!')
       var result = `Judul: ${json.judul}\nTanggal: ${json.tanggal}\nThumb: ${json.thumb}\nSumber: ${json.url}\n\n${json.artikel}`
         return m.reply(loghandler.wait, result)

  } else if (/^sr|subreddit$/i.test(command)) {
       if (!text) return m.reply(loghandler.wait, loghandler.notQuery)
       var json = await (await fetch(`https://meme-api.herokuapp.com/gimme/${text}`)).json()
       if (!json.url) return m.reply(loghandler.wait, `Pencarian *${text}* tidak ditemukan!`)
       if (json.nsfw) return m.reply(loghandler.wait, 'Content Blocked!')
       var result = `Judul: ${json.title}\nPost Link: ${json.postLink}\nImage Url: ${json.url}\nAuthor: ${json.author}\n\nPreview:\n` + json.preview.map((v, i) => `${1 + i}. ${v}`).join('\n')
         return m.reply(loghandler.wait, result)

  } else if (/^happymod$/i.test(command)) {
       if (!text) return m.reply(loghandler.wait, loghandler.notQuery)
       var json = await (await fetch(`https://api.zeks.me/api/happymod?q=${text}&apikey=${apikey.zeks}`)).json()
       var result = json.result.map(v => `Title: ${v.title}\nRating: ${v.rating}\nThumb: ${v.thumb}\nLink: ${v.url}`).join('\n\n========================\n\n')
         return m.reply(loghandler.wait, result)

  } else if (/^shopee?$/i.test(command)) {
       if (!text) return m.reply(loghandler.wait, loghandler.notQuery)
       var res = new shopee(shopee.BASE_URL.INDONESIA)
       var json = await res.search({
          query: text,
          orderBy: shopee.SEARCH.ORDER_BY.PRICE,
          orderType: shopee.SEARCH.ORDER_TYPE.ASC,
          shippings: [shopee.SEARCH.SHIPPING.JNE_REGULAR, shopee.SEARCH.SHIPPING.SI_CEPAT_REG],
          locations: ['Bandung', 'Jakarta', 'Jawa', 'Jawa Barat', 'Jabodetabek', 'Aceh', 'Banjarmasin', 'Depok', 'Maluku', 'Kupang', 'Semarang', 'Kalimantan', 'Sumatra', 'Sulawesi', 'Yogyakarta', 'NTT', 'NTB', 'Riau', 'Serang', 'Sumedang', 'Jayapura', 'Papua'],
          priceMax: 30000000
       })
       var result = json.map(v => `Title: ${v.name}\nThumb:\nhttps://cf.shopee.co.id/file/${v.image}\nRating: ${v.itemRating.ratingStar}\nStatus: ${v.itemStatus}\nPrice: ${v.price / 100000}${v.priceBeforeDiscount !== 000000000 ? ' ~' + v.priceBeforeDiscount / 100000 + '~' : ''}\nDiscount: ${v.discount}\nSold: ${v.sold}\nStock: ${v.stock}\nTag: ${v.adsKeyword}\nViewers: ${v.viewCount}\nLikes: ${v.likedCount}\nOfficial Shop: ${v.showOfficialShopLabel}\nFlash Sale: ${v.isOnFlashSale}\nLocation: ${v.shopLocation}\nLink: https://shopee.co.id/product/${v.shopid}/${v.itemid}`).join('\n\n========================\n\n')
         return m.reply(loghandler.wait, result)

  } else if (/^bitly$/i.test(command)) {
       if (!text) return m.reply(loghandler.wait, loghandler.notUrl)
       if (!isURL(text)) return m.reply(loghandler.wait, loghandler.invalidLink)
       var json = await (await fetch(`https://api.xteam.xyz/shorturl/bitly?url=${text}&apikey=${apikey.xteam}`)).json()
         return m.reply(loghandler.wait, 'Hasil:\n\n' + json.result.link)

  } else if (/^(ena|disa)ble$/i.test(command)) {
  	 if (!isGroup) return m.reply(loghandler.wait, loghandler.groupOnly)
       var type = (text || '').toLowerCase()
       var isEnable = /^enable$/i.test(command)
       var options = ['antidelete', 'antilink', 'antitoxic', 'antivirtex', 'antiflood']
       switch (type) {
       	case 'antidelete':
           await fs.writeFileSync('./tmp/antidelete.txt', isEnable.toString())
              break
           case 'antilink':
           await fs.writeFileSync('./tmp/antilink.txt', isEnable.toString())
              break
           case 'antitoxic':
           await fs.writeFileSync('./tmp/antitoxic.txt', isEnable.toString())
              break
           case 'antivirtex':
           await fs.writeFileSync('./tmp/antivirtex.txt', isEnable.toString())
              break
           case 'antiflood':
           await fs.writeFileSync('./tmp/antiflood.txt', isEnable.toString())
              break
           default: return m.reply(loghandler.wait, `List Opsi:\n${options.map(v => `- ${v}`).join('\n')}\n\nContoh:\n${usedPrefix + command} antilink`)
       }
         return m.reply(loghandler.wait, `*${type}* berhasil di${isEnable ? 'nyala' : 'mati'}kan untuk bot ini`)

  } else if (/^akungratis$/i.test(command)) {
  	var str = `
• MINECRAFT (XBOX)
1. Username: nikitasf@gmail.com
Password: tasfel13
2. Username: icudxiii@gmail.com
Password: Spencer13
3. Username: jackall04@gmail.com
Password: Foxtail19
4. Username: zaitsev2020@gmail.com
Password: sniperm4n
5. Username: joker2019@gmail.com
Password: legendversion2007
6. Username: coronaman1@gmail.com
Password: virusboosted1
7. Username: externable@gmail.com
Password: remote12
8. Username: drstrange01@hotmail.com
Password: 3569851426
9. Username: radiostanciq225@gmail.comPassword : stenli123
10. Username: majorking5@gmail.com
Password: 55major55

• FREE FIRE
1. Email: alyunus06@gmail.com
Password: @0607199022
Handphone: 087783381296
2. Email: mukulverma49@gmail.com
Password: mucool14
Handphone: +919802811414
3. Email: amitsharma.07821@gmail.com
Password: Anjeeta_sharma
Handphone: +918145777657
4. Email: syahrulmutafifin@gmail.com
Password: 1234fatimah
Handphone: 089626702848
5. Email: marcelrikudo@yahoo.com
Password: marcel01
Handphone: 081366483303
6. Email: maddy_333@gmail.com
Password: shonyadholu
Handphone: 09822259111
7. Email: wawanfold7@gmail.com
Password: Indra fq
Handphone: +6282251122608
8. Email: giangoda477@gmail.com
Password: Password
Handphone: 8718021268
9. Email: tsharma@gmail.com
Password: hanuman001
Handphone: 9891497114
10. Email: Adb19@gmail.com
Password: 124356abhi
Handphone: 9891098921

• MOBILE LEGENDS
1. Email Google: ejak@gmail.com
Password Google: 1234567
Nomor Hp: 082281080512
Email Facebook: 4ndika01
Password Facebook: ysfifoy
2. Email Google: kadexandika@gmail.com
Password Google: 040498ka$
Nomor Hp: 082281080512
Email Facebook: 4ndika01
Password Facebook: 040498ka$
3. Email Google: arakoswara330@gmail.com
Password Google: 123tasik123
Nomor Hp: 085603266121
Email Facebook: Kebiw
Password Facebook: tasik123
4. Email Google: ramamelodic@yahoo.co.id
Password Google: modolsoto
Nomor Hp: 0894343
Email Facebook: ramadhan
Password Facebook: modolsoto
5. Email Google: arifzainudin@gmail.com
Password Google: arif123456
Nomor Hp: 081222889877
Email Facebook: arifzainudin@gmail.com
Password Facebook: 123456789
6. Email Google: guncorojati@gmail.com
Password Google: jatijati
Nomor Hp: 085875631052
Email Facebook: 085647818863
Password Facebook: paerhosokyess
7. Email Google: defidefle@gmail.com
Password Google: 01juli1994
Nomor Hp: 085280327955
Email Facebook: Ulhyyulii@ymail.com
Password Facebook: 01juli1994
8. Email Google: aaby79709@gmail.com
Password Google: mchc malang
Nomor Hp: 082241848845
Email Facebook: 08123560040
Password Facebook: albimafitra
9. Email Google: abicok@gmail.com
Password Google: abicokasu
Nomor Hp: 081239874408
Email Facebook: Abiasu@gmail.com
Password Facebook: abiasucok
10. Email Google: jcxdamha@gmail.com
Password Google: damha123
Nomor Hp: 08593912224
Email Facebook: 083834700739
Password Facebook: damha12

• PUBG
1. Email: Adwilired20012@caraqu.com
Kata sandi: terminantor29
2. Email: Breracia@gmail.com
Kata sandi: coolkidbres
3. Email: YbaliwythFAV@gmail.com
Kata sandi: superiorman_
4. Email: DrunythGenius@gmail.com
Kata sandi: 12345682
5. Email: DrunythPUBG202@gmail.com
Kata sandi: 21021985
6. Email: Onoret@hotmail.com
Kata sandi: onogeniztta12
7. Email: Helidianewacc@gmail.com
Kata sandi: felixiloveyou
8. Email: Adwilired20012@gmail.com
Kata sandi: terminantor29
9. Email: Breracia@gmail.com
Kata sandi: coolkidbres
10. Email: YbaliwythFAV@gmail.com
Kata sandi: superiorman_
`.trim()
         return m.reply(loghandler.wait, str)

  } else if (/^bokep|porno?$/i.test(command)) {
  	 if (!isPremium) return m.reply(loghandler.wait, loghandler.premiumOnly)
       var str = [
          'Nama: DilaPye Colmek\nFoto: -\nVideo: 1\nSize: 90 MB\nDurasi: 5 Menit\nKualitas: HD\nRate: ⭐⭐⭐⭐\nDownload:\nhttps://drive.google.com/file/d/1We9TeG1whjz2bmNCrahctK1-Hiy3BtWN/view \n Password: AA18+#29',
          'Nama: Missluttyv SMA\nFoto: -\nVideo: 3\nSize: 74 MB\nDurasi: - Menit\nKualitas: HD\nRate: ⭐⭐⭐\nDownload:\nhttps://drive.google.com/file/d/1TodhXRAHt6MHMqS2-3DYmCQoIFe7yuI-/view \nPassword: AA18+#21',
          'Nama: Arce\nFoto: 114\nVideo: 16\bSize: 64 MB\nDurasi: - Menit\nKualitas: HD\nRate: ⭐⭐⭐⭐\nDownload:\nhttps://drive.google.com/file/d/1SwXbmd2sXnYSNYmn_tdCiaBsHHXjYvQM/view \nPassword: AA18+#6',
          'Nama: Annisa\nFoto: 71\nVideo: 2\nSize: 48 MB\nDurasi: - Menit\nKualitas: HD\nRate: ⭐⭐⭐\nDownload:\nhttps://drive.google.com/file/d/1St_Pb9xNZnrSX_fPfaarno6Bpjc3ArUx/view\nPassword: AA18+#5',
          'Nama: Annisa\nFoto: 71\nVideo: 2\nSize: 48 MB\nDurasi: - Menit\nKualitas: HD\nRate: ⭐⭐⭐\nDownload:\nhttps://drive.google.com/file/d/1St_Pb9xNZnrSX_fPfaarno6Bpjc3ArUx/view\nPassword: AA18+#5',
          'Nama: 038493040494_0[Ws_Gloia]\nFoto: 19\nVideo: 1\nSize: 379 MB\nDurasi: 8 Menit\nKualitas: HD++\nRate: ⭐⭐⭐⭐⭐\nDownload:\nhttps://drive.google.com/file/d/1Y0ALFotYLT2F8kKjgxMZ_BFJ6vWKalck/view\nPassword: AA18+#30',
          'Nama: ASD - Ria Bali\nFoto: -\nVideo: 1\nSize: 165 MB\nDurasi: 45 Menit\nKualitas: HD\nRate: ⭐⭐⭐⭐\nDownload:\nhttps://drive.google.com/file/d/1T84UWWj1oJlDAMXd-snZr6gP4Yt61P6P/view\nPassword: AA18+#7',
          'Nama: Nanad Apr\nFoto: 18\nVideo: 23\nSize: 357 MB\nDurasi: - Menit\nKualitas: -\nRate: ⭐⭐⭐\nDownload:\nhttps://drive.google.com/file/d/1YO0rvEgbx6Qsrtfm6tTOlvHI7OE5V42p/view\nPassword: AA18+#32',
          'Nama: lily kawai onlyfans\nFoto: 50\nVideo: 7\nSize: 237 MB\nDurasi: - Menit\nKualitas: HD+\nRate: ⭐⭐⭐⭐\nDownload:\nhttps://drive.google.com/file/d/1TcK_EH1d2vL4bfVhSBm0el_nhmqh2XCS/view\nPassword: AA18+#17',
          'Nama: Bocil x Tante\nFoto: -\nVideo: 1\nSize: 156 MB\nDurasi: 23 Menit\nKualitas: HD\nRate: ⭐⭐⭐⭐\nDownload:\nhttps://drive.google.com/file/d/1amwgPTf_PLIUc43bxivztFrD0xzdg8Tm/view\nPassword: AA18+#33',
          'Nama: Badbitch_alter\nFoto: -\nVideo: 1\nSize: 170 MB\nDurasi: 26 Menit\nKualitas: HD+\nRate: ⭐⭐⭐⭐⭐\nDownload:\nhttps://drive.google.com/file/d/1b2k9RvUeirTzfHBZJkQ9fgw0jJudGP2j/view\nPassword: AA18+#34',
          'Nama: Princess nakal\nFoto: -\nVideo: 1\nSize: 128 MB\nDurasi: 15 Menit\nKualitas: HD\nRate: ⭐⭐⭐\nDownload:\nhttps://drive.google.com/file/d/1bj6nNKADyIzSXONZnmXs7c8E_Ln_3KlM/view\nPassword: AA18+#35',
          'Nama: weweci\nFoto: -\nVideo: 1\nSize: 180 MB\nDurasi: 21 Menit\nKualitas: HD\nRate: ⭐⭐⭐⭐\nDownload:\nhttps://drive.google.com/file/d/1cA-pPAB_WRGRRGxhBDk9ouDiynu17xPg/view\nPassword: AA18+#36',
          'Nama: Viral Katanya\nFoto: -\nVideo: 1\nSize: 26 MB\nDurasi: 5 Menit\nKualitas: HD\nRate: ⭐⭐⭐\nDownload:\nhttp://www.mediafire.com/file/9o80ka9z61cdtn1/%23Viral_katanya.zip/file',
          'Nama: Hijab hitam\nFoto: -\nVideo: 4\nSize: 20 MB\nDurasi: - Menit\nKualitas: HD\nRate: ⭐⭐⭐⭐\nDownload:\nhttps://drive.google.com/file/d/1gM7UvH1jzxYek88mQnWBQmou78Gerb_w/view',
          'Nama: Syifa\nFoto: 45\nVideo: 25\nSize: 100 MB\nDurasi: - Menit\nKualitas: HD+\nRate: ⭐⭐⭐⭐⭐\nDownload:\nhttps://drive.google.com/file/d/1gTjGotGSlpRCZiLKaZ14sOLjBjirntUb/view\nPassword: AA18+#27',
          'Nama: Danca\nFoto: 18\nVideo: 13\nSize: 100 MB\nDurasi: - Menit\nKualitas: HD+\nRate: ⭐⭐⭐⭐\nDownload:\nhttps://drive.google.com/file/d/1hDxgMnQ4ps2DkVhFyc51ApdsavGfqs3B/view\nPassword: AA18+#38',
          'Nama: Dewi\nFoto: 266\nVideo: 3\nSize: 150 MB\nDurasi: - Menit\nKualitas: HD\nRate: ⭐⭐⭐⭐\nDownload:\nhttps://drive.google.com/file/d/1iVfhweyoExOcSCq-LHvJSHRp7pmbNmzg/view\nPassword: AA18+#40',
          'Nama: Jenn\nFoto: 50\nVideo: 7\nSize: 105 MB\nDurasi: - Menit\nKualitas: HD+\nRate: ⭐⭐⭐⭐\nDownload:\nhttps://drive.google.com/file/d/1jqYvhwGLp8BgTItHRQpONu1MX3o4o12d/view\nPassword: AA18+#41',
          'Nama: Yanna Davud\nFoto: 61\nVideo: 5\nSize: 22 MB\nDurasi: - Menit\nKualitas: HD\nRate: ⭐⭐⭐⭐\nDownload:\nhttps://drive.google.com/file/d/1kIs0lNpZW-R5ub09GiQG6-wgdfagoZsV/view\nPassword: AA18+#41',
          'Nama: Nina fika luna\nFoto: 30\nVideo: 28\nSize: 153 MB\nDurasi: - Menit\nKualitas: HD\nRate: ⭐⭐⭐⭐\nDownload:\nhttps://drive.google.com/file/d/1kirVFR8V7aYAvY_6s9v5QKyxy5hRQw-X/view\nPassword: AA18+#42',
          'Nama: Ain Penang\nFoto: 53\nVideo: 7\nSize: 42 MB\nDurasi: - Menit\nKualitas: HD\nRate: ⭐⭐⭐⭐\nDownload:\nhttps://drive.google.com/file/d/1kzGeQKuKaQKiz6u_JEcPh9wuJGKVB-sv/view\nPassword: AA18+#43',
          'Nama: Jilboobs\nFoto: -\nVideo: 8\nSize: 84 MB\nDurasi: - Menit\nKualitas: HD\nRate: ⭐⭐⭐\nDownload:\nhttps://drive.google.com/file/d/1l6M6JXmNiHGaybQiHH39wucVhvLkTjkX/view\nPassword: AA18+#44',
          'Nama: Kiki hijab\nFoto: -\nVideo: 14\nSize: 190 MB\nDurasi: - Menit\nKualitas: HD\nRate: ⭐⭐⭐⭐\nDownload:\nhttps://drive.google.com/file/d/1lZDvGBclp35JxhWRpVSCrVOO5YhIQSSn/view\nPassword: AA18+#45',
          'Nama: Tifanny\nFoto: 117\nVideo: 4\nSize: 30 MB\nDurasi: - Menit\nKualitas: HD\nRate: ⭐⭐⭐⭐\nDownload:\nhttps://drive.google.com/file/d/1lrO9YJ1-MJtHavMpN2kG3nmJSReJtzE6/view\nPassword: AA18+#46',
          'Nama: Vierannii\nFoto: 95\nVideo: -\nSize: 12 MB\nDurasi: - Menit\nKualitas: HD\nRate: ⭐⭐⭐⭐\nDownload:\nhttps://drive.google.com/file/d/1lrOIZFT1n5XWqkX5uVq7xmmSpKjX70Mf/view\nPassword: AA18+#47'
       ]
       var result = pickRandom(str)
         return m.reply(loghandler.wait, result)

  } else if (/^barcode$/i.test(command)) {
       if (!text) return m.reply(loghandler.wait, loghandler.notText)
       var res = await barcode('code39', { data: text, width: 400, height: 100 })
       var img = './tmp/barcode.png'
       await res.saveImage(img, async (e) => {
       if (e) return m.reply(loghandler.wait, `*「 ERROR 」*\n\n${util.format(e.message ? e.message : e)}`)
       var result = await saveToMedia(await fs.readFileSync(img))
         return m.reply(loghandler.wait, 'Hasil:\n\n' + result)
       })

  } else if (/^intro(maker)?$/i.test(command)) {
       if (!isPremium) return m.reply(loghandler.wait, loghandler.premiumOnly)
       if (!text) return m.reply(loghandler.wait, loghandler.notText)
       var buffer = await (await fetch(`https://raw.githubusercontent.com/RC047/media/main/intromaker/${text.toLowerCase()}.webm`)).buffer()
       var result = await saveToMedia(buffer, { ext: 'mp4' })
         return m.reply(loghandler.wait, 'Hasil:\n\n' + result)

  } else if (/^hiburan|fun(ny)?$/i.test(command)) {
       var buffer = await (await fetch(`https://raw.githubusercontent.com/RC047/media/main/clipclaps/${Math.floor(Math.random() * 46)}.mp4`)).buffer()
       var result = await saveToMedia(buffer)
         return m.reply(loghandler.wait, 'Hasil:\n\n' + result)

  } else if (/^join$/i.test(command)) {
       if (!isPremium) return m.reply(loghandler.wait, loghandler.premiumOnly)
       if (isGroup) return m.reply(loghandler.wait, loghandler.privateOnly)
       if (!text) return m.reply(loghandler.wait, loghandler.notUrl)
       if (!/^(http(s)?:\/\/)?chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})$/i.test(text)) return m.reply(loghandler.wait, loghandler.invalidLink)
       await fs.writeFileSync('./tmp/' + text + '_join.txt', `*「 JOIN 」*\n\nDari: ${senderName}\nLink:\n${text}`)
         return m.reply(loghandler.wait, '[!] Request anda telah dikirim!\nSilahkan tunggu hingga Owner menyetujuinya')

  } else if (/^premium$/i.test(command)) {
       if (isPremium) return m.reply(loghandler.wait, 'Nomor anda sudah Premium :D')
       var str = `
╭─ *「 PREMIUM 」*
│
│• Mingguan: 5K
│• Bulanan: 15K
│• Tahunan: 30K
│• Permanen: 50K
│
│• Pembayaran:
│+${owner}
│${donate_link}
╰────
`.trim()
         return m.reply(loghandler.wait, str)

  } else if (/^gds(earch)?$/i.test(command)) {
       if (!text) return m.reply(loghandler.wait, loghandler.notQuery)
       var json = await (await fetch(`https://gdbrowser.com/api/search/${text}`)).json()
       if (!json[0]) return m.reply(loghandler.wait, `Pencarian ${text} tidak dapat ditemukan!`)
       var result = json.map(v => `Level Name: ${v.name}${v.copiedID !== '0' ? ' (Copied)' : ''}\nLevel ID: ${v.id}${v.copiedID !== '0' ? '\nCopied ID: ' + v.copiedID : ''}\nDescription:\n${v.description}\nUploader: ${v.author}\nDifficulty: ${v.difficulty}\nDownloads: ${v.downloads}\nLikes: ${v.likes}\nLength: ${v.length}\nRated: ${v.stars !== 0 ? true : false}\nFeatured: ${v.featured}\nEpic: ${v.epic}\nCoins: ${v.coins}\nVerified Coins: ${v.verifiedCoins}\nStars Requested: ${v.starsRequested}\nObjects: ${v.objects > 40000 ? v.objects + ' (High)' : v.objects}\nTwo Players: ${v.twoPlayer}\nSong Name:\n${v.songName} (By ${v.songAuthor})\nSong ID: ${v.songID}\nOfficial Song: ${v.officialSong !== 0 ? true : false}\nCustom Song: ${v.customSong !== 0 ? true : false}\nDownload Song: ${v.songLink ? '(' + v.songSize + ')\n' + v.songLink : '(Not Available)'}`).join('\n\n========================\n\n')
         return m.reply(loghandler.wait, result)

  } else if (/^gdstalk$/i.test(command)) {
       if (!text) return m.reply(loghandler.wait, loghandler.notName)
       var json = await (await fetch(`https://gdbrowser.com/api/profile/${text}`)).json()
       if (!json.username) return m.reply(loghandler.wait, 'User tidak dapat ditemukan!')
       var img = await (await fetch(`https://gdbrowser.com/icon/${json.username}`)).buffer()
       var result = `Username: ${json.username}\nPlayer ID: ${json.playerID}\nAccount ID: ${json.accountID}\nGlobal Rank: ${json.rank !== 0 ? json.rank : '-'}\nStars: ${json.stars}\nDiamonds: ${json.diamonds}\nGold Coins: ${json.coins}\nSilver Coins: ${json.userCoins}\nDemons: ${json.demons}\nCreator Points: ${json.cp}\nModerator: ${json.moderator !== 0 ? true : false}\nIcon: ${json.icon}\nShip: ${json.ship}\nBall: ${json.ball}\nUfo: ${json.ufo}\nWave: ${json.wave}\nRobot: ${json.robot}\nSpider: ${json.spider}\nDeath Effect: ${json.deathEffect}\nGlowing: ${json.glow}\nYouTube: ${json.youtube ? '\nhttps://youtube.com/channel/' + json.youtube : '-'}\nTwitter: ${json.twitter ? 'https://twitter.com/' + json.twitter : '-'}\nTwitch: ${json.twitch ? 'https://twitch.tv/' + json.twitch : '-'}\nThumb:\n${await saveToMedia(img)}`
         return m.reply(loghandler.wait, result)

  } else if (/^jadibot$/i.test(command)) {
       var result = `Silahkan menuju situs web ini dan setelah itu download script botnya:\n\nUntuk seperti tutorial, screenshot, apk autoresponder, ada diweb ini ok!\n\nLink:\n${m.get('Host')}`
         return m.reply(loghandler.wait, result)

  } else if (/^spamchat$/i.test(command)) {
  	 if (!isPremium) return m.reply(loghandler.wait, loghandler.premiumOnly)
       if (!text) return m.reply(loghandler.wait, loghandler.notNumber)
       var [jumlah, pesan] = text.split('|')
       if (!jumlah) return m.reply(loghandler.wait, loghandler.notLength)
       if (isNaN(jumlah)) return m.reply(loghandler.wait, loghandler.numberOnly)
       if (jumlah * 1 > 100) return m.reply(loghandler.wait, loghandler.overLength)
       if (!pesan) return m.reply(loghandler.wait, loghandler.notText)
       var result = ''
       for (var i = jumlah * 1; i > 0; i--) result += pesan + '\',\''
         return eval(`m.reply('${result.slice(0, result.length - 3)}')`)

  } else if (/^kisahnabi$/i.test(command)) {
  	 if (!text) return m.reply(loghandler.wait, loghandler.notQuery)
  	 var res = await fetch(`https://raw.githubusercontent.com/shansekai/My-SQL-Results/main/kisahnabi/${text.toLowerCase()}.json`)
       if (res.status !== 200) return m.reply(loghandler.wait, `Nama nabi *${text}* tidak dapat ditemukan!\n\nPastikan anda memasukan nama nabinya dengan benar`)
       var json = await res.json()
       var result = `Kisah: ${json.name}\nTempat Kelahiran: ${json.tmp} (${json.thn_kelahiran})\nUsia: ${json.usia}\nThumb:\n${json.image_url}\n\n\n${json.description}`
         return m.reply(loghandler.wait, result)

  } else return m.reply(loghandler.wait, loghandler.notCommand)
} catch (e) {
  console.error(e)
  var err = e.message ? e.message : e
  if (isApikey.test(err)) {
      err = err.replace(isApikey, function (match) {
      var censored = ''
      for (var i = 0; i < match.length; i++) censored += '*'
      return censored
      })
   }
  return m.reply(loghandler.wait, `*「 ERROR 」*\n\n${util.format(err)}`)
 }
}


module.exports = { handler }
