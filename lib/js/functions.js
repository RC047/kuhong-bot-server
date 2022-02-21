__path = process.cwd()

var { isBuffer, from } = Buffer
var { obfuscate } = require('js-confuser')
var { fromBuffer } = require('file-type')
var { JSDOM } = require('jsdom')
var { spawn, exec } = require('child_process')
var fetch = require('node-fetch')
var gtts = require('node-gtts')
var axios = require('axios')
var cheerio = require('cheerio')
var crypto = require('crypto')
var path = require('path')
var fs = require('fs')
var util = require('util')


async function saveToMedia(buffer, opts = { fileName: 'random', ext: 'auto', imgbb: false }) {

 try {
  if (!isBuffer(buffer)) return null
  var { ext } = await fromBuffer(buffer).catch(() => 'bin')
  var fileName = opts.fileName
  if (opts.fileName == 'random') fileName = randomText()
  if (!opts.fileName) fileName = randomText()
  if (opts.ext !== 'auto') ext = opts.ext.toLowerCase()
  await fs.writeFileSync(`${__path}/public/media/${fileName}.${ext}`, buffer)
  var result = `https://kuhong-bot.herokuapp.com/media/${fileName}.${ext}`
  if (opts.imgbb) {
      var json = await (await fetch(`https://api.imgbb.com/1/upload?key=34d0d954f1f513a5a4e36e76141681c5&image=${result}&name=${fileName}`)).json()
      result = json.data.url
  }
    return result ? result : null
 } catch (e) {
  console.log(e)
    }
}


async function yt(url, quality, type, bitrate, server = 'en68') {
  var ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:shorts\/)?(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/i
  if (/shorts/i.test(url)) url = 'https://youtube.com/watch?v=' + url.split('shorts/')[1].split('?feature')[0]
  if (!ytIdRegex.test(url)) throw 'Invalid URL'
  var ytId = ytIdRegex.exec(url)
  url = 'https://youtu.be/' + ytId[1]
  var res = await post(`https://www.y2mate.com/mates/${server}/analyze/ajax`, {
    url,
    q_auto: 0,
    ajax: 1
  })
  var json = await res.json()
  var { document } = (new JSDOM(json.result)).window
  var tables = document.querySelectorAll('table')
  var table = tables[{ mp4: 0, mp3: 1 }[type] || 0]
  var list
  switch (type) {
    case 'mp4':
      list = Object.fromEntries([...table.querySelectorAll('td > a[href="#"]')].filter(v => !/\.3gp/.test(v.innerHTML)).map(v => [v.innerHTML.match(/.*?(?=\()/)[0].trim(), v.parentElement.nextSibling.nextSibling.innerHTML]))
      break
    case 'mp3':
      list = {
        '128kbps': table.querySelector('td > a[href="#"]').parentElement.nextSibling.nextSibling.innerHTML
      }
      break
    default:
      list = {}
  }
  var filesize = list[quality]
  var id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ['', '']
  var thumb = document.querySelector('img').src
  var title = document.querySelector('b').innerHTML
  var res2 = await post(`https://www.y2mate.com/mates/${server}/convert`, {
    type: 'youtube',
    _id: id[1],
    v_id: ytId[1],
    ajax: '1',
    token: '',
    ftype: type,
    fquality: bitrate
  })
  var json2 = await res2.json()
  var KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize))
  return {
    dl_link: /<a.+?href="(.+?)"/.exec(json2.result)[1],
    thumb,
    title,
    filesizeF: filesize,
    filesize: KB
  }
}

