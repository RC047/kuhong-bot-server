window.setTimeout('runScript();', Math.floor(Math.random() * 5000));

function runScript() {
 var div = document.querySelector('div[class=content]');
 if (!div) return alert('Something went wrong :/');
 var date = new Date();
 var times = new Array(date.getHours(), date.getMinutes(), date.getSeconds()).join(':');
 var dl_link = 'DOWNLOAD_LINK';
 div.innerHTML = `<h3>Server Bot sedang Online!<br>${times}<br><br><br>Chat dengan <a href="https://wa.me/62895337278647?text=!menu" target="_blank">Bot</a><br>Download <a href="${dl_link}" target="_blank">AutoResponder</a></h3>`;
 window.setTimeout('runScript();', 1000);
}
