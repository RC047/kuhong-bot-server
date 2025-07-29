var __path = process.cwd()
var { isBuffer, from } = Buffer
let { sizeFormatter } = require('human-readable')
let { spawn, exec } = require('child_process')
let { Script, createContext } = require('vm')
let { obfuscate } = require('js-confuser')
let { fromBuffer } = require('file-type')
let { JSDOM } = require('jsdom')
let puppeteer = require('puppeteer')
let fetch = require('node-fetch')
let FormData = require('form-data')
let gtts = require('node-gtts')
let axios = require('axios')
let chalk = require('chalk')
let cheerio = require('cheerio')
let lodash = require('lodash')
let crypto = require('crypto')
let path = require('path')
let fs = require('fs')
let util = require('util')
let config = require('../../config.json')


async function saveToMedia(buffer, opts = { fileName: 'random', ext: 'auto', imgbb: false }) {

 try {
  if (!isBuffer(buffer)) return null
  var { ext } = await fromBuffer(buffer).catch(() => 'bin')
  var fileName = opts.fileName
  if (opts.fileName == 'random') fileName = randomText()
  if (!opts.fileName) fileName = randomText()
  if (opts.ext !== 'auto') ext = opts.ext.toLowerCase()
  await fs.writeFileSync(`./public/media/${fileName}.${ext}`, buffer)
  var result = `https://kuhong-bot-server.vercel.app/media/${fileName}.${ext}`
  if (opts.imgbb) {
      var json = await (await fetch(`https://api.imgbb.com/1/upload?key=34d0d954f1f513a5a4e36e76141681c5&image=${result}&name=${fileName}`)).json()
      result = json.data.url
  }
    return result ? result : null
 } catch (e) {
  console.log(e)
    }
}

