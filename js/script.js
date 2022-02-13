// Navbar
const menuHamburger = document.querySelector('.hamburger-menu input');
const nav = document.querySelector('nav ul');

menuHamburger.addEventListener('click', function () {
  nav.classList.toggle('slide');
});

// Typed JS
var typed = new Typed('.perkenalan p:nth-child(3)', {
  strings: ['^500 Web Developer ^1000', 'Student ^1000', 'Gamers ^500'],
  typeSpeed: 70,
  backSpeed: 40,
  loop: true,
});

// My Projects
const container = document.querySelector('.container.project');
const jumbo = document.querySelector('.jumbo.img-fluid');
const textReview = document.querySelector('.text-review');
const textReviewH2 = document.querySelector('.col-md-6.text-review h2');
const textReviewP = document.querySelector('.col-md-6.text-review p');
const myProject = document.querySelectorAll('.myProject');

container.addEventListener('click', (e) => {
  if (e.target.className == 'thumb img-fluid') {
    jumbo.src = e.target.src;
    jumbo.classList.add('fade');
    setTimeout(() => {
      jumbo.classList.remove('fade');
    }, 500);
  }

  myProject.forEach(() => {
    textReview.classList.add('fadeUp');
    setTimeout(() => {
      textReview.classList.remove('fadeUp');
    }, 500);
  });
});

const pStikom = document.querySelector('.pStikom');
const pPortfolio = document.querySelector('.pPortfolio');
const pGameSuit = document.querySelector('.pGameSuit');

pStikom.addEventListener('click', () => {
  textReviewH2.innerHTML = 'Redesign Web Stikom Bali';
  textReviewP.innerHTML = 'Mendesain ulang Website ITB Stikom Bali <br> <strong>Tools yang digunakan :</strong> <br> HTML,CSS,Bootstrap,Javascript';
});
pPortfolio.addEventListener('click', () => {
  textReviewH2.innerHTML = 'Personal Portfolio Website';
  textReviewP.innerHTML = 'Website pribadi tentang Portfolio saya <br> <strong>Tools yang digunakan :</strong> <br> HTML,CSS,Bootstrap,Javascript';
});
pGameSuit.addEventListener('click', () => {
  textReviewH2.innerHTML = 'Game Suit';
  textReviewP.innerHTML = 'Game Suit batu,gunting,kertas yang dibuat menggunakan Javascript <br> <strong>Tools yang digunakan :</strong> <br> HTML,CSS,Javascript';
});
