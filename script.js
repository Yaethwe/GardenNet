// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
//const c1 =db.collection("chats").doc("c1");
//real time database

let idget = null;
const dbRef = firebase.database().ref();
dbRef.child("id").child("id").get().then((snapshot) => {
  if (snapshot.exists()) {
    idget = snapshot.val();
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
      //setUser(cud.username, cud.email, cud.profile_picture);
      //console.table(localPosts);
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


/*
function sent() {
    let mes = entry.value;
    c1.update({
        messages: firebase.firestore.FieldValue.arrayUnion(mes)
    });
}
*/
//writeUserData("001", "yeaethawe", "yt@yt.com", "none", 123456)
let currentPassword;
function SignUp() {
  if(usernameSignUp.value=='') {
    alert("Enter your username and try again.");
  }else{
    if (passwordSignUp.value==passwordSignUpAgain.value && passwordSignUp.value != '') {
      if (emailSignUp.value=='') {
        alert("Please enter your email and try again.");
      }else{
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
  usernameBD.innerHTML=un;
  idDB.innerHTML=`<label class="uds">User ID : </label>`+uid;
  localStorage.setItem("id",uif.uid);
  localStorage.setItem("pw",uif.pwd);
  autologin();
}
autologin();


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
      id:oid
    });
}

function autologin(){
  getUserData(parseInt(localStorage.getItem("id")));
  setTimeout(check3, 1000);
}

function check3() {
  if (parseInt(localStorage.getItem("id"))==userdata.password){
    setUser(userdata.username, userdata.email, userdata.profile_picture, userdata.password, userdata.id);
    setTimeout(dashboard, 1000);
  }else{
    console.error("Login Error");
  }
}

