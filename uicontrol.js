const PostBox = document.getElementById("PostBox");
const postTitleEntry = document.getElementById("postTitleEntry");
const postBody = document.getElementById("postBody");
const postCreaterDiv = document.getElementById("postCreaterDiv")
const logInDiv = document.getElementById("logInDiv");
const signUpDiv= document.getElementById("signUpDiv");
const idLogIn = document.getElementById("idLogIn");
const passwordLogIn = document.getElementById("passwordLogIn");
const usernameSignUp = document.getElementById("usernameSignUp");
const passwordSignUp = document.getElementById("passwordSignUp");
const emailSignUp = document.getElementById("emailSignUp");
const loginChoose = document.getElementById("loginChoose");
const signupChoose = document.getElementById("signupChoose");
const passwordSignUpAgain = document.getElementById("passwordSignUpAgain");
const startDiv = document.getElementById("startDiv");
const dashBoard = document.getElementById("dashBoard");
const usernameBD= document.getElementById("usernameDB");
const idDB = document.getElementById("idDB");
const chooserDiv = document.getElementById("chooserDiv");
const logoDiv = document.getElementById("logoDiv");

let shp = 0;
function shpd() {
shp++;
if (shp==1) {
    passwordLogIn.type="text";
}else if (shp>1) {
    passwordLogIn.type="password";
    shp=0;
}
}
let shpo = 0;
function shpdsu() {
shpo++;
if (shpo==1) {
    passwordSignUp.type="text";
}else if (shpo>1) {
    passwordSignUp.type="password";
    shpo=0;
}
}
let startOption = "login";
function changeO(x) {
    startOption=x;
    updateOPT();
}
updateOPT();
async function updateOPT() {
    if (startOption=="login") {
        loginChoose.className="chooseButton_sel";
        signupChoose.className="chooseButton";
        logInDiv.style="display:flex";
        signUpDiv.style="display:none";
        //updateFrame();
    }else{
        signupChoose.className="chooseButton_sel";
        signUpDiv.style="display:flex";
        loginChoose.className="chooseButton";
        logInDiv.style="display:none";
        //updateFrame();
    }
}


