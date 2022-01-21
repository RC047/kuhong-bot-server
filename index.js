console.log('Starting...');
var express = require('express');
var app = express();
var util = require('util');
var fs = require('fs');
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var cors = require('cors');
var secure = require('ssl-express-www');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;
var { saveToMedia, encryptHtml, encryptScript, pickRandom } = require('./lib/js/functions.js');
var user = require('./config.json');
var main = require('./main.js');

app.enable('trust proxy');
app.set('json spaces', 2);
app.use(cors());
app.use(secure);
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ parameterLimit: 100000, limit: '10mb', extended: true }));


app.all('/', async (req, res, next) => {

if (req.method.toUpperCase() !== 'POST') {
    var html = await fs.readFileSync('./index.html');
    var dev = await fs.readFileSync('./dev.html');
    var script = await fs.readFileSync('./public/js/index.js');
    var data = await (await fetch('https://gamedva.com/autoresponder-for-wa-mod?download&file=0')).text();
    var $ = cheerio.load(data);
    var apk = await (await fetch($('a[style=""]').attr('href'))).buffer();
    var dl_link = await saveToMedia(apk, { fileName: 'AutoResponder By RC047', ext: 'apk' });
    await fs.writeFileSync('./public/js/index.js', await encryptScript(script));
    var result = html.toString().replace('DOWNLOAD_LINK', dl_link);
    if (req.query.dev == 'true') result += dev.toString();
      return res.status(200).send(await encryptHtml(result, 'BANG LARI BANG ADA KANG COPAS!!!'));
    }
var simiMode = req.body.simi ? req.body.simi : req.query.simi,
    appPackageName = req.body.appPackageName,
    messengerPackageName = req.body.messengerPackageName,
    isWelcome = req.body.welcome ? req.body.welcome : req.query.welcome,
    isGroup = req.body.query.isGroup,
    senderMessage = util.format(req.body.query.message),
    groupName = isGroup ? req.body.query.sender : '',
    senderName = isGroup ? req.body.query.groupParticipant : req.body.query.sender,
    isTestMessage = req.body.query.isTestMessage;

try {
req.reply = reply;
req.isWelcome = isWelcome == 'true' ? true : false;
req.simiMode = simiMode == 'true' ? true : false;
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


var adsMessage = pickRandom(global.ads);
var isAds = Math.floor(Math.random() * 50) == Math.floor(Math.random() * 50) ? true : false;
var messageType = /^📷+(Foto|Image|Pictures?)?/gi.test(senderMessage) ? 'image' : /^🎥+(Vid(i|e)o)?/gi.test(senderMessage) ? 'video' : /^🎵+(Audio)?/gi.test(senderMessage) ? 'audio' : /^💟+(Stic?ker)?/gi.test(senderMessage) ? 'sticker' : 'text';
console.info(`${senderName}${isGroup ? ' (' + groupName + ')' : ''} [${messageType}]:\n${senderMessage}`);
if (messageType !== 'text') senderMessage = senderMessage.slice(3)
var usedPrefix = senderMessage.slice(0, 1) ? senderMessage.slice(0, 1) : '';
var command = senderMessage.slice(1).split(' ')[0] ? senderMessage.slice(1).split(' ')[0] : '';
var text = senderMessage.split(command + ' ')[1] ? senderMessage.split(command + ' ')[1] : '';

await main.handler(req, {
   appPackageName: appPackageName,
   messengerPackageName: messengerPackageName,
   isOwner: isTestMessage || user.owner,
   isPrems: isTestMessage || user.premium,
   isGroup: isGroup,
   senderMessage: senderMessage,
   messageType: messageType,
   groupName: groupName,
   senderName: senderName,
   usedPrefix: usedPrefix,
   command: command.toLowerCase(),
   text: text.replace(/^</g, '').replace(/>$/g, '').replace(/^\[/g, '').replace(/]$/g, '')
});

function reply(senderMessage, senderMessage2, senderMessage3, senderMessage4, senderMessage5) {
  var botName = req.query.name ? req.query.name : 'Kuhong Bot';
  if (!senderMessage) senderMessage = '';
  else console.info(`${botName}:\n${senderMessage}`);
  if (senderMessage && senderMessage2) console.log(`${botName}:\n${senderMessage2}`);
  if (senderMessage && senderMessage2 && senderMessage3) console.log(`${botName}:\n${senderMessage3}`);
  if (senderMessage && senderMessage2 && senderMessage3 && senderMessage4) console.log(`${botName}:\n${senderMessage4}`);
  if (senderMessage && senderMessage2 && senderMessage3 && senderMessage4 && senderMessage5) console.log(`${botName}:\n${senderMessage5}`);
  var senderMessages = new Array({ message: util.format(senderMessage) });
  if (isAds) {
     senderMessages = new Array({ message: util.format(adsMessage) }, { message: util.format(senderMessage) });
     if (senderMessage == '') senderMessages = new Array({ message: util.format(senderMessage) })
  }
  if (senderMessage && senderMessage2) senderMessages.push({ message: util.format(senderMessage2) });
  if (senderMessage && senderMessage2 && senderMessage3) senderMessages.push({ message: util.format(senderMessage3) });
  if (senderMessage && senderMessage2 && senderMessage3 && senderMessage4) senderMessages.push({ message: util.format(senderMessage4) });
  if (senderMessage && senderMessage2 && senderMessage3 && senderMessage4 && senderMessage5) senderMessages.push({ message: util.format(senderMessage5) });
    return res.status(200).json({ status: 200, replies: senderMessages });
  }
} catch (e) {
  console.error('SystemError:\n', e);
  }
});

app.use((req, res) => res.status(404).send(`<pre>Halaman <strong>${req.url}</strong> tidak dapat ditemukan disini...</pre>`));
app.listen(PORT, async() => console.info('Server running on port', PORT));

global.ads = [
'*「 WARNING 」*\n\nSepertinya Anda belum *Join*\nSilahkan join ke grup bot kami agar anda dapat lebih mudah menggunakan Bot kami:\nhttps://chat.whatsapp.com/HDOZX7OoFYK1bTwftkY5Si',
'*「 WARNING 」*\n\nSepertinya Anda belum melakukan *Donasi*\nSilahkan klik link dibawah ini untuk berdonasi:\nhttps://saweria.co/donate/RC047',
'*「 WARNING 」*\n\nSepertinya Anda belum membeli *Premium*\nSilahkan beli premium klik link dibawah ini agar dapat mengakses semua fitur Bot kami:\nhttps://wa.me/62895337278647?text=!premium'
]
