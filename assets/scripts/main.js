// home page typewriter 
var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
    loop: true
});
typewriter.typeString('At Gautam Buddha University, Greater Noida')
    .pauseFor(2500)
    .deleteAll()
    .typeString('A team of over 400+ enthusiastic members')
    .pauseFor(2500)
    .deleteAll(7)
    .typeString('Doing wonders since 2022')
    .start();

    // faq questions
    const items = document.querySelectorAll('.accordion button');
    function toggleAccordion() {
      const itemToggle = this.getAttribute('aria-expanded');
      for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
      }
      if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
      }
    }
    items.forEach((item) => item.addEventListener('click', toggleAccordion));

// navbar scroll dissappear
var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("#navbar").style.top = "0px";
    document.querySelector(".hamburger").style.top = "0px";
  } else {
    document.querySelector("#navbar").style.top = "-80px";
    document.querySelector(".hamburger").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
};

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector("#navbar");
hamburger.addEventListener('click',()=>{
  navbar.classList.toggle("display");
})