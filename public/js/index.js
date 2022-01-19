window.setTimeout('runScript();', Math.floor(Math.random() * 5000));

function runScript() {

getBattery(battery => {
 var body = document.querySelector('body');
 if (!body) return alert('Something went wrong :/');
 var date = new Date();
 var ip = fetchJson('https://api.ipify.org/?format=json')
 var quotes = fetchJson('https://kuhong-api.herokuapp.com/api/quotes?apikey=8RiU6O-yrLpgVep')
 var html = `
<fieldset class="main">
<legend style="text-align:center"><h2>Server sedang Online!</h2></legend>
<h4>
Time: ${[date.getHours(), date.getMinutes(), date.getSeconds()].join(':')}
<br>
IP Address: ${ip.ip}
<br>
Power: ${battery.level * 100}% ${battery.charging ? '(Charging)' : ''}
<br>
Cookie: ${navigator.cookieEnabled ? 'Enabled' : 'Disabled'}
<br>
Platform: ${navigator.platform}
</h4>
</fieldset>
<br><br>
<fieldset class="tutorial">
<legend style="text-align:center"><h2>Cara Connect ke Server</h2></legend>
<h4>
ScreenShot: <a href="https://i.ibb.co/ZYHmL5h/Long-Screenshot-20211021-120906.png" target="_blank">Klik Disini</a>
<br>
Tutorial: <a href="https://f.top4top.io/m_2209cxa6n0.mp4" target="_blank">Klik Disini</a>
<br>
AutoResponder (MOD): <a href="DOWNLOAD_LINK" target="_blank">Klik Disini</a>
</h4>
</fieldset>
<br><br>
<fieldset class="about">
<legend style="text-align:center"><h2>Tentang</h2></legend>
<h4>
Chat dengan Bot: <a href="https://wa.me/62895337278647?text=!menu" target="_blank">Klik Disini</a>
<br>
Join ke Grup Bot: <a href="https://chat.whatsapp.com/HDOZX7OoFYK1bTwftkY5Si" target="_blank">Klik Disini</a>
<br>
Donasi Sekarang: <a href="https://saweri.co/donate/RC047" target="_blank">Klik Disini</a>
</h4>
</fieldset>
<br><br><br>
<marquee>${quotes.result}</marquee>
`.trim();
 body.innerHTML = html;
 window.setTimeout('runScript();', 1000);
 });
}

function fetchJson(url, opts = { method: 'GET' }) {
var xhr = new XMLHttpRequest();
xhr.open(opts.method.toUpperCase(), url)
xhr.send();
var result = xhr.responseText ? xhr.responseText : xhr.response;
  return JSON.parse(result);
}


function getBattery(callback) {
navigator.getBattery()
.then(status => callback(status));
}
