const auth = new GardenNet('body');
let body = document.querySelector('body');
let grayText=`
font-family:sans-serif;
font-size:18px;
padding:5px;
margin:10px;
color:gray;
`;
auth.init();
auth.login();
const nav = document.querySelector('#nav');
const mainDiv = document.createElement('div');
let goToProfile = document.createElement('button');
goToProfile.style=btnStyle;
goToProfile.textContent="Profile";
mainDiv.appendChild(goToProfile);
nav.appendChild(mainDiv);

goToProfile.onclick=()=>{
    openProfile();
}

function openProfile(){
    const cover1 = document.createElement('div');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const uName1 = document.createElement('label');
    const userID1 = document.createElement('label');
    const email1 = document.createElement('label'); 
    const img1 = document.createElement('img');
    const exitBtn = document.createElement('button');
    img1.style=`
    display:flex;
    align-self:center;
    margin-top:20px;
    width:50px;
    `;
    img1.src=userdata.profile_picture;
    userID1.style=grayText;
    userID1.textContent='User ID : '+userdata.id;
    email1.style=grayText;
    email1.textContent='Email : '+userdata.email;
    div2.style=`
    display:flex;
    justify-content:flex-end;
    `;
    exitBtn.textContent="X";
    exitBtn.style=btnStyle+'background-color:red;';
    uName1.textContent=userdata.username;
    uName1.style=logolabelStyle;
    cover1.style=coverStyle;
    div1.style=loginDivStyle;
    div2.appendChild(exitBtn);
    div1.appendChild(div2);
    div1.appendChild(img1);
    div1.appendChild(uName1);
    div1.appendChild(userID1);
    div1.appendChild(email1);
    body.appendChild(cover1);
    body.appendChild(div1);
    exitBtn.onclick=()=>{
        body.removeChild(cover1);
        body.removeChild(div1);
    }
}