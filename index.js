console.log('Starting...');
var express = require('express');
var app = express();
var util = require('util');
var fs = require('fs');
var cheerio = require('cheerio');
var cors = require('cors');
var secure = require('ssl-express-www');
var bodyParser = require('body-parser');

var { encryptHtml, encryptScript, arrayRegex } = require('./lib/js/functions.js');
var user = require('./config.json');
var main = require('./main.js');
var PORT = process.env.PORT || 3000;


encryptScript(fs.readFileSync('./public/js/index.js').toString()).then(data => fs.writeFileSync('./public/js/index.js', data));
app.enable('trust proxy');
app.set('json spaces', 2);
app.use(cors());
app.use(secure);
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ parameterLimit: 100000, limit: '10mb', extended: true }));

app.all('/', async (req, res, next) => {

if (req.method !== 'POST') return res.status(200).send(await encryptHtml(await fs.readFileSync('./index.html').toString()));
var simiMode = req.body.simi ? req.body.simi : req.query.simi,
    appPackageName = req.body.appPackageName,
    messengerPackageName = req.body.messengerPackageName,
    isWelcome = req.body.welcome ? req.body.welcome : req.query.welcome,
    isGroup = req.body.query.isGroup,
    senderMessage = decodeURIComponent(req.body.query.message),
    groupName = isGroup ? req.body.query.sender : '',
    senderName = isGroup ? req.body.query.groupParticipant : req.body.query.sender,
    isTestMessage = req.body.query.isTestMessage;

try {
req.reply = (...message) => {
  var botName = req.query.name ? req.query.name : user.botName;
  if (!message) message = new Array('');
  else {
     for (var i = message.reverse().length; i > -1; i--) {
     if (message[i]) console.info(`${botName}:\n${util.format(message[i])}`);
     }
  }
    return res.status(200).json({ status: res.statusCode || false, replies: message.reverse().map(v => new Object({ message: util.format(v) })) });
}
req.ignoreMessage = () => req.reply('');
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

var messageType = /^📷+(Foto|Image|Pictures?)?/gi.test(senderMessage) ? 'image' : /^🎥+(Vid(i|e)o)?/gi.test(senderMessage) ? 'video' : /^🎵+(Audio)?/gi.test(senderMessage) ? 'audio' : /^💟+(Stic?ker)?/gi.test(senderMessage) ? 'sticker' : 'text';
console.info(`${senderName}${isGroup ? ' (' + groupName + ')' : ''} [${messageType}]:\n${senderMessage}`);
if (messageType !== 'text') senderMessage = senderMessage.slice(3)
var usedPrefix = senderMessage.slice(0, 1) ? senderMessage.slice(0, 1) : '';
var command = senderMessage.slice(1).split(' ')[0] ? senderMessage.slice(1).split(' ')[0] : '';
var text = senderMessage.split(command + ' ')[1] ? senderMessage.split(command + ' ')[1] : '';

await main.handler(req, {
   appPackageName: appPackageName,
   messengerPackageName: messengerPackageName,
   isOwner: isTestMessage || arrayRegex(user.owner).test(senderName),
   isPrems: isTestMessage || arrayRegex(user.premium).test(senderName),
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

app.use((req, res, next) => res.status(404).send(`<pre>Halaman <strong>${req.url}</strong> tidak dapat ditemukan disini...</pre>`));
app.listen(PORT, () => console.info('Server running on port', PORT));


// console.log(user)
