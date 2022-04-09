firebaseConfig = {
	apiKey: "AIzaSyBaPvnzqor_4HfPZg6ayk30Tb1RpcMBWfo",
	authDomain: "test-66b58.firebaseapp.com",
	projectId: "test-66b58",
	storageBucket: "test-66b58.appspot.com",
	messagingSenderId: "39985206495",
	appId: "1:39985206495:web:c4200c42a6e7bad4da456a",
	measurementId: "G-G1RBDR6H1S",
};
firebase.initializeApp(firebaseConfig);
const ddbb = firebase.database().ref();

const pn = document.querySelector('#pn');
const pl = document.querySelector('#pl');
const del = document.querySelector('#del');
const wrong = document.querySelector('#wrong');
wrong.style.display='none';

function post(){
	let url1 = new URL(pl.value).searchParams;
	if(url1.get('gid')){
		let gid=url1.get('gid');
		if(url1.get('gname')){
			let gname=url1.get('gname');
			ddbb.child('posts').child('myanmar').child(pn.value).set({
				name:pn.value,
				link:pl.value,
				likes:{
					1:"YeaeThawe",
				},
			});
			alert('Created Successfully!');
		}else{
			wrong.style.display='block';
		}
	}else{
		wrong.style.display='block';
	}
}

function deletePost(){
	ddbb.child('posts').child('myanmar').child(del.value).set({});
	alert('deleted Successfully!');
}

pl.addEventListener('change',()=>{
	wrong.style.display='none';
});