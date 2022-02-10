// Navbar
const menuHamburger = document.querySelector('.hamburger-menu input');
const nav = document.querySelector('nav ul');

menuHamburger.addEventListener('click', function () {
  nav.classList.toggle('slide');
});

// Typed JS
var typed = new Typed('.perkenalan p:nth-child(3)', {
  strings: ['Web Developer ^1000', 'Student ^1000', 'Gamers ^1000'],
  typeSpeed: 70,
  backSpeed: 40,
  loop: true,
});

// My Projects
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
const textReviewH2 = document.querySelector('.col-md-6.text-review h2');
const textReviewP = document.querySelector('.col-md-6.text-review p');

pStikom.addEventListener('click', function () {
  textReviewH2.innerHTML = 'Redesign Web Stikom Bali';
  textReviewP.innerHTML = 'Mendesain ulang Website ITB Stikom Bali <br> <strong>Tools yang digunakan :</strong> HTML,CSS,Bootstrap,Javascript';
  textReviewH2.classList.add('fadeUp');
  setTimeout(function () {
    textReviewH2.classList.remove('fadeUp');
  }, 500);
  textReviewP.classList.add('fadeUp');
  setTimeout(function () {
    textReviewP.classList.remove('fadeUp');
  }, 500);
});
pPortfolio.addEventListener('click', function () {
  textReviewH2.innerHTML = 'Personal Portfolio Website';
  textReviewP.innerHTML = 'Website pribadi tentang Portfolio saya <br> <strong>Tools yang digunakan :</strong> HTML,CSS,Bootstrap,Javascript';
  textReviewH2.classList.add('fadeUp');
  setTimeout(function () {
    textReviewH2.classList.remove('fadeUp');
  }, 500);
  textReviewP.classList.add('fadeUp');
  setTimeout(function () {
    textReviewP.classList.remove('fadeUp');
  }, 500);
});
pGameSuit.addEventListener('click', function () {
  textReviewH2.innerHTML = 'Game Suit';
  textReviewP.innerHTML = 'Game Suit batu,gunting,kertas yang dibuat menggunakan Javascript <br> <strong>Tools yang digunakan :</strong> <br> HTML,CSS,Javascript';
  textReviewH2.classList.add('fadeUp');
  setTimeout(function () {
    textReviewH2.classList.remove('fadeUp');
  }, 500);
  textReviewP.classList.add('fadeUp');
  setTimeout(function () {
    textReviewP.classList.remove('fadeUp');
  }, 500);
});
