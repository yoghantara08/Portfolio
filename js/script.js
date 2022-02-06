const menuHamburger = document.querySelector('.hamburger-menu input');
const nav = document.querySelector('nav ul');

menuHamburger.addEventListener('click', function () {
  nav.classList.toggle('slide');
});

// Typed JS
var typed = new Typed('.perkenalan p:nth-child(3)', {
  strings: ['Front-end Developer ^1000', 'Student of ITB Stikom Bali ^1000'],
  typeSpeed: 80,
  backSpeed: 40,
  loop: true,
});