async function getChatOpenAI(model, data = []) {
	if (!model) model = 'gpt-3.5-turbo' // default model
	if (data.length == 0) throw 'Data not found!'
	let res = await fetch('https://api.openai.com/v1/chat/completions', {
		method: 'POST',
		headers: {
			'Accept': '*/*',
			'Authorization': `Bearer ${global.config.apiKeys.openai}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			model: model,
			max_tokens: 600,
			messages: data.map(v => new Object({ role: v.role, content: v.content }))
		})
	})
	if (!res.ok) throw res.statusText
	return await res.json()
}

async function clearDir(name) {
	let directory = path.join(__dirname, name)
	if (!fs.existsSync(directory)) throw 'Directory does not exist'
	let files = await fs.readdirSync(directory)
	for (let file of files) {
		if (file) await fs.rmSync(path.join(directory, file))
	}
}

async function fetchV2(url, options = {}) {
	if (typeof url == 'undefined' || !isURL(url)) throw 'Invalid URL'
	try {
		let browser = client.pupBrowser || await puppeteer.launch(options.puppeteer ? options.puppeteer : {})
		let page = await browser.newPage()
		await page.setRequestInterception(true)
		page.on('request', (req) => {
			return req.continue({
				method: options.method ? options.method : 'GET',
				postData: options.body,
				...options
			})
		})
		.on('dialog', (dialog) => dialog.dismiss())
		let response = await page.goto(url, { waitUntil: options.waitUntil || 'networkidle0', timeout: options.timeout || 0 })
		response.page = page
		response.content = async () => await page.content() // get loaded source html content
		response.screenshot = async (...args) => await page.screenshot(...args)
		if (!options.alwaysOpen) setTimeout(() => page.close(), 3000)
		return response
	} catch (e) {
		console.log(e)
		throw e.message ? e.message : e
	}
}

async function saveFrom(url, options = {}) {
  if (typeof url == 'undefined' || !isURL(url)) throw 'Invalid URL'
  if (!options.type) throw 'Parameter type\'s cant be blank'
  let form = new URLSearchParams()
  form.append('sf_url', url)
  form.append('sf_submit', '')
  form.append('sf-nomad', 1)
  let res = await fetch('https://worker.sf-tools.com/savefrom.php', {
	  method: 'POST',
	  headers: {
		  'Content-Type': 'application/x-www-form-urlencoded',
		  'User-Agent': 'GoogleBot'
	  },
	  body: form
  })
  if (!res.ok) throw res.statusText
  let data = await res.text()
  let executeCode = '[]["filter"]["constructor"](b).call(a);'
  if (!data.includes('/*js-response*/') || !data.includes(executeCode)) throw 'Download link not found!'
  let functions = `try{let script=${executeCode.split('.call')[0]}.toString();if (script.includes('function showResult'))result=script;else (${executeCode.replace(/;/, '')})}catch(e){}`
  let script = new Script(data.replace(executeCode, functions))
  let context = new Object()
  await createContext(context)
  await script.runInContext(context)
  if (!context.result) throw 'Download link not found!'
  let json = (context.result.split('window.parent.sf.videoResult.show(')[1] || context.result.split('window.parent.sf.videoResult.showRows(')[1]).split(');;')[0] || ''
  if (!json) throw 'Download link not found!'
  else json = JSON.parse(json)
  if (options.raw) return json
  json.url = json.url.filter(v => v.type.toLowerCase() == options.type.toLowerCase() && !v.type.includes('dash'))
  let key = Math.floor(Math.random() * json.url.length)
  if (!json.url[key]) throw 'Download link not found!'
  let { headers, statusText, ok } = await fetch(json.url[key].url)
  if (!ok) throw statusText
     return {
		 id: json.id,
		 ...json.meta,
		 thumb: json.thumb,
		 type: json.url[key].type,
		 quality: (json.url[key].subname || '360p') + (!isNaN(json.url[key].subname) ? 'p' : ''),
		 filesize: headers.get('Content-Length') * 1,
		 url: json.url[key].url
	 } 
}

async function uploadImage(buffer) {
  let { ext } = await fromBuffer(buffer) || 'bin'
  let form = new FormData()
  form.append('file', buffer, 'tmp.' + ext)
  let res = await fetch('https://telegra.ph/upload', {
    method: 'POST',
    body: form
  })
  let json = await res.json()
  if (json.error) throw json
    return 'https://telegra.ph' + json[0].src
}

async function uploadFile(buffer) {
  let { ext } = await fromBuffer(buffer) || 'bin'
  let form = new FormData()
  form.append('file', buffer, 'tmp.' + ext)
  let res = await fetch('https://file.io/?expires=1d', {
    method: 'POST',
    body: form
  })
  let json = await res.json()
  if (!json.success) throw json
    return json.link
}

async function uploadImgbb(data, options = { expired: false, filename: Math.floor(Math.random() * 1000) }) {
  if (typeof data == 'string' && !isURL(data)) throw 'Invalid URL'
  if (typeof data == 'string') data = await getBuffer(data)
  if (!util.isBuffer(data)) throw 'Value must be a type of Buffer'
  let { ext } = await fromBuffer(data)
  let form = new FormData()
  form.append('key', config.apikey.imgbb)
  form.append('image', data, options.filename + ext)
  if (options.expired) form.append('expiration', options.expiration)
  let res = await fetch('https://api.imgbb.com/1/upload', {
	  method: 'POST',
	  body: form
  })
  if (!res.ok) throw res.statusText
  let json = await res.json()
  if (!json.success) throw json
     return json.data.display_url
}

async function ssweb(url, options = {}) {
  if (typeof url == 'undefined' || !isURL(url)) throw 'Invalid URL'
  let browser = client.pupBrowser || await puppeteer.launch(options.puppeteer ? options.puppeteer : {})
  let page = await browser.newPage()
  let deviceType = options.deviceType || 'iPhone X'
  if (!(deviceType in puppeteer.devices)) throw 'Device type is not supported!'
  if (options.isMobile) await page.emulate(puppeteer.devices[deviceType])
  await page.goto(url, { waitUntil: 'networkidle0' })
  if (options.full) await page.waitForTimeout(15000)
  let result = await page.screenshot({ type: 'jpeg', quality: 100, fullPage: options.full })
  await page.close()
      return result
}

async function webp2mp4(buffer) {
  let { ext } = await fromBuffer(buffer)
  if (ext !== 'webp') throw 'Value must be a type of Image WEBP'
  let form = new FormData()
  form.append('new-image', buffer, 'image.' + ext)
  let res = await fetch('https://ezgif.com/webp-to-mp4', {
	  method: 'POST',
	  body: form
  })
  let html = await res.text()
  let { document } = new JSDOM(html).window
  let form2 = new FormData()
  let obj = {}
  for (let input of document.querySelectorAll('form input[name]')) {
	  obj[input.name] = input.value
	  form2.append(input.name, input.value)
  }
  let res2 = await fetch(`https://ezgif.com/webp-to-mp4/${obj.file}`, {
	  method: 'POST',
	  body: form2
  })
  let html2 = await res2.text()
  let { document: document2 } = new JSDOM(html2).window
  return new URL(document2.querySelector('div#output > p.outfile > video > source').src, res2.url).toString()
}

async function webp2png(buffer) {
  let { ext } = await fromBuffer(buffer)
  if (ext !== 'webp') throw 'Value must be a type of Image WEBP'
  let form = new FormData()
  form.append('new-image', buffer, 'image.' + ext)
  let res = await fetch('https://ezgif.com/webp-to-png', {
	  method: 'POST',
	  body: form
  })
  let html = await res.text()
  let { document } = new JSDOM(html).window
  let form2 = new FormData()
  let obj = {}
  for (let input of document.querySelectorAll('form input[name]')) {
	  obj[input.name] = input.value
	  form2.append(input.name, input.value)
  }
  let res2 = await fetch('https://ezgif.com/webp-to-png/' + obj.file, {
	  method: 'POST',
	  body: form2
  })
  let html2 = await res2.text()
  let { document: document2 } = new JSDOM(html2).window
  return new URL(document2.querySelector('div#output > p.outfile > img').src, res2.url).toString()
}

async function getEmoji(emoji) {
  if (!emoji) throw 'Emoji not found!'
  let res = await fetch(`https://unicode-table.com/${emoji.codePointAt(0).toString(16)}`)
  if (!res.ok) throw res.statusText
  let html = await res.text()
  let { document } = new JSDOM(html).window
  let results = {
	  name: document.querySelector('td.symbol-title').textContent,
	  description: document.querySelector('meta[name="description"]').content,
	  unicode: document.querySelector('div.unicode-num > span.code').textContent,
	  images: []
  }
  let vendors = document.querySelectorAll('.emoji-device__item')
  for (let i = 0; i < vendors.length; i++) results.images.push({
	  index: i,
	  vendor: vendors[i].querySelector('span').textContent,
	  url: vendors[i].querySelector('img').src
  })
  return results
}

async function getEmojiV2(emoji) {
  if (!emoji) throw 'Emoji not found!'
  let res = await fetch(`https://emojipedia.org/${encodeURIComponent(emoji)}`, {
	  method: 'GET',
	  headers: {
		  'User-Agent': 'GoogleBot'
	  }
  })
  if (!res.ok) throw res.statusText()
  let html = await res.text()
  let { document } = new JSDOM(html).window
  let results = {
	  emoji: document.title.split(' ')[0],
	  name: document.title.slice(3),
	  description: document.querySelector('section.description > p').textContent,
	  unicode: `U+${emoji.codePointAt(0).toString(16).toUpperCase()}`,
	  images: [],
	  shortCodes: []
  }
  let vendors = document.querySelectorAll('.vendor-rollout-target')
  for (let i = 0; i < vendors.length; i++) results.images.push({
	  index: i,
	  vendor: vendors[i].querySelector('a').textContent.toLowerCase(),
	  url: vendors[i].querySelector('img').src
  })
  let shortCodes = document.querySelectorAll('span.shortcode')
  for (let i = 0; i < shortCodes.length; i++) results.shortCodes.push(shortCodes[i].textContent)
  return results
}

async function yt(url, quality, type, bitrate, server = 'en68') {
  let ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)?youtube(?:\-nocookie|)\.com\/(?:shorts\/)?(?:watch\?.*(?:|\&)v=|embed\/|v\/)?|youtu\.be\/)([-_0-9A-Za-z]{11})/
  if (!ytIdRegex.test(url)) throw 'Invalid URL'
  let ytId = ytIdRegex.exec(url)
  url = 'https://youtu.be/' + ytId[1]
  let res = await fetch(`https://www.y2mate.com/mates/${server}/analyze/ajax`, {
	  method: 'POST',
	  headers: {
		  'Accept': '*/*',
		  'Accept-Language': 'en-US,en;q=0.9',
		  'Content-Type': 'application/x-www-form-urlencoded'
	  },
	  body: new URLSearchParams(Object.entries({
		  url,
		  q_auto: 0,
		  ajax: 1
	  }))
  })
  let json = await res.json()
  let { document } = new JSDOM(json.result).window
  let tables = document.querySelectorAll('table')
  let table = tables[{ mp4: 0, mp3: 1 }[type] || 0]
  if (!table) throw 'Download link not found!'
  let list
  switch (type) {
    case 'mp4':
      list = Object.fromEntries([...table.querySelectorAll('tr')].map((v, i) => v.querySelector('td')).filter(v => v && !/\.3gp/i.test(v.innerHTML)).map(v => [v.innerHTML.match(/.*?(?=\()/)[0].trim(), v.parentElement.nextSibling.nextSibling.querySelectorAll('tr > td')[1].innerHTML]))
      break
    case 'mp3':
      list = {
		  '128kbps': table.querySelectorAll('tr > td')[1].innerHTML
      }
      break
    default:
      list = {}
  }
  let filesize = list[quality]
  let id = /var k__id = "(.*?)"/i.exec(document.body.innerHTML) || ['', '']
  let thumb = document.querySelector('img').src
  let title = document.querySelector('b').innerHTML
  let res2 = await fetch(`https://www.y2mate.com/mates/${server}/convert`, {
	  method: 'POST',
	  headers: {
		  'Accept': '*/*',
		  'Accept-Language': 'en-US,en;q=0.9',
		  'Content-Type': 'application/x-www-form-urlencoded'
	  },
	  body: new URLSearchParams(Object.entries({
		  type: 'youtube',
		  _id: id[1],
		  v_id: ytId[1],
		  ajax: '1',
		  token: '',
		  ftype: type,
		  fquality: bitrate
	  }))
  })
  let json2 = await res2.json()
  let KB = parseFloat(filesize) * (1000 * /MB$/i.test(filesize))
  if (!/<a.+?href="(.+?)"/i.exec(json2.result)) throw 'Download link not found!'
  return {
    dl_link: /<a.+?href="(.+?)"/i.exec(json2.result)[1],
    thumb,
    title,
    filesizeF: filesize,
    filesize: KB
  }
}

