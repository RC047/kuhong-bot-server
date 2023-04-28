if (!window.matchMedia('only screen and (max-width: 760px)').matches) $('.other-menu').css('left', '85%')
if (!('navigator' in window)) window.alert('Navigator dibutuhkan untuk menjalankan web ini!')
var date = new Date
var userID = Math.floor(Math.random() * 1000)
var username = 'Guest' + userID
var count = {
	reply: 0,
	daily: 0,
	received: 0
}
window.navigator.getBattery().then(battery => {


$(window).on('click', function(e) {

if (!e.target.matches('.other-menu-btn')) {
    var btn = $('.other-menu-content')
    if (btn.attr('class').includes('show')) return btn.removeClass('show')
    } else return false
})

$(window).on('keydown', function(e) {
    if (e.which == 13) return sendMessage()
})

$('.other-menu-btn').click(function() {
    return $('.other-menu-content').addClass('show')
})

$('.change-name').click(function() {

var name = prompt('Silahkan masukan nama baru:', username)
if ($.trim(name) == '') return false
else if (name == username) return false
else if (!/[\w]/i.test(name)) return alert('Nama tersebut tidak diizinkan!')
else if (name.length > 15) return alert('Nama terlalu panjang!')
console.info('Name updated to ' + name)
alert(`Nama telah diubah menjadi "${name}"`)
username = name

    return sendRequest(username)
})

$('.clear-chat').click(function() {

var clear = confirm('Anda yakin ingin membersihkan chat ini?')
if (clear) {
    var total = $('.messages > ul > li > p').length
    $('.messages > ul').empty()
    return setTimeout(() => alert(total + ' pesan chat telah dibersihkan!'), 1000)
    } else return false
})

$('.send').click(function() {
    return sendMessage()
})

$('.send-file').click(function() {
    return alert('Fitur ini akan segera datang :D')
})

window.setTimeout(function() {

$('.messages').animate({ scrollTop: $('.messages > ul').height() }, 'fast')
    console.log('Logged as ' + username)
    return sendRequest(username)
}, 1)

function sendMessage() {

var message = $('input[type=text]').val()
if ($.trim(message) == '') return false
$('<li class="you"><img src="https://i.ibb.co/3ThyTTQ/avatar-contact.png"></img><p>' + message.replaceTags() + '</p><div class="date"></div></li>').appendTo($('.messages > ul'))
$('input[type=text]').val(null)
$('.messages').animate({ scrollTop: $('.messages > ul').height() }, 'fast')
$.ajax({
    url: 'https://api.countapi.xyz/hit/kuhong-bot-received',
    method: 'GET',
    dataType: 'json'
})
.done(function(data) {
    count.received = data.value
})
.fail(function(err) {
    console.log(err)
    count.received = 0
})

    return sendRequest(message)
}

function sendRequest(message) {

$.ajax({
    url: 'https://kuhong-bot-server.rc047.repl.co',
    method: 'POST',
    dataType: 'json',
    headers: {
	'Authorization': 'APIKEY YOUR_APIKEY'
    	'Content-Type': 'application/json',
        'BOT_NAME': 'Kuhong Bot',
        'BOT_PREFIX': '!?/#$,.',
        'WELCOME_MESSAGE': true
    },
    data: JSON.stringify({
    	appPackageName: 'tkstudio.autoresponderforwa',
        messengerPackageName: 'com.android.chrome',
        query: {
            sender: username,
            message: message,
            isGroup: false,
            groupParticipant: '',
            ruleId: userID,
            isTestMessage: true
        }
    })
})
.done(function(data) {
    for (var i = data.replies.reverse().length; i > -1; i--) {
	 if (data.replies[i]) sendReply(data.replies[i].message)
    }
})
.fail(function(err) {
    console.log(err)
    return setTimeout(() => sendReply('Internal server error!'), 3000)
})
}

function sendReply(message) {

if ($.trim(message) == '') return false
$('<li class="bot"><img src="https://i.ibb.co/frhZmyZ/pp.jpg"></img><p>' + message.replaceTags() + '</p><div class="date"></div></li>').appendTo($('.messages > ul'))
$('.messages').animate({ scrollTop: $('.messages > ul').height() }, 'fast')
$.ajax({
    url: 'https://api.countapi.xyz/hit/kuhong-bot-replies',
    method: 'GET',
    dataType: 'json'
})
.done(function(data) {
    count.reply = data.value
})
.fail(function(err) {
    console.log(err)
    count.reply = 0
})
count.daily += 1
}

String.prototype.replaceTags = function() {

if (!this) return false
return this
        .replace(/(%hour_of_day%)/g, date.getHours())
        .replace(/(%minute%)/g, date.getMinutes())
        .replace(/(%second%)/g, date.getSeconds())
        .replace(/(%day_of_week%)/g, date.toLocaleString(navigator.language, { weekday: 'long' }))
        .replace(/(%day_of_month_short%)/g, date.getDate())
        .replace(/(%month_name%)/g, date.toLocaleString(navigator.language, { month: 'long' }))
        .replace(/(%year%)/g, date.getFullYear())
        .replace(/(%reply_count_day%)/g, count.daily)
        .replace(/(%reply_count_contacts%)/g, '-')
        .replace(/(%reply_count_groups%)/g, '-')
        .replace(/(%reply_count_overall%)/g, count.reply)
        .replace(/(%received_count%)/g, count.received)
        .replace(/(%app_version%)/g, /([0-9]+)\.([0-9]+)\.([0-9]+)/.exec(navigator.userAgent)[0])
        .replace(/(%battery%)/g, battery.level * 100)
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/[\n]/g, '<br>')
        .replace(/((?:(?:http|ftp)[s]*:\/\/)?[a-z0-9-%\/\&=?\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?)/g, (match) => '<a href="' + (/https?:\/\//.test(match) ? match : 'https://' + match) + '">' + match + '</a>')
        .replace(/(```)+([「\w\s!?/#$@()<>^\-,.」])+(```)/g, (match) => '<a class="monospace">' + match.replace(/(```)/g, '') + '</a>')
        .replace(/\*+([「\w\s!?/#@$()<>^\-,.」])+\*/g, (match) => '<strong>' + match.replace(/\*/g, '') + '</strong>')
        .replace(/_+([「\w\s!?/#@$()<>^\-,.」])+_/g, (match) => '<var>' + match.replace(/_/g, '') + '</var>')
        .replace(/~+([「\w\s!?/#@$()<>^\-,.」])+~/g, (match) => '<del>' + match.replace(/~/g, '') + '</del>')
}
})
