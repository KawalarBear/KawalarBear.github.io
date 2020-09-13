const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

tl.fromTo(hero,1, {height: '0%'},{height:'65%', ease: Power2.easeInOut})
.fromTo(hero,1, {width: '100%'},{width:'90%', ease: Power2.easeInOut})

.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease:Power2.easeInOut}, "-=1.2")

.fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity:1, x:0}, "-=0.5")
.fromTo(headline, 0.5, {opacity: 0, x: 30}, {opacity:1, x:0}, "-=0.5");
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
