// Typed JS
var typed = new Typed(".perkenalan p:nth-child(3)", {
  strings: ["^500 Web Developer ^1000", "Student ^1000", "Gamers ^500"],
  typeSpeed: 70,
  backSpeed: 40,
  loop: true,
});

// My Projects
const container = document.querySelector(".container.project");
const jumbo = document.querySelector(".jumbo.img-fluid");
const textReview = document.querySelector(".text-review");
const textReviewH2 = document.querySelector(".col-md-6.text-review h2");
const textReviewP = document.querySelector(".col-md-6.text-review p");
const myProject = document.querySelectorAll(".myProject");

container.addEventListener("click", (e) => {
  if (e.target.className == "thumb img-fluid") {
    jumbo.src = e.target.src;
    jumbo.classList.add("fade");
    setTimeout(() => {
      jumbo.classList.remove("fade");
    }, 500);

    myProject.forEach(() => {
      textReview.classList.add("fadeUp");
      setTimeout(() => {
        textReview.classList.remove("fadeUp");
      }, 500);
    });
  }
});

const pSatu = document.querySelector(".pSatu");
const pDua = document.querySelector(".pDua");
const pTiga = document.querySelector(".pTiga");

pSatu.addEventListener("click", () => {
  textReviewH2.innerHTML = "Redesign Web Stikom Bali";
  textReviewP.innerHTML = "Mendesain ulang Website ITB Stikom Bali <br> <strong>Tools yang digunakan :</strong> <br> HTML,CSS,Bootstrap,Javascript";
});
pDua.addEventListener("click", () => {
  textReviewH2.innerHTML = "Tara Cafe";
  textReviewP.innerHTML = "Website coffee shop TaraCafe <br> <strong>Tools yang digunakan :</strong> <br> HTML,CSS,Bootstrap,Javascript";
});
pTiga.addEventListener("click", () => {
  textReviewH2.innerHTML = "Game Suit";
  textReviewP.innerHTML = "Game Suit batu,gunting,kertas yang dibuat menggunakan Javascript <br> <strong>Tools yang digunakan :</strong> <br> HTML,CSS,Javascript";
});

// Scroll Up
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $(".go-top-btn").fadeIn();
    } else {
      $(".go-top-btn").fadeOut();
    }
  });
  $(".go-top-btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
  });
});
