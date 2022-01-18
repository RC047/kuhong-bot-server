window.setTimeout('runScript();', Math.floor(Math.random() * 5000));

function runScript() {

getBattery(battery => {
 var div = document.querySelector('div[class=content]');
 if (!div) return alert('Something went wrong :/');
 var date = new Date();
 var html = `
<h2 class="title-1">Server Bot sedang Online!</h2>
<br><br>
<h4>
Time: ${[date.getHours(), date.getMinutes(), date.getSeconds()].join(':')}
<br>
Power: ${battery}%
<br>
Cookie: ${navigator.cookieEnabled ? 'Enable' : 'Disable'}
<br>
Platform: ${navigator.platform}
</h4>
<br><
<h2 class="title-2">Cara Connect ke Server Bot</h2>
<h4 class="tutorial">
ScreenShot: <a href="https://i.ibb.co/ZYHmL5h/Long-Screenshot-20211021-120906.png" target="_blank">Klik Disini</a>
<br>
Tutorial: <a href="https://f.top4top.io/m_2209cxa6n0.mp4" target="_blank">Klik Disini</a>
</h4>
<br>
<h2 class="title-3">Informasi</h2>
<h4 class="info">
Chat dengan Bot: <a href="https://wa.me/62895337278647?text=!menu" target="_blank">Klik Disini</a>
<br>
Join ke Grup Bot: <a href="https://chat.whatsapp.com/HDOZX7OoFYK1bTwftkY5Si" target="_blank">Klik Disini</a>
<br>
Donasi Sekarang: <a href="https://saweri.co/donate/RC047" target="_blank">Klik Disini</a>
<br>
AutoResponder (MOD): <a href="DOWNLOAD_LINK" target="_blank">Klik Disini</a>
</h4>
`.trim();
 div.innerHTML = html;
 window.setTimeout('runScript();', 1000);
 });
}

function getBattery(callback) {

navigator.getBattery()
 .then(status => {
 callback(status.level * 100);
 });
}