async function igstalk(username) {
	let res = await fetch(`https://www.picuki.com/profile/${encodeURI(username)}`, {
		method: 'GET',
		headers: {
			'User-Agent': 'GoogleBot'
		}
	})
	if (!res.ok) throw res.statusText
	let html = await res.text()
	let $ = cheerio.load(html)
	return {
		full_name: $('.wrapper').find('div.profile-header > div.content.clearfix > div.profile-info > div.profile-name > h2.profile-name-bottom').text(),
		username: $('.wrapper').find('div.profile-header > div.content.clearfix > div.profile-info > div.profile-name > h1.profile-name-top').text(),
		biodata: $('.wrapper').find('div.profile-header > div > div.profile-description').text().trim(),
		followers: $('.wrapper').find('div:nth-child(2) > div > div.content-title > span:nth-child(4) > span').text(),
		following: $('.wrapper').find('div:nth-child(2) > div > div.content-title > span:nth-child(5) > span').text(),
		posts: $('.wrapper').find('div:nth-child(2) > div > div.content-title > span:nth-child(3) > span').text(),
		avatar: $('.wrapper').find('div.profile-header > div.content.clearfix > div.profile-info > div.profile-avatar > img').attr('src'),
		url: `https://www.instagram.com/${encodeURI(username)}`
	}
}

async function tiktokstalk(username) {
	let res = await fetch(`https://urlebird.com/user/${encodeURI(username)}/`, {
		method: 'GET',
		headers: {
			'User-Agent': 'GoogleBot'
		}
	})
	if (!res.ok) throw res.statusText
	let html = await res.text()
	let $ = cheerio.load(html)
	return {
		full_name: $('.row').find('div.content > h5.text-dark').text(),
		username: $('.row').find('h1.user').text(),
		biodata: $('.row').find('div.content > p').text().trim(),
		followers: $('.row').find('div.row.text-center > div').eq(1).text().replace(/[a-z\s]/g, '').slice(2),
		following: $('.row').find('div.row.text-center > div').eq(2).text().replace(/[a-z\s]/g, '').slice(2),
		likes: $('.row').find('div.row.text-center > div').eq(0).text().slice(3),
		posts: $('div.col-md-12.text-center > div').length.toString(),
		avatar: $('.row').find('img.user-image').attr('src'),
		url: `https://www.tiktok.com/@${encodeURI(username.replace(/^@/g, ''))}`
	}
}

async function joox(query) {
	if (!query) throw 'Param cant be blank'
	let res = await fetch(`http://api.joox.com/web-fcgi-bin//web_search?lang=id&country=id&type=0&search_input=${query}&pn=1&sin=0&ein=29&_=${Math.floor(new Date / 1000)}`)
	if (!res.ok) throw res.statusText
	let data = await res.json()
	let index = []
	let results = []
	let ids = []
	data.itemlist.forEach(v => ids.push(v.songid))
	for (let i = 0; i < data.itemlist.length; i++) {
		let res2 = await fetch(`http://api.joox.com/web-fcgi-bin/web_get_songinfo?songid=${ids[i]}`, {
			method: 'GET',
			headers: {
				'Cookie': 'wmid=142420656; user_type=1; country=id; session_key=2a5d97d05dc8fe238150184eaf3519ad;',
				'User-Agent': 'GoogleBot'
			}
		})
		if (!res2.ok) throw res2.statusText
		let data2 = await res2.text()
		let json = JSON.parse(data2.split('MusicInfoCallback(')[1].split('\n)')[0])
		let { headers } = await fetch(json.mp3Url)
		results.push({
			title: json.msong,
			album: json.malbum,
			artist: json.msinger,
			publish: json.public_time,
			filesize: headers.get('Content-Length') * 1,
			thumb: json.imgSrc,
			audio: json.mp3Url
		})
	}
	return results
}

async function gdrive(url) {
  if (typeof url == 'undefined' || !/https?:\/\/drive\.google\.com\/file\/d\/(.*?)\/view/i.test(url)) throw 'Invalid URL'
  let res = await fetchV2(url)
  if (!res.ok()) throw res.statusText()
  let html = await res.content()
  let $ = cheerio.load(html)
  let id = url.match(/(file\/d\/|open\?id=)(.*?)(\/view|$)/si)[2]
  let urls = `https://drive.google.com/uc?id=${id}&authuser=0&export=download`
  let res2 = await fetch(urls)
  let { mime, ext } = await fromBuffer(await res2.buffer())
  return {
	  filename: $('div[tabindex="-1"]').eq(2).find('div').first().text(),
	  filetype: mime,
	  ext: ext.toUpperCase(),
	  filesize: res2.headers.get('Content-Length') * 1,
	  publish: $('div[tabindex="0"]').eq(27).find('div').eq(1).text(),
	  thumb: $('div[tabindex="0"]').eq(14).find('img').attr('src'),
	  url: urls
  }
}

async function mediafire(url) {
  if (typeof url == 'undefined' || !/https?:\/\/(www\.)?mediafire\.com/i.test(url)) throw 'Invalid URL'
  let res = await fetch(url)
  if (!res.ok) throw res.statusText
  let html = await res.text()
  let $ = cheerio.load(html)
  let intro = $('div.dl-info > div.intro')
  let li = $('div.dl-info > ul.details > li')
  let urls = $('#downloadButton').attr('href') || $('#download_link > a.retry').attr('href')
  if (!urls) throw 'Download link not found!'
  let { headers } = await fetch(urls)
  return {
	  filename: intro.find('div.filename').text(),
	  filetype: intro.find('div.filetype > span').eq(0).text(),
	  ext: intro.find('div.filetype > span').eq(1).text().replace(/[\W]/g, ''),
	  filesize: headers.get('Content-Length') * 1,
	  publish: li.eq(1).find('span').text(),
	  thumb: $('head > meta[property="og:image"]').attr('content'),
	  url: urls
  }
}

