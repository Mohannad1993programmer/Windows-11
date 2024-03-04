let startIcon=document.getElementById('start-icon');
let startMenu=document.querySelector('#start-menu img');
let searchIcon=document.getElementById('search-icon');
let searchMenu=document.querySelector('#search img');
let widgetsIcon=document.getElementById('widgets-icon');
let widgetsMenu=document.querySelector('#widgets img');
let explorerIcon=document.getElementById('explorer-icon');
let explorerMenu=document.querySelector('#explorer img');
let storeIcon=document.getElementById('store-icon');
let storeMenu=document.querySelector('#store img');

// taskbar


startIcon.addEventListener('click', function(){
   
    if(startMenu.style.bottom=="65px")
        startMenu.style.bottom="-650px";
    else{
        startMenu.style.bottom="65px";
        searchMenu.style.bottom="-650px";
        widgetsMenu.style.left="-650px";
        explorerMenu.style.top="-650px";
        storeMenu.style.top="-650px";

    }
   
});

searchIcon.addEventListener('click', function(){
 
    if(searchMenu.style.bottom=="65px")
        searchMenu.style.bottom="-650px";
    else
    {
        searchMenu.style.bottom="65px";
        startMenu.style.bottom="-650px";
        widgetsMenu.style.left="-650px";
        explorerMenu.style.top="-650px";
        storeMenu.style.top="-650px";
    }
});

widgetsIcon.addEventListener('click', function(){
    if(widgetsMenu.style.left=="10px")
        widgetsMenu.style.left="-650px";
       
    else{
        widgetsMenu.style.left="10px";
        startMenu.style.bottom="-650px";
        searchMenu.style.bottom="-650px";
        explorerMenu.style.top="-650px";
        storeMenu.style.top="-650px"
    }
});

explorerIcon.addEventListener('click', function(){
   
    if(explorerMenu.style.top=="40px")
        explorerMenu.style.top="-650px";
    else{
    explorerMenu.style.top="40px";
    widgetsMenu.style.left="-650px";
    startMenu.style.bottom="-650px";
    searchMenu.style.bottom="-650px";
    storeMenu.style.top="-650px";
    }
});

storeIcon.addEventListener('click', function(){
   
    if(storeMenu.style.top=="40px")
        storeMenu.style.top="-650px";
    else{
    storeMenu.style.top="40px";    
    explorerMenu.style.top="-650px"
    widgetsMenu.style.left="-650px";
    startMenu.style.bottom="-650px";
    searchMenu.style.bottom="-650px";
    }
});

// loading

let load = gsap.timeline();
load.to(".power-on",{
    duration: .5,
    delay: 3,
    opacity: 0
});
load.from(".load-screen",{
    duration: .2,
    opacity: 0
},"-=1");
load.to(".load-screen",{
    duration: .5,
    delay: 2,
    opacity: 0
});
load.to(".load-screen, .power-on",{
    display: "none"
});

const start = gsap.timeline({
    paused: "true"
});

start.to("#start-menu",{
    opacity: 1,
    y: "0%",
    duration: .5
});

// right click

let contextMenu = document.querySelector(".wrapper"),
shareMenu=contextMenu.querySelector(".share-menu");
shareMenu1=contextMenu.querySelector(".share-menu1");
shareMenu2=contextMenu.querySelector(".share-menu2");
document.addEventListener("contextmenu", e => {
    e.preventDefault();
    let x = e.offsetX , y = e.offsetY,
    winwWidth = window.innerWidth,
    cmWidth = contextMenu.offsetWidth;
    winwHeight = window.innerHeight,
    cmHeight = contextMenu.offsetHeight;

    if(x > (winwWidth - cmWidth - shareMenu.offsetWidth))
    shareMenu.style.left="-220px";
    else{
        shareMenu.style.left="";
    }

    if(x > (winwWidth - cmWidth - shareMenu1.offsetWidth))
    shareMenu1.style.left="-220px";
    else{
        shareMenu1.style.left="";
    }


    if(x > (winwWidth - cmWidth - shareMenu2.offsetWidth))
    shareMenu2.style.left="-220px";
    else{
        shareMenu2.style.left="";
    }



    x = x > winwWidth - cmWidth ? winwWidth -cmWidth :x;
    y = y > winwHeight - cmHeight ? winwHeight -cmHeight :y;
    
    contextMenu.style.left=`${x}px`;
    contextMenu.style.top=`${y}px`;
    contextMenu.style.visibility ="visible";
});

document.addEventListener("click", () => contextMenu.style.visibility= "hidden");