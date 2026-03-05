document.addEventListener("DOMContentLoaded", function () {

const loader = document.getElementById("loader");
const enterBtn = document.getElementById("enterBtn");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const card = document.getElementById("card");


/* ---------------- LOADER ---------------- */

window.addEventListener("load", function () {

setTimeout(function () {

loader.style.opacity = "0";

setTimeout(function () {
loader.style.display = "none";
}, 1000);

}, 1600);

});


/* ---------------- ENTER BUTTON ---------------- */

enterBtn.addEventListener("click", function () {

/* fade page 1 */

page1.style.opacity = "0";

setTimeout(function () {

/* hide page1 */

page1.style.display = "none";

/* show page2 */

page2.style.display = "flex";

setTimeout(function () {
page2.classList.add("active");
}, 50);

}, 700);

});



/* ---------------- CARD TILT ---------------- */

card.addEventListener("mousemove", function (e) {

const rect = card.getBoundingClientRect();

const x = (e.clientX - rect.left) / rect.width - 0.5;
const y = (e.clientY - rect.top) / rect.height - 0.5;

card.style.transform =
`rotateY(${x * 12}deg) rotateX(${y * -12}deg)`;

});


card.addEventListener("mouseleave", function () {

card.style.transform = "rotateY(0) rotateX(0)";

});


});
