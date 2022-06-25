// Use Strict

var ip = null
window.setTimeout('runScripts();', 1000);
window.setTimeout('getFunFact();', 1000);
window.setTimeout('checkErorr();', 5000);


(async function() {
try {
  ip = await (await fetch('https://api.ipify.org')).text()
} catch (e) {
  ip = 'Not Located'
}
})()

function runScripts() {
navigator.getBattery().then(status => {
  var date = new Date();
  document.getElementById('status').textContent = date.getHours() > 21 ? 'Offline' : 'Online';
  document.getElementById('device').textContent = window.matchMedia('only screen and (max-width: 760px)').matches ? 'Mobiles' : 'Windows';
  document.getElementById('times').textContent = new Array(date.getHours(), date.getMinutes(), date.getSeconds()).join(':');
  document.getElementById('ip').textContent = ip;
  document.getElementById('power').textContent = Math.floor(status.level * 100) + '%' + (status.charging ? ' (Charging)' : '');
  document.getElementById('cookie').textContent = navigator.cookieEnabled ? 'Enabled' : 'Disabled';
  document.getElementById('platform').textContent = navigator.platform;
  document.getElementById('ping').textContent = Math.floor(Math.random() * 500) + 'ms';
  });
window.setTimeout('runScripts();', 1000);
}

function checkError() {
var status = document.getElementById('status').textContent;
if (status == 'Detecting...') {
    document.querySelector('html').remove();
    return document.write('<div style="text-align:center"><h1>Server is undergoing Maintenance</h1><br><h4>Report:<br><a href="https://wa.me/62895337278647" target="_blank">https://wa.me/62895337278647</a></h4></div>');
} else if (status == 'Offline') {
    document.querySelector('html').remove();
    return document.write('<h1 style="text-align:center">Server is Offline!</h1>');
    }
}

async function getFunFact() {
var res = await fetch('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/random/faktaunix.txt');
if (!res.ok) return false;
var text = await res.text();
var json = text.split('\n');
document.getElementById('fun-fact').textContent = json[Math.floor(Math.random() * json.length)];
window.setTimeout('getFunFact();', 25000);
}