function joox(query) {
    return new Promise((resolve, reject) => {
        const time = Math.floor(new Date() / 1000)
        axios.get('http://api.joox.com/web-fcgi-bin//web_search?lang=id&country=id&type=0&search_input=' + query + '&pn=1&sin=0&ein=29&_=' + time)
            .then(({ data }) => {
                let result = []
                let hasil = []
                let promoses = []
                let ids = []
                data.itemlist.forEach(result => {
                    ids.push(result.songid)
                });
                for (let i = 0; i < data.itemlist.length; i++) {
                    const get = 'http://api.joox.com/web-fcgi-bin/web_get_songinfo?songid=' + ids[i]
                    promoses.push(
                        axios.get(get, {
                            headers: {
                                Cookie: 'wmid=142420656; user_type=1; country=id; session_key=2a5d97d05dc8fe238150184eaf3519ad;'
                            }
                        })
                            .then(({ data }) => {
                                const res = JSON.parse(data.replace('MusicInfoCallback(', '').replace('\n)', ''))
                                hasil.push({
                                    lagu: res.msong,
                                    album: res.malbum,
                                    penyanyi: res.msinger,
                                    publish: res.public_time,
                                    img: res.imgSrc,
                                    audio: res.mp3Url
                                })
                                Promise.all(promoses).then(() => resolve({
                                    creator: "RC047",
                                    status: true,
                                    data: hasil
                                }))
                            }).catch(reject)
                    )
                }
            }).catch(reject)
    })
}

var modes = {
  noob: [-3, 3,-3, 3, '+-', 15000, 10],
  easy: [-10, 10, -10, 10, '+-', 20000, 40],
  medium: [-40, 40, -20, 20, '*/', 40000, 150],
  hard: [-100, 100, -70, 70, '*/', 60000, 350],
  extreme: [-999999, 999999, -999999, 999999, '*/+-', 99999, 9999],
  impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/+-', 30000, 35000],
  impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000],
  pro: [-9999999999999999999999999999, 99999999999999999999999999, -99999999, 99999999, '*/+-', 15000, 1000000]
} 

var operators = {
  '+': '+',
  '-': '-',
  '*': '×',
  '/': '÷'
}

