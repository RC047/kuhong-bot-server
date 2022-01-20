window.setTimeout('runScripts();', 1);
window.setTimeout('setQuotes();', 1);

function runScripts() {
if (!('getBattery' in navigator)) return alert('Browser is not supported for this website :(');
navigator.getBattery().then(status => {
  var date = new Date();
  document.getElementById('status').textContent = date.getHours() > 21 ? 'Offline' : 'Online';
  document.getElementById('times').textContent = new Array(date.getHours(), date.getMinutes(), date.getSeconds()).join(':');
  document.getElementById('ip').textContent = fetchURI('https://api.ipify.org').data;
  document.getElementById('power').textContent = status.level * 100 + '%';
  document.getElementById('cookie').textContent = navigator.cookieEnabled ? 'Enabled' : 'Disabled';
  document.getElementById('platform').textContent = navigator.platform;
  document.getElementById('ping').textContent = date.getMilliseconds() + 'ms';
  });
window.setTimeout('runScripts();', 1);
}

function setQuotes() {
var json = fetchURI('https://kuhong-api.herokuapp.com/api/quotes?apikey=8RiU6O-yrLpgVep');
document.getElementById('quotes').textContent = json.data.result;
window.setTimeout('setQuotes();', 10000);
}
