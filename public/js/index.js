// Use Strict
window.setTimeout('runScripts();', 1);
window.setTimeout('getFunFact();', 1);
window.setTimeout('checkErorr();', 5000);


function runScripts() {
navigator.getBattery().then(status => {
  var date = new Date();
  document.getElementById('status').textContent = date.getHours() > 21 ? 'Offline' : 'Online';
  document.getElementById('device').textContent = window.matchMedia('only screen and (max-width: 760px)').matches ? 'Mobile' : 'Window';
  document.getElementById('times').textContent = new Array(date.getHours(), date.getMinutes(), date.getSeconds()).join(':');
  document.getElementById('ip').textContent = fetchURI('https://api.ipify.org').data;
  document.getElementById('power').textContent = Math.floor(status.level * 100) + '%';
  document.getElementById('cookie').textContent = navigator.cookieEnabled ? 'Enabled' : 'Disabled';
  document.getElementById('platform').textContent = navigator.platform;
  document.getElementById('ping').textContent = date.getMilliseconds() + 'ms';
  });
window.setTimeout('runScripts();', 1);
}

function checkError() {
var status = document.getElementById('status').textContent;
if (status == 'Detecting...') {
    document.querySelector('body').remove();
    return document.write('<div style="text-align:center"><h1>Server is undergoing Maintenance</h1><br><h4>Report:<br><a href="https://wa.me/62895337278647" target="_blank">https://wa.me/62895337278647</a></h4></div>');
} else if (status == 'Offline') {
    document.querySelector('body').remove();
    return document.write('<h1 style="text-align:center">Server is Offline!</h1>');
    }
}

function getFunFact() {
var json = fetchURI('https://recoders-area.caliph.repl.co/api/fakta');
var result = '';
if (json.status !== 200) result = 'Jangan lupa follow creator kita "RC047"!';
else result = json.data.result;
document.getElementById('fun-fact').textContent = result;
window.setTimeout('getFunFact();', 25000);
}
