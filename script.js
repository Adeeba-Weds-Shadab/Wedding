document.addEventListener("DOMContentLoaded", function(){

const loader = document.getElementById("loader");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

const enterBtn = document.getElementById("enterBtn");
const card = document.getElementById("card");


/* NASHEED SYSTEM */

const nasheed = document.getElementById("nasheedAudio");
const toggleBtn = document.getElementById("nasheedToggle");
const icon = document.querySelector(".nasheed-icon");





  

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

page1.classList.add("entering");

setTimeout(function(){

page1.classList.add("fade-out");

},600);

setTimeout(function(){

page1.style.display="none";

page2.classList.add("active");


/* start nasheed automatically */

nasheed.volume = 0.20;

nasheed.play().then(()=>{
toggleBtn.classList.add("playing");
}).catch(()=>{});


/* show nasheed control */

toggleBtn.style.opacity = "1";
toggleBtn.style.pointerEvents = "auto";
  






  
document.body.style.overflowY="auto";

},1300);

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

  

  
/* GLOBAL CONTENT REVEAL SYSTEM */

const reveals = document.querySelectorAll(".reveal-content");

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{
threshold:0.55
});

reveals.forEach(el=>{
observer.observe(el);
});








/* PAGE 4 CARD SLIDER */

const track = document.querySelector(".cards-track");
const nextBtn = document.querySelectorAll(".next");
const prevBtn = document.querySelectorAll(".prev");

if(track){

track.scrollLeft = track.scrollWidth / 3;
  
const card = track.querySelector(".glass-card");
const cardWidth = card.offsetWidth + 20;

nextBtn.forEach(btn=>{
btn.addEventListener("click",()=>{
track.scrollBy({
left:cardWidth,
behavior:"smooth"
});});
});

prevBtn.forEach(btn=>{
btn.addEventListener("click",()=>{
track.scrollBy({
left:-cardWidth,
behavior:"smooth"
});

});
});

}




const cards = document.querySelectorAll(".glass-card");

function updateFocus(){

const center = window.innerWidth / 2;

cards.forEach(card =>{

const rect = card.getBoundingClientRect();
const cardCenter = rect.left + rect.width / 2;

const distance = Math.abs(center - cardCenter);

if(distance < rect.width/2){
card.style.transform = "scale(1)";
card.style.opacity = "1";
}
else{
card.style.transform = "scale(.85)";
card.style.opacity = ".7";
}

});

}

track.addEventListener("scroll",updateFocus);
updateFocus();






/* TIMELINE PROGRESSION SYSTEM */

const timelineSection = document.querySelector(".timeline-content");

if(timelineSection){

const dots = document.querySelectorAll(".timeline-dot");

const timelineObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

let delay = 400;

dots.forEach((dot,i)=>{

setTimeout(()=>{

dot.classList.add("active");

}, delay * (i+1));

});

}

});

},{threshold:.6});

timelineObserver.observe(timelineSection);

}



  
  
  
});


















/* NASHEED AUDIO SYSTEM */

const nasheed = document.getElementById("nasheedAudio");
const toggle = document.getElementById("nasheedToggle");

let playing = false;


if(toggleBtn && nasheed){

toggle.addEventListener("click", () => {

if(!playing){

nasheed.volume = 0.18;
nasheed.play();

icon.textContent = "🔊";

toggle.classList.add("playing");

}else{

nasheed.pause();

icon.textContent = "🔇";

toggle.classList.remove("playing");

}

playing = !playing;

});

}





playing = !playing;

});
