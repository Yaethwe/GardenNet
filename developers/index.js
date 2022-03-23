const body = document.querySelector('body');
const bodyDiv = document.querySelector('#bodyDiv');
const whiteBG = document.querySelector('.whiteBG');
const nav = document.querySelector('#nav');
const aside = document.querySelector('#aside');
const menu = document.querySelector('#menu');
const main = document.querySelector('#main');
const footer = document.querySelector('#footer');
const footer2 = document.querySelector('#footer2');
if(innerWidth<=600){
    bodyDiv.style=`flex-direction:column;`;
}
body.setAttribute('class','body');
body.setAttribute('style','');
let myWindow;
function openWin(url) {
  myWindow = window.open(url, "GardenNet", "width=200, height=100");
  myWindow.resizeTo(300, 600);
}

/*Light-Dark Mode Switch*/
var icon = document.getElementById('icon');

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    nav.style.backgroundColor='#333';
    menu.style.backgroundColor='#333';
    menu.style.color="white";
    main.style.backgroundColor='#333';
    main.style.color="white";
    aside.style.backgroundColor='#333';
    aside.style.color="white";
    footer.style.backgroundColor='#333';
    footer.style.color="white";
    footer2.style.backgroundColor='#333';
    footer2.style.color="white";
    body.style.backgroundColor='#333';
    if(document.body.classList.contains("dark-theme")) {
        icon.src ="darkthemeicon/sun.png";
    }else{
        icon.src ="darkthemeicon/moon.png";
        nav.style.backgroundColor='white';
        menu.style.backgroundColor='white';
        menu.style.color="black";
        main.style.backgroundColor='white';
        main.style.color="black";
        aside.style.backgroundColor='white';
        aside.style.color="black";
        footer.style.backgroundColor='white';
        footer.style.color="black";
        footer2.style.backgroundColor='white';
        footer2.style.color="black";
        body.style.backgroundColor='thistle';
    };
};
function encryptor() {
    let mw;
    mw = window.open('./encrypt.html', "ENC", "width=200, height=100");
    mw.resizeTo(700, 600);
}

const links = document.querySelectorAll('.menuItems');
links.forEach(item=>{
	item.addEventListener('click', ()=>{
		let el = document.getElementById(item.getAttribute('to'));
		el.scrollIntoView({behavior:"smooth",block:"start"});
	});
});
