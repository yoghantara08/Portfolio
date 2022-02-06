const menuHamburger = document.querySelector('.hamburger-menu input');
const nav = document.querySelector('nav ul');

menuHamburger.addEventListener('click', function () {
  nav.classList.toggle('slide');
});
