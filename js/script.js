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

container.addEventListener('click', function (e) {
  if (e.target.className == 'thumb img-fluid') {
    jumbo.src = e.target.src;
    jumbo.classList.add('fade');
    setTimeout(function () {
      jumbo.classList.remove('fade');
    }, 500);
  }
});

const pStikom = document.querySelector('.pStikom');
const pPortfolio = document.querySelector('.pPortfolio');
const pGameSuit = document.querySelector('.pGameSuit');
const textReviewH2 = document.querySelector('.col-lg-6.text-review h2');
const textReviewP = document.querySelector('.col-lg-6.text-review p');

pStikom.addEventListener('click', function () {
  textReviewH2.innerHTML = 'Redesign Web Stikom Bali';
  textReviewP.innerHTML = 'tes';
});
pPortfolio.addEventListener('click', function () {
  textReviewH2.innerHTML = 'Personal Portfolio Website';
  textReviewP.innerHTML = 'tes';
});
pGameSuit.addEventListener('click', function () {
  textReviewH2.innerHTML = 'Web Game Suit';
  textReviewP.innerHTML = 'tes';
});