async function textpro(url, ...texts) {
  if (!/^(http(s)?:\/\/)?textpro\.me\/.+\.html$/i.test(url)) throw 'Invalid URL'
  texts = texts.filter(v => v)
  let res = await fetch(url, {
	  method: 'GET',
	  headers: {
		  'User-Agent': 'GoogleBot'
	  }
  })
  if (!res.ok) throw 'Effect not found!'
  let html = await res.text()
  let $ = cheerio.load(html)
  let params = [!!$('#text-0').length, !!$('#text-1').length, !!$('#text-2').length].filter(v => v)
  if (params.length > texts.length) throw `Requires ${params.length} text parameters!`
  let cookie = res.headers.get('set-cookie')
  let cookies = Object.entries({
	  __cfduid: parseCookie(cookie, '__cfduid'),
	  PHPSESSID: parseCookie(cookie, 'PHPSESSID')
  }).map(([name, value]) => `${name}=${value}`).join('; ')
  let form = new FormData()
  let token = $('input[name="token"]').val()
  for (let text of texts) form.append('text[]', text)
  form.append('submit', 'Go')
  form.append('token', token)
  form.append('build_server', 'https://textpro.me')
  form.append('build_server_id', 1)
  let res2 = await fetch(url, {
	  method: 'POST',
	  headers: {
		  'Accept': '*/*',
		  'Accept-Language': 'en-US,en;q=0.9',
		  'User-Agent': 'GoogleBot',
		  'Cookie': cookies,
		  ...form.getHeaders()
	  },
	  body: form.getBuffer()
  })
  let html2 = await res2.text()
  let $$ = cheerio.load(html2)
  let token2 = $$('#form_value').eq(0).text()
  if (!token2) throw 'Token is not acceptable!'
  else token2 = JSON.parse(token2)
  let body = Object.keys(token2).map((key) => {
	  let vals = token2[key]
      let keys = encodeURIComponent(key + (vals instanceof Array ? '[]' : ''))
      if (!(vals instanceof Array)) vals = [vals]
      let out = []
      for (let valq of vals) out.push(`${keys}=${encodeURIComponent(valq)}`)
      return out.join('&')
  })
  let res3 = await fetch(`https://textpro.me/effect/create-image?${body.join('&')}`, {
	  method: 'GET',
	  headers: {
		  'Accept': '*/*',
		  'Accept-Language': 'en-US,en;q=0.9',
		  'User-Agent': 'GoogleBot',
		  'Cookie': cookies
	  }
  })
  let json = await res3.json()
  if (!json.fullsize_image) return json
  return 'https://textpro.me' + json.fullsize_image
}

async function photooxy(url, ...texts) {
  if (!/^(http(s)?:\/\/)?photooxy\.com\/.+\.html$/i.test(url)) throw 'Invalid URL'
  texts = texts.filter(v => v)
  let res = await fetch(url, {
	  method: 'GET',
	  headers: {
		  'User-Agent': 'GoogleBot'
	  }
  })
  if (!res.ok) throw 'Effect not found!'
  let html = await res.text()
  let $ = cheerio.load(html)
  let params = [!!$('#text-0').length, !!$('#text-1').length, !!$('#text-2').length].filter(v => v)
  if (params.length > texts.length) throw `${params.length} text parameters required!`
  let cookie = res.headers.get('set-cookie')
  let cookies = Object.entries({
	  __cfduid: parseCookie(cookie, '__cfduid'),
	  PHPSESSID: parseCookie(cookie, 'PHPSESSID')
  }).map(([name, value]) => `${name}=${value}`).join('; ')
  let form = new FormData()
  let token = $('input[name="token"]').val()
  for (let text of texts) form.append('text[]', text)
  form.append('submit', 'GO')
  form.append('token', token)
  form.append('build_server', 'https://e2.yotools.net')
  form.append('build_server_id', 1)
  let res2 = await fetch(url, {
	  method: 'POST',
	  headers: {
		  'Accept': '*/*',
		  'Accept-Language': 'en-US,en;q=0.9',
		  'User-Agent': 'GoogleBot',
		  'Cookie': cookies,
		  ...form.getHeaders()
	  },
	  body: form.getBuffer()
  })
  let html2 = await res2.text()
  let $$ = cheerio.load(html2)
  let token2 = $$('#form_value').text()
  if (!token2) throw 'Token is not acceptable!'
  else token2 = JSON.parse(token2)
  let body = Object.keys(token2).map((key) => {
	  let vals = token2[key]
      let keys = encodeURIComponent(key + (vals instanceof Array ? '[]' : ''))
      if (!(vals instanceof Array)) vals = [vals]
      let out = []
      for (let valq of vals) out.push(`${keys}=${encodeURIComponent(valq)}`)
      return out.join('&')
  })
  let res3 = await fetch(`https://photooxy.com/effect/create-image?${body.join('&')}`, {
	  method: 'GET',
	  headers: {
		  'Accept': '*/*',
		  'Accept-Language': 'en-US,en;q=0.9',
		  'User-Agent': 'GoogleBot',
		  'Cookie': cookies
	  }
  })
  let json = await res3.json()
  if (!json.image) return json
  return 'https://e2.yotools.net' + json.image
}

async function ephoto360(url, ...texts) {
  if (!/^(http(s)?:\/\/)?en\.ephoto360\.com\/.+\.html$/i.test(url)) throw 'Invalid URL'
  texts = texts.filter(v => v)
  let res = await fetch(url, {
	  method: 'GET',
	  headers: {
		  'User-Agent': 'GoogleBot'
	  }
  })
  if (!res.ok) throw 'Effect not found!'
  let html = await res.text()
  let $ = cheerio.load(html)
  let params = [!!$('#text-0').length, !!$('#text-1').length, !!$('#text-2').length].filter(v => v)
  if (params.length > texts.length) throw `${params.length} text parameters required!`
  let cookie = res.headers.get('set-cookie')
  let cookies = Object.entries({
	  __cfduid: parseCookie(cookie, '__cfduid'),
	  PHPSESSID: parseCookie(cookie, 'PHPSESSID')
  }).map(([name, value]) => `${name}=${value}`).join('; ')
  let form = new FormData()
  let token = $('input[name="token"]').val()
  for (let text of texts) form.append('text[]', text)
  form.append('submit', 'GO')
  form.append('token', token)
  form.append('build_server', 'https://e1.yotools.net')
  form.append('build_server_id', 2)
  let res2 = await fetch(url, {
	  method: 'POST',
	  headers: {
		  'Accept': '*/*',
		  'Accept-Language': 'en-US,en;q=0.9',
		  'User-Agent': 'GoogleBot',
		  'Cookie': cookies,
		  ...form.getHeaders()
	  },
	  body: form.getBuffer()
  })
  let html2 = await res2.text()
  let $$ = cheerio.load(html2)
  let token2 = $$('#form_value_input').val()
  if (!token2) throw 'Token is not acceptable!'
  else token2 = JSON.parse(token2)
  let body = Object.keys(token2).map((key) => {
	  let vals = token2[key]
      let keys = encodeURIComponent(key + (vals instanceof Array ? '[]' : ''))
      if (!(vals instanceof Array)) vals = [vals]
      let out = []
      for (let valq of vals) out.push(`${keys}=${encodeURIComponent(valq)}`)
      return out.join('&')
  })
  let res3 = await fetch(`https://en.ephoto360.com/effect/create-image?${body.join('&')}`, {
	  method: 'GET',
	  headers: {
		  'Accept': '*/*',
		  'Accept-Language': 'en-US,en;q=0.9',
		  'User-Agent': 'GoogleBot',
		  'Cookie': cookies
	  }
  })
  let json = await res3.json()
  if (!json.image) return json
  return 'https://e1.yotools.net' + json.image
}

