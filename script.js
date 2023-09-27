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
        explorerMenu.style.top="-650px"
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
