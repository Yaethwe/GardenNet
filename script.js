const viewport = document.getElementById("viewportDiv"),
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
let userID,country,userName;
const list = {
	app:"explore"
};
let url = location.href,
paramaters = new URL(url).searchParams;
let link = null;

function load(){
	while (viewport.firstChild) {
		viewport.removeChild(viewport.lastChild);
	}
	let db = list.list;
	for(i in list.list){
		let tl=0;
		let liked = false;
		const box = document.createElement('div');
		for(a in db[i].likes){
			if(a==userID){
				liked=true;
			}
			tl++;
		}
		//read the link of the post
		let LPU = new URL(db[i].link).searchParams;
		//load data from the post
		let CPD;
		ddbb.child('mails').child(LPU.get('gid')).child('mails').child(LPU.get('gname')).get().then(snapshot=>{
			if (snapshot.exists()){
				CPD=snapshot.val()
				if(liked){
					box.innerHTML=`
					<center>
						<label style='color:blue;font-family:sans-serif;font-size:20px;'>${CPD.name}</label>
						<div>
							<label>Author: ${CPD.user}</label><br>
							<div>
							${CPD.body}
							</div>
						</div>
						<div>
							<div>
							<img src='../img/like.png' width='30px' style='opacity:0.5;' title='already liked'><br><label>${tl}</label>
							</div>
						<div>
					</center><br><br>`;
				}else{
					box.innerHTML=`
					<center>
						<label style='color:blue;font-family:sans-serif;font-size:20px;'>${CPD.name}</label>
						<div>
							<label>Author: ${CPD.user}</label><br>
							<div>
							${CPD.body}
							</div>
						</div>
						<div>
							<div>
							<a onclick="likeTo('${db[i].name}')"><img src='../img/like.png' width='30px' title='click to like'></a><br><label>${tl}</label>
							</div>
						<div>
					</center><br><br>`;
				}
				box.style=`
					box-shadow:5px 5px 5px gray;
				`;
				viewport.appendChild(box);
			}else{
				console.log('1 post not found');
			}
		});
	}
}

function main(){
	if(paramaters.get("post")){
		link = paramaters.get("post");
		let res = JSON.parse(atob(link));
		userID = res.id;
		country = res.country;
		userName = res.name;
		reload();
	}
}

async function reload(){
	ddbb.child('posts').child(country).get().then(snapshot=>{
			if(snapshot.exists()){
				list.list = snapshot.val();
				load();
			}else{
				alert('Section not found');
			}
		}).catch(err=>{
			console.log(err);
			location.reload();
		});
}

function likeTo(name){
	ddbb.child('posts').child(country).child(name).child('likes').child(userID).set(userName);
	reload();
}


// the app start here
main();