async function google(query) {
	if (!query) throw 'Param cant be blank'
	let res = await fetchV2(`https://www.google.com/search?q=${encodeURIComponent(query)}`)
	if (!res.ok()) throw res.statusText()
	let html = await res.content()
	let $ = cheerio.load(html)
	let titles = []
	let links = []
	let snippets = []
	let results = []
	$('.yuRUbf > a > h3').each(function(i, elem) {
		titles[i] = $(elem).text()
	})
	$('.yuRUbf > a').each(function(i, elem) {
		links[i] = $(elem).attr('href')
	})
	$('.g .VwiC3b').each(function(i, elem) {
		snippets[i] = $(elem).text()
	})
	for (let i = 0; i < titles.length; i++) {
		if (titles[i]) results.push({
			index: i,
			title: titles[i],
			link: links[i],
			snippet: snippets[i] || '...'
		})
	}
	if (!results[0] || !titles[0]) throw 'Content not found!'
	return results
}

async function lyrics(query) {
	if (!query) throw 'Param cant be blank'
	let res = await fetch(`https://www.musixmatch.com/search/${encodeURIComponent(query)}`)
	let html = await res.text()
    let $ = cheerio.load(html)
    let results = []
    $('#search-all-results > div.main-panel > div:nth-child(2) > div.box-content > div > ul.tracks.list > li.showArtist.showCoverart').each(function() {
        let el = a = $(this).find('meta[itemprop="url"]').attr('content').trim()
        if (el) {
            results.push({
                title: $(this).find('.media-card-title > a > span').text().trim(),
                author: $(this).find('.artist-field > span > a.artist').text().trim(),
				link: 'https://www.musixmatch.com' + el
            })
        }
    })
    if (results.length == 0) return { message: 'Lyrics not found!' }
	let { link, title, author } = results[0]
	let res2 = await fetch(link)
	let html2 = await res2.text()
    let $$ = cheerio.load(html2)
	let lyrics = $$('p.mxm-lyrics__content > span.lyrics__content__ok').map((_, el) => $$(el).text().trim()).toArray().filter(v => v).join('\n')
    return {
        title,
        author,
        lyrics,
        link
    }
}

async function chord(query) {
	if (!query) throw 'Param cant be blank'
    let res = await fetch(`https://www.gitagram.com/?s=${encodeURIComponent(query)}`)
	let html = await res.text()
    let $ = cheerio.load(html)
    let url = $('table.table > tbody > tr').eq(0).find('td').eq(0).find('a').eq(0).attr('href')
    if (!url) return { message: 'Chords not found!' }
    let res2 = await fetch(url)
	let html2 = await res2.text()
    let $$ = cheerio.load(html2)
    let artist = $$('div.hcontent').find('div > a > span.subtitle').text().split('. ')[1]
    let artistUrl = $$('div.hcontent').find('div > a').attr('href')
    let title = $$('div.hcontent').find('h1.title').text().trim()
    let chord = $$('div.content > pre').text().trim()
    return {
		title,
        artist,
        artistUrl,
        chord,
		link: res2.url
    }
}

async function wikipedia(query) {
	if (!query) throw 'Param cant be blank'
	let res = await fetch(`https://id.wikipedia.org/wiki/${encodeURIComponent(query)}`)
	let html = await res.text()
	if (!res.ok) {
		res = await fetch(`https://id.wikipedia.org/w/index.php?title=Istimewa:Pencarian&search=${encodeURIComponent(query)}&fulltext=1&ns0=1`)
		if (!res.ok) throw res.statusText
		let before_html = await res.text()
		let $ = cheerio.load(before_html)
		let results = []
		$('ul.mw-search-results > li.mw-search-result').each(function() {
			let a
			let links = (a = $(this).find('div.mw-search-result-heading > a[href]').attr('href')) == null || !a ? '' : a.trim()
			if (links) results.push(encodeURI(links))
		})
	    let res2 = await fetch(`https://id.wikipedia.org/${results[0]}`)
		if (!res.ok) throw res.statusText
		html = await res2.text()
	}
    let $ = cheerio.load(html)
    let content = []
    let end = false
    let start = false
    $('#mw-content-text > div.mw-parser-output').children().map(function() {
		if (/p|h[2-4]|div/i.test(this.name) && !end) {
            let text = ''
            let h = /h[2-4]/i.test(this.name)
            let div = /div/i.test(this.name)
            let el = $(this)
            if (h && /referen|Примечания|Notes_et_références/i.test(el.find('span.mw-headline').attr('id'))) return (end = true)
            let math = $(this).find('span.mwe-math-element')
            if (math.length) math.replaceWith($(`<span>${math.text().trim().replace(/(.*displaystyle.*|\\n)/, '')}</span>`))
            if (div && el.hasClass('thumb') && el.find('div.thumbinner > a > img[src]').length) text = 'https:' + el.find('div.thumbinner > a > img[src]').attr('src')
            else if (div && el.find('div > ol > li[id]').length) {
                el.find('div > ol > li[id]').each(function() {
					text += $(this).text().trim() + '\n'
                })
            }
            else text = el.text().trim()
            if (!start && this.name === 'p' && !end && text) start = true
            if (text && start && !el.find('div > ul > li').length) content.push((h ? '\n' : '') + text)
        }
        return true
    })
    return content.join('\n\n')
}

async function kbbi(query) {
	if (!query) throw 'Param cant be blank'
    let res = await fetch(`https://kbbi.kemdikbud.go.id/entri/${encodeURIComponent(query)}`)
	if (!res.ok) throw res.statusText
	let html = await res.text()
    let $ = cheerio.load(html)
    let isExist = !/tidak ditemukan/i.test($('body > div.container.body-content > h4[style="color:red"]').text())
    if (!isExist) return new Array()
    let results = []
    let isContent = false
    let lastTitle
    $('body > div.container.body-content').children().each((_, el) => {
        let tag = el.tagName
        let elem = $(el)
        if (tag === 'hr') isContent = !isContent && !Object.keys(results).length
        if (tag === 'h2' && isContent) {
            let index = elem.find('sup').text().trim()
            let title = elem.text().trim()
            results.push({
                index: parseInt(index),
                title,
                means: []
            })
            lastTitle = title
        }
        if ((tag === 'ol' || tag === 'ul') && isContent && lastTitle) {
            elem.find('li').each((_, el) => {
                let li = $(el).text().trim()
                let index = results.findIndex(({ title }) => title === lastTitle)
                if (index < -1) results[index].means.push(li)
                else console.log(li, lastTitle)
            })
            lastTitle = ''
        }
    })
    return results
}

