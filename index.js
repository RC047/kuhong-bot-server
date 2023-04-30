// Author: https://github.com/RC047
console.log('Starting...');
var express = require('express');
var app = express();
var util = require('util');
var fs = require('fs');
var fetch = require('node-fetch');
var cors = require('cors');
var secure = require('ssl-express-www');
var parser = require('body-parser');

var { encryptHtml, encryptScript, arrayRegex, toBase64 } = require('./lib/js/functions.js');
var user = require('./config.json');
var main = require('./main.js');
var PORT = process.env.PORT || 3000;

app.enable('trust proxy');
app.set('json spaces', 2);
app.use(cors());
app.use(secure);
app.use(express.static('public'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

// This API is only for AutoResponder for WA
// (https://play.google.com/store/apps/details?id=tkstudio.autoresponderforwa)
app.all('/', async (req, res, next) => {

if (req.method !== 'POST') return res.status(200).sendFile(__dirname + '/views/index.html');
if (!req.get('Authorization')) return res.status(400).json({ status: 400, message: 'Credentials not found!' });
var [type, value] = req.get('Authorization').split(' ')
var key = await toBase64(`APIKEY:${user.apikey.kuhong}`)
if (type !== 'Basic' && value !== key) return res.status(403).json({ status: 403, message: 'Apikey yang anda masukkan tidak valid! Silahkan kunjungi web utama untuk mendapatkan apikey yang valid' })
var appPackageName = req.body.appPackageName,
    messengerPackageName = req.body.messengerPackageName,
    isGroup = req.body.query.isGroup,
    senderMessage = util.format(req.body.query.message),
    groupName = isGroup ? req.body.query.sender : '',
    senderName = isGroup ? req.body.query.groupParticipant : req.body.query.sender,
    isTestMessage = req.body.query.isTestMessage;

try {
req.reply = (...message) => {
  var botName = req.get('BOT_NAME') || 'WhatsApp Bot'
  if (!message) message = new Array('');
  else {
     for (var i = -1; i < message.length; i++) {
          if (message[i]) console.info(`${botName}:\n${util.format(message[i])}`);
     }
  }
    return res.status(200).json({ status: res.statusCode, replies: message.map(v => new Object({ message: util.format(v) })) });
}
req.ignoreMessage = () => req.reply('');
req.battery = '%battery%';
req.time = '%hour_of_day%:%minute%:%second%';
req.date = '%day_of_week% %day_of_month_short% %month_name% %year%';
req.appVersion = '%app_version%';
req.receivedCount = '%received_count%';
req.replyCount = {
  day: '%reply_count_day%',
  contact: '%reply_count_contacts%',
  group: '%reply_count_groups%',
  all: '%reply_count_overall%'
}

var messageType = /^📷+(Foto|Image|Pictures?)?/gi.test(senderMessage) ? 'image' : /^🎥+(Vid(i|e)o)?/gi.test(senderMessage) ? 'video' : /^🎵+(Audio)?/gi.test(senderMessage) ? 'audio' : /^💟+(Stic?ker)?/gi.test(senderMessage) ? 'sticker' : 'text';
console.info(`${senderName}${isGroup ? ' (' + groupName + ')' : ''} [${messageType}]:\n${senderMessage}`);
if (messageType !== 'text') senderMessage = senderMessage.slice(3)
var usedPrefix = senderMessage.slice(0, 1) ? senderMessage.slice(0, 1) : '';
var command = senderMessage.slice(1).split(' ')[0] ? senderMessage.slice(1).split(' ')[0] : '';
var text = senderMessage.split(command + ' ')[1] ? senderMessage.split(command + ' ')[1] : '';

await main.handler(req, {
   appPackageName: appPackageName,
   messengerPackageName: messengerPackageName,
   isOwner: isTestMessage || new RegExp((req.get('OWNER_NUMBER') || '62895337278647').replace(/[-+<>@]/g, '').replace(/ +/g, '')).test(senderName.replace(/[-+<>@]/g, '').replace(/ +/g, '')),
   isPremium: isTestMessage || arrayRegex(user.premium).test(senderName.replace(/[-+<>@]/g, '').replace(/ +/g, '')),
   isGroup: isGroup,
   senderMessage: senderMessage,
   messageType: messageType,
   groupName: groupName,
   senderName: senderName,
   usedPrefix: usedPrefix,
   command: command.toLowerCase(),
   text: text.replace(/^</g, '').replace(/>$/g, '').replace(/^\[/g, '').replace(/]$/g, '')
});
} catch (e) {
  console.error('System Error:\n\n', e);
  }
});

app.get('/web_bot', async (req, res, next) => res.status(200).sendFile(__dirname + '/views/web_bot.html'));
fs.writeFileSync('./views/index.html', encryptHtml(fs.readFileSync('./views/index.html', { encoding: 'utf-8' }).replace('YOUR_APIKEY', user.apikey.kuhong)));
fs.writeFileSync('./views/web_bot.html', encryptHtml(fs.readFileSync('./views/web_bot.html', { encoding: 'utf-8' })));
fs.writeFileSync('./public/js/index.js', encryptScript(fs.readFileSync('./public/js/index.js', { encoding: 'utf-8' })));
fs.writeFileSync('./public/js/web_bot.js', encryptScript(fs.readFileSync('./public/js/web_bot.js', { encoding: 'utf-8' }).replace('YOUR_TOKEN', await toBase64(`APIKEY:${user.apikey.kuhong}`)));
fs.writeFileSync('./public/js/ads.js', encryptScript(fs.readFileSync('./public/js/ads.js', { encoding: 'utf-8' })));
fs.writeFileSync('./main.js', encryptScript(fs.readFileSync('./main.js', { encoding: 'utf-8' })));
fs.writeFileSync('./lib/js/functions.js', encryptScript(fs.readFileSync('./lib/js/functions.js', { encoding: 'utf-8' })));
app.use((req, res, next) => res.status(404).send(`<pre>Halaman <strong>${req.url}</strong> tidak dapat ditemukan disini...</pre>`));
app.listen(PORT, () => {
  console.info('Server running on port', PORT);
  setInterval(async () => {
    let res = await fetch('https://kuhong-bot-server.rc047.repl.co')
    if (!res.ok) console.log(`Server is down! Responded ${res.status} (${res.statusText})`)
    else await res.text()
  }, 60 * 1000); // Make server is always on
});
