// Use Strict
window.setTimeout('runScripts();', 1);
window.setTimeout('setFact();', 1);

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

function setFact() {
document.getElementById('fact').textContent = fetchURI('https://recoders-area.caliph.repl.co/api/fakta').data.result;
window.setTimeout('setFact();', 25000);
}
