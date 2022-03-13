const encryptBtn = document.querySelector('#encryptBtn');
const decryptBtn = document.querySelector('#decryptBtn');
const inputForEcrypt = document.querySelector('#inputForEcrypt');
const outPutEncrypted= document.querySelector('#outPutEncrypted');
//= document.querySelector('');

encryptBtn.onclick=()=>{
	let txt = inputForEcrypt.value;
	outPutEncrypted.value=encrypt(txt);
}
decryptBtn.onclick=()=>{
	let txt = inputForEcrypt.value;
	outPutEncrypted.value=decrypt(txt);
}

function encrypt(x){
	return btoa(x);
}
function decrypt(x){
	return atob(x);
}