async function searchRecipes(query) {
	if (!query) throw 'Param cant be blank'
	let res = await fetch(`https://www.masakapahariini.com/?s=${encodeURIComponent(query)}`)
	if (!res.ok) throw res.statusText
	let html = await res.text()
	let $ = cheerio.load(html)
    let recipes = []
    $('div.row > div.col-12').each(function(i, e) {
		recipes.push({
			title: $(e).find('h3').text().trim(),
			thumb: $(e).find('img').attr('data-src'),
			key: $(e).find('h3 > a').attr('href') ? $(e).find('h3 > a').attr('href').split('/')[4] : '',
			times: $(e).find('div.flex-wrap > a').eq(0).text().trim(),
			calories: $(e).find('div.flex-wrap > a').length == 3 ? $(e).find('div.flex-wrap > a').eq(1).text().trim() : '',
			difficulty: $(e).find('div.flex-wrap > a').eq(parseInt($(e).find('div.flex-wrap > a').length == 3 ? 2 : 1)).text().trim()
		})
	})
	let { thumb, key, times, calories, difficulty } = pickRandom(recipes.filter(v => v.key && v.times && v.difficulty)) || {}
	let res2 = await fetch(`https://www.masakapahariini.com/resep/${key}`)
	if (!res2.ok) throw res2.statusText
	let html2 = await res2.text()
	let $$ = cheerio.load(html2)
	let ingredients = []
	let steps = []
	$$('div._recipe-ingredients > div.d-flex').each(function(i, e) {
		let ingredient = [$$(e).find('div.part').text().trim() || '1', $$(e).find('div.item').text()]
		ingredients.push(ingredient.map(v => v.replace(/\s+/g, ' ').trim()).join(' '))
	})
	$$('div._recipe-steps > div.step.d-flex').each(function(i, e) {
		let step = $$(e).find('div.content.ps-0 > p').text()
		steps.push(step.replace(/\s+/g, ' ').trim())
	})
	return {
		title: $$('header._section-title > h1').text().trim(),
		thumb: $$('figure.entry-featured > div.image-wrapper > picture > img').attr('data-src') || thumb,
		author: {
			user: $$('div.author').text().split('|')[0].trim(),
			datePublished: $$('div.author').text().split('|')[1].trim()
		},
		servings: parseInt($$('div.mb-0.d-flex.align-items-center.me-8.fw-bold > div#portions-value').text()),
		times, calories, difficulty, ingredients, steps
	}
}

async function shortLink(url) {
  if (typeof url == 'undefined' || !isURL(url)) throw 'Invalid URL'
  let res = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURI(url)}`)
  if (!res.ok) throw res.statusText
  return await res.text()
}

async function shortBitly(url) {
  if (typeof url == 'undefined' || !isURL(url)) throw 'Invalid URL'
  let { headers } = await fetch('https://bitly.com')
  let cookie = headers.get('set-cookie')
  let cookies = Object.entries({
	  _xsrf: parseCookie(cookie, '_xsrf')
  }).map(([name, value]) => `${name}=${value}`).join('; ')
  let form = new URLSearchParams()
  form.append('url', url)
  let res = await fetch('https://bitly.com/data/anon_shorten', {
	  method: 'POST',
	  headers: {
		  'Content-Type': 'application/x-www-form-urlencoded',
		  'X-XSRFToken': parseCookie(cookie, '_xsrf'),
		  'Cookie': cookies,
		  'User-Agent': 'GoogleBot'
	  },
	  body: form
  })
  if (!res.ok) throw res.statusText
  let json = await res.json()
  if (!json.data.link) throw json
  return json.data.link
}

async function getAnimeInfo(img) {
	if (!(img instanceof Buffer)) throw 'Value must be a type of Buffer'
	let form = new FormData()
	let { ext } = await fromBuffer(img)
	if (!/png|jpe?g/i.test(ext)) throw 'Image must be a type of PNG, JPG, anda JPEG'
	form.append('image', img, 'anime.' + ext)
	let res = await fetchV2('https://api.trace.moe/search?cutBorders&', {
		method: 'POST',
		headers: form.getHeaders(),
		body: form.getBuffer()
	})
	if (!res.ok()) throw res.statusText()
	return await res.json()
}

let modes = {
  noob: [-3, 3,-3, 3, '+-', 15000, 50],
  easy: [-10, 10, -10, 10, '+-', 30000, 100],
  medium: [-40, 40, -20, 30, '*', 45000, 250],
  hard: [-100, 100, -70, 70, '/', 60000, 500],
  extreme: [-99999999, 99999999, -99999999, 99999999, '*/', 45000, 750],
  impossible: [-9999999999999, 999999999999, -999999999999, 999999999999, '*/+', 30000, 1000],
  impossible2: [-999999999999999999999, 99999999999999999999, -999999999999999, 999999999999999, '*/+-', 15000, 2500],
  pro: [-9999999999999999999999999999999999999, 999999999999999999999999999999999, -9999999999999999999, 99999999999999999, '*/+-', 10000, 5000]
} 

function genMath(mode) {
  if (!(mode in modes)) throw 'Mode type not found!'
  let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
  let a = randomInt(a1, a2)
  let b = randomInt(b1, b2)
  let op = pickRandom([...ops])
  let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
  if (op == '/') [a, result] = [result, a]
  let operators = {
	  '+': '+',
	  '-': '-',
	  '*': '×',
	  '/': '÷'
  }
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

async function spamsms(type, phone) {
	if (!type) type = pickRandom(['kredinesia', 'nutriclub', 'cairin'])
	if (!phone) throw 'Phone number is missing!'
    let res = new Response()
	switch (type) {
		case 'kredinesia':
		res = await fetch('https://api.kartuserba.com/appserver/v1/login/verificationCode', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Channel-Key': 'GOOGLEPLAY',
				'User-Agent': 'okhttp/3.11.0'
			},
			body: JSON.stringify({
				code: 0,
				distinctId: 'df857a37-421b-4a4f-ac61-6ed0e272537b',
				frequency: 0,
				phone: phone.replace(/^(0|6[0-9])/g, '').replace(/[-+<>@]/g, '').replace(/[\W]+/g, '').trim()
			})
		})
		break
		case 'nutriclub':
		phone = phone.replace(/^6[0-9]/g, '0').replace(/[-+<>@]/g, '').replace(/[\W]+/g, '').trim()
		res = await fetch(`https://www.nutriclub.co.id/otp-login/?phone=${phone}&old_phone=${phone}`, {
			method: 'POST',
			headers: {
				'User-Agent': 'GoogleBot'
			}
		})
		case 'cairin':
		let form = new URLSearchParams()
		form.append('type', 'registry')
		form.append('fileName', '6f8c3b90c845f09ff1bfe714a30aede8')
		form.append('phone', phone.replace(/^6[0-9]/g, '0').replace(/[-+<>@]/g, '').replace(/[\W]+/g, '').trim())
		form.append('haveImageCode', '0')
		form.append('imageCode', null)
		form.append('userImei', null)
		form.append('verifySend', null)
		res = await fetch('https://app.cairin.id/v1/app/sms/sendCaptcha', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'User-Agent': 'GoogleBot'
			},
			body: form
		})
		break
		default: throw 'Type is not availabe!'
	}
	if (!res.ok) throw res.statusText
	return await res.json()
}

async function spamcall(phone) {
	if (!phone) throw 'Phone number is missing!'
	let res = new Response()
	if (!res.ok) throw res.statusText
	return await res.json()
}
	
