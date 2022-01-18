window.setTimeout('runScript();', Math.floor(Math.random() * 5000));

function runScript() {
var div = document.querySelector('div[class=content]');
var date = new Date();
var times = new Array(date.getHours(), date.getMinutes(), date.getSeconds()).join(':');
div.innerHTML = '<h3>Server Bot sedang Online!<br>' + times + '<br><br><br>Chat dengan <a href="https://wa.me/62895337278647?text=!menu" target="_blank">Bot</a><br>Download <a href="DOWNLOAD_LINK" target="_blank">AutoResponder</a>';
window.setTimeout('runScript();', 1000);
}