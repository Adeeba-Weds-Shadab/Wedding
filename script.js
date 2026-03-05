document.addEventListener("DOMContentLoaded", function(){

const loader = document.getElementById("loader");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

const enterBtn = document.getElementById("enterBtn");
const card = document.getElementById("card");


/* LOADER */

window.addEventListener("load", function(){

setTimeout(function(){

loader.style.opacity="0";

setTimeout(function(){
loader.style.display="none";
},1000);

},1500);

});


/* ENTER BUTTON */

enterBtn.addEventListener("click", function(){

page1.classList.add("fade-out");

setTimeout(function(){

page1.style.display="none";

page2.classList.add("active");

document.body.style.overflowY="auto";

},900);

});


/* CARD TILT */

card.addEventListener("mousemove", function(e){

const rect = card.getBoundingClientRect();

const x = (e.clientX - rect.left) / rect.width - 0.5;
const y = (e.clientY - rect.top) / rect.height - 0.5;

card.style.transform =
`rotateY(${x*12}deg) rotateX(${y*-12}deg)`;

});

card.addEventListener("mouseleave", function(){

card.style.transform="rotateY(0) rotateX(0)";

});

  

/* PAGE 3 FADE REVEAL */

window.addEventListener("scroll", function(){

const trigger = window.innerHeight * 0.8;

if(page3){

const top = page3.getBoundingClientRect().top;

if(top < trigger){

page3.classList.add("show");

}

}

});

});