function encryptHtml(html, message) {

let ranFunc = randomString()
let object = randomString()
let object2 = randomString()
let object3 = randomString()
let object4 = randomString()
let object5 = randomString()
let source = `
// Encryption By RC047

document.write(${ranFunc}('${object + object2 + toBase64(object4 + toBase64(toBase64(reverseText(html))) + object5) + object3}'));

function ${ranFunc}(data) {
let tmp = data.split('${object}')[1].split('${object3}')[0];
let tmp2 = atob(tmp.slice(${object2.length}));
let tmp3 = atob(tmp2.replace(/(${object4})/g, '').replace(/(${object5})/g, ''));
let tmp4 = atob(tmp3);
let result = '';
for (let index = tmp4.length - 1; index >= 0; index--) result += tmp4[index]
  return result;
}
`
let data = toBase64(`eval(atob('${toBase64(source.trim())}'));`)
let result = `
<script type="text/javascript">
${message ? `<!-- ${message} -->\n<!--` : `<!--`}
eval(atob('${data}'));
// -->
</script>
`
  return result.trim()
}

function encryptScript(script, message) {

let ranFunc = randomString()
let object = randomString()
let object2 = randomString()
let object3 = randomString()
let object4 = randomString()
let object5 = randomString()
let source = `
// Encryption By RC047

eval(${ranFunc}('${object + object2 + toBase64(object4 + toBase64(toBase64(reverseText(script))) + object5) + object3}'));

function ${ranFunc}(data) {
let tmp = data.split('${object}')[1].split('${object3}')[0];
let tmp2 = atob(tmp.slice(${object2.length}));
let tmp3 = atob(tmp2.replace(/(${object4})/g, '').replace(/(${object5})/g, ''));
let tmp4 = atob(tmp3);
let result = '';
for (let index = tmp4.length - 1; index >= 0; index--) result += tmp4[index]
  return result;
}
`
let data = toBase64(`eval(atob('${toBase64(source.trim())}'));`)
let result = `
// ${message ? message : 'Use Strict'}

eval(atob('${data}'));
`
  return result.trim()
}

function toBinary(text) {

let result = ''
for (let i = 0; i < text.length; i++) result += text[i].charCodeAt(0).toString(2)
  return result
}

function toBase64(text) {
  return Buffer.from(text, 'utf-8').toString('base64')
}

function toHex(text) {
  return Buffer.from(text, 'utf-8').toString('hex')
}

function decodeString(text, encoding) {
if (!text) throw 'Param cant be blank'
let args = new Array(text)
if (encoding) args.push(encoding)
	return Buffer.from(...args).toString('utf-8')
}

function reverseText(text) {
let result = ''
for (let index = text.length - 1; index >= 0; index--) result += text[index]
  return result
}

function randomString(length1, length2) {

let len = length1 || 15
let lenn = length2 || 10
if (isNaN(len)) return 'The input must be a type of Number'
if (isNaN(lenn)) return 'The input must be a Number'
let str = '0123456789abcdefghijklmnopqrstuvwxyz'
let random = ''
let random2 = ''
for (let i = len; i > 0; i--) random += pickRandom(str)[pickRandom(['toLowerCase', 'toUpperCase'])]()
for (let i = lenn; i > 0; i--) random2 += pickRandom(str)[pickRandom(['toLowerCase', 'toUpperCase'])]()

   return random + random2
}

function escapeFull(data) {

let result = ''
for (let i = 0; i < data.length; i++) result += '%' + hexFromDec(data.charCodeAt(i))
 return result
}