function math(mode) {
  var [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
  var a = randomInt(a1, a2)
  var b = randomInt(b1, b2)
  var op = pickRandom([...ops])
  var result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
  if (op == '/') [a, result] = [result, a]
  return {
    str: `${a} ${operators[op]} ${b}`,
    mode,
    time,
    bonus,
    result
  }
}

function randomInt(from, to) {
  if (from > to) [from, to] = [to, from]
  from = Math.floor(from)
  to = Math.floor(to)
  return Math.floor((to - from) * Math.random() + from)
}

function encryptHtml(html, message) {

var ranFunc = randomText()
var object = randomText()
var object2 = randomText()
var object3 = randomText()
var object4 = randomText()
var object5 = randomText()
var source = `
// Encryption By RC047

document.write(${ranFunc}('${object + object2 + toBase64(object4 + toBase64(toBase64(reverseText(html))) + object5) + object3}'));

function ${ranFunc}(data) {
var tmp = data.split('${object}')[1].split('${object3}')[0];
var tmp2 = atob(tmp.slice(${object2.length}));
var tmp3 = atob(tmp2.replace(/(${object4})/g, '').replace(/(${object5})/g, ''));
var tmp4 = atob(tmp3);
var result = '';
for (var index = tmp4.length - 1; index >= 0; index--) result += tmp4[index]
  return result;
}
`
var data = toBase64(`eval(atob('${toBase64(source.trim())}'));`)
var result = `
<script type="text/javascript">
<!--
eval(atob('${data}'));
// -->
</script>
`
if (message) result = `
<script type="text/javascript">
<!-- ${message} -->
<!--
eval(atob('${data}'));
// -->
</script>
`
  return result.trim()
}

function encryptScript(script) {

var ranFunc = randomText()
var object = randomText()
var object2 = randomText()
var object3 = randomText()
var object4 = randomText()
var object5 = randomText()
var source = `
// Encryption By RC047

eval(${ranFunc}('${object + object2 + toBase64(object4 + toBase64(toBase64(reverseText(script))) + object5) + object3}'));

function ${ranFunc}(data) {
var tmp = data.split('${object}')[1].split('${object3}')[0];
var tmp2 = atob(tmp.slice(${object2.length}));
var tmp3 = atob(tmp2.replace(/(${object4})/g, '').replace(/(${object5})/g, ''));
var tmp4 = atob(tmp3);
var result = '';
for (var index = tmp4.length - 1; index >= 0; index--) result += tmp4[index]
  return result;
}
`
var result = `eval(atob('${toBase64(source.trim())}'));`
  return result
}

function toBinary(text) {

var result = ''
for (var i = 0; i < text.length; i++) result += text[i].charCodeAt(0).toString(2) + ' '
  return result
}

function toBase64(text) {
  return from(text, 'UTF-8').toString('base64')
}

function toHex(text) {
  return from(text, 'UTF-8').toString('hex')
}

function reverseText(text) {
var result = ''
for (var index = text.length - 1; index >= 0; index--) result += text[index]
  return result
}

function randomText(length1, length2) {

var len = length1 || 15
if (isNaN(len)) return 'The input must be a Number'
var arr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
var random = ''
for (var i = len; i > 0; i--) {
    random += arr[Math.floor(Math.random() * arr.length)]
}
var lenn = length2 || 10
if (isNaN(lenn)) return 'The input must be a Number'
var random2 = ''
for (var i = lenn; i > 0; i--) {
    random2 += arr[Math.floor(Math.random() * arr.length)]
}

   return random + random2
}

function escapeFull(data) {

var result = ''
for (var i = 0; i < data.length; i++) result += '%' + hexFromDec(data.charCodeAt(i))
 return result
}

function hexFromDec(num) {

if (num > 65535) return ('error!')
var first = Math.round(num / 4096 -.5)
var temp1 = num - first * 4096
var second = Math.round(temp1 / 256 -.5)
var temp2 = temp1 - second * 256
var third = Math.round(temp2 / 16 -.5)
var fourth = temp2 - third * 16
   return ('' + getLetter(third) + getLetter(fourth))
}

function getLetter(num) {

   if (num < 10) {
   return num
   } else {
   if (num == 10) return 'a'
   if (num == 11) return 'b'
   if (num == 12) return 'c'
   if (num == 13) return 'd'
   if (num == 14) return 'e'
   if (num == 15) return 'f'
   }
}

function tahta(text, text2, text3) {

var fonts = path.join(__path + '/src/fonts/')
var aesthetic = path.join(lib, '/src/images/')
var tmp = path.join(__path + '/tmp/')

  return new Promise((resolve, reject) => {
    var img = path.join(aesthetic, `aesthetic_${Math.floor(Math.random() * 3)}.jpg`)
    var font = path.join(fonts, 'Roboto-Black.ttf')
    var w = 1024
    var h = w
    var s = w + 'x' + h
    var xF = `(${noise('X', 2, w, 1)}+${noise('Y', 1, h, 1)})/2+128`
    var yF = `((${pickRandom(['', '-'])}${45 * w / 2048}*${pickRandom(['sin', 'cos'])}(X/${w}*4*PI))+${noise('X', 5, w, 0.8)}+${noise('Y', 2, h, 1)})/1.7+128`
    var fsize = 320 / 2048 * w
    var lh = 1.5
    var format = ',format=rgb24'
    var layers = [
      `[v:0]scale=${s}${format}[im]`,
      textArgs(text, 'black', 'white', fsize, font, '(w-text_w)/2', `(h-text_h)/2-(text_h*${lh})`, w, h) + format + '[top]',
      textArgs(text2, 'black', 'white', fsize, font, '(w-text_w)/2', `(h-text_h)/2`, w, h) + format + '[mid]',
      textArgs(text3, 'black', 'white', fsize, font, '(w-text_w)/2', `(h-text_h)/2+(text_h*${lh})`, w, h) + format + '[bot]',
      '[top][mid]blend=all_mode=addition[con]',
      '[con][bot]blend=all_mode=addition[txt]',
      `nullsrc=s=${s},geq='r=${xF}:g=${xF}:b=${xF}'[dx]`,
      `nullsrc=s=${s},geq='r=${yF}:g=${yF}:b=${yF}'[dy]`,
      '[txt][dx][dy]displace[wa]',
      '[im][wa]blend=all_mode=multiply:all_opacity=1'
    ]

    var o = 1 * new Date + '_harta_tahta.png'
    o = path.join(tmp, o)
    var args = [
      '-y',
      '-i', img,
      '-filter_complex', layers.join(';'),
      '-frames:v', '1',
      o
    ]
    console.log(layers)
    console.log('ffmpeg', ...args)
    spawn('ffmpeg', args)
    .on('error', reject)
    .on('close', () => {
      try {
        resolve(fs.readFileSync(o))
        fs.unlinkSync(o)
      } catch (e) {
        reject(e)
      }
    })
  })
}

function noise(_var, depth = 4, s = 1024, freq) {
  var forms = []
  for (var i = 0; i < depth; i++) forms.push(
    formula(
      _var,
      freq * rand(40, 80) * (s / 2048)/ s * ((i + 1) / 5),
      rand(-Math.PI, Math.PI),
      (i + 1) / depth * 8,
      0
    )
  )
  return forms.join('+')
}

function formula(_var, freq, offset, amp, add) {
  return `(${add.toFixed(3)}+${amp.toFixed(4)}*sin(${offset.toFixed(6)}+2*PI*${_var}*${freq.toFixed(6)}))`
}

function textArgs(text, background, color, size, fontfile, x = '200' , y = '200', w = 1024, h = 1024) {
  return `color=${background}:s=${w}x${h},drawtext=text='${text.replace(/[\\]/g, '\\$&')}':fontfile='${fontfile.replace(/[\\]/g, '\\$&')}':x=${x}:y=${y}:fontsize=${size}:fontcolor=${color}`
}

function rand(min, max, q = 0.001) {
  return Math.floor((Math.random() * (max - min)) / q) * q
}

var zodiak = [
    ["Capricorn", new Date(1970, 0, 1)],
    ["Aquarius", new Date(1970, 0, 20)],
    ["Pisces", new Date(1970, 1, 19)],
    ["Aries", new Date(1970, 2, 21)],
    ["Taurus", new Date(1970, 3, 21)],
    ["Gemini", new Date(1970, 4, 21)],
    ["Cancer", new Date(1970, 5, 22)],
    ["Leo", new Date(1970, 6, 23)],
    ["Virgo", new Date(1970, 7, 23)],
    ["Libra", new Date(1970, 8, 23)],
    ["Scorpio", new Date(1970, 9, 23)],
    ["Sagittarius", new Date(1970, 10, 22)],
    ["Capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
    let d = new Date(1970, month - 1, day)
    return zodiak.find(([_,_d]) => d >= _d)[0]
}

function textWrap(str, maxWidth) {
    var newLineStr = '\n';
    var done = false;
    var result = '';
    while (str.length > maxWidth) {                 
        var found = false;
        for (var i = maxWidth - 1; i >= 0; i--) {
            if (testWhite(str.charAt(i))) {
                result = result + [str.slice(0, i), newLineStr].join('');
                str = str.slice(i + 1);
                found = true;
                break;
            }
        }
        if (!found) {
            result += [str.slice(0, maxWidth), newLineStr].join('');
            str = str.slice(maxWidth);
        }

    }

    return result + str
}

function testWhite(x) {
    var white = new RegExp(/^\s$/);
    return white.test(x.charAt(0));
}

function searchGempa() {
return new Promise((resolve, reject) => {
  axios.get('https://www.bmkg.go.id/gempabumi/gempabumi-dirasakan.bmkg').then((response) => {
  var $ = cheerio.load(response.data)
  var urlElems = $('table.table-hover.table-striped')
  for (var i = 0; i < urlElems.length; i++) {
  var urlSpan = $(urlElems[i]).find('tbody')[0]

  if (urlSpan) {
      var urlData = $(urlSpan).find('tr')[0]
      var Kapan = $(urlData).find('td')[1]
      var Letak = $(urlData).find('td')[2]
      var Magnitudo = $(urlData).find('td')[3]
      var Kedalaman = $(urlData).find('td')[4]
      var Wilayah = $(urlData).find('td')[5]
      var lintang = $(Letak).text().split(' ')[0]
      var bujur = $(Letak).text().split(' ')[2]
      var hasil = {
        waktu: $(Kapan).text(),
        lintang: lintang,
        bujur: bujur,
        magnitudo: $(Magnitudo).text(),
        kedalaman: $(Kedalaman).text().replace(/\t/g, '').replace(/I/g, ''),
        wilayah: $(Wilayah).text().replace(/\t/g, '').replace(/I/g, '').replace('-', '').replace(/\r/g, '').split('\n')[0],
        map: $('div.row > div > img').attr('src')
      }
      resolve(hasil);
     }
    }
   }).catch(err => reject(err))
  })
}

async function getBuffer(url, options) {
        try {
                options ? options : {}
                var res = await axios({
                        method: "get",
                        url,
                        headers: {
                                'DNT': 1,
                                'Upgrade-Insecure-Request': 1
                        },
                        ...options,
                        responseType: 'arraybuffer'
                })
                return res.data
        } catch (e) {
                console.log(`Error : ${e}`)
        }
}

function tts(text, lang = 'id') {
  return new Promise((resolve, reject) => {
    try {
      let tts = gtts(lang)
      let filePath = path.join(__path + '/tmp/', (1 * new Date) + '.mp3')
      tts.save(filePath, text, () => {
          resolve(fs.readFileSync(filePath))
          fs.unlinkSync(filePath)
      })
    } catch (e) { reject(e) }
  })
}

async function stylizeText(text) {
    let res = await fetch('http://qaz.wtf/u/convert.cgi?text=' + encodeURIComponent(text))
    let html = await res.text()
    let dom = new JSDOM(html)
    let table = dom.window.document.querySelector('table').children[0].children
    let obj = {}
    for (let tr of table) {
      let name = tr.querySelector('.aname').innerHTML
      let content = tr.children[1].textContent.replace(/^\n/, '').replace(/\n$/, '')
      obj[name + (obj[name] ? ' Reversed' : '')] = content
    }
  return obj
}

function arrayRegex(array, modifier = 'i') {
  return new RegExp('^(' + array.join('|') + ')$', modifier);
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function formatDate(n, locale = 'id') {
var d = new Date(n)
  return d.toLocaleDateString(locale, {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
}

function muptime(seconds) {

var hours = Math.floor(seconds / (60 * 60));
var minutes = Math.floor(seconds % (60 * 60) / 60);
var seconds = Math.floor(seconds % 60);

  return new Array(pad(hours), pad(minutes), pad(seconds)).join(':')
}

function pad(s) {
  return (s < 10 ? '0' : '') + s
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

function post(url, formdata) {
  return fetch(url, {
    method: 'POST',
    headers: {
      accept: "*/*",
      'accept-language': "en-US,en;q=0.9",
      'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: new URLSearchParams(Object.entries(formdata))
  })
}

function stringify(json) {
  return JSON.stringify(json, null, 2)
}

module.exports = { saveToMedia, math, modes, encryptHtml, encryptScript, escapeFull, getZodiac, yt, yta(url, server = 'en68') { return yt(url, '128kbps', 'mp3', '128', server) }, ytv(url, server = 'en68') { return yt(url, '360p', 'mp4', '360', server) }, servers: ['id4', 'en60', 'en61', 'en68'], joox, toBase64, toHex, toBinary, stylizeText, tts, tahta, searchGempa, getBuffer, textWrap, arrayRegex, pickRandom, formatDate, muptime, pad, clockString, post, stringify }
