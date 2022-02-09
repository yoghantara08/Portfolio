const menuHamburger = document.querySelector('.hamburger-menu input');
const nav = document.querySelector('nav ul');

menuHamburger.addEventListener('click', function () {
  nav.classList.toggle('slide');
});

// Typed JS
var typed = new Typed('.perkenalan p:nth-child(3)', {
  strings: ['Web Developer ^1000', 'Student of ITB Stikom Bali ^1000', 'Gamers ^1000'],
  typeSpeed: 70,
  backSpeed: 40,
  loop: true,
});

const container = document.querySelector('.container.project');
const jumbo = document.querySelector('.jumbo.img-fluid');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function (e) {
  if (e.target.className == 'thumb img-fluid') {
    jumbo.src = e.target.src;
    jumbo.classList.add('fade');
    setTimeout(function () {
      jumbo.classList.remove('fade');
    }, 500);
  }
});
