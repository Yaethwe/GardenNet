var ImgName, ImgUrl;
var files = [];
var reader;
var title = document.querySelector('title');

const firebaseConfig = {
    apiKey: "AIzaSyBaPvnzqor_4HfPZg6ayk30Tb1RpcMBWfo",
    authDomain: "test-66b58.firebaseapp.com",
    projectId: "test-66b58",
    storageBucket: "test-66b58.appspot.com",
    messagingSenderId: "39985206495",
    appId: "1:39985206495:web:c4200c42a6e7bad4da456a",
    measurementId: "G-G1RBDR6H1S"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
//select button
document.getElementById('select').onclick = e =>{
	var input = document.createElement('input');
	input.type = 'file';
	input.onchange = e => {
		files = e.target.files;
		reader = new FileReader();
		reader.onload = () =>{
			document.getElementById('myimg').src = reader.result;
		}
		reader.readAsDataURL(files[0]);
		
	}
	input.click();
}
//upload button
document.getElementById('upload').onclick = e => {
	ImgName = document.getElementById('namebox').value;
	var uploadTask = storage.ref('Images/'+ImgName+'.png').put(files[0]);
	uploadTask.on('state_changed', function(snapshot){
		document.getElementById('UpProgress').innerHTML = "Uploaded-"+100+'%';
	},
	function(error){
		alert('error in saving image');
	},
	function(){
		uploadTask.snapshot.ref.getDownloadURL().then(function(url){
			ImgUrl = url;
			
			firebase.database().ref('Pictures/'+ImgName).set({
				name:ImgName,
				link:ImgUrl
			});
			alert('image added successfully');
			}
		);
	});
}

document.getElementById('import').onclick = e => {
	var ImagesName = document.querySelector('#namebox').value;
	firebase.database().ref('Pictures/'+ImagesName).on('value', function(snapshot){
		alert('image imported successfully');
		document.getElementById('myimg').src = snapshot.val().link;
		document.getElementById('addressbox').value=snapshot.val().link;
		title.textContent=ImagesName+' - ImageViewer';
	});
}













