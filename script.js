function generatePair(){
const chars='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let code='';
for(let i=0;i<8;i++){
code+=chars[Math.floor(Math.random()*chars.length)];
}
document.getElementById('pairCode').innerText=code;
document.getElementById('result').style.display='block';
}
function copyCode(){
navigator.clipboard.writeText(document.getElementById('pairCode').innerText);
alert('Copied!');
}