function hexFromDec(num) {

if (num > 65535) return ('error!')
let first = Math.round(num / 4096 -.5)
let temp1 = num - first * 4096
let second = Math.round(temp1 / 256 -.5)
let temp2 = temp1 - second * 256
let third = Math.round(temp2 / 16 -.5)
let fourth = temp2 - third * 16
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

function running(img, duration = 10, fps = 60) {
  return new Promise((resolve, reject) => {
    let layers = [
      `color=s=512x512:d=${duration}:r=${fps}[bg]`,
      '[0:v]scale=-2:512[img]',
      `[bg][img]overlay=x='(w+h)*((n/${fps})*-1/${duration})+h'`
    ]
    let n = + new Date + 'run.jpg'
    let i = path.join(tmp, n)
    fs.writeFileSync(i, img)
    console.log(img)
    let o = path.join(tmp, n + '.mp4')
    let args = [
      '-y',
      '-i',
	  i,
      '-t',
	  duration.toString(),
      '-filter_complex',
	  layers.join(';'),
      '-pix_fmt',
	  'yuv420p',
      '-crf',
	  '18',
      o
    ]
    spawn('ffmpeg', args, { stdio: 'inherit' })
      .on('error', reject)
      .on('exit', async () => {
		  await setDelay(3000)
          await fs.unlinkSync(i)
          resolve(fs.readFileSync(o))
          return fs.unlinkSync(o)
      })
  })
}

function tahta(text, text2, text3) {
try {
	let fonts = path.join(__dirname + '/src/fonts/')
	let aesthetic = path.join(__dirname + '/src/images/')
	let tmp = path.join(__dirname + '/tmp/')

	return new Promise((resolve, reject) => {
    let img = path.join(aesthetic, `aesthetic_${Math.floor(Math.random() * 3)}.jpg`)
    let font = path.join(fonts, 'Roboto-Black.ttf')
    let w = 1024
    let h = w
    let s = w + 'x' + h
    let xF = `(${noise('X', 2, w, 1)}+${noise('Y', 1, h, 1)})/2+128`
    let yF = `((${pickRandom(['', '-'])}${45 * w / 2048}*${pickRandom(['sin', 'cos'])}(X/${w}*4*PI))+${noise('X', 5, w, 0.8)}+${noise('Y', 2, h, 1)})/1.7+128`
    let fsize = 320 / 2048 * w
    let lh = 1.5
    let format = ',format=rgb24'
    let layers = [
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

    let o = `harta_tahta_${Math.floor(Math.random() * 100)}.png`
    o = path.join(tmp, o)
    let args = [
      '-y',
      '-i',
	  img,
      '-filter_complex',
	  layers.join(';'),
      '-frames:v',
	  '1',
      o
    ]
    spawn('ffmpeg', args)
    .on('error', reject)
    .on('exit', async () => {
		await setDelay(3000)
		if (!fs.existsSync(o)) return reject('Creation failed!')
        else return resolve(fs.readFileSync(o))
    })
  })
} catch (e) {
	console.log(e)
	throw e.message ? e.message : e
	}
}

function noise(_var, depth = 4, s = 1024, freq) {
  let forms = []
  for (let i = 0; i < depth; i++) forms.push(
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

let zodiak = [
    ['Capricorn', new Date(1970, 0, 1)],
    ['Aquarius', new Date(1970, 0, 20)],
    ['Pisces', new Date(1970, 1, 19)],
    ['Aries', new Date(1970, 2, 21)],
    ['Taurus', new Date(1970, 3, 21)],
    ['Gemini', new Date(1970, 4, 21)],
    ['Cancer', new Date(1970, 5, 22)],
    ['Leo', new Date(1970, 6, 23)],
    ['Virgo', new Date(1970, 7, 23)],
    ['Libra', new Date(1970, 8, 23)],
    ['Scorpio', new Date(1970, 9, 23)],
    ['Sagittarius', new Date(1970, 10, 22)],
    ['Capricorn', new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
    let d = new Date(1970, month - 1, day)
    return zodiak.find(([_,_d]) => d >= _d)[0]
}

function textWrap(str, maxWidth) {
    let newLine = '\n'
    let done = false
    let result = ''
    while (str.length > maxWidth) {                 
        let found = false
        for (let i = maxWidth - 1; i >= 0; i--) {
            if (testWhite(str.charAt(i))) {
                result = result + [str.slice(0, i), newLine].join('')
                str = str.slice(i + 1)
                found = true
                break
            }
        }
        if (!found) {
            result += [str.slice(0, maxWidth), newLine].join('')
            str = str.slice(maxWidth)
        }
    }
    return (result + str)
}

function testWhite(x) {
    let white = new RegExp(/^\s$/);
    return white.test(x.charAt(0));
}

async function searchGempa() {
  let res = await fetch('https://www.bmkg.go.id/gempabumi/gempabumi-dirasakan.bmkg')
  if (!res.ok) throw res.statusText
  let html = await res.text()
  let $ = cheerio.load(html)
  let table = $('table.table-hover.table-striped')
  let result = {}
  for (let i = 0; i < table.length; i++) {
	  let span = $(table[i]).find('tbody')[0]
	  if (span) {
		  let data = $(span).find('tr')[0]
		  let kapan = $(data).find('td')[1]
		  let letak = $(data).find('td')[2]
		  let magnitudo = $(data).find('td')[3]
		  let kedalaman = $(data).find('td')[4]
		  let wilayah = $(data).find('td')[5]
		  result = {
			  waktu: $(kapan).text(),
			  lintang: $(letak).text().split(' ')[0],
			  bujur: $(letak).text().split(' ')[2],
			  magnitudo: $(magnitudo).text(),
			  kedalaman: $(kedalaman).text().replace(/\t/g, '').replace(/I/g, ''),
			  wilayah: $(wilayah).text().replace(/\t/g, '').replace(/I/g, '').replace('-', '').replace(/\r/g, '').split('\n')[0],
			  map: $('div.row > div > img').attr('src')
		  }
	  }
  }
  return result
}

async function getBuffer(url, options = {}) {
	try {
		let res = await axios({
			url,
			method: 'GET',
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1,
				'User-Agent': 'GoogleBot'
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(e)
	}
}

function tts(text, lang = 'id') {
  return new Promise((resolve, reject) => {
    try {
      let tts = gtts(lang)
      let filePath = path.join(__dirname + '/tmp/', (new Date * 1) + '.mp3')
      tts.save(filePath, text, () => {
          resolve(fs.readFileSync(filePath))
          fs.unlinkSync(filePath)
      })
    } catch (e) {
		reject(e)
	}
  })
}

async function stylizeText(text) {
    let res = await fetch(`http://qaz.wtf/u/convert.cgi?text=${encodeURIComponent(text)}`)
	if (!res.ok) throw res.statusText
    let html = await res.text()
    let { document } = new JSDOM(html).window
    let table = document.querySelector('table').children[0].children
    let obj = new Object()
    for (let tr of table) {
      let name = tr.querySelector('.aname').innerHTML
      let content = tr.children[1].textContent.replace(/^\n/, '').replace(/\n$/, '')
      obj[name + (obj[name] ? ' Reversed' : '')] = content
    }
  return obj
}

function arrayRegex(arrays, modifier = 'i') {
  if (!(arrays instanceof Array)) arrays = [arrays]
  arrays = arrays.filter(v => v)
  return new RegExp('(' + arrays.join('|') + ')', modifier)
}

function pickRandom(lists) {
  return lists[Math.floor(Math.random() * lists.length)]
}

function formatSize(length, options = { std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false }) {
  if (isNaN(length)) throw 'Value must be a type of Number'
  return sizeFormatter({
	  ...options,
	  render: (literal, symbol) => `${literal} ${symbol}B`
  })(length)
}

function formatDate(date) {
  return new Date(date).toLocaleDateString(global.config.locale, {
	  weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
  })
}

function parseUptime(ms) {

let hours = Math.floor(ms / (60 * 60))
let minutes = Math.floor(ms % (60 * 60) / 60)
let seconds = Math.floor(ms % 60)

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

function countDown(date) {
  let seconds = Math.floor((date / 1000) % 60)
  let minutes = Math.floor((date / (1000 * 60)) % 60)
  let hours = Math.floor((date / (1000 * 60 * 60)) % 24)
  let days = Math.floor(date / (1000 * 60 * 60 * 24))
  if (seconds < 1 && minutes < 1 && hours < 1 && days < 1) return 'Expired'
  return `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`
}

function parseCookie(cookie, query) {
	return cookie.includes(query + '=') ? cookie.split(query + '=')[1].split(';')[0] : ''
}

function setDelay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

function isNumber(value) {
	return !isNaN(value) && typeof value == 'number'
}

function isURL(url) {
	let isValid = false
	try {
		isValid = new URL(!/^(http(s)?:\/\/)?/i.test(url) ? ('https://' + url) : url)
	} catch {
		isValid = false
	}
	return /^(http(s)?:\/\/)?(\w+:?\w*@)?(\S+)(:\d+)?((?<=\.)\w+)+(\/([\w#!:.?+=&%@!\-/])*)?$/gi.test(url) || Boolean(isValid)
}

function isBase64(text) {
	return /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i.test(text)
}

function isHex(text) {
	return /^(0x)?[0-9a-f]+$/i.test(text)
}

function isBinary(text) {
	return /^[0-1]+$/i.test(text)
}

function capitalize(text) {
	return lodash.capitalize(text)
}

function replaceAll(str, find, replace) {
	return str.replace(new RegExp(find, 'g'), replace)
}

module.exports = { saveToMedia, getChatOpenAI, clearDir, fetchV2, saveFrom, uploadImage, uploadFile, uploadImgbb, ssweb, webp2mp4, webp2png, getEmoji, getEmojiV2, yt, yta(url, server = 'en68') { return yt(url, '128kbps', 'mp3', '128', server) }, ytv(url, server = 'en68') { return yt(url, '360p', 'mp4', '360', server) }, servers: ['id4', 'en60', 'en61', 'en68'], igstalk, tiktokstalk, joox, gdrive, mediafire, textpro, photooxy, ephoto360, google, lyrics, chord, wikipedia, kbbi, searchRecipes, shortLink, shortBitly, getAnimeInfo, genMath, modes, spamsms, spamcall, encryptHtml, encryptScript, escapeFull, getZodiac, toBase64, toHex, toBinary, decodeString, randomString, reverseText, stylizeText, tts, running, tahta, searchGempa, getBuffer, textWrap, arrayRegex, pickRandom, formatSize, formatDate, parseUptime, pad, clockString, countDown, parseCookie, setDelay, isNumber, isURL, isBase64, isHex, isBinary, capitalize, replaceAll }
