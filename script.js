const body = document.querySelector('body');
const mycreate = document.querySelector('#mycreate');
const walletMenu = document.querySelector('#walletMenu');
const editProfile = document.querySelector('#editProfile');
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
const db = firebase.firestore();
const storage = firebase.storage();
var ImgName, ImgUrl;
var files = [];
var reader = new FileReader();
let url = location.href;
let paramaters = (new URL(url)).searchParams;
let o= paramaters.get("o");
if (o=='signup'){
  changeO("signup");
}else if(o=='login'){
  changeO("login");
}
var batch = db.batch();
let idget;
const dbRef = firebase.database().ref();
firebase.database().ref("id").child("id").get().then((snapshot) => {
  if (snapshot.exists()) {
    idget = snapshot.val();
	console.log(snapshot.val());
  } else {
    alert("No Internet Connection");
  }
}).catch((error) => {
  console.error(error);
});

let userdata = {};
async function getUserData(x) {
  dbRef.child("users").child(x).get().then((snapshot) => {
    if (snapshot.exists()) {
      userdata = snapshot.val();
    } else {
      console.warn("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}

let uif;
function setUser(name, email, pImg, pwd, uid) {
  uif = {
    name:name,
    email:email,
    pImg:pImg,
    pwd:pwd,
    uid:uid
  };
  return uif;
}

let currentPassword;
function SignUp() {
  if(usernameSignUp.value=='') {
    alert("Enter your username and try again.");
  }else{
    if (passwordSignUp.value==passwordSignUpAgain.value && passwordSignUp.value != '') {
      if (emailSignUp.value=='') {
        alert("Please enter your email and try again.");
      }else{
		if(idget){
			writeUserData(
			  ++idget,
			  usernameSignUp.value,
			  emailSignUp.value,
			  "img/defProfilePicture.jpg",
			  passwordSignUp.value,
			  idget
			  );
		  currentPassword=passwordSignUp.value,
		  alert("SignUp Successful");
		  alert(`Your UserId is ${idget}`);
		  LogInAuto();
		  newMailBox(idget);
		}else{
		location.reload();
		}
      }
    }else{
      alert("Your passwords didn't match.");
    }
  }
}
var un,em,pi,ps,uid;
function dashboard() {
  startDiv.style=`display:none;`;
  dashBoard.style=`display:flex;width:${window.innerWidth};`;
  let a = uif;
  un = a.name;
  em = a.email;
  pi = a.pImg;
  ps = a.pwd;
  uid = a.uid;
  profilePicture.src=pi;
  profilePicture.className="profilePicture";
  usernameBD.innerHTML=un;
  idDB.innerHTML=`<label class="uds">User ID : </label>`+uid;
  otherUsersDiv.src=`explorer.html?gid=${uid}&gname=1`;
  creatorDiv.src=`create.html?gid=${uid}&gname=${un}&gtitle=1`;
  creatorDiv.style=`height:700px;`;
  menu.style=`display:block`;
  mycreate.setAttribute('href',`create.html?gid=${uid}&gname=${un}&gtitle=1`);
  walletMenu.setAttribute('href',`https://gncwallet.netlify.app?id=${uid}&password=${ps}`);
}
function LogOut() {
  location.href="?logout=true";
}
async function LogIn() {
  if (idLogIn.value=='') {
    alert("Enter your user id and try again.")
  }else{
    getUserData(idLogIn.value);
    setUser(userdata.username, userdata.email, userdata.profile_picture, userdata.password, userdata.id);
    setTimeout(check, 1000);
  }
}
async function LogInAuto() {
  getUserData(idget);
  setTimeout(check2, 1000);
}
function check2() {
  if (currentPassword==userdata.password){
    setUser(userdata.username, userdata.email, userdata.profile_picture, userdata.password, userdata.id);
    setTimeout(dashboard, 500);
  }else{
    alert("Login Error");
  }
}
function check() {
  if (passwordLogIn.value==userdata.password){
    setUser(userdata.username, userdata.email, userdata.profile_picture, userdata.password, userdata.id);
    setTimeout(dashboard, 500);
  }else{
    alert("password didn't match.");
  }
}
function writeUserData(userId, name, email, imageUrl, pwd, oid) {
	firebase.database().ref('id').set({id:userId});
	firebase.database().ref('users/' + userId).set({
	  username: name,
	  email: email,
	  profile_picture : imageUrl,
	  password : pwd,
	  id:oid,
	  wallet:{
		  coin:{
			bal:0
		  }
	  }
	});
}
function newMailBox(userId){
  firebase.database().ref('mails/' + userId).set({
    all:1,
    mails:{
      1:{
        body:"Our app is a social media app for gardener and farmers.",
        title:`Welcome to Garden Net.`,
        user:"Garden Net",
      }
    },
  });
}
editProfile.onclick=()=>{
	editProfileFunc();
}
let profileEditorStyle = `
position:absolute;
top:0;
left:0;
width:100vw;
height:100vh;
background-color:white;
overflow:hidden;
`;
let closeBtnStyle = `
background-color:red;
color:white;
padding:5px;
margin:5px;
border:0px;
border-radius:10px;
font-family:sans-serif;
fontsize:18px;
`;
let editDivStyle = `
display:flex;
flex-direction:column;
width:100vw;
justify-content:center;
`;
function editProfileFunc(){
	const editor = document.createElement('div');
	const closeBtn = document.createElement('button');
	const updateBtn = document.createElement('button');
	const editDiv = document.createElement('div');
	const usernameI = document.createElement('input');
	const emailI = document.createElement('input');
	const passwordI = document.createElement('input');
	const profilePictureI = document.createElement('input');
	const profilePictureImg = document.createElement('img');
	
	updateBtn.setAttribute('style', closeBtnStyle + "background-color:blue;font-size:22px;margin:20px;");
	updateBtn.textContent='Update';
	editor.setAttribute('style', profileEditorStyle);
	closeBtn.setAttribute('style', closeBtnStyle);
	editDiv.setAttribute('style', editDivStyle);
	closeBtn.textContent='close X'
	usernameI.value=userdata.username;
	emailI.value=userdata.email;
	passwordI.setAttribute('type', 'password');
	passwordI.value=userdata.password;
	profilePictureImg.setAttribute('src', userdata.profile_picture);
	profilePictureImg.setAttribute('style', 'width:25vw;height:25vw;');
	profilePictureI.value=userdata.profile_picture;
	editDiv.appendChild(usernameI);
	editDiv.appendChild(emailI);
	editDiv.appendChild(passwordI);
	editDiv.appendChild(profilePictureImg);
	editDiv.appendChild(profilePictureI);
	editDiv.appendChild(updateBtn);
	editor.appendChild(closeBtn);
	editor.appendChild(editDiv);
	body.appendChild(editor);
	
	closeBtn.onclick=()=>{
		body.removeChild(editor);
	}
	
	updateBtn.onclick=()=>{
		updateUserData(userdata.id);
	}
	function updateUserData(userID) {
		firebase.database().ref(`users/${userID}`).update({
			username:usernameI.value,
			password:passwordI.value,
			email:emailI.value,
			profile_picture:profilePictureI.value
	}).then(()=>{
		alert("Updated Successully.");
		body.removeChild(editor);
	}).catch(err=>{
		console.log(err);
		body.removeChild(editor);
	});
}
}
