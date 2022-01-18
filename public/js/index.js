window.setTimeout('runScript();', Math.floor(Math.random() * 5000));

function runScript() {
 var div = document.querySelector('div[class=content]');
 if (!div) return alert('Something went wrong :/');
 var date = new Date();
 var times = new Array(date.getHours(), date.getMinutes(), date.getSeconds()).join(':');
 var html = `
<h2 class="title">Server Bot sedang Online!</h2>
<h3 class="time">${times}</h3>
<br><br>
<h3>Cara Menyambungkan ke Server Bot</h3>
<h4>ScreenShot: <a href="https://i.ibb.co/ZYHmL5h/Long-Screenshot-20211021-120906.png" target="_blank">Klik Disini</a></h4>
<h4>Video Tutorial: <a href="https://f.top4top.io/m_2209cxa6n0.mp4" target="_blank">Klik Disini</a></h4>
<br>
<h4 class="contact">Chat dengan <a href="https://wa.me/62895337278647?text=!menu" target="_blank">Bot</a></h4>
<h4 class="download">Download <a href="DOWNLOAD_LINK" target="_blank">AutoResponder (MOD)</a></h4>
`.trim();
 div.innerHTML = html;
 window.setTimeout('runScript();', 1000);
}
