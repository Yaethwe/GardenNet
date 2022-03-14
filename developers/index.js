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
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

const switchTheme = (e) => {
    if(e.target.checked) {
        document.documentElement.setAttribute('data-theme' , 'dark');
        localStorage.setItem('theme' , 'dark')
    } else {
        document.documentElement.setAttribute('data-theme' , 'light');
        localStorage.setItem('theme' , 'light')
    }
};

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if(currentTheme){
    document.documentElement.setAttribute('data-theme' , currentTheme);

    if(currentTheme == 'dark'){
        toggleSwitch.checked = true;
        darkTheme();
    }
}

toggleSwitch.addEventListener('change', switchTheme)

function LDM() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    darkTheme();
}

function darkTheme() {
    body.setAttribute('class','darkBG');
    body.setAttribute('style','');
    nav.className='darksmokeBG';
    menu.className='darksmokeBG';
    main.className='darksmokeBG';
    aside.className='darksmokeBG';
    footer.className='darksmokeBG';
    footer2.className='darksmokeBG';
}