//responsive mobile navbar 
    const menu=document.querySelector('.menu-icon');
    const nav=document.querySelector('.mobilenav');
    const wave=document.querySelector('.wave');
    function removemenu(){
        nav.classList.remove('active');
        menu.classList.remove('active');
    }
    function togglemenu(){
        menu.classList.toggle('active');
        nav.classList.toggle('active');
    }
    menu.addEventListener("click",togglemenu);
//wave scroll 
    window.addEventListener('scroll',()=>{
    let value=window.scrollY;
    wave.style.left=value*0.5 +'px'});
//skill progress animation

let htmlnum=document.getElementById('html');
let cssnum=document.getElementById('css');
let jsnum=document.getElementById('js');
let cppnum=document.getElementById('cpp');
let skills=document.getElementById('skills');
let counterhtml=0,countercss=0,counterjs=0,countercpp=0;

    var observer = new IntersectionObserver(entries => {
	if(entries[0].isIntersecting === true){
		setInterval(()=>{if(counterhtml==100){
        clearInterval();
    }
    else{
        counterhtml++;htmlnum.innerHTML=counterhtml+'%';}
    },20);
    setInterval(()=>{if(countercss==70){
        clearInterval();
    }
    else{
        countercss++;cssnum.innerHTML=countercss+'%';
    }},20);
    setInterval(()=>{if(counterjs==60){
        clearInterval();
    }
    else{counterjs++;jsnum.innerHTML=counterjs+'%';
}},20);
setInterval(()=>{if(countercpp==80){
    clearInterval();
}
else{
    countercpp++;cppnum.innerHTML=countercpp+'%';}
},20);
}
}, { threshold: [0.3] });
    
observer.observe(skills);

//contact me button animation
const clickmebutton=document.getElementById('clicktocontact')
const form=document.querySelector('form');
function addcontactbuttonanim(){
clickmebutton.classList.remove('hu__hu__')
clickmebutton.classList.add('fadeOutTop');
clickmebutton.addEventListener("animationend", ()=>{ console.log('donee');
clickmebutton.style.display='none';
form.style.display='block';
form.classList.add('moveFromBottom');
});
}
